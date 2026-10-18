import assert from 'node:assert/strict';
import test from 'node:test';
import { createParkingRepository } from '../src/repositories/parking-repository.js';

test('new parking vehicles use an unused position in the selected lot under its lock', async () => {
  const calls = [];
  const transaction = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes('FROM parking_lots')) return [{ id: '11' }];
      if (sql.includes('FROM parking_vehicles')) return [
        { position_x: '0.125', position_y: '0.06' }
      ];
      throw new Error(`Unexpected parking query: ${sql}`);
    }
  };
  const position = await createParkingRepository({}).nextVehiclePosition({
    siteId: '3', parkingLotId: 11
  }, transaction);

  assert.deepEqual(position, { positionX: 0.375, positionY: 0.0625 });
  assert.match(calls[0].sql, /FOR UPDATE$/);
  assert.deepEqual(calls[0].params, [11, '3']);
  assert.deepEqual(calls[1].params, ['3', 11]);
});

test('parking bootstrap loads the full ERP-backed board only for the requested site', async () => {
  const seen = [];
  const db = {
    async query(sql, params) {
      seen.push({ sql, params });
      if (sql.includes('FROM parking_lots WHERE')) return [{
        id: '11', name: '本店第一', display_order: 0, area_height: 210, area_width: 50,
        navigation_url: '', markings: '[]', capacity: null, is_active: 1, class_priority: '[]'
      }];
      if (sql.includes('FROM parking_vehicles WHERE')) return [{
        id: '101', external_id: 'erp-vehicle', erp_vehicle_id: 'erp-vehicle',
        plate: '品川500あ1234', vehicle_type: 'A-1',
        parking_lot_id: '11', position_x: '0.25', position_y: '0.75',
        unwashed: 1, no_fuel: 0, needs_repair: 1, options: '["ETC"]', notes: 'memo'
      }];
      if (sql.includes('FROM reservations')) return [{
        vehicle_id: 'erp-vehicle', status: 'reserved',
        start_at: '2026-10-20 09:00:00', reservation_count: '1'
      }];
      if (sql.includes('FROM parking_vehicle_statuses')) return [{
        id: '21', name: '洗車待ち', icon: '🫧', key: 'unwashed'
      }];
      if (sql.includes('FROM parking_vehicle_status_assignments')) return [{
        vehicle_id: '101', status_id: '21'
      }];
      if (sql.includes('FROM parking_assessment_values')) return [{
        vehicle_id: '101', field_id: '31', value: '5'
      }];
      if (sql.includes('FROM parking_damage_marks')) return [{
        id: 'mark-a', vehicle_id: '101', damage_type_id: '41', x: 0.3, y: 0.7,
        world_x: null, world_y: null, world_z: null, world_nx: null, world_ny: null,
        name: '傷', icon: '〰️', color: '#e34b4b', built_in_key: 'scratch'
      }];
      if (sql.includes('FROM parking_assessment_fields')) return [{
        id: '31', built_in_key: 'exterior', group_key: 'body', name: '外装',
        field_type: 'rating', suffix: '', display_order: 0
      }];
      if (sql.includes('FROM parking_damage_types')) return [{
        id: '41', built_in_key: 'scratch', name: '傷', icon: '〰️', color: '#e34b4b'
      }];
      if (sql.includes('FROM parking_vehicle_option_types')) return [{ id: '51', name: 'ETC' }];
      if (sql.includes('FROM parking_jobs')) return [{
        id: '61', vehicle_id: '101', destination_lot_id: '11',
        scheduled_at: '2026-10-15 10:00', completed: 0
      }];
      if (sql.includes('FROM parking_vehicle_classes')) return [{
        id: '71', name: 'A-1', color: '#4f86f7', display_order: 0
      }];
      if (sql.includes('FROM parking_stores')) return [{ id: '81', name: '本店' }];
      if (sql.includes('FROM parking_lot_distances')) return [{
        from_lot_id: '11', to_lot_id: '12', minutes: '3', km: null
      }];
      if (sql.includes('FROM parking_store_lot_distances')) return [{
        store_id: '81', lot_id: '11', minutes: '4', km: '1.2'
      }];
      throw new Error(`Unexpected parking query: ${sql}`);
    }
  };

  const result = await createParkingRepository(db).bootstrap('3');
  assert.equal(seen.length, 15);
  assert(seen.every(({ params }) => params[0] === '3'));
  assert(result.vehicles[0].unwashed);
  assert.deepEqual(result.vehicles[0].reservation, {
    status: 'reserved', start_at: '2026-10-20 09:00:00', reservation_count: 1
  });
  assert.equal(result.vehicles[0].position_x, 0.25);
  assert.deepEqual(result.vehicles[0].status_ids, [21]);
  assert.deepEqual(result.vehicles[0].assessment_values, { 31: '5' });
  assert.equal(result.vehicles[0].inspection_marks[0].damage_type_id, 41);
  assert.deepEqual(result.parking_lots[0].markings, []);
  assert.deepEqual(result.vehicle_types, ['A-1']);
  assert.equal(result.jobs[0].completed, false);
  assert.equal(result.store_lot_distances[0].km, 1.2);
});

