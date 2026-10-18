import test from 'node:test';
import assert from 'node:assert/strict';
import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import { registerRoutes } from '../src/routes.js';

const jwtConfig = {
  secret: 'test-secret-with-at-least-thirty-two-bytes-long',
  issuer: 'guts-erp-test',
  audience: 'guts-parking-test'
};

async function makeApp(user) {
  const calls = {
    vehicleList: null, createdVehicle: null, reservationList: null,
    updatedVehicle: null, createdReservation: null, transitionedReservation: null, dashboardSiteScope: null,
    customerList: null, createdCustomer: null, updatedCustomer: null,
    reservationCatalogSiteScope: null, availableVehicleQuery: null,
    createdAccount: null, updatedAccount: null, accountListFilters: [],
    createdSite: null, siteStatusUpdate: null, siteContactUpdate: null, switchedAccountId: null,
    employeeList: null, createdEmployee: null, updatedEmployee: null,
    parkingSyncVehicles: null, parkingSyncResult: { created: 1, updated: 0, synced: 1 },
    parkingSyncError: null,
    parkingBootstrapSiteScope: null, parkingVehicleCatalogSiteScope: null, parkingUpdate: null,
    parkingJobCreate: null, parkingJobUpdate: null, parkingJobDelete: null, parkingPublished: [],
    parkingLotCreate: null, parkingLotUpdate: null, parkingLotDelete: null, parkingLotOrder: null,
    parkingCatalogWrites: [], parkingLogisticsWrites: [], revokedRefreshTokens: [],
    parkingSyncMarked: []
  };
  const loggedErrors = [];
  const app = Fastify({ logger: false });
  await app.register(jwt, {
    secret: jwtConfig.secret,
    sign: { algorithm: 'HS256' },
    verify: {
      algorithms: ['HS256'],
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience
    }
  });
  const accountsById = new Map([
    ...(user.profile ? [[String(user.profile.id), user.profile]] : []),
    ...Object.entries(user.accounts ?? {})
  ]);
  const permissionsByAccount = user.accountPermissions ?? {};
  registerRoutes(app, {
    accounts: {
      findById: async (id) => accountsById.get(String(id)) ?? null,
      findActiveBySiteId: async (siteId) =>
        user.siteAccount?.site_id === String(siteId) ? user.siteAccount : null,
      listPermissions: async (id) => permissionsByAccount[String(id)] ?? []
    },
    admin: {
      listSites: async (siteId) => siteId
        ? [{ id: siteId, code: 'SHOP', name: 'Shop', type: 'direct', status: 'active' }]
        : [],
      createSite: async (site) => {
        calls.createdSite = site;
        return { id: '22', ...site, status: 'active' };
      },
      listSiteVehicleCounts: async (siteId) => ({
        statuses: [{ status: 'available', count: 3 }],
        classes: [{ name: `Class ${siteId}`, count: 3 }]
      }),
      updateSiteStatus: async (id, status) => {
        if (String(id) === '1') return null;
        calls.siteStatusUpdate = { id, status };
        return { id, status };
      },
      updateSiteContact: async (id, contact) => {
        calls.siteContactUpdate = { id, ...contact };
        return { id, ...contact };
      },
      listAccounts: async (filters) => {
        calls.accountListFilters.push(filters);
        return user.listedAccounts ?? [];
      },
      listRoles: async () => [],
      listPermissions: async () => [{ permission_key: 'reservations:read', description: 'Read reservations' }],
      createAccount: async (account) => {
        calls.createdAccount = account;
        return { id: '99', ...account };
      },
      updateAccount: async (id, fields, siteScope) => {
        calls.updatedAccount = { id, fields, siteScope };
        return { id };
      },
      dashboardStats: async (siteId) => {
        calls.dashboardSiteScope = siteId;
        return { sites: {}, accounts: {}, vehicles: {} };
      }
    },
    vehicles: {
      list: async (filters) => {
        calls.vehicleList = filters;
        return [];
      },
      findById: async () => null,
      create: async (vehicle) => {
        calls.createdVehicle = vehicle;
        return vehicle;
      },
      update: async (id, fields) => {
        calls.updatedVehicle = { id, fields };
        return { id, ...fields };
      },
      listForParkingSync: async () => [{
        id: 'vehicle-uuid', registration_number: '品川500あ1234',
        make: 'Toyota', model: 'Aqua', site_id: '2'
      }]
    },
    reservations: {
      list: async (filters) => { calls.reservationList = filters; return []; },
      vehicleCatalog: async (filters) => {
        calls.reservationCatalogSiteScope = filters.siteId;
        return { classes: [{ id: 1, name: 'A-1' }], options: [{ id: 1, name: '禁煙' }] };
      },
      listAvailableVehicles: async (filters) => {
        calls.availableVehicleQuery = filters;
        return [{ id: 'vehicle-uuid', registration_number: '品川500あ1234' }];
      },
      create: async (reservation) => {
        calls.createdReservation = reservation;
        return { id: '1', reservationCode: 'ABC123', status: 'reserved' };
      },
      transition: async (reservation) => {
        calls.transitionedReservation = reservation;
        return reservation;
      }
    },
    customers: {
      list: async (filters) => {
        calls.customerList = filters;
        return [{ id: '71', site_id: filters.siteId, name: 'Guest', phone: '09012345678' }];
      },
      create: async (customer) => {
        calls.createdCustomer = customer;
        return { id: '71', ...customer };
      },
      update: async (customer) => {
        calls.updatedCustomer = customer;
        return { id: customer.customerId, ...customer };
      }
    },
    employees: {
      list: async (filters) => {
        calls.employeeList = filters;
        return [{ id: '8', site_id: filters.siteId, name: 'Store Staff', status: 'active' }];
      },
      create: async (employee) => {
        calls.createdEmployee = employee;
        return { id: '8', ...employee, status: 'active' };
      },
      update: async (employee) => {
        calls.updatedEmployee = employee;
        return { id: employee.id, status: employee.status ?? 'updated' };
      }
    },
    auth: {
      refreshExpiresIn: 2592000,
      login: async () => null,
      refresh: async () => null,
      revoke: async (refreshToken) => calls.revokedRefreshTokens.push(refreshToken),
      switchToSite: async (siteId) => {
        const account = user.siteAccount;
        if (!account || account.site_id !== String(siteId) || account.status !== 'active' ||
            account.site_status !== 'active' || account.site_type === 'headquarters' ||
            Number(account.is_owner_admin) === 1) return null;
        const permissions = permissionsByAccount[String(account.id)] ?? [];
        return {
          accessToken: app.jwt.sign({
            sub: String(account.id), username: account.username,
            siteId: String(account.site_id), siteCode: account.site_code,
            siteType: account.site_type, permissions
          }, {
            issuer: jwtConfig.issuer, audience: jwtConfig.audience, expiresIn: 300
          }),
          refreshToken: 'S'.repeat(43)
        };
      },
      switchToAccount: async (accountId) => {
        calls.switchedAccountId = accountId;
        const account = accountsById.get(String(accountId));
        if (!account || account.status !== 'active' || account.site_status !== 'active' ||
            account.site_type === 'headquarters' || Number(account.is_owner_admin) === 1) return null;
        const permissions = permissionsByAccount[String(account.id)] ?? [];
        return {
          accessToken: app.jwt.sign({
            sub: String(account.id), username: account.username,
            siteId: String(account.site_id), siteCode: account.site_code,
            siteType: account.site_type, permissions
          }, {
            issuer: jwtConfig.issuer, audience: jwtConfig.audience, expiresIn: 300
          }),
          refreshToken: 'S'.repeat(43)
        };
      },
      ...(user.auth ?? {})
    },
    parkingBoard: {
      bootstrap: async (siteId) => {
        calls.parkingBootstrapSiteScope = siteId;
        return { parking_lots: [], vehicles: [] };
      },
      vehicleCatalog: async (siteId) => {
        calls.parkingVehicleCatalogSiteScope = siteId;
        return { vehicle_classes: [{ id: 1, name: 'A-1' }], vehicle_options: [] };
      },
      syncVehiclesFromERP: async ({ vehicles }) => {
        calls.parkingSyncVehicles = vehicles;
        if (calls.parkingSyncError) throw calls.parkingSyncError;
        return calls.parkingSyncResult;
      },
      updateVehicle: async (input) => {
        calls.parkingUpdate = input;
        return { id: 101, parking_lot_id: input.parkingLotId, status_ids: input.statusIds };
      },
      createJob: async (input) => { calls.parkingJobCreate = input; return { id: 501 }; },
      updateJob: async (input) => { calls.parkingJobUpdate = input; return input; },
      deleteJob: async (input) => { calls.parkingJobDelete = input; return true; },
      createLot: async (input) => {
        calls.parkingLotCreate = input;
        return { id: 201, name: input.name, display_order: 0, is_active: true };
      },
      updateLot: async (input) => {
        calls.parkingLotUpdate = input;
        return { id: Number(input.lotId), ...input.fields };
      },
      deleteLot: async (input) => { calls.parkingLotDelete = input; return { deleted: true }; },
      orderLots: async (input) => { calls.parkingLotOrder = input; return true; },
      createStatus: async (input) => { calls.parkingCatalogWrites.push(['status', input]); return { id: 31 }; },
      updateStatus: async (input) => { calls.parkingCatalogWrites.push(['edit-status', input]); return true; },
      deleteStatus: async (input) => { calls.parkingCatalogWrites.push(['delete-status', input]); return true; },
      createVehicleClass: async (input) => { calls.parkingCatalogWrites.push(['class', input]); return { id: 41 }; },
      updateVehicleClass: async (input) => { calls.parkingCatalogWrites.push(['edit-class', input]); return { id: 41 }; },
      deleteVehicleClass: async (input) => { calls.parkingCatalogWrites.push(['delete-class', input]); return { deleted: true }; },
      createVehicleOption: async (input) => { calls.parkingCatalogWrites.push(['option', input]); return { id: 51 }; },
      updateVehicleOption: async (input) => {
        if (input.name === '禁煙') {
          const error = new Error('Duplicate vehicle option.');
          error.code = 'ER_DUP_ENTRY';
          throw error;
        }
        calls.parkingCatalogWrites.push(['edit-option', input]);
        return { id: 51, name: input.name };
      },
      deleteVehicleOption: async (input) => { calls.parkingCatalogWrites.push(['delete-option', input]); return true; },
      createStore: async (input) => { calls.parkingLogisticsWrites.push(['store', input]); return { id: 61 }; },
      updateStoreNavigationUrl: async (input) => {
        calls.parkingLogisticsWrites.push(['store-location', input]);
        return true;
      },
      deleteStore: async (input) => { calls.parkingLogisticsWrites.push(['delete-store', input]); return true; },
      updateLotDistances: async (input) => { calls.parkingLogisticsWrites.push(['lot-distances', input]); return { updated: input.entries.length }; },
      updateStoreLotDistances: async (input) => { calls.parkingLogisticsWrites.push(['store-distances', input]); return { updated: input.entries.length }; },
      createAssessmentField: async (input) => { calls.parkingLogisticsWrites.push(['assessment', input]); return { id: 71 }; },
      updateAssessmentField: async (input) => { calls.parkingLogisticsWrites.push(['edit-assessment', input]); return true; },
      deleteAssessmentField: async (input) => { calls.parkingLogisticsWrites.push(['delete-assessment', input]); return true; },
      createDamageType: async (input) => { calls.parkingLogisticsWrites.push(['damage', input]); return { id: 81 }; },
      updateDamageType: async (input) => { calls.parkingLogisticsWrites.push(['edit-damage', input]); return true; },
      deleteDamageType: async (input) => { calls.parkingLogisticsWrites.push(['delete-damage', input]); return { deleted: true }; }
    },
    parkingRealtime: {
      issue: (siteId, accountId) => `ticket:${siteId}:${accountId}`,
      publish: (siteId) => calls.parkingPublished.push(siteId)
    },
    parkingSync: { markDirty: (siteId) => calls.parkingSyncMarked.push(String(siteId)) }
  }, { record: (entry) => loggedErrors.push(entry) });
  const token = app.jwt.sign(user, {
    issuer: jwtConfig.issuer,
    audience: jwtConfig.audience,
    expiresIn: 300
  });
  return { app, token, calls, loggedErrors };
}

