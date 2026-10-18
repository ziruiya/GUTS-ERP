import test from 'node:test';
import assert from 'node:assert/strict';
import { createReservationRepository } from '../src/repositories/reservation-repository.js';

test('reservation creation locks and validates the reserved vehicle and prevents overlap', async () => {
  const statements = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        statements.push({ sql, params });
        if (sql.startsWith('INSERT INTO customers')) return { insertId: 72 };
        if (sql.startsWith('SELECT id, site_id, status FROM vehicles')) {
          return [{ id: 'vehicle-1', site_id: '4', status: 'available' }];
        }
        if (sql.startsWith('SELECT id FROM reservations')) return [];
        if (sql.startsWith('INSERT INTO reservations')) return { insertId: 15 };
        throw new Error(`Unexpected SQL: ${sql}`);
      }
    })
  };
  const repository = createReservationRepository(db);
  const result = await repository.create({
    siteId: '4',
    guestName: 'Guest',
    guestPhone: '+81-90-1234-5678',
    startAt: '2026-11-01 09:00:00.000',
    endAt: '2026-11-02 09:00:00.000',
    vehicleId: 'vehicle-1',
    createdBy: '3'
  });

  assert.equal(result.id, '15');
  assert.equal(result.status, 'reserved');
  assert.equal(result.customerId, '72');
  assert.match(result.reservationCode, /^[A-F0-9]{12}$/);
  assert.ok(statements.some(({ sql }) => sql.startsWith('INSERT INTO customers')));
  assert.ok(statements.some(({ sql }) => sql.startsWith('SELECT id, site_id, status FROM vehicles') && sql.endsWith('FOR UPDATE')));
  assert.ok(statements.some(({ sql }) => sql.includes("status IN ('reserved', 'checked_in')")));
});

test('reservation creation rejects a vehicle assigned to another site', async () => {
  const db = {
    transaction: async (callback) => callback({
      query: async (sql) => sql.startsWith('INSERT INTO customers')
        ? { insertId: 72 }
        : [{ id: 'vehicle-1', site_id: '9', status: 'available' }]
    })
  };
  const repository = createReservationRepository(db);
  await assert.rejects(
    repository.create({
      siteId: '4', guestName: 'Guest', guestPhone: '+81-90-1234-5678',
      startAt: '2026-11-01 09:00:00.000', endAt: '2026-11-02 09:00:00.000',
      vehicleId: 'vehicle-1', createdBy: '3'
    }),
    (error) => error.code === 'ERP_CONFLICT'
  );
});

test('reservation can use an existing same-site customer without creating a duplicate', async () => {
  const statements = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        statements.push({ sql, params });
        if (sql.startsWith('SELECT id, name, phone FROM customers')) {
          return [{ id: '71', name: 'Stored Name', phone: '09012345678' }];
        }
        if (sql.startsWith('SELECT id, site_id, status FROM vehicles')) {
          return [{ id: 'vehicle-1', site_id: '4', status: 'available' }];
        }
        if (sql.startsWith('SELECT id FROM reservations')) return [];
        if (sql.startsWith('INSERT INTO reservations')) return { insertId: 15 };
        throw new Error(`Unexpected SQL: ${sql}`);
      }
    })
  };
  const repository = createReservationRepository(db);
  const result = await repository.create({
    siteId: '4', customerId: '71', guestName: 'Typed Name', guestPhone: '00000000000',
    startAt: '2026-11-01 09:00:00.000', endAt: '2026-11-02 09:00:00.000',
    vehicleId: 'vehicle-1', createdBy: '3'
  });
  assert.equal(result.customerId, '71');
  assert.equal(statements.some(({ sql }) => sql.startsWith('INSERT INTO customers')), false);
  const reservationInsert = statements.find(({ sql }) => sql.startsWith('INSERT INTO reservations'));
  assert.equal(reservationInsert.params[3], 'Stored Name');
  assert.equal(reservationInsert.params[4], '09012345678');
});

test('reservation cannot attach a customer from another site', async () => {
  const statements = [];
  const repository = createReservationRepository({
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        statements.push({ sql, params });
        if (sql.startsWith('SELECT id, name, phone FROM customers')) return [];
        throw new Error(`Unexpected SQL: ${sql}`);
      }
    })
  });
  await assert.rejects(repository.create({
    siteId: '4', customerId: '71', guestName: 'Guest', guestPhone: '09012345678',
    startAt: '2026-11-01 09:00:00.000', endAt: '2026-11-02 09:00:00.000',
    vehicleId: 'vehicle-1', createdBy: '3'
  }), (error) => error.code === 'ERP_INVALID_REFERENCE');
  assert.equal(statements.length, 1);
  assert.deepEqual(statements[0].params, ['71', '4']);
});