test('parking vehicle update transaction changes lot, position, and status assignments site-safely', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('SELECT id FROM parking_lots')) return [{ id: '11' }];
          if (sql.includes('SELECT id FROM parking_vehicle_statuses')) return [{ id: '21' }];
          if (sql.includes('SELECT name FROM parking_vehicle_option_types')) return [{ name: 'ETC' }];
          if (sql.includes('SELECT id, external_id')) return [{
            id: '101', external_id: 'erp-vehicle', plate: '品川500あ1234', vehicle_type: 'A-1',
            parking_lot_id: '11', position_x: '0.25', position_y: '0.75',
            unwashed: 0, no_fuel: 1, needs_repair: 0, options: '[]', notes: null
          }];
          if (sql.includes('SELECT status_id')) return [{ status_id: '21' }];
          return [];
        }
      });
    }
  };

  const result = await createParkingRepository(db).updateVehicle({
    siteId: '3', vehicleId: '101', parkingLotId: 11,
    positionX: 0.25, positionY: 0.75, statusIds: [21],
    unwashed: true, noFuel: false, needsRepair: true, options: ['ETC'], notes: 'inspection'
  });
  assert.equal(result.parking_lot_id, 11);
  assert.equal(result.position_x, 0.25);
  assert.equal(result.no_fuel, true);
  assert.deepEqual(result.status_ids, [21]);
  assert(calls.some(({ sql, params }) =>
    sql.includes('unwashed = ?') && params.includes(true) && params.includes('inspection')));
  assert(calls.some(({ sql, params }) =>
    sql.includes('UPDATE parking_vehicles') && params.includes('101') && params.includes('3')));
  assert(calls.every(({ sql }) => !sql.includes('DELETE FROM parking_vehicle_status_assignments') ||
    calls.some((call) => call.sql.includes('SELECT id FROM parking_vehicles') &&
      call.params[1] === '3')));
});

test('parking vehicle update refuses cross-site lots and performs no writes', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('SELECT id FROM parking_lots')) return [];
          return [];
        }
      });
    }
  };

  await assert.rejects(createParkingRepository(db).updateVehicle({
    siteId: '3', vehicleId: '101', parkingLotId: 99, positionX: 0.3, positionY: 0.6
  }), { code: 'PARKING_INVALID_REFERENCE' });
  assert.equal(calls.some(({ sql }) => sql.startsWith('UPDATE ') || sql.startsWith('DELETE ')), false);
  assert.deepEqual(calls[1].params, [99, '3']);
});

test('parking jobs are inserted and updated only in the ERP user site transaction', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('SELECT id FROM parking_lots')) return [{ id: '11' }];
          if (sql.includes('INSERT INTO parking_jobs')) return { insertId: 501 };
          return [];
        }
      });
    },
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.startsWith('UPDATE parking_jobs')) return { affectedRows: 1 };
      return [];
    }
  };
  const repository = createParkingRepository(db);
  assert.deepEqual(await repository.createJob({
    siteId: '3', vehicleId: 101, destinationLotId: 11, scheduledAt: '2026-10-15 10:30'
  }), { id: 501 });
  assert.deepEqual(await repository.updateJob({ siteId: '3', jobId: '501', completed: true }), {
    id: 501, completed: true
  });
  assert.deepEqual(calls.find(({ sql }) => sql.includes('INSERT INTO parking_jobs')).params,
    ['3', 101, 11, '2026-10-15 10:30', 101, '3']);
  const update = calls.find(({ sql }) => sql.startsWith('UPDATE parking_jobs'));
  assert(update.sql.includes('WHERE id = ? AND site_id = ?'));
  assert.equal(update.params[2], '501');
  assert.equal(update.params[3], '3');
});

