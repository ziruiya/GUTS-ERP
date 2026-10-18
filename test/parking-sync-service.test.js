import test from 'node:test';
import assert from 'node:assert/strict';
import { createParkingSyncService } from '../src/services/parking-sync-service.js';

test('parking sync coalesces site changes and reconciles all sites at startup', async () => {
  const calls = [];
  const errors = [];
  const service = createParkingSyncService({
    vehicles: {
      async listForParkingSync(siteId) {
        calls.push(['list', siteId ?? null]);
        return siteId
          ? [{ id: `vehicle-${siteId}`, site_id: siteId }]
          : [{ id: 'vehicle-3', site_id: '3' }, { id: 'vehicle-8', site_id: '8' }];
      }
    },
    parkingBoard: {
      async syncVehiclesFromERP({ vehicles }) { calls.push(['sync', vehicles[0]?.site_id]); }
    },
    parkingRealtime: { publish: (siteId) => calls.push(['publish', siteId]) },
    errorLogger: { record: (entry) => errors.push(entry) }
  });
  try {
    service.markDirty('3');
    service.markDirty('3');
    await service.flush();
    assert.deepEqual(calls, [
      ['list', '3'], ['sync', '3'], ['publish', '3']
    ]);

    service.start();
    await service.flush();
    assert.deepEqual(calls.slice(3), [
      ['list', null],
      ['list', '3'], ['sync', '3'], ['publish', '3'],
      ['list', '8'], ['sync', '8'], ['publish', '8']
    ]);
    assert.deepEqual(errors, []);
  } finally {
    service.close();
  }
});

test('parking sync logs failures and keeps the site queued for retry', async () => {
  let shouldFail = true;
  const syncSites = [];
  const errors = [];
  const service = createParkingSyncService({
    vehicles: { async listForParkingSync(siteId) { return [{ site_id: siteId }]; } },
    parkingBoard: {
      async syncVehiclesFromERP({ vehicles }) {
        syncSites.push(vehicles[0].site_id);
        if (shouldFail) throw new Error('temporary database outage');
      }
    },
    parkingRealtime: { publish() {} },
    errorLogger: { record: (entry) => errors.push(entry) }
  });
  try {
    service.markDirty('4');
    await service.flush();
    assert.equal(errors.length, 1);
    shouldFail = false;
    await service.flush();
    assert.deepEqual(syncSites, ['4', '4']);
  } finally {
    service.close();
  }
});