test('available vehicle search filters the selected site, interval, class, and every option', async () => {
  const calls = [];
  const repository = createReservationRepository({
    query: async (sql, params) => {
      calls.push({ sql, params });
      return [];
    }
  });
  await repository.listAvailableVehicles({
    siteId: '4', startAt: '2026-11-01 09:00:00', endAt: '2026-11-02 09:00:00',
    vehicleClass: 'A-1', options: ['禁煙', 'ETC']
  });
  assert.match(calls[0].sql, /v\.site_id = \? AND v\.status = 'available' AND c\.name = \?/);
  assert.match(calls[0].sql, /r\.start_at < \? AND r\.end_at > \?/);
  assert.equal((calls[0].sql.match(/JSON_CONTAINS/g) ?? []).length, 2);
  assert.deepEqual(calls[0].params, [
    '4', 'A-1', '2026-11-02 09:00:00', '2026-11-01 09:00:00', '禁煙', 'ETC'
  ]);
});

test('checking in transitions vehicle status atomically with reservation', async () => {
  const calls = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        calls.push({ sql, params });
        if (sql.startsWith('SELECT id, site_id, vehicle_id, status FROM reservations')) {
          return [{ id: '15', site_id: '4', vehicle_id: 'vehicle-1', status: 'reserved' }];
        }
        if (sql.startsWith('SELECT id, name FROM site_employees')) {
          return [{ id: '8', name: 'Store Staff' }];
        }
        if (sql.startsWith('SELECT id, site_id, status FROM vehicles')) {
          return [{ id: 'vehicle-1', site_id: '4', status: 'available' }];
        }
        return { affectedRows: 1 };
      }
    })
  };
  const repository = createReservationRepository(db);
  const result = await repository.transition({
    id: '15', status: 'checked_in', siteId: '4', employeeId: '8'
  });

  assert.deepEqual(result, { id: '15', status: 'checked_in', syncSiteId: '4', employeeId: '8' });
  assert.ok(calls.some(({ sql, params }) =>
    sql === 'UPDATE vehicles SET status = ? WHERE id = ?' && params[0] === 'rented'));
  assert.ok(calls.some(({ sql, params }) =>
    sql === 'UPDATE reservations SET status = ?, checked_out_by_employee_id = ?, checked_out_by_name = ? WHERE id = ?' &&
    params.join('|') === 'checked_in|8|Store Staff|15'));
});

test('return transition records the receiving employee name as a historical snapshot', async () => {
  const calls = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        calls.push({ sql, params });
        if (sql.startsWith('SELECT id, site_id, vehicle_id, status FROM reservations')) {
          return [{ id: '15', site_id: '4', vehicle_id: 'vehicle-1', status: 'checked_in' }];
        }
        if (sql.startsWith('SELECT id, name FROM site_employees')) {
          return [{ id: '9', name: 'Receiving Staff' }];
        }
        return { affectedRows: 1 };
      }
    })
  };
  const repository = createReservationRepository(db);
  const result = await repository.transition({
    id: '15', status: 'completed', siteId: '4', employeeId: '9'
  });

  assert.deepEqual(result, { id: '15', status: 'completed', syncSiteId: '4', employeeId: '9' });
  assert.ok(calls.some(({ sql, params }) =>
    sql === 'UPDATE reservations SET status = ?, returned_by_employee_id = ?, returned_by_name = ? WHERE id = ?' &&
    params.join('|') === 'completed|9|Receiving Staff|15'));
});

test('reservation handover rejects an inactive or cross-site employee', async () => {
  const calls = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql) => {
        calls.push(sql);
        if (sql.startsWith('SELECT id, site_id, vehicle_id, status FROM reservations')) {
          return [{ id: '15', site_id: '4', vehicle_id: 'vehicle-1', status: 'reserved' }];
        }
        if (sql.startsWith('SELECT id, name FROM site_employees')) return [];
        throw new Error(`Unexpected SQL: ${sql}`);
      }
    })
  };
  const repository = createReservationRepository(db);
  await assert.rejects(
    repository.transition({ id: '15', status: 'checked_in', siteId: '4', employeeId: '9' }),
    (error) => error.code === 'ERP_INVALID_REFERENCE'
  );
  assert.equal(calls.some((sql) => sql.startsWith('UPDATE')), false);
});

test('reservation transition rejects invalid state changes', async () => {
  const db = {
    transaction: async (callback) => callback({
      query: async (sql) => sql.startsWith('SELECT id, site_id, vehicle_id, status FROM reservations')
        ? [{ id: '15', site_id: '4', vehicle_id: 'vehicle-1', status: 'completed' }]
        : []
    })
  };
  const repository = createReservationRepository(db);
  await assert.rejects(
    repository.transition({ id: '15', status: 'checked_in', siteId: '4' }),
    (error) => error.code === 'ERP_CONFLICT'
  );
});