test('parking assessment values validate fields within the site and replace values transactionally', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('FROM parking_assessment_fields')) {
            assert.equal(params[0], '3');
            return [{ id: '31', field_type: 'rating', built_in_key: 'exterior' }];
          }
          if (sql.includes('SELECT id, external_id')) return [{
            id: '101', external_id: 'erp-vehicle', plate: '品川500あ1234', vehicle_type: 'A-1',
            parking_lot_id: null, position_x: '0.5', position_y: '0.5',
            unwashed: 0, no_fuel: 0, needs_repair: 0, options: '[]', notes: ''
          }];
          if (sql.includes('SELECT status_id')) return [];
          return [];
        }
      });
    }
  };
  await createParkingRepository(db).updateVehicle({
    siteId: '3', vehicleId: '101', assessmentValues: { '31': '5' }
  });
  assert(calls.some(({ sql, params }) =>
    sql.includes('INSERT INTO parking_assessment_values') &&
      JSON.stringify(params) === JSON.stringify(['101', '31', '5'])));
});

test('parking assessment values reject invalid ratings before deleting existing data', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('FROM parking_assessment_fields')) {
            return [{ id: '31', field_type: 'rating', built_in_key: 'exterior' }];
          }
          return [];
        }
      });
    }
  };
  await assert.rejects(createParkingRepository(db).updateVehicle({
    siteId: '3', vehicleId: '101', assessmentValues: { '31': '6' }
  }), { code: 'PARKING_INVALID_VALUE' });
  assert.equal(calls.some(({ sql }) => sql.startsWith('DELETE FROM parking_assessment_values')), false);
});

test('parking inspection markers preserve valid coordinates and require same-site damage types', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('FROM parking_damage_types')) {
            assert.equal(params[0], '3');
            return [{ id: '41' }];
          }
          if (sql.includes('SELECT id, external_id')) return [{
            id: '101', external_id: 'erp-vehicle', plate: '品川500あ1234', vehicle_type: 'A-1',
            parking_lot_id: null, position_x: '0.5', position_y: '0.5',
            unwashed: 0, no_fuel: 0, needs_repair: 0, options: '[]', notes: ''
          }];
          if (sql.includes('SELECT status_id')) return [];
          return [];
        }
      });
    }
  };
  await createParkingRepository(db).updateVehicle({
    siteId: '3', vehicleId: '101',
    inspectionMarks: [{
      id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7,
      world_x: 0.1, world_y: -0.2, world_z: 0.3
    }]
  });
  const insert = calls.find(({ sql }) => sql.includes('INSERT INTO parking_damage_marks'));
  assert.deepEqual(insert.params, [
    'damage-a', '101', 41, 0.3, 0.7, 0.1, -0.2, 0.3, null, null, null
  ]);
});

test('parking inspection markers reject out-of-range coordinates before replacing stored marks', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('FROM parking_damage_types')) return [{ id: '41' }];
          return [];
        }
      });
    }
  };
  await assert.rejects(createParkingRepository(db).updateVehicle({
    siteId: '3', vehicleId: '101',
    inspectionMarks: [{ id: 'damage-a', damage_type_id: 41, x: 1.1, y: 0.7 }]
  }), { code: 'PARKING_INVALID_VALUE' });
  assert.equal(calls.some(({ sql }) => sql.startsWith('DELETE FROM parking_damage_marks')), false);
});

