export function createParkingSyncService({ vehicles, parkingBoard, parkingRealtime, errorLogger }) {
  const pendingSites = new Set();
  const retryCounts = new Map();
  let reconcileAll = false;
  let timer = null;
  let activeFlush = null;
  let closed = false;

  function recordFailure(error, siteId) {
    errorLogger.record({
      method: 'SYNC',
      path: '/api/v1/parking/vehicles:sync',
      code: 'parking_sync_failed',
      message: error.message,
      stack: error.stack,
      siteId
    });
  }

  function schedule(delay = 0) {
    if (closed || timer || activeFlush) return;
    timer = setTimeout(() => {
      timer = null;
      void flush();
    }, delay);
    timer.unref?.();
  }

  function markDirty(siteId) {
    if (siteId === undefined || siteId === null || !/^[1-9]\d*$/.test(String(siteId))) return;
    pendingSites.add(String(siteId));
    schedule();
  }

  function markAllDirty() {
    reconcileAll = true;
    schedule();
  }

  async function flush() {
    if (activeFlush) return activeFlush;
    if (closed) return;
    activeFlush = (async () => {
      let retryDelay = null;
      if (reconcileAll) {
        reconcileAll = false;
        try {
          const allVehicles = await vehicles.listForParkingSync();
          for (const vehicle of allVehicles) pendingSites.add(String(vehicle.site_id));
        } catch (error) {
          reconcileAll = true;
          recordFailure(error);
          retryDelay = 30_000;
        }
      }

      while (pendingSites.size && retryDelay === null && !closed) {
        const [siteId] = pendingSites;
        pendingSites.delete(siteId);
        try {
          const siteVehicles = await vehicles.listForParkingSync(siteId);
          await parkingBoard.syncVehiclesFromERP({ vehicles: siteVehicles });
          if (siteVehicles.length) parkingRealtime.publish(siteId);
          retryCounts.delete(siteId);
        } catch (error) {
          recordFailure(error, siteId);
          pendingSites.add(siteId);
          const retries = (retryCounts.get(siteId) ?? 0) + 1;
          retryCounts.set(siteId, retries);
          retryDelay = Math.min(300_000, 5_000 * (2 ** Math.min(retries - 1, 6)));
        }
      }
      return retryDelay;
    })();

    let retryDelay;
    try {
      retryDelay = await activeFlush;
    } finally {
      activeFlush = null;
    }
    if (reconcileAll || pendingSites.size) schedule(retryDelay ?? 0);
  }

  function start() {
    markAllDirty();
  }

  async function close() {
    closed = true;
    if (timer) clearTimeout(timer);
    timer = null;
    if (activeFlush) await activeFlush;
  }

  return { markDirty, markAllDirty, start, flush, close };
}