test('auth profile exposes the owner-admin marker for language-switch visibility', async (t) => {
  const { app, token } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    profile: {
      id: '1', username: 'owner', display_name: 'Owner', is_owner_admin: 1,
      site_id: '1', site_code: 'HQ', site_name: 'Headquarters',
      site_type: 'headquarters', status: 'active', site_status: 'active'
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/auth/me',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().isAdmin, true);
});

test('auth profile does not grant the owner-admin marker to regular accounts', async (t) => {
  const { app, token } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: [],
    profile: {
      id: '14', username: 'staff', display_name: 'Staff', is_owner_admin: 0,
      site_id: '2', site_code: 'TOKYO', site_name: 'Tokyo',
      site_type: 'direct', status: 'active', site_status: 'active'
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/auth/me',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().isAdmin, false);
});

test('only the owner admin can switch to a site account and the issued token is site-scoped', async (t) => {
  const storeAccount = {
    id: '14', username: 'tokyo', display_name: 'Tokyo', is_owner_admin: 0,
    site_id: '2', site_code: 'TOKYO', site_name: 'Tokyo', site_type: 'direct',
    status: 'active', site_status: 'active'
  };
  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters',
    permissions: ['accounts:write', 'vehicles:read', 'vehicles:write'],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    },
    siteAccount: storeAccount,
    accounts: { '14': storeAccount },
    accountPermissions: { '14': ['vehicles:read'] }
  });
  t.after(() => owner.app.close());

  const headers = { authorization: `Bearer ${owner.token}` };
  const switched = await owner.app.inject({
    method: 'POST', url: '/api/v1/auth/switch-site', headers,
    payload: { siteId: '2' }
  });
  assert.equal(switched.statusCode, 200);
  assert.equal(switched.json().refreshToken, undefined);
  assert.match(switched.headers['set-cookie'], /guts_erp_site_refresh=S{43}; HttpOnly; SameSite=Strict/);
  const storeHeaders = { authorization: `Bearer ${switched.json().accessToken}` };
  const profile = await owner.app.inject({
    method: 'GET', url: '/api/v1/auth/me', headers: storeHeaders
  });
  assert.equal(profile.statusCode, 200);
  assert.equal(profile.json().isAdmin, false);
  assert.deepEqual(profile.json().permissions, ['vehicles:read']);

  const vehicles = await owner.app.inject({
    method: 'GET', url: '/api/v1/vehicles?siteId=99', headers: storeHeaders
  });
  assert.equal(vehicles.statusCode, 200);
  assert.equal(owner.calls.vehicleList.siteId, '2');

  const accounts = await owner.app.inject({
    method: 'GET', url: '/api/v1/accounts', headers: storeHeaders
  });
  assert.equal(accounts.statusCode, 403);

  const regular = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: [],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'direct'
    },
    siteAccount: storeAccount
  });
  t.after(() => regular.app.close());
  const denied = await regular.app.inject({
    method: 'POST', url: '/api/v1/auth/switch-site',
    headers: { authorization: `Bearer ${regular.token}` },
    payload: { siteId: '2' }
  });
  assert.equal(denied.statusCode, 403);
});

