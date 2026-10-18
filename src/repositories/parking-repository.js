function parseJson(value, fallback) {
  if (value === null || value === undefined || value === '') return fallback;
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function numericId(value) {
  const number = Number(value);
  return Number.isSafeInteger(number) ? number : value;
}

function parkingLotFromRow(row) {
  return {
    ...row,
    id: numericId(row.id),
    display_order: Number(row.display_order),
    area_height: Number(row.area_height),
    area_width: Number(row.area_width),
    capacity: row.capacity === null ? null : numericId(row.capacity),
    is_active: Boolean(row.is_active),
    markings: parseJson(row.markings, []),
    class_priority: parseJson(row.class_priority, [])
  };
}

function googleMapsCoordinates(value) {
  if (typeof value !== 'string' || !value) return null;
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // Keep the original URL when it contains malformed escapes.
  }
  const patterns = [
    /@(-?\d{1,2}(?:\.\d+)?),\s*(-?\d{1,3}(?:\.\d+)?)/,
    /!3d(-?\d{1,2}(?:\.\d+)?)!4d(-?\d{1,3}(?:\.\d+)?)/,
    /(?:[?&](?:q|query|destination|daddr)=)(-?\d{1,2}(?:\.\d+)?),\s*(-?\d{1,3}(?:\.\d+)?)/
  ];
  for (const pattern of patterns) {
    const match = decoded.match(pattern);
    if (!match) continue;
    const latitude = Number(match[1]);
    const longitude = Number(match[2]);
    if (latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180) {
      return { latitude, longitude };
    }
  }
  return null;
}

function straightLineDistanceKm(first, second) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const latitudeDelta = radians(second.latitude - first.latitude);
  const longitudeDelta = radians(second.longitude - first.longitude);
  const haversine = Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(radians(first.latitude)) * Math.cos(radians(second.latitude)) *
    Math.sin(longitudeDelta / 2) ** 2;
  return Math.round(6371.0088 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine)) * 1000) / 1000;
}

const parkingPositionGrid = Array.from({ length: 32 }, (_, index) => [
  [0.125, 0.375, 0.625, 0.875][index % 4],
  [0.0625, 0.1875, 0.3125, 0.4375, 0.5625, 0.6875, 0.8125, 0.9375][Math.floor(index / 4)]
]);