test('parking area create and edit are persisted using the ERP site scope', async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes('MAX(display_order)')) return [{ next_order: 2 }];
      if (sql.startsWith('INSERT INTO parking_lots')) return { insertId: 21 };
      if (sql.includes('SELECT id FROM parking_lots')) return [{ id: '21' }];
      if (sql.includes('SELECT id, name, display_order')) return [{
        id: '21', name: '北側', display_order: 2, area_height: 210, area_width: 50,
        navigation_url: '', markings: '[]', capacity: null, is_active: 0, class_priority: '[]'
      }];
      return { affectedRows: 1 };
    }
  };
  const repository = createParkingRepository(db);
  const created = await repository.createLot({ siteId: '3', name: '北側', navigationUrl: '' });
  assert.equal(created.id, 21);
  assert.equal(created.display_order, 2);
  const updated = await repository.updateLot({
    siteId: '3', lotId: '21', fields: { is_active: false }
  });

  test('Google Maps coordinates produce local straight-line parking distances', async () => {
    const writes = [];
    const db = {
      async query(sql) {
        if (sql.includes('MAX(display_order)')) return [{ next_order: 2 }];
        if (sql.startsWith('INSERT INTO parking_lots')) return { insertId: 13 };
        if (sql.includes('SELECT id, name, display_order')) return [{
          id: '13', name: '新宿', display_order: 2, area_height: 210, area_width: 50,
          navigation_url: 'https://www.google.com/maps?query=35.6895%2C139.6917',
          markings: '[]', capacity: null, is_active: 1, class_priority: '[]'
        }];
        if (sql.includes('FROM parking_lots WHERE site_id')) return [
          { id: '12', navigation_url: 'https://www.google.com/maps/@35.6812,139.7671,17z' },
          { id: '13', navigation_url: 'https://www.google.com/maps?query=35.6895%2C139.6917' }
        ];
        if (sql.includes('FROM parking_stores WHERE site_id')) return [
          { id: '20', navigation_url: 'https://www.google.com/maps/place/?q=35.6812,139.7671' }
        ];
        return { affectedRows: 1 };
      },
      async transaction(callback) {
        return callback({
          async query(sql, params) {
            writes.push({ sql, params });
            return { affectedRows: 1 };
          }
        });
      }
    };
    const lot = await createParkingRepository(db).createLot({
      siteId: '3', name: '新宿', navigationUrl: 'https://www.google.com/maps?query=35.6895%2C139.6917'
    });
    assert.equal(lot.id, 13);
    const lotDistanceWrites = writes.filter(({ sql }) => sql.includes('INSERT INTO parking_lot_distances'));
    const storeDistanceWrites = writes.filter(({ sql }) => sql.includes('INSERT INTO parking_store_lot_distances'));
    assert.equal(lotDistanceWrites.length, 1);
    assert.equal(storeDistanceWrites.length, 1);
    assert.equal(lotDistanceWrites[0].params.length, 8);
    assert.equal(storeDistanceWrites[0].params.length, 8);
    assert([lotDistanceWrites[0].params[3], lotDistanceWrites[0].params[7]]
      .every((distance) => distance > 6 && distance < 8));
    assert(writes.some(({ sql }) => sql.includes('DELETE FROM parking_lot_distances') &&
      sql.includes('km_auto = 1')));
  });
  assert.equal(updated.is_active, false);
  assert(calls.every(({ sql }) => !sql.includes('WHERE id = ? AND site_id = ?') ||
    calls.find((call) => call.sql === sql)?.params.includes('3')));
});

test('parking area deletion refuses to remove the last lot or one still in use', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_lots WHERE id')) return [{ id: '11' }];
          if (sql.includes('SELECT id FROM parking_vehicles')) return [{ id: '101' }];
          if (sql.includes('SELECT id FROM parking_jobs')) return [];
          if (sql.includes('COUNT(*) AS count')) return [{ count: 2 }];
          return [];
        }
      });
    }
  };
  const result = await createParkingRepository(db).deleteLot({ siteId: '3', lotId: '11' });
  assert.deepEqual(result, { deleted: false, reason: 'in_use' });
  assert.equal(calls.some(({ sql }) => sql.startsWith('DELETE FROM parking_lots')), false);
  assert(calls.every(({ params }) => params[params.length - 1] === '3' || params.length === 1));
});