test('owner admin can switch to the exact active account with only that account scope', async (t) => {
  const storeAccount = {
    id: '22', username: 'store-operator', display_name: 'Store Operator', is_owner_admin: 0,
    site_id: '2', site_code: 'TOKYO', site_name: 'Tokyo', site_type: 'direct',
    status: 'active', site_status: 'active'
  };
  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['accounts:write'],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    },
    accounts: { '22': storeAccount },
    accountPermissions: { '22': ['reservations:read'] }
  });
  t.after(() => owner.app.close());

  const response = await owner.app.inject({
    method: 'POST',
    url: '/api/v1/auth/switch-account',
    headers: { authorization: `Bearer ${owner.token}` },
    payload: { accountId: '22' }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(owner.calls.switchedAccountId, '22');
  const claims = owner.app.jwt.verify(response.json().accessToken);
  assert.equal(claims.sub, '22');
  assert.equal(claims.siteId, '2');
  assert.deepEqual(claims.permissions, ['reservations:read']);
  assert.equal(response.json().refreshToken, undefined);
  assert.match(response.headers['set-cookie'], /guts_erp_site_refresh=S{43}; HttpOnly/);

  const regular = await makeApp({
    sub: '22', siteId: '2', siteType: 'direct', permissions: [],
    profile: { ...storeAccount, id: '22', site_id: '2' },
    accounts: { '22': storeAccount }
  });
  t.after(() => regular.app.close());
  const denied = await regular.app.inject({
    method: 'POST', url: '/api/v1/auth/switch-account',
    headers: { authorization: `Bearer ${regular.token}` },
    payload: { accountId: '22' }
  });
  assert.equal(denied.statusCode, 403);
});

test('site details expose scoped contact, account, and vehicle summaries', async (t) => {
  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['sites:read'],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    }
  });
  t.after(() => owner.app.close());

  const detail = await owner.app.inject({
    method: 'GET', url: '/api/v1/sites/2',
    headers: { authorization: `Bearer ${owner.token}` }
  });
  assert.equal(detail.statusCode, 200);
  assert.deepEqual(detail.json().vehicle_counts.classes, [{ name: 'Class 2', count: 3 }]);
  assert.equal(detail.json().id, '2');

  const store = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['sites:read'],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'direct'
    }
  });
  t.after(() => store.app.close());
  const ownSite = await store.app.inject({
    method: 'GET', url: '/api/v1/sites/2',
    headers: { authorization: `Bearer ${store.token}` }
  });
  assert.equal(ownSite.statusCode, 200);
  assert.equal(ownSite.json().account_count, undefined);
  assert.equal(ownSite.json().has_active_account, undefined);
  const crossSite = await store.app.inject({
    method: 'GET', url: '/api/v1/sites/3',
    headers: { authorization: `Bearer ${store.token}` }
  });
  assert.equal(crossSite.statusCode, 404);
});

test('only owner admin can deactivate or restore non-headquarters sites', async (t) => {
  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    }
  });
  t.after(() => owner.app.close());
  const headers = { authorization: `Bearer ${owner.token}` };
  const stopped = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/sites/2', headers, payload: { status: 'inactive' }
  });
  assert.equal(stopped.statusCode, 200);
  assert.deepEqual(owner.calls.siteStatusUpdate, { id: '2', status: 'inactive' });

  const restored = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/sites/2', headers, payload: { status: 'active' }
  });
  assert.equal(restored.statusCode, 200);
  assert.deepEqual(owner.calls.siteStatusUpdate, { id: '2', status: 'active' });

  const headquarters = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/sites/1', headers, payload: { status: 'inactive' }
  });
  assert.equal(headquarters.statusCode, 404);

  const regular = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['sites:write'],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'direct'
    }
  });
  t.after(() => regular.app.close());
  const denied = await regular.app.inject({
    method: 'PATCH', url: '/api/v1/sites/2',
    headers: { authorization: `Bearer ${regular.token}` }, payload: { status: 'inactive' }
  });
  assert.equal(denied.statusCode, 403);
});

test('site creation saves optional address and phone under the owner admin', async (t) => {
  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['sites:write'],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    }
  });
  t.after(() => owner.app.close());
  const response = await owner.app.inject({
    method: 'POST', url: '/api/v1/sites',
    headers: { authorization: `Bearer ${owner.token}` },
    payload: {
      code: 'TKY-002', name: 'Tokyo North', type: 'direct',
      address: 'Tokyo address', phone: '03-1234-5678'
    }
  });
  assert.equal(response.statusCode, 201);
  assert.deepEqual(owner.calls.createdSite, {
    code: 'TKY-002', name: 'Tokyo North', type: 'direct',
    address: 'Tokyo address', phone: '03-1234-5678'
  });
});