export function createParkingRepository(db) {
  async function updateCoordinateDistances(siteId) {
    const [lots, stores] = await Promise.all([
      db.query('SELECT id, navigation_url FROM parking_lots WHERE site_id = ?', [siteId]),
      db.query('SELECT id, navigation_url FROM parking_stores WHERE site_id = ?', [siteId])
    ]);
    return db.transaction(async (tx) => {
      await Promise.all([
        tx.query('DELETE FROM parking_lot_distances WHERE site_id = ? AND km_auto = 1', [siteId]),
        tx.query('DELETE FROM parking_store_lot_distances WHERE site_id = ? AND km_auto = 1', [siteId])
      ]);
      const insertAutoDistances = async (table, columns, rows) => {
        for (let index = 0; index < rows.length; index += 500) {
          const batch = rows.slice(index, index + 500);
          const rowValues = batch.map(() => '(?, ?, ?, NULL, ?, 1)').join(', ');
          await tx.query(
            `INSERT INTO ${table} (${columns}, minutes, km, km_auto)
             VALUES ${rowValues}
             ON DUPLICATE KEY UPDATE km = IF(km_auto = 1, VALUES(km), km),
               km_auto = IF(km_auto = 1, 1, km_auto)`,
            batch.flat()
          );
        }
      };
      const lotCoordinates = lots.map((lot) => ({
        id: lot.id, coordinates: googleMapsCoordinates(lot.navigation_url)
      })).filter((lot) => lot.coordinates);
      const lotDistances = [];
      for (const from of lotCoordinates) {
        for (const to of lotCoordinates) {
          if (String(from.id) === String(to.id)) continue;
          lotDistances.push([
            siteId, from.id, to.id, straightLineDistanceKm(from.coordinates, to.coordinates)
          ]);
        }
      }
      const storeDistances = [];
      for (const store of stores) {
        const storeCoordinates = googleMapsCoordinates(store.navigation_url);
        if (!storeCoordinates) continue;
        for (const lot of lotCoordinates) {
          storeDistances.push([
            siteId, store.id, lot.id, straightLineDistanceKm(storeCoordinates, lot.coordinates)
          ]);
        }
      }
      await insertAutoDistances('parking_lot_distances', 'site_id, from_lot_id, to_lot_id', lotDistances);
      await insertAutoDistances('parking_store_lot_distances', 'site_id, store_id, lot_id', storeDistances);
    });
  }

  return {
    async nextVehiclePosition({ siteId, parkingLotId }, transaction) {
      if (parkingLotId === undefined || parkingLotId === null) {
        return { positionX: 0.5, positionY: 0.5 };
      }
      const tx = transaction ?? db;
      const lots = await tx.query(
        'SELECT id FROM parking_lots WHERE id = ? AND site_id = ? LIMIT 1 FOR UPDATE',
        [parkingLotId, siteId]
      );
      if (!lots[0]) {
        const error = new Error('Unknown parking location.');
        error.code = 'PARKING_INVALID_REFERENCE';
        throw error;
      }
      const rows = await tx.query(
        `SELECT position_x, position_y FROM parking_vehicles
          WHERE site_id = ? AND parking_lot_id = ? FOR UPDATE`,
        [siteId, parkingLotId]
      );
      const counts = new Map();
      for (const row of rows) {
        const key = `${Number(row.position_x).toFixed(2)},${Number(row.position_y).toFixed(2)}`;
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
      const [positionX, positionY] = parkingPositionGrid.reduce((best, point) => {
        const key = `${point[0].toFixed(2)},${point[1].toFixed(2)}`;
        const bestKey = `${best[0].toFixed(2)},${best[1].toFixed(2)}`;
        return (counts.get(key) ?? 0) < (counts.get(bestKey) ?? 0) ? point : best;
      }, parkingPositionGrid[0]);
      return { positionX, positionY };
    },

    async createLot({ siteId, name, navigationUrl = '' }) {
      const orderRows = await db.query(
        'SELECT COALESCE(MAX(display_order), -1) + 1 AS next_order FROM parking_lots WHERE site_id = ?',
        [siteId]
      );
      const result = await db.query(
        `INSERT INTO parking_lots
          (site_id, name, display_order, area_height, area_width, navigation_url, markings, class_priority)
         VALUES (?, ?, ?, 210, 50, ?, JSON_ARRAY(), JSON_ARRAY())`,
        [siteId, name, orderRows[0].next_order, navigationUrl]
      );
      const rows = await db.query(
        `SELECT id, name, display_order, area_height, area_width, navigation_url,
                markings, capacity, is_active, class_priority
           FROM parking_lots WHERE id = ? AND site_id = ?`,
        [result.insertId, siteId]
      );
      if (navigationUrl) await updateCoordinateDistances(siteId);
      return parkingLotFromRow(rows[0]);
    },

    async updateLot({ siteId, lotId, fields }) {
      const current = await db.query(
        'SELECT id FROM parking_lots WHERE id = ? AND site_id = ? LIMIT 1',
        [lotId, siteId]
      );
      if (!current.length) return null;
      const allowedFields = new Set([
        'name', 'navigation_url', 'area_height', 'area_width',
        'markings', 'capacity', 'is_active', 'class_priority'
      ]);
      const entries = Object.entries(fields);
      if (!entries.length || entries.some(([key]) => !allowedFields.has(key))) {
        const error = new Error('Unsupported parking lot field.');
        error.code = 'PARKING_INVALID_VALUE';
        throw error;
      }
      if (fields.class_priority !== undefined && fields.class_priority.length) {
        const classes = await db.query(
          `SELECT name FROM parking_vehicle_classes
            WHERE site_id = ? AND name IN (${fields.class_priority.map(() => '?').join(', ')})`,
          [siteId, ...fields.class_priority]
        );
        if (classes.length !== fields.class_priority.length) {
          const error = new Error('Unknown vehicle class.');
          error.code = 'PARKING_INVALID_REFERENCE';
          throw error;
        }
      }
      const assignments = entries.map(([key]) =>
        `${key} = ${['markings', 'class_priority'].includes(key) ? 'CAST(? AS JSON)' : '?'}`);
      const values = entries.map(([key, value]) =>
        ['markings', 'class_priority'].includes(key) ? JSON.stringify(value) : value);
      await db.query(
        `UPDATE parking_lots SET ${assignments.join(', ')} WHERE id = ? AND site_id = ?`,
        [...values, lotId, siteId]
      );
      const rows = await db.query(
        `SELECT id, name, display_order, area_height, area_width, navigation_url,
                markings, capacity, is_active, class_priority
           FROM parking_lots WHERE id = ? AND site_id = ? LIMIT 1`,
        [lotId, siteId]
      );
      if (fields.navigation_url !== undefined) await updateCoordinateDistances(siteId);
      return parkingLotFromRow(rows[0]);
    },

    async deleteLot({ siteId, lotId }) {
      return db.transaction(async (tx) => {
        const [lots, vehicles, jobs] = await Promise.all([
          tx.query('SELECT id FROM parking_lots WHERE id = ? AND site_id = ? LIMIT 1', [lotId, siteId]),
          tx.query('SELECT id FROM parking_vehicles WHERE parking_lot_id = ? AND site_id = ? LIMIT 1',
            [lotId, siteId]),
          tx.query('SELECT id FROM parking_jobs WHERE destination_lot_id = ? AND site_id = ? LIMIT 1',
            [lotId, siteId])
        ]);
        if (!lots.length) return { deleted: false, reason: 'not_found' };
        const [count] = await tx.query(
          'SELECT COUNT(*) AS count FROM parking_lots WHERE site_id = ?',
          [siteId]
        );
        if (Number(count.count) <= 1) return { deleted: false, reason: 'last_lot' };
        if (vehicles.length || jobs.length) return { deleted: false, reason: 'in_use' };
        await tx.query('DELETE FROM parking_lots WHERE id = ? AND site_id = ?', [lotId, siteId]);
        const remaining = await tx.query(
          'SELECT id FROM parking_lots WHERE site_id = ? ORDER BY display_order, id',
          [siteId]
        );
        for (let index = 0; index < remaining.length; index += 1) {
          await tx.query(
            'UPDATE parking_lots SET display_order = ? WHERE id = ? AND site_id = ?',
            [index, remaining[index].id, siteId]
          );
        }
        return { deleted: true };
      });
    },

    async orderLots({ siteId, ids }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query('SELECT id FROM parking_lots WHERE site_id = ?', [siteId]);
        if (rows.length !== ids.length ||
            new Set(ids.map(String)).size !== ids.length ||
            rows.some((row) => !ids.map(String).includes(String(row.id)))) {
          const error = new Error('Order must contain every parking lot exactly once.');
          error.code = 'PARKING_INVALID_VALUE';
          throw error;
        }
        for (let index = 0; index < ids.length; index += 1) {
          await tx.query(
            'UPDATE parking_lots SET display_order = ? WHERE id = ? AND site_id = ?',
            [index, ids[index], siteId]
          );
        }
        return true;
      });
    },

    async createStatus({ siteId, name, icon }) {
      const result = await db.query(
        'INSERT INTO parking_vehicle_statuses (site_id, name, icon) VALUES (?, ?, ?)',
        [siteId, name, icon]
      );
      const rows = await db.query(
        'SELECT id, name, icon, `key` FROM parking_vehicle_statuses WHERE id = ? AND site_id = ?',
        [result.insertId, siteId]
      );
      return { ...rows[0], id: numericId(rows[0].id) };
    },

    async updateStatus({ siteId, statusId, name, icon }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id, name, icon FROM parking_vehicle_statuses
            WHERE id = ? AND site_id = ? LIMIT 1`,
          [statusId, siteId]
        );
        if (!rows.length) return false;
        if (name !== rows[0].name) {
          const conflicts = await tx.query(
            `SELECT id FROM parking_vehicle_statuses
              WHERE site_id = ? AND name = ? AND id <> ? LIMIT 1`,
            [siteId, name, statusId]
          );
          if (conflicts.length) {
            const error = new Error('Parking status name already exists.');
            error.code = 'ER_DUP_ENTRY';
            throw error;
          }
        }
        await tx.query(
          `UPDATE parking_vehicle_statuses SET name = ?, icon = ?
            WHERE id = ? AND site_id = ?`,
          [name, icon, statusId, siteId]
        );
        return true;
      });
    },

    async deleteStatus({ siteId, statusId }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          'SELECT id, `key` FROM parking_vehicle_statuses WHERE id = ? AND site_id = ? LIMIT 1',
          [statusId, siteId]
        );
        if (!rows.length) return false;
        const statusFlag = new Map([
          ['unwashed', 'unwashed'], ['no_fuel', 'no_fuel'], ['needs_repair', 'needs_repair']
        ]).get(rows[0].key);
        if (statusFlag) {
          await tx.query(
            `UPDATE parking_vehicles SET ${statusFlag} = 0 WHERE site_id = ?`,
            [siteId]
          );
        }
        await tx.query(
          'DELETE FROM parking_vehicle_statuses WHERE id = ? AND site_id = ?',
          [statusId, siteId]
        );
        return true;
      });
    },

    async createVehicleClass({ siteId, name, color }) {
      const result = await db.query(
        `INSERT INTO parking_vehicle_classes (site_id, name, color, display_order)
         SELECT ?, ?, ?, COALESCE(MAX(display_order), -1) + 1
           FROM parking_vehicle_classes WHERE site_id = ?`,
        [siteId, name, color, siteId]
      );
      const rows = await db.query(
        `SELECT id, name, color, display_order
           FROM parking_vehicle_classes WHERE id = ? AND site_id = ?`,
        [result.insertId, siteId]
      );
      return { ...rows[0], id: numericId(rows[0].id), display_order: Number(rows[0].display_order) };
    },

    async updateVehicleClass({ siteId, classId, name, color }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id, name, color FROM parking_vehicle_classes
            WHERE id = ? AND site_id = ? LIMIT 1`,
          [classId, siteId]
        );
        if (!rows.length) return null;
        const current = rows[0];
        if (name !== current.name) {
          const conflicts = await tx.query(
            `SELECT id FROM parking_vehicle_classes
              WHERE site_id = ? AND name = ? AND id <> ? LIMIT 1`,
            [siteId, name, classId]
          );
          if (conflicts.length) {
            const error = new Error('Vehicle class name already exists.');
            error.code = 'ER_DUP_ENTRY';
            throw error;
          }
        }
        await tx.query(
          'UPDATE parking_vehicle_classes SET name = ?, color = ? WHERE id = ? AND site_id = ?',
          [name, color, classId, siteId]
        );
        if (name !== current.name) {
          await tx.query(
            'UPDATE parking_vehicles SET vehicle_type = ? WHERE site_id = ? AND vehicle_type = ?',
            [name, siteId, current.name]
          );
          const lots = await tx.query(
            'SELECT id, class_priority FROM parking_lots WHERE site_id = ?',
            [siteId]
          );
          for (const lot of lots) {
            const priority = parseJson(lot.class_priority, []);
            if (!priority.includes(current.name)) continue;
            await tx.query(
              'UPDATE parking_lots SET class_priority = CAST(? AS JSON) WHERE id = ? AND site_id = ?',
              [JSON.stringify(priority.map((item) => item === current.name ? name : item)), lot.id, siteId]
            );
          }
        }
        return { id: numericId(classId), name, color };
      });
    },

    async deleteVehicleClass({ siteId, classId }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id, name FROM parking_vehicle_classes
            WHERE id = ? AND site_id = ? LIMIT 1`,
          [classId, siteId]
        );
        if (!rows.length) return { deleted: false, reason: 'not_found' };
        const [vehicles, lots] = await Promise.all([
          tx.query('SELECT id FROM parking_vehicles WHERE site_id = ? AND vehicle_type = ? LIMIT 1',
            [siteId, rows[0].name]),
          tx.query(
            `SELECT id FROM parking_lots
              WHERE site_id = ? AND JSON_CONTAINS(class_priority, JSON_QUOTE(?)) LIMIT 1`,
            [siteId, rows[0].name]
          )
        ]);
        if (vehicles.length || lots.length) return { deleted: false, reason: 'in_use' };
        await tx.query(
          'DELETE FROM parking_vehicle_classes WHERE id = ? AND site_id = ?',
          [classId, siteId]
        );
        return { deleted: true };
      });
    },

    async createVehicleOption({ siteId, name }) {
      const result = await db.query(
        'INSERT INTO parking_vehicle_option_types (site_id, name) VALUES (?, ?)',
        [siteId, name]
      );
      return { id: numericId(result.insertId), name };
    },

    async updateVehicleOption({ siteId, optionId, name }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id, name FROM parking_vehicle_option_types
            WHERE id = ? AND site_id = ? LIMIT 1`,
          [optionId, siteId]
        );
        if (!rows.length) return null;
        const currentName = rows[0].name;
        if (name !== currentName) {
          const conflicts = await tx.query(
            `SELECT id FROM parking_vehicle_option_types
              WHERE site_id = ? AND name = ? AND id <> ? LIMIT 1`,
            [siteId, name, optionId]
          );
          if (conflicts.length) {
            const error = new Error('Vehicle option name already exists.');
            error.code = 'ER_DUP_ENTRY';
            throw error;
          }
          await tx.query(
            'UPDATE parking_vehicle_option_types SET name = ? WHERE id = ? AND site_id = ?',
            [name, optionId, siteId]
          );
          const vehicles = await tx.query(
            'SELECT id, options FROM parking_vehicles WHERE site_id = ?',
            [siteId]
          );
          for (const vehicle of vehicles) {
            const options = parseJson(vehicle.options, []);
            const next = options.map((option) => option === currentName ? name : option);
            if (next.some((option, index) => option !== options[index])) {
              await tx.query(
                'UPDATE parking_vehicles SET options = CAST(? AS JSON) WHERE id = ? AND site_id = ?',
                [JSON.stringify(next), vehicle.id, siteId]
              );
            }
          }
        }
        return { id: numericId(optionId), name };
      });
    },

    async deleteVehicleOption({ siteId, optionId }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id, name, built_in_key FROM parking_vehicle_option_types
            WHERE id = ? AND site_id = ? LIMIT 1`,
          [optionId, siteId]
        );
        if (!rows.length) return false;
        const vehicles = await tx.query(
          'SELECT id, options FROM parking_vehicles WHERE site_id = ?',
          [siteId]
        );
        for (const vehicle of vehicles) {
          const options = parseJson(vehicle.options, []);
          const next = options.filter((name) => name !== rows[0].name);
          if (next.length !== options.length) {
            await tx.query('UPDATE parking_vehicles SET options = CAST(? AS JSON) WHERE id = ? AND site_id = ?',
              [JSON.stringify(next), vehicle.id, siteId]);
          }
        }
        if (rows[0].built_in_key) {
          await tx.query(
            `INSERT IGNORE INTO parking_vehicle_option_suppressions (site_id, built_in_key)
             VALUES (?, ?)`,
            [siteId, rows[0].built_in_key]
          );
        }
        await tx.query(
          'DELETE FROM parking_vehicle_option_types WHERE id = ? AND site_id = ?',
          [optionId, siteId]
        );
        return true;
      });
    },

    async createAssessmentField({ siteId, name, fieldType, suffix }) {
      const result = await db.query(
        `INSERT INTO parking_assessment_fields (site_id, name, field_type, suffix, display_order)
         SELECT ?, ?, ?, ?, COALESCE(MAX(display_order), -1) + 1
           FROM parking_assessment_fields WHERE site_id = ? AND group_key = 'custom'`,
        [siteId, name, fieldType, suffix, siteId]
      );
      return { id: numericId(result.insertId), name, field_type: fieldType, suffix };
    },

    async updateAssessmentField({ siteId, fieldId, name, fieldType, suffix }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id FROM parking_assessment_fields
            WHERE id = ? AND site_id = ? AND built_in_key IS NULL LIMIT 1`,
          [fieldId, siteId]
        );
        if (!rows.length) return false;
        await tx.query(
          `UPDATE parking_assessment_fields
            SET name = ?, field_type = ?, suffix = ?
          WHERE id = ? AND site_id = ? AND built_in_key IS NULL`,
          [name, fieldType, suffix, fieldId, siteId]
        );
        return true;
      });
    },

    async deleteAssessmentField({ siteId, fieldId }) {
      const result = await db.query(
        `DELETE FROM parking_assessment_fields
          WHERE id = ? AND site_id = ? AND built_in_key IS NULL`,
        [fieldId, siteId]
      );
      return result.affectedRows > 0;
    },

    async createDamageType({ siteId, name, icon, color }) {
      const result = await db.query(
        `INSERT INTO parking_damage_types (site_id, name, icon, color)
         VALUES (?, ?, ?, ?)`,
        [siteId, name, icon, color]
      );
      return { id: numericId(result.insertId), name, icon, color };
    },

    async updateDamageType({ siteId, damageTypeId, name, icon, color }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          `SELECT id FROM parking_damage_types WHERE id = ? AND site_id = ? LIMIT 1`,
          [damageTypeId, siteId]
        );
        if (!rows.length) return false;
        await tx.query(
          `UPDATE parking_damage_types SET name = ?, icon = ?, color = ?
          WHERE id = ? AND site_id = ?`,
          [name, icon, color, damageTypeId, siteId]
        );
        return true;
      });
    },

    async deleteDamageType({ siteId, damageTypeId }) {
      return db.transaction(async (tx) => {
        const marks = await tx.query(
          `SELECT m.id FROM parking_damage_marks m
             JOIN parking_vehicles v ON v.id = m.vehicle_id
            WHERE v.site_id = ? AND m.damage_type_id = ? LIMIT 1`,
          [siteId, damageTypeId]
        );
        if (marks.length) return { deleted: false, reason: 'in_use' };
        const result = await tx.query(
          `DELETE FROM parking_damage_types WHERE id = ? AND site_id = ?`,
          [damageTypeId, siteId]
        );
        return { deleted: result.affectedRows > 0, reason: 'not_found' };
      });
    },

    async createStore({ siteId, name, navigationUrl = '' }) {
      const result = await db.query(
        'INSERT INTO parking_stores (site_id, name, navigation_url) VALUES (?, ?, ?)',
        [siteId, name, navigationUrl]
      );
      if (navigationUrl) await updateCoordinateDistances(siteId);
      return { id: numericId(result.insertId), name, navigation_url: navigationUrl };
    },

    async updateStoreNavigationUrl({ siteId, storeId, navigationUrl }) {
      const result = await db.query(
        'UPDATE parking_stores SET navigation_url = ? WHERE id = ? AND site_id = ?',
        [navigationUrl, storeId, siteId]
      );
      if (!result.affectedRows) return false;
      await updateCoordinateDistances(siteId);
      return true;
    },

    async deleteStore({ siteId, storeId }) {
      const result = await db.query(
        'DELETE FROM parking_stores WHERE id = ? AND site_id = ?',
        [storeId, siteId]
      );
      return result.affectedRows > 0;
    },

    async updateLotDistances({ siteId, entries }) {
      return db.transaction(async (tx) => {
        const lots = await tx.query('SELECT id FROM parking_lots WHERE site_id = ?', [siteId]);
        const lotIds = new Set(lots.map((row) => String(row.id)));
        const seen = new Set();
        for (const entry of entries) {
          const key = `${entry.from_lot_id}:${entry.to_lot_id}`;
          if (entry.from_lot_id === entry.to_lot_id ||
              !lotIds.has(String(entry.from_lot_id)) || !lotIds.has(String(entry.to_lot_id)) ||
              seen.has(key)) {
            const error = new Error('Invalid lot distance reference.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
          seen.add(key);
        }
        for (const entry of entries) {
          if (entry.minutes === null && entry.km === null) {
            await tx.query(
              'DELETE FROM parking_lot_distances WHERE from_lot_id = ? AND to_lot_id = ? AND site_id = ?',
              [entry.from_lot_id, entry.to_lot_id, siteId]
            );
          } else {
            await tx.query(
              `INSERT INTO parking_lot_distances
                (site_id, from_lot_id, to_lot_id, minutes, km, km_auto)
               VALUES (?, ?, ?, ?, ?, 0)
               ON DUPLICATE KEY UPDATE minutes = VALUES(minutes),
                 km = IF(VALUES(km) IS NULL, km, VALUES(km)),
                 km_auto = IF(VALUES(km) IS NULL, km_auto, 0)`,
              [siteId, entry.from_lot_id, entry.to_lot_id, entry.minutes, entry.km]
            );
          }
        }
        return { updated: entries.length };
      });
    },

    async updateStoreLotDistances({ siteId, entries }) {
      return db.transaction(async (tx) => {
        const [stores, lots] = await Promise.all([
          tx.query('SELECT id FROM parking_stores WHERE site_id = ?', [siteId]),
          tx.query('SELECT id FROM parking_lots WHERE site_id = ?', [siteId])
        ]);
        const storeIds = new Set(stores.map((row) => String(row.id)));
        const lotIds = new Set(lots.map((row) => String(row.id)));
        const seen = new Set();
        for (const entry of entries) {
          const key = `${entry.store_id}:${entry.lot_id}`;
          if (!storeIds.has(String(entry.store_id)) || !lotIds.has(String(entry.lot_id)) || seen.has(key)) {
            const error = new Error('Invalid store distance reference.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
          seen.add(key);
        }
        for (const entry of entries) {
          if (entry.minutes === null && entry.km === null) {
            await tx.query(
              'DELETE FROM parking_store_lot_distances WHERE store_id = ? AND lot_id = ? AND site_id = ?',
              [entry.store_id, entry.lot_id, siteId]
            );
          } else {
            await tx.query(
              `INSERT INTO parking_store_lot_distances
                (site_id, store_id, lot_id, minutes, km, km_auto)
               VALUES (?, ?, ?, ?, ?, 0)
               ON DUPLICATE KEY UPDATE minutes = VALUES(minutes),
                 km = IF(VALUES(km) IS NULL, km, VALUES(km)),
                 km_auto = IF(VALUES(km) IS NULL, km_auto, 0)`,
              [siteId, entry.store_id, entry.lot_id, entry.minutes, entry.km]
            );
          }
        }
        return { updated: entries.length };
      });
    },

    async syncVehiclesFromERP({ vehicles }) {
      return db.transaction(async (tx) => {
        let created = 0;
        let updated = 0;
        const defaultClasses = new Map();
        for (const vehicle of vehicles) {
          if (!vehicle.id || !vehicle.site_id || !vehicle.registration_number) {
            const error = new Error('ERP vehicle is missing its identity or site.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
          const existing = await tx.query(
            `SELECT id, site_id FROM parking_vehicles WHERE erp_vehicle_id = ? LIMIT 1 FOR UPDATE`,
            [vehicle.id]
          );
          if (existing.length) {
            if (String(existing[0].site_id) !== String(vehicle.site_id)) {
              const error = new Error('ERP vehicle site differs from its imported parking site.');
              error.code = 'PARKING_SITE_MAPPING_CONFLICT';
              throw error;
            }
            await tx.query(
              `UPDATE parking_vehicles SET plate = ? WHERE id = ? AND site_id = ?`,
              [vehicle.registration_number, existing[0].id, vehicle.site_id]
            );
            updated += 1;
            continue;
          }

          let vehicleType = defaultClasses.get(String(vehicle.site_id));
          if (!vehicleType) {
            const classes = await tx.query(
              `SELECT name FROM parking_vehicle_classes
                WHERE site_id = ? ORDER BY display_order, id LIMIT 1`,
              [vehicle.site_id]
            );
            vehicleType = classes[0]?.name || '未分類';
            if (!classes.length) {
              await tx.query(
                `INSERT INTO parking_vehicle_classes (site_id, name, color, display_order)
                 VALUES (?, ?, '#4f86f7', 0)`,
                [vehicle.site_id, vehicleType]
              );
            }
            defaultClasses.set(String(vehicle.site_id), vehicleType);
          }
          await tx.query(
            `INSERT INTO parking_vehicles
              (site_id, erp_vehicle_id, external_id, plate, vehicle_type, options, notes)
             VALUES (?, ?, ?, ?, ?, CAST('[]' AS JSON), '')`,
            [vehicle.site_id, vehicle.id, vehicle.id, vehicle.registration_number, vehicleType]
          );
          created += 1;
        }
        return { created, updated, synced: created + updated };
      });
    },

    async createJob({ siteId, vehicleId, destinationLotId, scheduledAt }) {
      return db.transaction(async (tx) => {
        const [vehicles, lots] = await Promise.all([
          tx.query('SELECT id FROM parking_vehicles WHERE id = ? AND site_id = ? LIMIT 1',
            [vehicleId, siteId]),
          tx.query('SELECT id FROM parking_lots WHERE id = ? AND site_id = ? LIMIT 1',
            [destinationLotId, siteId])
        ]);
        if (!vehicles[0] || !lots[0]) {
          const error = new Error('Unknown vehicle or parking location.');
          error.code = 'PARKING_INVALID_REFERENCE';
          throw error;
        }
        const result = await tx.query(
          `INSERT INTO parking_jobs (site_id, legacy_tenant_id, vehicle_id, destination_lot_id, scheduled_at)
           SELECT ?, legacy_tenant_id, ?, ?, ? FROM parking_vehicles
            WHERE id = ? AND site_id = ?`,
          [siteId, vehicleId, destinationLotId, scheduledAt, vehicleId, siteId]
        );
        return { id: numericId(result.insertId) };
      });
    },

    async updateJob({ siteId, jobId, completed }) {
      const result = await db.query(
        `UPDATE parking_jobs SET completed = ?, completed_at = ?
          WHERE id = ? AND site_id = ?`,
        [completed ? 1 : 0, completed ? new Date().toISOString() : null, jobId, siteId]
      );
      if (!result.affectedRows) {
        const rows = await db.query(
          'SELECT id FROM parking_jobs WHERE id = ? AND site_id = ? LIMIT 1',
          [jobId, siteId]
        );
        if (!rows.length) return null;
      }
      return { id: numericId(jobId), completed };
    },

    async deleteJob({ siteId, jobId }) {
      const result = await db.query(
        'DELETE FROM parking_jobs WHERE id = ? AND site_id = ?',
        [jobId, siteId]
      );
      return result.affectedRows > 0;
    },

    async updateVehicle({
      siteId, vehicleId, parkingLotId, positionX, positionY, statusIds,
      unwashed, noFuel, needsRepair, options, notes, assessmentValues, inspectionMarks
    }, transaction) {
      const update = async (tx) => {
        const vehicles = await tx.query(
          `SELECT id FROM parking_vehicles WHERE id = ? AND site_id = ? LIMIT 1`,
          [vehicleId, siteId]
        );
        if (!vehicles[0]) return null;

        if (parkingLotId !== undefined && parkingLotId !== null) {
          const lots = await tx.query(
            `SELECT id FROM parking_lots WHERE id = ? AND site_id = ? LIMIT 1`,
            [parkingLotId, siteId]
          );
          if (!lots[0]) {
            const error = new Error('Unknown parking location.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
        }
        if (statusIds !== undefined && statusIds.length) {
          const statuses = await tx.query(
            `SELECT id FROM parking_vehicle_statuses
              WHERE site_id = ? AND id IN (${statusIds.map(() => '?').join(', ')})`,
            [siteId, ...statusIds]
          );
          if (statuses.length !== statusIds.length) {
            const error = new Error('Unknown vehicle status.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
        }
        if (options !== undefined && options.length) {
          const optionRows = await tx.query(
            `SELECT name FROM parking_vehicle_option_types
              WHERE site_id = ? AND name IN (${options.map(() => '?').join(', ')})`,
            [siteId, ...options]
          );
          if (optionRows.length !== options.length) {
            const error = new Error('Unknown vehicle option.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
        }
        const normalizedAssessmentValues = [];
        if (assessmentValues !== undefined) {
          const entries = Object.entries(assessmentValues);
          const fieldIds = entries.map(([id]) => id);
          if (fieldIds.some((id) => !/^[1-9][0-9]*$/.test(id)) || entries.length > 100) {
            const error = new Error('Invalid assessment values.');
            error.code = 'PARKING_INVALID_VALUE';
            throw error;
          }
          const fields = entries.length
            ? await tx.query(
              `SELECT id, field_type, built_in_key FROM parking_assessment_fields
                WHERE site_id = ? AND id IN (${entries.map(() => '?').join(', ')})`,
              [siteId, ...fieldIds]
            )
            : [];
          if (fields.length !== entries.length) {
            const error = new Error('Unknown assessment field.');
            error.code = 'PARKING_INVALID_REFERENCE';
            throw error;
          }
          const fieldById = new Map(fields.map((field) => [String(field.id), field]));
          for (const [rawId, rawValue] of entries) {
            const field = fieldById.get(rawId);
            const value = typeof rawValue === 'boolean' ? String(rawValue) : String(rawValue).trim();
            const validType = ['rating', 'checkbox', 'number', 'text'].includes(field.field_type);
            const validRating = field.field_type !== 'rating' || /^[1-5]$/.test(value);
            const validCheckbox = field.field_type !== 'checkbox' ||
              rawValue === true || rawValue === false || value === 'true' || value === 'false';
            const validNumber = field.field_type !== 'number' || value === '' ||
              (/^\d{1,12}$/.test(value) &&
                (field.built_in_key !== 'registration_month' || (Number(value) >= 1 && Number(value) <= 12)) &&
                (field.built_in_key !== 'registration_year' ||
                  (Number(value) >= 1900 && Number(value) <= new Date().getFullYear())));
            const validText = field.field_type !== 'text' || value.length <= 500;
            if (!validType || !validRating || !validCheckbox || !validNumber || !validText) {
              const error = new Error('Invalid assessment value.');
              error.code = 'PARKING_INVALID_VALUE';
              throw error;
            }
            if (value) normalizedAssessmentValues.push([rawId, value]);
          }
        }
        if (inspectionMarks !== undefined) {
          const ids = new Set();
          const damageTypeIds = inspectionMarks.map((mark) => mark.damage_type_id);
          const damageTypeRows = damageTypeIds.length
            ? await tx.query(
              `SELECT id FROM parking_damage_types
                WHERE site_id = ? AND id IN (${damageTypeIds.map(() => '?').join(', ')})`,
              [siteId, ...new Set(damageTypeIds)]
            )
            : [];
          const validDamageTypes = new Set(damageTypeRows.map((row) => String(row.id)));
          for (const mark of inspectionMarks) {
            const hasWorldPosition = ['world_x', 'world_y', 'world_z']
              .some((key) => mark[key] !== undefined && mark[key] !== null);
            const hasNormal = ['world_nx', 'world_ny', 'world_nz']
              .some((key) => mark[key] !== undefined && mark[key] !== null);
            if (typeof mark.id !== 'string' || !/^[\w-]{1,64}$/.test(mark.id) ||
                ids.has(mark.id) || !validDamageTypes.has(String(mark.damage_type_id)) ||
                ![mark.x, mark.y].every((value) =>
                  typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 1) ||
                (hasWorldPosition && !['world_x', 'world_y', 'world_z'].every((key) =>
                  typeof mark[key] === 'number' && Number.isFinite(mark[key]) &&
                  mark[key] >= -3 && mark[key] <= 3)) ||
                (hasNormal && !['world_nx', 'world_ny', 'world_nz'].every((key) =>
                  typeof mark[key] === 'number' && Number.isFinite(mark[key]) &&
                  mark[key] >= -1 && mark[key] <= 1))) {
              const error = new Error('Invalid damage marker.');
              error.code = 'PARKING_INVALID_VALUE';
              throw error;
            }
            ids.add(mark.id);
          }
        }

        const assignments = [];
        const values = [];
        if (parkingLotId !== undefined) {
          assignments.push('parking_lot_id = ?');
          values.push(parkingLotId);
        }
        if (positionX !== undefined) {
          assignments.push('position_x = ?', 'position_y = ?');
          values.push(positionX, positionY);
        }
        for (const [field, value] of [
          ['unwashed', unwashed], ['no_fuel', noFuel], ['needs_repair', needsRepair]
        ]) {
          if (value !== undefined) {
            assignments.push(`${field} = ?`);
            values.push(value);
          }
        }
        if (options !== undefined) {
          assignments.push('options = ?');
          values.push(JSON.stringify(options));
        }
        if (notes !== undefined) {
          assignments.push('notes = ?');
          values.push(notes ?? '');
        }
        if (assignments.length) {
          await tx.query(
            `UPDATE parking_vehicles SET ${assignments.join(', ')}
              WHERE id = ? AND site_id = ?`,
            [...values, vehicleId, siteId]
          );
        }
        if (statusIds !== undefined) {
          await tx.query(
            'DELETE FROM parking_vehicle_status_assignments WHERE vehicle_id = ?',
            [vehicleId]
          );
          for (const statusId of statusIds) {
            await tx.query(
              `INSERT INTO parking_vehicle_status_assignments (vehicle_id, status_id)
               VALUES (?, ?)`,
              [vehicleId, statusId]
            );
          }
        }
        if (assessmentValues !== undefined) {
          await tx.query('DELETE FROM parking_assessment_values WHERE vehicle_id = ?', [vehicleId]);
          for (const [fieldId, value] of normalizedAssessmentValues) {
            await tx.query(
              `INSERT INTO parking_assessment_values (vehicle_id, field_id, value)
               VALUES (?, ?, ?)`,
              [vehicleId, fieldId, value]
            );
          }
        }
        if (inspectionMarks !== undefined) {
          await tx.query('DELETE FROM parking_damage_marks WHERE vehicle_id = ?', [vehicleId]);
          for (const mark of inspectionMarks) {
            await tx.query(
              `INSERT INTO parking_damage_marks
                (id, vehicle_id, damage_type_id, x, y,
                 world_x, world_y, world_z, world_nx, world_ny, world_nz)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                mark.id, vehicleId, mark.damage_type_id, mark.x, mark.y,
                mark.world_x ?? null, mark.world_y ?? null, mark.world_z ?? null,
                mark.world_nx ?? null, mark.world_ny ?? null, mark.world_nz ?? null
              ]
            );
          }
        }

        const [rows, statuses] = await Promise.all([
          tx.query(
            `SELECT id, external_id, plate, vehicle_type, parking_lot_id,
                    position_x, position_y, unwashed, no_fuel, needs_repair, options, notes
               FROM parking_vehicles WHERE id = ? AND site_id = ? LIMIT 1`,
            [vehicleId, siteId]
          ),
          tx.query(
            `SELECT status_id FROM parking_vehicle_status_assignments
              WHERE vehicle_id = ? ORDER BY status_id`,
            [vehicleId]
          )
        ]);
        const row = rows[0];
        return {
          ...row,
          id: numericId(row.id),
          parking_lot_id: row.parking_lot_id === null ? null : numericId(row.parking_lot_id),
          position_x: Number(row.position_x),
          position_y: Number(row.position_y),
          unwashed: Boolean(row.unwashed),
          no_fuel: Boolean(row.no_fuel),
          needs_repair: Boolean(row.needs_repair),
          options: parseJson(row.options, []),
          status_ids: statuses.map((status) => numericId(status.status_id))
        };
      };
      return transaction ? update(transaction) : db.transaction(update);
    },

    async vehicleCatalog(siteId) {
      const [classes, options, lots, statuses, assessmentFields, damageTypes] = await Promise.all([
        db.query(
          `SELECT id, name, color, display_order
             FROM parking_vehicle_classes WHERE site_id = ? ORDER BY display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name FROM parking_vehicle_option_types WHERE site_id = ? ORDER BY id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name, display_order, area_height, area_width, navigation_url,
                  markings, capacity, is_active, class_priority
             FROM parking_lots WHERE site_id = ? ORDER BY display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name, icon, \`key\` FROM parking_vehicle_statuses
            WHERE site_id = ? ORDER BY id`,
          [siteId]
        ),
        db.query(
          `SELECT id, built_in_key, group_key, name, field_type, suffix, display_order
             FROM parking_assessment_fields WHERE site_id = ?
            ORDER BY CASE group_key WHEN 'body' THEN 0 WHEN 'electrical' THEN 1
                     WHEN 'basic' THEN 2 ELSE 3 END, display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, built_in_key, name, icon, color
             FROM parking_damage_types WHERE site_id = ? ORDER BY id`,
          [siteId]
        )
      ]);
      return {
        vehicle_classes: classes.map((item) => ({
          ...item, id: numericId(item.id), display_order: Number(item.display_order)
        })),
        vehicle_options: options.map((item) => ({ ...item, id: numericId(item.id) })),
        parking_lots: lots.map(parkingLotFromRow),
        statuses: statuses.map((item) => ({ ...item, id: numericId(item.id) })),
        assessment_fields: assessmentFields.map((item) => ({
          ...item, id: numericId(item.id), display_order: Number(item.display_order)
        })),
        damage_types: damageTypes.map((item) => ({ ...item, id: numericId(item.id) }))
      };
    },

    async bootstrap(siteId) {
      const [
        parkingLots,
        vehicleRows,
        reservationRows,
        statusRows,
        statusAssignments,
        assessmentValues,
        inspectionMarks,
        assessmentFields,
        damageTypes,
        vehicleOptions,
        jobs,
        vehicleClasses,
        stores,
        lotDistances,
        storeLotDistances
      ] = await Promise.all([
        db.query(
          `SELECT id, name, display_order, area_height, area_width,
                  navigation_url, markings, capacity, is_active, class_priority
             FROM parking_lots WHERE site_id = ? ORDER BY display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, external_id, erp_vehicle_id, plate, vehicle_type, parking_lot_id,
                  position_x, position_y, unwashed, no_fuel, needs_repair, options, notes
             FROM parking_vehicles WHERE site_id = ? ORDER BY plate, id`,
          [siteId]
        ),
        db.query(
          `SELECT vehicle_id,
                  IF(SUM(status = 'checked_in') > 0, 'checked_in', 'reserved') AS status,
                  MIN(start_at) AS start_at, COUNT(*) AS reservation_count
             FROM reservations
            WHERE site_id = ? AND status IN ('reserved', 'checked_in')
              AND end_at > UTC_TIMESTAMP(3)
            GROUP BY vehicle_id ORDER BY start_at, vehicle_id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name, icon, \`key\` FROM parking_vehicle_statuses
            WHERE site_id = ? ORDER BY id`,
          [siteId]
        ),
        db.query(
          `SELECT a.vehicle_id, a.status_id
             FROM parking_vehicle_status_assignments a
             JOIN parking_vehicles v ON v.id = a.vehicle_id
            WHERE v.site_id = ? ORDER BY a.status_id`,
          [siteId]
        ),
        db.query(
          `SELECT a.vehicle_id, a.field_id, a.value
             FROM parking_assessment_values a
             JOIN parking_vehicles v ON v.id = a.vehicle_id
            WHERE v.site_id = ? ORDER BY a.vehicle_id, a.field_id`,
          [siteId]
        ),
        db.query(
          `SELECT m.id, m.vehicle_id, m.damage_type_id, m.x, m.y,
                  m.world_x, m.world_y, m.world_z, m.world_nx, m.world_ny, m.world_nz,
                  t.name, t.icon, t.color, t.built_in_key
             FROM parking_damage_marks m
             JOIN parking_vehicles v ON v.id = m.vehicle_id
             JOIN parking_damage_types t ON t.id = m.damage_type_id
            WHERE v.site_id = ? ORDER BY m.vehicle_id, m.id`,
          [siteId]
        ),
        db.query(
          `SELECT id, built_in_key, group_key, name, field_type, suffix, display_order
             FROM parking_assessment_fields WHERE site_id = ?
            ORDER BY CASE group_key WHEN 'body' THEN 0 WHEN 'electrical' THEN 1
                     WHEN 'basic' THEN 2 ELSE 3 END, display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, built_in_key, name, icon, color
             FROM parking_damage_types WHERE site_id = ? ORDER BY id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name FROM parking_vehicle_option_types WHERE site_id = ? ORDER BY id`,
          [siteId]
        ),
        db.query(
          `SELECT id, vehicle_id, destination_lot_id, scheduled_at, completed
             FROM parking_jobs WHERE site_id = ? ORDER BY completed, scheduled_at, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name, color, display_order
             FROM parking_vehicle_classes WHERE site_id = ? ORDER BY display_order, id`,
          [siteId]
        ),
        db.query(
          `SELECT id, name, navigation_url FROM parking_stores WHERE site_id = ? ORDER BY id`,
          [siteId]
        ),
        db.query(
          `SELECT from_lot_id, to_lot_id, minutes, km, km_auto
             FROM parking_lot_distances WHERE site_id = ? ORDER BY from_lot_id, to_lot_id`,
          [siteId]
        ),
        db.query(
          `SELECT store_id, lot_id, minutes, km, km_auto
             FROM parking_store_lot_distances WHERE site_id = ? ORDER BY store_id, lot_id`,
          [siteId]
        )
      ]);

      const assignmentsByVehicle = new Map();
      for (const assignment of statusAssignments) {
        const list = assignmentsByVehicle.get(assignment.vehicle_id) || [];
        list.push(numericId(assignment.status_id));
        assignmentsByVehicle.set(assignment.vehicle_id, list);
      }
      const valuesByVehicle = new Map();
      for (const entry of assessmentValues) {
        const values = valuesByVehicle.get(entry.vehicle_id) || {};
        values[entry.field_id] = entry.value;
        valuesByVehicle.set(entry.vehicle_id, values);
      }
      const marksByVehicle = new Map();
      for (const mark of inspectionMarks) {
        const marks = marksByVehicle.get(mark.vehicle_id) || [];
        const { vehicle_id: _vehicleId, ...data } = mark;
        marks.push({ ...data, id: String(data.id), damage_type_id: numericId(data.damage_type_id) });
        marksByVehicle.set(mark.vehicle_id, marks);
      }
      const reservationsByVehicle = new Map(reservationRows.map((row) => [
        String(row.vehicle_id), {
          status: row.status,
          start_at: row.start_at,
          reservation_count: Number(row.reservation_count)
        }
      ]));

      const vehicles = vehicleRows.map((row) => {
        const reservation = row.erp_vehicle_id
          ? reservationsByVehicle.get(String(row.erp_vehicle_id)) ?? null
          : null;
        const vehicle = {
          ...row,
          id: numericId(row.id),
          parking_lot_id: row.parking_lot_id === null ? null : numericId(row.parking_lot_id),
          position_x: Number(row.position_x),
          position_y: Number(row.position_y),
          options: parseJson(row.options, []),
          unwashed: Boolean(row.unwashed),
          no_fuel: Boolean(row.no_fuel),
          needs_repair: Boolean(row.needs_repair),
          status_ids: assignmentsByVehicle.get(row.id) || [],
          assessment_values: valuesByVehicle.get(row.id) || {},
          inspection_marks: marksByVehicle.get(row.id) || [],
          reservation
        };
        return vehicle;
      });

      return {
        parking_lots: parkingLots.map(parkingLotFromRow),
        vehicles,
        jobs: jobs.map((job) => ({
          ...job,
          id: numericId(job.id),
          vehicle_id: numericId(job.vehicle_id),
          destination_lot_id: numericId(job.destination_lot_id),
          completed: Boolean(job.completed)
        })),
        statuses: statusRows.map((status) => ({ ...status, id: numericId(status.id) })),
        assessment_fields: assessmentFields.map((field) => ({
          ...field,
          id: numericId(field.id),
          display_order: Number(field.display_order)
        })),
        damage_types: damageTypes.map((type) => ({ ...type, id: numericId(type.id) })),
        vehicle_types: vehicleClasses.map((item) => item.name),
        vehicle_classes: vehicleClasses.map((item) => ({
          ...item,
          id: numericId(item.id),
          display_order: Number(item.display_order)
        })),
        stores: stores.map((store) => ({ ...store, id: numericId(store.id) })),
        lot_distances: lotDistances.map((row) => ({
          ...row,
          from_lot_id: numericId(row.from_lot_id),
          to_lot_id: numericId(row.to_lot_id),
          minutes: row.minutes === null ? null : Number(row.minutes),
          km: row.km === null ? null : Number(row.km),
          km_auto: Boolean(row.km_auto)
        })),
        store_lot_distances: storeLotDistances.map((row) => ({
          ...row,
          store_id: numericId(row.store_id),
          lot_id: numericId(row.lot_id),
          minutes: row.minutes === null ? null : Number(row.minutes),
          km: row.km === null ? null : Number(row.km),
          km_auto: Boolean(row.km_auto)
        })),
        vehicle_options: vehicleOptions.map((option) => ({
          ...option,
          id: numericId(option.id)
        }))
      };
    }
  };
}
