import { randomBytes } from 'node:crypto';

function conflict(message) {
  return Object.assign(new Error(message), { code: 'ERP_CONFLICT' });
}

export function createReservationRepository(db) {
  return {
    async vehicleCatalog({ siteId }) {
      const [classes, options] = await Promise.all([
        db.query(
          `SELECT id, name, color, display_order
             FROM parking_vehicle_classes WHERE site_id = ? ORDER BY display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name FROM parking_vehicle_option_types WHERE site_id = ? ORDER BY id`,
          [siteId]
        )
      ]);
      return { classes, options };
    },

    async listAvailableVehicles({ siteId, startAt, endAt, vehicleClass, options = [] }) {
      const params = [siteId, vehicleClass, endAt, startAt];
      const optionFilters = options.map(() => 'JSON_CONTAINS(p.options, JSON_QUOTE(?))');
      params.push(...options);
      return db.query(
        `SELECT v.id, v.registration_number, v.make, v.model,
                p.vehicle_type AS vehicle_class, p.options, l.name AS parking_lot_name
           FROM vehicles v
           JOIN parking_vehicles p
             ON p.site_id = v.site_id AND p.erp_vehicle_id = v.id
           JOIN parking_vehicle_classes c
             ON c.site_id = p.site_id AND c.name = p.vehicle_type
           LEFT JOIN parking_lots l
             ON l.id = p.parking_lot_id AND l.site_id = p.site_id
          WHERE v.site_id = ? AND v.status = 'available' AND c.name = ?
            AND NOT EXISTS (
              SELECT 1 FROM reservations r
               WHERE r.vehicle_id = v.id AND r.status IN ('reserved', 'checked_in')
                 AND r.start_at < ? AND r.end_at > ?
            )
            ${optionFilters.length ? `AND ${optionFilters.join(' AND ')}` : ''}
          ORDER BY v.registration_number, v.id
          LIMIT 200`,
        params
      );
    },

    async list({ siteId, status, search, limit, offset }) {
      const filters = [];
      const params = [];
      if (siteId) {
        filters.push('r.site_id = ?');
        params.push(siteId);
      }
      if (status) {
        filters.push('r.status = ?');
        params.push(status);
      }
      if (search) {
        filters.push('(r.reservation_code LIKE ? OR r.guest_name LIKE ? OR r.guest_phone LIKE ? OR v.registration_number LIKE ?)');
        const term = `%${search}%`;
        params.push(term, term, term, term);
      }
      const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
      return db.query(
        `SELECT r.id, r.reservation_code, r.site_id, r.customer_id, s.code AS site_code, s.name AS site_name,
                r.guest_name, r.guest_phone, r.start_at, r.end_at, r.vehicle_id,
                v.registration_number, v.make, v.model, r.status, r.created_at,
                r.checked_out_by_employee_id, r.checked_out_by_name,
                r.returned_by_employee_id, r.returned_by_name
           FROM reservations r
           JOIN sites s ON s.id = r.site_id
           LEFT JOIN vehicles v ON v.id = r.vehicle_id
           ${where}
          ORDER BY CASE WHEN r.status IN ('reserved', 'checked_in') THEN 0 ELSE 1 END,
                   r.start_at ASC, r.id DESC LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );
    },

    async create({ siteId, customerId, guestName, guestPhone, startAt, endAt, vehicleId, createdBy }) {
      return db.transaction(async (tx) => {
        let customer;
        if (customerId) {
          [customer] = await tx.query(
            'SELECT id, name, phone FROM customers WHERE id = ? AND site_id = ? FOR UPDATE',
            [customerId, siteId]
          );
          if (!customer) {
            throw Object.assign(new Error('Customer is not available at this site.'), {
              code: 'ERP_INVALID_REFERENCE'
            });
          }
        } else {
          const result = await tx.query(
            'INSERT INTO customers (site_id, name, phone) VALUES (?, ?, ?)',
            [siteId, guestName, guestPhone]
          );
          customer = { id: result.insertId, name: guestName, phone: guestPhone };
        }
        const [vehicle] = await tx.query(
          'SELECT id, site_id, status FROM vehicles WHERE id = ? FOR UPDATE',
          [vehicleId]
        );
        if (!vehicle || String(vehicle.site_id) !== String(siteId) || vehicle.status !== 'available') {
          throw conflict('Vehicle is unavailable at this site.');
        }
        const overlap = await tx.query(
          `SELECT id FROM reservations
            WHERE vehicle_id = ? AND status IN ('reserved', 'checked_in')
              AND start_at < ? AND end_at > ? LIMIT 1 FOR UPDATE`,
          [vehicleId, endAt, startAt]
        );
        if (overlap.length) throw conflict('Vehicle already has a reservation during this period.');
        const code = randomBytes(6).toString('hex').toUpperCase();
        const result = await tx.query(
          `INSERT INTO reservations
            (reservation_code, site_id, customer_id, guest_name, guest_phone, start_at, end_at, vehicle_id, created_by)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [code, siteId, customer.id, customer.name, customer.phone, startAt, endAt, vehicleId || null, createdBy]
        );
        return {
          id: String(result.insertId), reservationCode: code, status: 'reserved',
          customerId: String(customer.id)
        };
      });
    },

    async transition({ id, status, siteId, employeeId }) {
      return db.transaction(async (tx) => {
        const scope = siteId ? ' AND site_id = ?' : '';
        const params = siteId ? [id, siteId] : [id];
        const [reservation] = await tx.query(
          `SELECT id, site_id, vehicle_id, status FROM reservations WHERE id = ?${scope} FOR UPDATE`,
          params
        );
        if (!reservation) return null;
        const allowed = {
          reserved: ['checked_in', 'cancelled'],
          checked_in: ['completed'],
          completed: [],
          cancelled: []
        };
        if (!allowed[reservation.status]?.includes(status)) {
          throw conflict(`Cannot transition reservation from ${reservation.status} to ${status}.`);
        }
        let employee;
        if (status === 'checked_in' || status === 'completed') {
          [employee] = await tx.query(
            `SELECT id, name FROM site_employees
              WHERE id = ? AND site_id = ? AND status = 'active' FOR UPDATE`,
            [employeeId, reservation.site_id]
          );
          if (!employee) {
            throw Object.assign(new Error('Employee is not active at this site.'), {
              code: 'ERP_INVALID_REFERENCE'
            });
          }
        }
        if (status === 'checked_in') {
          if (!reservation.vehicle_id) throw conflict('Assign a vehicle before checking in.');
          const [vehicle] = await tx.query(
            'SELECT id, site_id, status FROM vehicles WHERE id = ? FOR UPDATE',
            [reservation.vehicle_id]
          );
          if (!vehicle || String(vehicle.site_id) !== String(reservation.site_id) || vehicle.status !== 'available') {
            throw conflict('Assigned vehicle is no longer available.');
          }
          await tx.query('UPDATE vehicles SET status = ? WHERE id = ?', ['rented', reservation.vehicle_id]);
        }
        if (status === 'completed' && reservation.vehicle_id) {
          await tx.query(
            `UPDATE vehicles SET status = 'available' WHERE id = ? AND status = 'rented'`,
            [reservation.vehicle_id]
          );
        }
        const employeeColumn = status === 'checked_in' ? 'checked_out_by_employee_id'
          : status === 'completed' ? 'returned_by_employee_id' : null;
        if (employeeColumn) {
          const nameColumn = status === 'checked_in' ? 'checked_out_by_name' : 'returned_by_name';
          await tx.query(
            `UPDATE reservations SET status = ?, ${employeeColumn} = ?, ${nameColumn} = ? WHERE id = ?`,
            [status, employeeId, employee.name, id]
          );
        } else {
          await tx.query('UPDATE reservations SET status = ? WHERE id = ?', [status, id]);
        }
        return {
          id: String(id), status, syncSiteId: String(reservation.site_id),
          ...(employeeColumn ? { employeeId: String(employeeId) } : {})
        };
      });
    }
  };
}