test('only owner admin can update site contact details and can clear them', async (t) => {
  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    }
  });
  t.after(() => owner.app.close());
  const response = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/sites/2/contact',
    headers: { authorization: `Bearer ${owner.token}` },
    payload: { address: '  Tokyo address  ', phone: '  03-1234-5678  ' }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(owner.calls.siteContactUpdate, {
    id: '2', address: 'Tokyo address', phone: '03-1234-5678'
  });
  const cleared = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/sites/2/contact',
    headers: { authorization: `Bearer ${owner.token}` },
    payload: { address: '', phone: '' }
  });
  assert.equal(cleared.statusCode, 200);
  assert.deepEqual(owner.calls.siteContactUpdate, { id: '2', address: null, phone: null });

  const regular = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['sites:write'],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'direct'
    }
  });
  t.after(() => regular.app.close());
  const denied = await regular.app.inject({
    method: 'PATCH', url: '/api/v1/sites/2/contact',
    headers: { authorization: `Bearer ${regular.token}` },
    payload: { address: '', phone: '' }
  });
  assert.equal(denied.statusCode, 403);
});

test('refresh rotates the selected HttpOnly cookie without exposing its token', async (t) => {
  const received = [];
  const { app } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    auth: {
      refresh: async (refreshToken) => {
        received.push(refreshToken);
        return {
          accessToken: 'renewed-access-token',
          refreshToken: 'N'.repeat(43),
          tokenType: 'Bearer',
          expiresIn: 3600
        };
      }
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/auth/refresh',
    headers: { cookie: `guts_erp_refresh=${'O'.repeat(43)}` },
    payload: { context: 'default' }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(received, ['O'.repeat(43)]);
  assert.deepEqual(response.json(), {
    accessToken: 'renewed-access-token', tokenType: 'Bearer', expiresIn: 3600
  });
  assert.match(response.headers['set-cookie'], /guts_erp_refresh=N{43}; HttpOnly; SameSite=Strict/);
  assert.match(response.headers['set-cookie'], /Max-Age=2592000/);
  assert.equal(response.headers['cache-control'], 'no-store');
});

test('login stores refresh credentials only in an HttpOnly cookie', async (t) => {
  const { app, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    auth: {
      login: async () => ({
        accessToken: 'login-access-token',
        refreshToken: 'L'.repeat(43),
        tokenType: 'Bearer',
        expiresIn: 3600,
        account: { id: '1' }
      })
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/auth/login',
    headers: {
      cookie: `guts_erp_refresh=${'A'.repeat(43)}; guts_erp_site_refresh=${'B'.repeat(43)}`
    },
    payload: { username: 'owner', password: 'password' }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().refreshToken, undefined);
  assert.deepEqual(calls.revokedRefreshTokens, ['A'.repeat(43), 'B'.repeat(43)]);
  assert.match(response.headers['set-cookie'], /guts_erp_refresh=L{43}; HttpOnly; SameSite=Strict/);
  assert.equal(response.headers['cache-control'], 'no-store');
});

test('invalid refresh cookie is rejected and cleared', async (t) => {
  const received = [];
  const { app } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    auth: {
      refresh: async (refreshToken) => {
        received.push(refreshToken);
        return null;
      }
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/auth/refresh',
    headers: { cookie: `guts_erp_site_refresh=${'X'.repeat(43)}` },
    payload: { context: 'site' }
  });
  assert.equal(response.statusCode, 401);
  assert.deepEqual(received, ['X'.repeat(43)]);
  assert.match(response.headers['set-cookie'], /guts_erp_site_refresh=; HttpOnly; SameSite=Strict; Path=\/api\/v1\/auth; Max-Age=0/);
});

test('logout revokes both refresh sessions and clears both cookies', async (t) => {
  const { app, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: []
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/auth/logout',
    headers: {
      cookie: `guts_erp_refresh=${'A'.repeat(43)}; guts_erp_site_refresh=${'B'.repeat(43)}`
    }
  });
  assert.equal(response.statusCode, 204);
  assert.deepEqual(calls.revokedRefreshTokens, ['A'.repeat(43), 'B'.repeat(43)]);
  assert.equal(response.headers['set-cookie'].length, 2);
  assert.ok(response.headers['set-cookie'].every((cookie) =>
    cookie.includes('HttpOnly') && cookie.includes('Max-Age=0')));
});

test('store users cannot query vehicles outside their own site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'direct',
    permissions: ['vehicles:read']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/vehicles?siteId=99&search=Toyota',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(calls.vehicleList.siteId, '2');
  assert.equal(calls.vehicleList.search, 'Toyota');
});

test('store users receive ERP-issued vehicle IDs and cannot assign another site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'franchise',
    permissions: ['vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/vehicles',
    headers: { authorization: `Bearer ${token}` },
    payload: {
      registrationNumber: '品川500あ1234',
      make: 'Toyota',
      model: 'Aqua',
      siteId: '99'
    }
  });
  assert.equal(response.statusCode, 201);
  assert.equal(calls.createdVehicle.siteId, '2');
  assert.match(calls.createdVehicle.id, /^[0-9a-f-]{36}$/);
});

test('vehicles created without manufacturer data remain editable', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['vehicles:write']
  });
  t.after(() => app.close());

  const vehicleId = '11111111-2222-4333-8444-555555555555';
  const response = await app.inject({
    method: 'PATCH', url: `/api/v1/vehicles/${vehicleId}`,
    headers: { authorization: `Bearer ${token}` },
    payload: {
      registrationNumber: '品川500あ1234', vin: null, make: '', model: '',
      modelYear: null, inspectionExpiryDate: '2027-03-31',
      statutoryInspectionDate: '2026-10-16', siteId: '2', status: 'available'
    }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(calls.updatedVehicle.id, vehicleId);
  assert.equal(calls.updatedVehicle.fields.make, '');
  assert.equal(calls.updatedVehicle.fields.model, '');
  assert.equal(calls.updatedVehicle.fields.inspectionExpiryDate, '2027-03-31');
  assert.equal(calls.updatedVehicle.fields.statutoryInspectionDate, '2026-10-16');
});

test('vehicle inspection dates reject impossible calendar dates', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST', url: '/api/v1/vehicles',
    headers: { authorization: `Bearer ${token}` },
    payload: { registrationNumber: '品川500あ1234', inspectionExpiryDate: '2026-02-30' }
  });
  assert.equal(response.statusCode, 422);
  assert.equal(calls.createdVehicle, null);
  const outOfRange = await app.inject({
    method: 'POST', url: '/api/v1/vehicles',
    headers: { authorization: ['Bearer', token].join(' ') },
    payload: { registrationNumber: '品川500あ1234', inspectionExpiryDate: '0999-12-31' }
  });
  assert.equal(outOfRange.statusCode, 422);
  assert.equal(calls.createdVehicle, null);
});

test('headquarters vehicle creation defaults to the administrator home site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST', url: '/api/v1/vehicles',
    headers: { authorization: `Bearer ${token}` },
    payload: { registrationNumber: '品川500あ1234', make: 'Toyota', model: 'Aqua' }
  });
  assert.equal(response.statusCode, 201);
  assert.equal(calls.createdVehicle.siteId, '1');
  assert.deepEqual(calls.parkingSyncMarked, ['1']);
});

