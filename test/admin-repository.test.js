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

test('site details include contact and aggregate vehicle counts by status and class', async () => {
  const statements = [];
  const repository = createAdminRepository({
    query: async (sql, params = []) => {
      statements.push({ sql, params });
      if (sql.startsWith('SELECT s.id')) {
        return [{
          id: '2', name: 'Tokyo', address: 'Tokyo address', phone: '03-1234-5678',
          created_at: '2026-10-18T00:00:00.000Z', vehicle_count: 4, account_count: 2
        }];
      }
      if (sql.includes('SELECT status, COUNT(*)')) {
        return [{ status: 'available', count: 3 }, { status: 'rented', count: 1 }];
      }
      if (sql.includes('SELECT pv.vehicle_type AS name')) {
        return [{ name: 'A-1', count: 2 }, { name: 'B', count: 2 }];
      }
      return [];
    }
  });

  const [site] = await repository.listSites('2');
  const vehicleCounts = await repository.listSiteVehicleCounts('2');
  assert.equal(site.address, 'Tokyo address');
  assert.equal(site.phone, '03-1234-5678');
  assert.equal(Number(site.vehicle_count), 4);
  assert.equal(Number(site.account_count), 2);
  assert.deepEqual(vehicleCounts.classes.map(({ name }) => name), ['A-1', 'B']);
  assert.deepEqual(vehicleCounts.statuses.map(({ status }) => status), ['available', 'rented']);
  assert.ok(statements.some(({ sql }) => sql.includes("v.status <> 'retired'")));
});

test('site status update preserves headquarters and allows restoring a store', async () => {
  const updates = [];
  const repository = createAdminRepository({
    query: async (sql, params = []) => {
      if (sql.includes('SELECT id FROM sites')) {
        return params[0] === '1' ? [] : [{ id: String(params[0]) }];
      }
      if (sql.startsWith('UPDATE sites')) {
        updates.push(params);
      }
      return [];
    }
  });

  assert.equal(await repository.updateSiteStatus('1', 'inactive'), null);
  assert.deepEqual(await repository.updateSiteStatus('2', 'inactive'), { id: '2', status: 'inactive' });
  assert.deepEqual(await repository.updateSiteStatus('2', 'active'), { id: '2', status: 'active' });
  assert.deepEqual(updates, [['inactive', '2'], ['active', '2']]);
});

test('site contact update stores and clears address and phone', async () => {
  const updates = [];
  const repository = createAdminRepository({
    query: async (sql, params = []) => {
      if (sql.startsWith('SELECT id FROM sites')) return [{ id: String(params[0]) }];
      if (sql.startsWith('UPDATE sites')) updates.push(params);
      return [];
    }
  });
  assert.deepEqual(await repository.updateSiteContact('2', {
    address: 'Tokyo', phone: '03-1234-5678'
  }), { id: '2', address: 'Tokyo', phone: '03-1234-5678' });
  assert.deepEqual(await repository.updateSiteContact('2', { address: null, phone: null }), {
    id: '2', address: null, phone: null
  });
  assert.deepEqual(updates, [
    ['Tokyo', '03-1234-5678', '2'],
    [null, null, '2']
  ]);
});