test('parking status deletion clears its legacy flag and scopes updates to one site', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id, `key`')) return [{ id: '31', key: 'no_fuel' }];
          return [];
        }
      });
    }
  };
  assert.equal(await createParkingRepository(db).deleteStatus({ siteId: '3', statusId: '31' }), true);
  assert(calls.some(({ sql, params }) =>
    sql.includes('UPDATE parking_vehicles SET no_fuel = 0') && params[0] === '3'));
  assert(calls.some(({ sql, params }) =>
    sql.startsWith('DELETE FROM parking_vehicle_statuses') && params[1] === '3'));
});

test('parking status updates preserve scope and reject duplicate names', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id, name, icon')) return [{ id: '31', name: '洗車待ち', icon: '🫧' }];
          if (sql.includes('SELECT id FROM parking_vehicle_statuses')) return [];
          return [];
        }
      });
    }
  };
  assert.equal(await createParkingRepository(db).updateStatus({
    siteId: '3', statusId: '31', name: '整備待ち', icon: '🔧'
  }), true);
  assert(calls.some(({ sql, params }) =>
    sql.startsWith('UPDATE parking_vehicle_statuses') &&
    params.join('|') === '整備待ち|🔧|31|3'));

  const conflictDb = {
    async transaction(callback) {
      return callback({
        async query(sql) {
          if (sql.includes('SELECT id, name, icon')) return [{ id: '31', name: '洗車待ち', icon: '🫧' }];
          if (sql.includes('SELECT id FROM parking_vehicle_statuses')) return [{ id: '32' }];
          return [];
        }
      });
    }
  };
  await assert.rejects(createParkingRepository(conflictDb).updateStatus({
    siteId: '3', statusId: '31', name: '給油待ち', icon: '🔧'
  }), { code: 'ER_DUP_ENTRY' });
});

test('parking option deletion removes saved options and stores built-in suppression transactionally', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id, name, built_in_key')) {
            return [{ id: '51', name: 'ETC', built_in_key: 'etc' }];
          }
          if (sql.includes('SELECT id, options FROM parking_vehicles')) {
            return [{ id: '101', options: '["ETC","冬タイヤ"]' }];
          }
          return [];
        }
      });
    }
  };
  assert.equal(await createParkingRepository(db).deleteVehicleOption({
    siteId: '3', optionId: '51'
  }), true);
  assert(calls.some(({ sql, params }) =>
    sql.includes('UPDATE parking_vehicles SET options') &&
      JSON.stringify(params) === JSON.stringify(['["冬タイヤ"]', '101', '3'])));
  assert(calls.some(({ sql, params }) =>
    sql.startsWith('INSERT IGNORE INTO parking_vehicle_option_suppressions') &&
      JSON.stringify(params) === JSON.stringify(['3', 'etc'])));
});

test('parking option edits rename saved vehicle selections within their site', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id, name FROM parking_vehicle_option_types')) {
            return [{ id: '51', name: 'ETC' }];
          }
          if (sql.includes('SELECT id FROM parking_vehicle_option_types')) return [];
          if (sql.includes('SELECT id, options FROM parking_vehicles')) {
            return [
              { id: '101', options: '["ETC","禁煙"]' },
              { id: '102', options: '["ナビ"]' }
            ];
          }
          return [];
        }
      });
    }
  };
  assert.deepEqual(await createParkingRepository(db).updateVehicleOption({
    siteId: '3', optionId: '51', name: 'ETC車載器'
  }), { id: 51, name: 'ETC車載器' });
  assert(calls.some(({ sql, params }) =>
    sql.startsWith('UPDATE parking_vehicle_option_types') &&
    JSON.stringify(params) === JSON.stringify(['ETC車載器', '51', '3'])));
  assert(calls.some(({ sql, params }) =>
    sql.startsWith('UPDATE parking_vehicles') &&
    JSON.stringify(params) === JSON.stringify(['["ETC車載器","禁煙"]', '101', '3'])));
  assert.equal(calls.filter(({ sql }) => sql.startsWith('UPDATE parking_vehicles')).length, 1);

  const conflictDb = {
    async transaction(callback) {
      return callback({
        async query(sql) {
          if (sql.includes('SELECT id, name FROM parking_vehicle_option_types')) {
            return [{ id: '51', name: 'ETC' }];
          }
          if (sql.includes('SELECT id FROM parking_vehicle_option_types')) return [{ id: '52' }];
          return [];
        }
      });
    }
  };
  await assert.rejects(createParkingRepository(conflictDb).updateVehicleOption({
    siteId: '3', optionId: '51', name: '禁煙'
  }), { code: 'ER_DUP_ENTRY' });
});