test('parking class selection creates the ERP vehicle and scopes its parking link to the selected site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1',
    siteId: '1',
    siteType: 'headquarters',
    permissions: ['vehicles:write', 'parking:read', 'parking:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/vehicles',
    headers: { authorization: ['Bearer', token].join(' ') },
    payload: {
      registrationNumber: '品川500あ1234',
      siteId: '2',
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
    }
  });
  assert.equal(response.statusCode, 201);
  assert.equal(calls.createdVehicle.siteId, '2');
  assert.equal(calls.createdVehicle.make, '');
  assert.equal(calls.createdVehicle.model, '');
  assert.equal(calls.createdVehicle.inspectionExpiryDate, '2027-03-31');
  assert.equal(calls.createdVehicle.statutoryInspectionDate, '2026-10-16');
  assert.deepEqual(calls.parkingSyncMarked, ['2']);
  assert.equal(calls.createdVehicle.parkingClass, 'A-1');
  assert.equal(calls.createdVehicle.parkingLotId, 3);
  assert.deepEqual(calls.createdVehicle.parkingStatusIds, [4]);
  assert.deepEqual(calls.createdVehicle.parkingAssessmentValues, { '31': '5' });
  assert.deepEqual(calls.createdVehicle.parkingInspectionMarks, [
    { id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }
  ]);
  assert.deepEqual(calls.parkingPublished, ['2']);
});

test('parking-backed vehicle creation requires parking:write', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'direct',
    permissions: ['vehicles:write', 'parking:read']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/vehicles',
    headers: { authorization: ['Bearer', token].join(' ') },
    payload: {
      registrationNumber: '品川500あ1234',
      make: 'Toyota',
      model: 'Aqua',
      parkingClass: 'A-1'
    }
  });
  assert.equal(response.statusCode, 403);
  assert.equal(calls.createdVehicle, null);
});

test('store users cannot manage accounts even if a token has the permission claim', async (t) => {
  const { app, token } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'franchise',
    permissions: ['accounts:write'],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'franchise'
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/accounts',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 403);
  assert.deepEqual(response.json(), { error: 'forbidden' });
});

test('only the owner-admin can manage store login accounts and permissions', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    },
    listedAccounts: [{
      id: '1', username: 'admin', is_owner_admin: 1, site_name: 'Headquarters'
    }]
  });
  t.after(() => app.close());

  const headers = { authorization: ['Bearer', token].join(' ') };
  const list = await app.inject({ method: 'GET', url: '/api/v1/accounts', headers });
  assert.equal(list.statusCode, 200);
  assert.equal(list.json().items[0].is_owner_admin, 1);
  assert.equal(calls.accountListFilters[0].siteId, undefined);
  const create = await app.inject({
    method: 'POST', url: '/api/v1/accounts', headers,
    payload: {
      siteId: '2', username: 'shop-login', password: 'long-enough-password',
      permissions: ['reservations:read']
    }
  });
  assert.equal(create.statusCode, 201);
  assert.equal(calls.createdAccount.displayName, 'Shop');
  assert.equal(calls.createdAccount.siteId, '2');

  const permissions = await app.inject({
    method: 'GET', url: '/api/v1/permissions', headers
  });
  assert.equal(permissions.statusCode, 200);

  const resetPassword = await app.inject({
    method: 'PATCH', url: '/api/v1/accounts/1/password', headers,
    payload: { password: 'new secure password 2026' }
  });
  assert.equal(resetPassword.statusCode, 200);
  assert.equal(calls.updatedAccount.id, '1');
  assert.match(calls.updatedAccount.fields.passwordHash, /^\$2[aby]\$/);
  assert.equal(calls.updatedAccount.siteScope, undefined);
});

test('only owner admin can reset passwords, and reset endpoint never changes other account fields', async (t) => {
  const regular = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: [],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'direct'
    }
  });
  t.after(() => regular.app.close());
  const denied = await regular.app.inject({
    method: 'PATCH', url: '/api/v1/accounts/1/password',
    headers: { authorization: `Bearer ${regular.token}` },
    payload: { password: 'new secure password 2026' }
  });
  assert.equal(denied.statusCode, 403);

  const owner = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    profile: {
      id: '1', is_owner_admin: 1, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    }
  });
  t.after(() => owner.app.close());
  const tooShort = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/accounts/1/password',
    headers: { authorization: `Bearer ${owner.token}` },
    payload: { password: 'short' }
  });
  const extraProperty = await owner.app.inject({
    method: 'PATCH', url: '/api/v1/accounts/1/password',
    headers: { authorization: `Bearer ${owner.token}` },
    payload: { password: 'new secure password 2026', status: 'disabled' }
  });
  assert.equal(tooShort.statusCode, 400);
  assert.equal(extraProperty.statusCode, 200);
  assert.equal(owner.calls.updatedAccount.fields.status, undefined);
  assert.ok(owner.calls.updatedAccount.fields.passwordHash);
});

test('store accounts manage employee names only within their own site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: [],
    profile: {
      id: '14', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '2', site_type: 'direct'
    }
  });
  t.after(() => app.close());

  const headers = { authorization: ['Bearer', token].join(' ') };
  const list = await app.inject({
    method: 'GET', url: '/api/v1/employees?siteId=99&includeDisabled=true', headers
  });
  assert.equal(list.statusCode, 200);
  assert.equal(calls.employeeList.siteId, '2');
  assert.equal(calls.employeeList.includeDisabled, true);

  const create = await app.inject({
    method: 'POST', url: '/api/v1/employees', headers,
    payload: { siteId: '99', name: 'Staff A' }
  });
  assert.equal(create.statusCode, 201);
  assert.deepEqual(calls.createdEmployee, { siteId: '2', name: 'Staff A' });

  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/employees/8', headers,
    payload: { siteId: '99', name: 'Staff B' }
  });
  assert.equal(update.statusCode, 200);
  assert.deepEqual(calls.updatedEmployee, { id: '8', siteId: '2', name: 'Staff B' });
});

