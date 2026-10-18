export function createVehicleRepository(db, parkingBoard) {
  return {
    async findById(id, siteId) {
      const siteFilter = siteId ? ' AND site_id = ?' : '';
      const params = siteId ? [id, siteId] : [id];
      const rows = await db.query(
        `SELECT id, registration_number, vin, make, model, model_year,
                inspection_expiry_date, statutory_inspection_date,
                site_id, status, updated_at
           FROM vehicles WHERE id = ?${siteFilter} LIMIT 1`,
        params
      );
      return rows[0] || null;
    },

    async list({ siteId, status, search, limit, offset }) {
      const filters = [];
      const params = [];
      if (siteId) {
        filters.push('site_id = ?');
        params.push(siteId);
      }
      if (status) {
        filters.push('status = ?');
        params.push(status);
      }
      if (search) {
        filters.push('(registration_number LIKE ? OR make LIKE ? OR model LIKE ? OR vin LIKE ?)');
        const term = `%${search}%`;
        params.push(term, term, term, term);
      }
      const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
      return db.query(
        `SELECT id, registration_number, vin, make, model, model_year,
                inspection_expiry_date, statutory_inspection_date,
                site_id, status, updated_at
           FROM vehicles ${where}
          ORDER BY id LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );
    },

    async listForParkingSync(siteId) {
      const siteFilter = siteId ? ' AND v.site_id = ?' : '';
      return db.query(
        `SELECT v.id, v.registration_number, v.make, v.model, v.site_id
           FROM vehicles v
           JOIN sites s ON s.id = v.site_id
          WHERE s.status = 'active' AND v.status <> 'retired'${siteFilter}
          ORDER BY v.id`,
        siteId ? [siteId] : []
      );
    },

    async create(vehicle) {
      const insertVehicle = async (connection) => {
        if (vehicle.parkingClass) {
          const classes = await connection.query(
            `SELECT name FROM parking_vehicle_classes
              WHERE site_id = ? AND name = ? LIMIT 1`,
            [vehicle.siteId, vehicle.parkingClass]
          );
          if (!classes.length) {
            const error = new Error('Unknown parking vehicle class.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
          const options = vehicle.parkingOptions ?? [];
          if (options.length) {
            const availableOptions = await connection.query(
              `SELECT name FROM parking_vehicle_option_types
                WHERE site_id = ? AND name IN (${options.map(() => '?').join(', ')})`,
              [vehicle.siteId, ...options]
            );
            if (availableOptions.length !== new Set(options).size) {
              const error = new Error('Unknown parking vehicle option.');
              error.code = 'PARKING_INVALID_REFERENCE';
              throw error;
            }
          }
        }
        await connection.query(
          `INSERT INTO vehicles
            (id, registration_number, vin, make, model, model_year,
             inspection_expiry_date, statutory_inspection_date, site_id, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            vehicle.id, vehicle.registrationNumber, vehicle.vin || null,
            vehicle.make ?? '', vehicle.model ?? '', vehicle.modelYear || null,
            vehicle.inspectionExpiryDate || null, vehicle.statutoryInspectionDate || null,
            vehicle.siteId, vehicle.status || 'available'
          ]
        );
        if (vehicle.parkingClass) {
          const parkingInsert = await connection.query(
            `INSERT INTO parking_vehicles
              (site_id, erp_vehicle_id, external_id, plate, vehicle_type, options, notes)
             VALUES (?, ?, ?, ?, ?, CAST(? AS JSON), ?)`,
            [
              vehicle.siteId, vehicle.id, vehicle.id, vehicle.registrationNumber,
              vehicle.parkingClass, JSON.stringify(vehicle.parkingOptions ?? []),
              vehicle.parkingNotes ?? ''
            ]
          );
          const parkingDetails = [
            'parkingLotId', 'parkingStatusIds', 'parkingUnwashed', 'parkingNoFuel',
            'parkingNeedsRepair', 'parkingAssessmentValues', 'parkingInspectionMarks'
          ];
          if (parkingDetails.some((key) => Object.hasOwn(vehicle, key))) {
            if (!parkingBoard?.updateVehicle || !parkingBoard?.nextVehiclePosition || !parkingInsert.insertId) {
              const error = new Error('Parking vehicle details could not be saved.');
              error.code = 'PARKING_INVALID_REFERENCE';
              throw error;
            }
            const position = await parkingBoard.nextVehiclePosition({
              siteId: vehicle.siteId,
              parkingLotId: vehicle.parkingLotId
            }, connection);
            const parkingFields = {
              siteId: vehicle.siteId,
              vehicleId: String(parkingInsert.insertId),
              positionX: position.positionX,
              positionY: position.positionY
            };
            for (const [source, target] of [
              ['parkingLotId', 'parkingLotId'],
              ['parkingStatusIds', 'statusIds'],
              ['parkingUnwashed', 'unwashed'],
              ['parkingNoFuel', 'noFuel'],
              ['parkingNeedsRepair', 'needsRepair'],
              ['parkingAssessmentValues', 'assessmentValues'],
              ['parkingInspectionMarks', 'inspectionMarks']
            ]) {
              if (Object.hasOwn(vehicle, source)) parkingFields[target] = vehicle[source];
            }
            const parkingVehicle = await parkingBoard.updateVehicle(parkingFields, connection);
            if (!parkingVehicle) {
              const error = new Error('Parking vehicle details could not be saved.');
              error.code = 'PARKING_INVALID_REFERENCE';
              throw error;
            }
          }
        }
      };
      if (vehicle.parkingClass) {
        await db.transaction((tx) => insertVehicle(tx));
      } else {
        await insertVehicle(db);
      }
      return this.findById(vehicle.id);
    },

    async update(id, fields, siteId) {
      const assignments = [];
      const params = [];
      for (const [key, column] of [
        ['registrationNumber', 'registration_number'],
        ['vin', 'vin'],
        ['make', 'make'],
        ['model', 'model'],
        ['modelYear', 'model_year'],
        ['inspectionExpiryDate', 'inspection_expiry_date'],
        ['statutoryInspectionDate', 'statutory_inspection_date'],
        ['siteId', 'site_id'],
        ['status', 'status']
      ]) {
        if (Object.hasOwn(fields, key)) {
          assignments.push(`${column} = ?`);
          params.push(fields[key]);
        }
      }
      if (assignments.length) {
        const siteFilter = siteId ? ' AND site_id = ?' : '';
        params.push(id);
        if (siteId) params.push(siteId);
        await db.query(
          `UPDATE vehicles SET ${assignments.join(', ')} WHERE id = ?${siteFilter}`,
          params
        );
      }
      return this.findById(id, siteId);
    }
  };
}
