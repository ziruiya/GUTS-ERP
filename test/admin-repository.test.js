import test from 'node:test';
import assert from 'node:assert/strict';
import { createAdminRepository } from '../src/repositories/admin-repository.js';

test('new headquarters sites receive the GUTS-Parking default vehicle catalogs', async () => {
  const createdClasses = [];
  const createdOptions = [];
  const createdStatuses = [];
  const createdAssessments = [];
  const createdDamageTypes = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params = []) => {
        if (sql.includes('INSERT INTO sites')) return { insertId: 42 };
        if (sql.includes('INSERT INTO parking_vehicle_classes')) {
          createdClasses.push(params);
        }
        if (sql.includes('INSERT INTO parking_vehicle_option_types')) createdOptions.push(params);
        if (sql.includes('INSERT INTO parking_vehicle_statuses')) createdStatuses.push(params);
        if (sql.includes('INSERT INTO parking_assessment_fields')) createdAssessments.push(params);
        if (sql.includes('INSERT INTO parking_damage_types')) createdDamageTypes.push(params);
        return {};
      }
    })
  };

  await createAdminRepository(db).createSite({ code: 'HQ', name: 'Headquarters', type: 'headquarters' });
  assert.deepEqual(createdClasses.map(([, name]) => name), [
    'A-1', 'A-2', 'A-2P', 'B', 'B軽トラ', 'C-1', 'C-2', 'D', 'H-1', 'H-2', 'その他'
  ]);
  assert.ok(createdClasses.every(([siteId]) => siteId === 42));
  assert.deepEqual(createdOptions.map(([, name]) => name), [
    'ETC', '車載器', '禁煙', '喫煙', 'ナビ', 'スタッドレス'
  ]);
  assert.deepEqual(createdStatuses.map(([, key]) => key), ['unwashed', 'no_fuel', 'needs_repair']);
  assert.deepEqual(createdAssessments.map(([, key]) => key), [
    'exterior', 'interior', 'wheels', 'registration_document', 'radio',
    'navigation', 'air_conditioning', 'side_mirror', 'mileage',
    'registration_year', 'registration_month'
  ]);
  assert.deepEqual(createdDamageTypes.map(([, key]) => key), ['scratch', 'dent']);
});

test('account list includes owner-admin marker without exposing password hashes', async () => {
  let call;
  const repository = createAdminRepository({
    query: async (sql, params) => {
      call = { sql, params };
      return [{
        id: '1', username: 'admin', is_owner_admin: 1,
        site_id: '1', site_name: 'Headquarters'
      }];
    }
  });
  const items = await repository.listAccounts({ search: 'admin', limit: 50, offset: 0 });
  assert.equal(items[0].is_owner_admin, 1);
  assert.match(call.sql, /a\.is_owner_admin/);
  assert.doesNotMatch(call.sql, /password_hash/);
  assert.deepEqual(call.params, ['%admin%', '%admin%', '%admin%', '%admin%', 50, 0]);
});