test('headquarters accounts without the owner marker cannot manage employee names', async (t) => {
  const { app, token } = await makeApp({
    sub: '2', siteId: '1', siteType: 'headquarters', permissions: ['accounts:write'],
    profile: {
      id: '2', is_owner_admin: 0, status: 'active', site_status: 'active',
      site_id: '1', site_type: 'headquarters'
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET', url: '/api/v1/employees?siteId=2',
    headers: { authorization: ['Bearer', token].join(' ') }
  });
  assert.equal(response.statusCode, 403);
});

test('reservation endpoints scope reception staff to their own site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'direct',
    permissions: ['reservations:read', 'reservations:write']
  });
  t.after(() => app.close());

  const headers = { authorization: ["Bearer", token].join(" ") };
  const list = await app.inject({
    method: 'GET', url: '/api/v1/reservations?siteId=99&search=Guest', headers
  });
  assert.equal(list.statusCode, 200);
  assert.equal(calls.reservationList.siteId, '2');
  assert.equal(calls.reservationList.search, 'Guest');

  const create = await app.inject({
    method: 'POST', url: '/api/v1/reservations', headers,
    payload: {
      guestName: 'Guest', guestPhone: '+81-90-1234-5678',
      startAt: '2026-11-01T09:00:00.000Z', endAt: '2026-11-02T09:00:00.000Z',
      vehicleId: '6a2b2f73-9ca4-4ed0-9b53-1ab25e2f3b55', siteId: '99'
    }
  });
  assert.equal(create.statusCode, 201);
  assert.equal(calls.createdReservation.siteId, '2');
  assert.equal(calls.createdReservation.createdBy, '14');
  assert.equal(calls.createdReservation.startAt, '2026-11-01 09:00:00.000');
  assert.deepEqual(calls.parkingSyncMarked, ['2']);

  const transition = await app.inject({
    method: 'PATCH', url: '/api/v1/reservations/23', headers,
    payload: { status: 'checked_in', employeeId: '8' }
  });
  assert.equal(transition.statusCode, 200);
  assert.equal(calls.transitionedReservation.siteId, '2');
  assert.equal(calls.transitionedReservation.employeeId, '8');
  assert.deepEqual(calls.parkingSyncMarked, ['2', '2']);

  const missingEmployee = await app.inject({
    method: 'PATCH', url: '/api/v1/reservations/23', headers,
    payload: { status: 'completed' }
  });
  assert.equal(missingEmployee.statusCode, 400);
  assert.deepEqual(missingEmployee.json(), { error: 'employee_required' });

  const dashboard = await app.inject({
    method: 'GET', url: '/api/v1/dashboard/stats', headers
  });
  assert.equal(dashboard.statusCode, 200);
  assert.equal(calls.dashboardSiteScope, '2');
});

test('headquarters reservation creation defaults to the administrator home site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['reservations:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST', url: '/api/v1/reservations',
    headers: { authorization: `Bearer ${token}` },
    payload: {
      guestName: 'Guest', guestPhone: '+81-90-1234-5678',
      startAt: '2026-11-01T09:00:00.000Z', endAt: '2026-11-02T09:00:00.000Z',
      vehicleId: '6a2b2f73-9ca4-4ed0-9b53-1ab25e2f3b55'
    }
  });
  assert.equal(response.statusCode, 201);
  assert.equal(calls.createdReservation.siteId, '1');
  assert.equal(calls.createdReservation.createdBy, '1');
  assert.deepEqual(calls.parkingSyncMarked, ['1']);
});

test('parking sync requires headquarters vehicle read and write permissions', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters',
    permissions: ['vehicles:read', 'vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/vehicles:sync',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { created: 1, updated: 0, synced: 1 });
  assert.deepEqual(calls.parkingSyncVehicles, [
    {
      id: 'vehicle-uuid', registration_number: '\u54c1\u5ddd500\u30421234',
      make: 'Toyota', model: 'Aqua', site_id: '2'
    }
  ]);
});

test('parking bootstrap requires parking:read and scopes to the signed-in ERP site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'GET', url: '/api/v1/parking/bootstrap',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { parking_lots: [], vehicles: [] });
  assert.equal(calls.parkingBootstrapSiteScope, '2');
});

test('parking bootstrap rejects accounts without parking:read', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['vehicles:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'GET', url: '/api/v1/parking/bootstrap',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 403);
  assert.equal(calls.parkingBootstrapSiteScope, null);
});

test('parking vehicle catalog uses selected ERP site only for headquarters accounts', async (t) => {
  const headquarters = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['parking:read']
  });
  t.after(() => headquarters.app.close());
  const homeCatalog = await headquarters.app.inject({
    method: 'GET', url: '/api/v1/parking/vehicle-catalog',
    headers: { authorization: ['Bearer', headquarters.token].join(' ') }
  });
  assert.equal(homeCatalog.statusCode, 200);
  assert.equal(headquarters.calls.parkingVehicleCatalogSiteScope, '1');
  const headquartersResponse = await headquarters.app.inject({
    method: 'GET', url: '/api/v1/parking/vehicle-catalog?siteId=2',
    headers: { authorization: ['Bearer', headquarters.token].join(' ') }
  });
  assert.equal(headquartersResponse.statusCode, 200);
  assert.equal(headquarters.calls.parkingVehicleCatalogSiteScope, '2');

  const store = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => store.app.close());
  const storeResponse = await store.app.inject({
    method: 'GET', url: '/api/v1/parking/vehicle-catalog?siteId=99',
    headers: { authorization: ['Bearer', store.token].join(' ') }
  });
  assert.equal(storeResponse.statusCode, 200);
  assert.equal(store.calls.parkingVehicleCatalogSiteScope, '2');
});

test('legacy parking login handoff is no longer exposed', async (t) => {
  const { app, token } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['vehicles:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/session',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 404);
});

test('parking sync denies users missing either vehicle permission', async () => {
  for (const permissions of [['vehicles:read'], ['vehicles:write']]) {
    const { app, token } = await makeApp({
      sub: '1', siteId: '1', siteType: 'headquarters', permissions
    });
    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/parking/vehicles:sync',
      headers: { authorization: 'Bearer ' + token }
    });
    assert.equal(response.statusCode, 403);
    await app.close();
  }
});

test('only headquarters users may trigger fleet-wide parking sync', async (t) => {
  const { app, token } = await makeApp({
    sub: '2', siteId: '2', siteType: 'direct',
    permissions: ['vehicles:read', 'vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/parking/vehicles:sync',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 403);
});

test('parking vehicle synchronization rejects ERP site mapping conflicts', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters',
    permissions: ['vehicles:read', 'vehicles:write']
  });
  t.after(() => app.close());
  calls.parkingSyncError = Object.assign(new Error('site mapping mismatch'), {
    code: 'PARKING_SITE_MAPPING_CONFLICT'
  });

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/parking/vehicles:sync',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 409);
  assert.deepEqual(response.json(), { error: 'site_mapping_conflict' });
});

test('ERP-authenticated parking update passes only the signed-in site to the repository', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/vehicles/101',
    headers: { authorization: 'Bearer ' + token },
    payload: {
      parking_lot_id: 11, position_x: 0.25, position_y: 0.75, status_ids: [21],
      unwashed: true, no_fuel: false, needs_repair: true, options: ['ETC'], notes: 'check',
      assessment_values: { '31': '5' },
      inspection_marks: [{ id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }]
    }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(calls.parkingUpdate, {
    siteId: '2', vehicleId: '101', parkingLotId: 11,
    positionX: 0.25, positionY: 0.75, statusIds: [21],
    unwashed: true, noFuel: false, needsRepair: true, options: ['ETC'], notes: 'check',
    assessmentValues: { '31': '5' },
    inspectionMarks: [{ id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }]
  });
  assert.deepEqual(calls.parkingPublished, ['2']);
});