test('parking distance writes verify site-owned references before transactional upserts', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id FROM parking_lots')) return [{ id: '11' }, { id: '12' }];
          if (sql.includes('SELECT id FROM parking_stores')) return [{ id: '81' }];
          return sql.startsWith('DELETE') ? { affectedRows: 1 } : {};
        }
      });
    }
  };
  const repository = createParkingRepository(db);
  assert.deepEqual(await repository.updateLotDistances({
    siteId: '3', entries: [{ from_lot_id: 11, to_lot_id: 12, minutes: 8, km: 2 }]
  }), { updated: 1 });
  assert.deepEqual(await repository.updateStoreLotDistances({
    siteId: '3', entries: [{ store_id: 81, lot_id: 11, minutes: null, km: null }]
  }), { updated: 1 });
  assert(calls.some(({ sql, params }) =>
    sql.includes('INSERT INTO parking_lot_distances') && params[0] === '3'));
  assert(calls.some(({ sql, params }) =>
    sql.includes('DELETE FROM parking_store_lot_distances') &&
      JSON.stringify(params) === JSON.stringify([81, 11, '3'])));
  const writeCount = calls.filter(({ sql }) => /^(INSERT|UPDATE|DELETE)/.test(sql.trim())).length;
  await assert.rejects(repository.updateLotDistances({
    siteId: '3', entries: [{ from_lot_id: 11, to_lot_id: 99, minutes: 1, km: null }]
  }), { code: 'PARKING_INVALID_REFERENCE' });
  assert.equal(calls.filter(({ sql }) => /^(INSERT|UPDATE|DELETE)/.test(sql.trim())).length, writeCount);
});

test('parking damage type deletion protects saved inspection markers', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          return sql.includes('SELECT m.id') ? [{ id: 'mark-a' }] : { affectedRows: 0 };
        }
      });
    }
  };
  assert.deepEqual(await createParkingRepository(db).deleteDamageType({
    siteId: '3', damageTypeId: '41'
  }), { deleted: false, reason: 'in_use' });
  assert(calls.every(({ sql }) => !sql.startsWith('DELETE FROM parking_damage_types')));
});

test('ERP vehicle sync links UUIDs once without overwriting parking position or workflow data', async () => {
  const calls = [];
  const db = {
    async transaction(callback) {
      return callback({
        async query(sql, params) {
          calls.push({ sql, params });
          if (sql.includes('SELECT id, site_id FROM parking_vehicles')) {
            return params[0] === 'existing-uuid' ? [{ id: '101', site_id: '3' }] : [];
          }
          if (sql.includes('SELECT name FROM parking_vehicle_classes')) return [{ name: 'Compact' }];
          return [];
        }
      });
    }
  };
  const result = await createParkingRepository(db).syncVehiclesFromERP({
    vehicles: [
      { id: 'existing-uuid', registration_number: 'NEW-101', make: 'A', model: 'B', site_id: '3' },
      { id: 'new-uuid', registration_number: 'NEW-102', make: 'C', model: 'D', site_id: '3' }
    ]
  });
  assert.deepEqual(result, { created: 1, updated: 1, synced: 2 });
  assert(calls.some(({ sql, params }) =>
    sql.includes('UPDATE parking_vehicles SET plate = ?') &&
    JSON.stringify(params) === JSON.stringify(['NEW-101', '101', '3'])));
  assert(calls.some(({ sql, params }) =>
    sql.includes('INSERT INTO parking_vehicles') &&
    JSON.stringify(params) === JSON.stringify(['3', 'new-uuid', 'new-uuid', 'NEW-102', 'Compact'])));
  assert(calls.every(({ sql }) => !sql.includes('position_x') && !sql.includes('parking_lot_id')));
});
