import test from 'node:test';
import assert from 'node:assert/strict';
import { createVehicleRepository } from '../src/repositories/vehicle-repository.js';

test('vehicle and parking rows share the ERP UUID in one transaction', async () => {
  const statements = [];
  const vehicleId = '11111111-2222-4333-8444-555555555555';
  const query = async (sql, params = []) => {
    statements.push({ sql, params });
    if (sql.includes('FROM parking_vehicle_classes')) return [{ name: 'A-1' }];
    if (sql.includes('FROM parking_vehicle_option_types')) return [{ name: 'ナビ' }];
    if (sql.includes('FROM vehicles WHERE id = ?')) {
      return [{
        id: vehicleId, registration_number: '品川500あ1234', site_id: '42', status: 'available'
      }];
    }
    return { insertId: 1 };
  };
  let transactionCount = 0;
  let parkingUpdate;
  const db = { query };
  const parkingBoard = {
    nextVehiclePosition: async (fields, transaction) => {
      assert.deepEqual(fields, { siteId: '42', parkingLotId: 3 });
      assert.equal(transaction, transactionConnection);
      return { positionX: 0.125, positionY: 0.0625 };
    },
    updateVehicle: async (fields, transaction) => {
      parkingUpdate = { fields, transaction };
      return { id: 1 };
    }
  };
  const transactionConnection = { query };
  db.transaction = async (callback) => {
    transactionCount += 1;
    return callback(transactionConnection);
  };
  const vehicle = await createVehicleRepository(db, parkingBoard).create({
    id: vehicleId,
    siteId: '42',
    registrationNumber: '品川500あ1234',
    inspectionExpiryDate: '2027-03-31',
    statutoryInspectionDate: '2026-10-16',
    parkingClass: 'A-1',
    parkingOptions: ['ナビ'],
    parkingNotes: '登録メモ',
    parkingLotId: 3,
    parkingStatusIds: [4],
    parkingUnwashed: true,
    parkingNoFuel: false,
    parkingNeedsRepair: false,
    parkingAssessmentValues: { '31': '5' },
    parkingInspectionMarks: [{ id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }]
  });

  const erpInsert = statements.find(({ sql }) => sql.includes('INSERT INTO vehicles'));
  const parkingInsert = statements.find(({ sql }) => sql.includes('INSERT INTO parking_vehicles'));
  assert.equal(transactionCount, 1);
  assert.equal(vehicle.id, vehicleId);
  assert.ok(erpInsert);
  assert.deepEqual(erpInsert.params, [
    vehicleId, '品川500あ1234', null, '', '', null,
    '2027-03-31', '2026-10-16', '42', 'available'
  ]);
  assert.ok(parkingInsert);
  assert.deepEqual(parkingInsert.params.slice(0, 5), [
    '42', vehicleId, vehicleId, '品川500あ1234', 'A-1'
  ]);
  assert.equal(parkingInsert.params[5], JSON.stringify(['ナビ']));
  assert.equal(parkingInsert.params[6], '登録メモ');
  assert.equal(parkingUpdate.transaction, transactionConnection);
  assert.deepEqual(parkingUpdate.fields, {
    siteId: '42', vehicleId: '1', positionX: 0.125, positionY: 0.0625,
    parkingLotId: 3, statusIds: [4], unwashed: true,
    noFuel: false, needsRepair: false,
    assessmentValues: { '31': '5' },
    inspectionMarks: [{ id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }]
  });
});

test('vehicle inspection dates are persisted and can be cleared within site scope', async () => {
  const calls = [];
  const vehicleId = '11111111-2222-4333-8444-555555555555';
  const db = {
    async query(sql, params = []) {
      calls.push({ sql, params });
      if (sql.startsWith('SELECT id, registration_number')) {
        return [{
          id: vehicleId, inspection_expiry_date: null, statutory_inspection_date: '2026-11-11'
        }];
      }
      return { affectedRows: 1 };
    }
  };
  const vehicle = await createVehicleRepository(db).update(vehicleId, {
    inspectionExpiryDate: null, statutoryInspectionDate: '2026-11-11'
  }, '42');
  const update = calls.find(({ sql }) => sql.startsWith('UPDATE vehicles'));
  assert.deepEqual(update.params, [null, '2026-11-11', vehicleId, '42']);
  assert.match(update.sql, /inspection_expiry_date = \?, statutory_inspection_date = \?/);
  assert.equal(vehicle.inspection_expiry_date, null);
  assert.equal(vehicle.statutory_inspection_date, '2026-11-11');
});

test('compliance list scopes by site, excludes retired vehicles, and sorts by urgency', async () => {
  const calls = [];
  const db = {
    async query(sql, params = []) {
      calls.push({ sql, params });
      return [
        {
          id: 'v-ok-missing', registration_number: '品川500あ0003', site_id: '42', status: 'available',
          inspection_expiry_date: '2027-06-01', statutory_inspection_date: null
        },
        {
          id: 'v-overdue', registration_number: '品川500あ0001', site_id: '42', status: 'rented',
          inspection_expiry_date: '2026-11-01', statutory_inspection_date: '2027-06-01'
        },
        {
          id: 'v-soon', registration_number: '品川500あ0002', site_id: '42', status: 'available',
          inspection_expiry_date: '2026-12-20', statutory_inspection_date: '2027-06-01'
        }
      ];
    }
  };
  const { items, summary } = await createVehicleRepository(db).listCompliance({
    siteId: '42', today: '2026-11-05', withinDays: 60
  });
  assert.match(calls[0].sql, /status <> 'retired'/);
  assert.match(calls[0].sql, /site_id = \?/);
  assert.deepEqual(calls[0].params, ['42', '2027-01-04', '2027-01-04']);
  assert.deepEqual(items.map((item) => item.id), ['v-overdue', 'v-soon', 'v-ok-missing']);
  assert.deepEqual(items.map((item) => item.compliance.level), ['overdue', 'due_soon', 'missing']);
  assert.deepEqual(summary, { overdue: 1, dueSoon: 1, missing: 1, total: 3 });
});

test('unknown parking class aborts before inserting either vehicle row', async () => {
  const statements = [];
  const query = async (sql) => {
    statements.push(sql);
    if (sql.includes('FROM parking_vehicle_classes')) return [];
    return [];
  };
  const db = {
    query,
    transaction: async (callback) => callback({ query })
  };

  await assert.rejects(createVehicleRepository(db).create({
    id: '11111111-2222-4333-8444-555555555555',
    siteId: '42',
    registrationNumber: '品川500あ1234',
    make: 'Toyota',
    model: 'Aqua',
    parkingClass: 'not-configured'
  }), { code: 'PARKING_INVALID_REFERENCE' });
  assert.equal(statements.some((sql) =>
    sql.includes('INSERT INTO vehicles') || sql.includes('INSERT INTO parking_vehicles')
  ), false);
});