test('parking write endpoint rejects write-less tokens and invalid positions', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());

  const forbidden = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/vehicles/101',
    headers: { authorization: 'Bearer ' + token },
    payload: { position_x: 0.5, position_y: 0.5 }
  });
  assert.equal(forbidden.statusCode, 403);
  const invalid = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/vehicles/101',
    headers: { authorization: 'Bearer ' + token },
    payload: { position_x: 1.5, position_y: 0.5 }
  });
  assert.equal(invalid.statusCode, 400);
  assert.equal(calls.parkingUpdate, null);
});

test('parking jobs create, complete, and delete under ERP permissions and site scope', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const create = await app.inject({
    method: 'POST', url: '/api/v1/parking/jobs', headers,
    payload: {
      vehicle_id: 101, destination_lot_id: 11, scheduled_at: '2026-10-15T10:30'
    }
  });
  assert.equal(create.statusCode, 201);
  assert.deepEqual(calls.parkingJobCreate, {
    siteId: '2', vehicleId: 101, destinationLotId: 11, scheduledAt: '2026-10-15 10:30'
  });

  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/jobs/501', headers,
    payload: { completed: true }
  });
  assert.equal(update.statusCode, 200);
  assert.deepEqual(calls.parkingJobUpdate, { siteId: '2', jobId: '501', completed: true });

  const remove = await app.inject({
    method: 'DELETE', url: '/api/v1/parking/jobs/501', headers
  });
  assert.equal(remove.statusCode, 204);
  assert.deepEqual(calls.parkingJobDelete, { siteId: '2', jobId: '501' });
  assert.deepEqual(calls.parkingPublished, ['2', '2', '2']);
});

test('parking job routes require write access and reject invalid schedule times', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const forbidden = await app.inject({
    method: 'POST', url: '/api/v1/parking/jobs', headers,
    payload: { vehicle_id: 101, destination_lot_id: 11, scheduled_at: '2026-10-15T10:30' }
  });
  assert.equal(forbidden.statusCode, 403);
  assert.equal(calls.parkingJobCreate, null);

  const writer = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => writer.app.close());
  const invalid = await writer.app.inject({
    method: 'POST', url: '/api/v1/parking/jobs',
    headers: { authorization: 'Bearer ' + writer.token },
    payload: { vehicle_id: 101, destination_lot_id: 11, scheduled_at: 'not-a-date' }
  });
  assert.equal(invalid.statusCode, 422);
});

test('parking websocket ticket is short-lived and requires parking read permission', async (t) => {
  const { app, token } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/ws-ticket',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().ticket, 'ticket:2:14');
  assert.equal(response.headers['cache-control'], 'no-store');
});

test('parking area admin routes apply ERP site scope for create, update, order, and delete', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:admin']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const create = await app.inject({
    method: 'POST', url: '/api/v1/parking/lots', headers,
    payload: { name: '  北側  ', navigation_url: '' }
  });
  assert.equal(create.statusCode, 201);
  assert.deepEqual(calls.parkingLotCreate, { siteId: '2', name: '北側', navigationUrl: '' });

  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/lots/11', headers,
    payload: { is_active: false }
  });
  assert.equal(update.statusCode, 200);
  assert.deepEqual(calls.parkingLotUpdate, {
    siteId: '2', lotId: '11', fields: { is_active: false }
  });

  const order = await app.inject({
    method: 'PUT', url: '/api/v1/parking/lots/order', headers, payload: { ids: [11, 12] }
  });
  assert.equal(order.statusCode, 204);
  assert.deepEqual(calls.parkingLotOrder, { siteId: '2', ids: [11, 12] });

  const remove = await app.inject({
    method: 'DELETE', url: '/api/v1/parking/lots/12', headers
  });
  assert.equal(remove.statusCode, 204);
  assert.deepEqual(calls.parkingLotDelete, { siteId: '2', lotId: '12' });
});

test('parking area admin routes require parking:admin and validate safe map URLs', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/lots',
    headers: { authorization: 'Bearer ' + token },
    payload: { name: 'Lot', navigation_url: 'javascript:alert(1)' }
  });
  assert.equal(response.statusCode, 403);
  assert.equal(calls.parkingLotCreate, null);

  const admin = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:admin']
  });
  t.after(() => admin.app.close());
  const invalidUrl = await admin.app.inject({
    method: 'POST', url: '/api/v1/parking/lots',
    headers: { authorization: 'Bearer ' + admin.token },
    payload: { name: 'Lot', navigation_url: 'javascript:alert(1)' }
  });
  assert.equal(invalidUrl.statusCode, 422);
  assert.equal(admin.calls.parkingLotCreate, null);
});

test('parking class catalog writes require parking:admin rather than parking:write', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const create = await app.inject({
    method: 'POST', url: '/api/v1/parking/classes', headers,
    payload: { name: 'A-2', color: '#4f86f7' }
  });
  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/classes/41', headers,
    payload: { name: 'A-3', color: '#ff0000' }
  });
  const statusUpdate = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/statuses/31', headers,
    payload: { name: '整備待ち', icon: '🔧' }
  });
  const optionUpdate = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/options/51', headers,
    payload: { name: 'ETC車載器' }
  });
  assert.equal(create.statusCode, 403);
  assert.equal(update.statusCode, 403);
  assert.equal(statusUpdate.statusCode, 403);
  assert.equal(optionUpdate.statusCode, 403);
  assert.deepEqual(calls.parkingCatalogWrites, []);
});

test('parking status, class, and option catalogs share ERP parking admin permission', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:admin']
  });

  test('parking store, distance, assessment, and damage configuration uses ERP admin scope', async (t) => {
    const { app, token, calls } = await makeApp({
      sub: '19', siteId: '8', siteType: 'headquarters',
      permissions: ['parking:read', 'parking:admin']
    });
    t.after(() => app.close());
    const headers = { authorization: `Bearer ${token}` };
    const createStore = await app.inject({
      method: 'POST', url: '/api/v1/parking/stores', headers, payload: { name: 'Central' }
    });
    assert.equal(createStore.statusCode, 201);
    const updateStore = await app.inject({
      method: 'PATCH', url: '/api/v1/parking/stores/61', headers,
      payload: { navigation_url: 'https://www.google.com/maps/@35.6812,139.7671,17z' }
    });
    assert.equal(updateStore.statusCode, 204);
    const lotDistances = await app.inject({
      method: 'PUT', url: '/api/v1/parking/lot-distances', headers,
      payload: { entries: [{ from_lot_id: 1, to_lot_id: 2, minutes: 10, km: 2.5 }] }
    });
    assert.equal(lotDistances.statusCode, 200);
    const storeDistances = await app.inject({
      method: 'PUT', url: '/api/v1/parking/store-distances', headers,
      payload: { entries: [{ store_id: 3, lot_id: 1, minutes: 5, km: null }] }
    });
    assert.equal(storeDistances.statusCode, 200);
    const assessment = await app.inject({
      method: 'POST', url: '/api/v1/parking/assessment-fields', headers,
      payload: { name: 'Seat condition', field_type: 'rating', suffix: 'pt' }
    });
    assert.equal(assessment.statusCode, 201);
    const damage = await app.inject({
      method: 'POST', url: '/api/v1/parking/damage-types', headers,
      payload: { name: 'Dent', icon: 'D', color: '#aa2211' }
    });
    assert.equal(damage.statusCode, 201);
    assert.deepEqual(calls.parkingLogisticsWrites, [
      ['store', { siteId: '8', name: 'Central', navigationUrl: '' }],
      ['store-location', {
        siteId: '8', storeId: '61', navigationUrl: 'https://www.google.com/maps/@35.6812,139.7671,17z'
      }],
      ['lot-distances', { siteId: '8', entries: [{ from_lot_id: 1, to_lot_id: 2, minutes: 10, km: 2.5 }] }],
      ['store-distances', { siteId: '8', entries: [{ store_id: 3, lot_id: 1, minutes: 5, km: null }] }],
      ['assessment', { siteId: '8', name: 'Seat condition', fieldType: 'rating', suffix: 'pt' }],
      ['damage', { siteId: '8', name: 'Dent', icon: 'D', color: '#aa2211' }]
    ]);
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const status = await app.inject({
    method: 'POST', url: '/api/v1/parking/statuses', headers,
    payload: { name: '清掃待ち', icon: '🫧' }
  });
  const statusUpdate = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/statuses/31', headers,
    payload: { name: '整備待ち', icon: '🔧' }
  });
  const optionUpdate = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/options/51', headers,
    payload: { name: 'ETC車載器' }
  });
  const duplicateOption = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/options/51', headers,
    payload: { name: '禁煙' }
  });
  const vehicleClass = await app.inject({
    method: 'POST', url: '/api/v1/parking/classes', headers,
    payload: { name: 'A-2', color: '#4f86f7' }
  });
  const option = await app.inject({
    method: 'POST', url: '/api/v1/parking/options', headers,
    payload: { name: 'ETC' }
  });
  const classUpdate = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/classes/41', headers,
    payload: { name: 'A-3', color: '#ff0000' }
  });
  assert.equal(status.statusCode, 201);
  assert.equal(statusUpdate.statusCode, 200);
  assert.equal(optionUpdate.statusCode, 200);
  assert.equal(duplicateOption.statusCode, 409);
  assert.equal(vehicleClass.statusCode, 201);
  assert.equal(option.statusCode, 201);
  assert.equal(classUpdate.statusCode, 200);
  assert.deepEqual(calls.parkingCatalogWrites.slice(0, 6), [
    ['status', { siteId: '2', name: '清掃待ち', icon: '🫧' }],
    ['edit-status', { siteId: '2', statusId: '31', name: '整備待ち', icon: '🔧' }],
    ['edit-option', { siteId: '2', optionId: '51', name: 'ETC車載器' }],
    ['class', { siteId: '2', name: 'A-2', color: '#4f86f7' }],
    ['option', { siteId: '2', name: 'ETC' }],
    ['edit-class', { siteId: '2', classId: '41', name: 'A-3', color: '#ff0000' }]
  ]);
});

test('customer endpoints are permission-gated and limited to the signed-in site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['customers:read', 'customers:write']
  });
  t.after(() => app.close());
  const headers = { authorization: `Bearer ${token}` };
  const list = await app.inject({
    method: 'GET', url: '/api/v1/customers?search=Guest&limit=8', headers
  });
  assert.equal(list.statusCode, 200);
  assert.equal(calls.customerList.siteId, '2');
  assert.equal(calls.customerList.search, 'Guest');

  const create = await app.inject({
    method: 'POST', url: '/api/v1/customers', headers,
    payload: { name: 'Guest', phone: '09012345678', address: 'Tokyo' }
  });
  assert.equal(create.statusCode, 201);
  assert.equal(calls.createdCustomer.siteId, '2');
  assert.equal(calls.createdCustomer.address, 'Tokyo');

  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/customers/71', headers,
    payload: { name: 'Guest Updated', phone: '09012345678', workplaceSchool: 'School' }
  });
  assert.equal(update.statusCode, 200);
  assert.equal(calls.updatedCustomer.customerId, '71');
  assert.equal(calls.updatedCustomer.siteId, '2');

  const invalid = await app.inject({
    method: 'POST', url: '/api/v1/customers', headers,
    payload: { name: '   ', phone: '09012345678' }
  });
  assert.equal(invalid.statusCode, 422);

  const forbidden = await makeApp({
    sub: '15', siteId: '2', siteType: 'direct', permissions: []
  });
  t.after(() => forbidden.app.close());
  const denied = await forbidden.app.inject({
    method: 'GET', url: '/api/v1/customers', headers: { authorization: `Bearer ${forbidden.token}` }
  });
  assert.equal(denied.statusCode, 403);
});

test('reservation vehicle search and creation keep the account site scope', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['reservations:read', 'reservations:write']
  });
  t.after(() => app.close());
  const headers = { authorization: `Bearer ${token}` };
  const catalog = await app.inject({
    method: 'GET', url: '/api/v1/reservations/vehicle-catalog', headers
  });
  assert.equal(catalog.statusCode, 200);
  assert.equal(calls.reservationCatalogSiteScope, '2');

  const available = await app.inject({
    method: 'GET',
    url: '/api/v1/reservations/available-vehicles?startAt=2026-11-01T09%3A00%3A00.000Z&endAt=2026-11-02T09%3A00%3A00.000Z&vehicleClass=A-1&options=%E7%A6%81%E7%85%99',
    headers
  });
  assert.equal(available.statusCode, 200);
  assert.equal(calls.availableVehicleQuery.siteId, '2');
  assert.deepEqual(calls.availableVehicleQuery.options, ['禁煙']);

  const created = await app.inject({
    method: 'POST', url: '/api/v1/reservations', headers,
    payload: {
      siteId: '99', customerId: '71', guestName: 'Guest', guestPhone: '09012345678',
      startAt: '2026-11-01T09:00:00.000Z', endAt: '2026-11-02T09:00:00.000Z',
      vehicleId: 'c9fca125-5f76-4d03-94a0-c5298398d003'
    }
  });
  assert.equal(created.statusCode, 201);
  assert.equal(calls.createdReservation.siteId, '2');
  assert.equal(calls.createdReservation.customerId, '71');
});
