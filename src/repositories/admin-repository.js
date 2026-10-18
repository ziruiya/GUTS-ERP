export function createAdminRepository(db) {
  return {
    async createSite({ code, name, type }) {
      return db.transaction(async (tx) => {
        const rows = await tx.query(
          'INSERT INTO sites (code, name, type) VALUES (?, ?, ?)',
          [code, name, type]
        );
        const vehicleClasses = [
          ['A-1', '#4f86f7'], ['A-2', '#9b6ad8'], ['A-2P', '#f0a043'],
          ['B', '#38a9d0'], ['B軽トラ', '#e56b7a'], ['C-1', '#c7b23c'],
          ['C-2', '#6f8794'], ['D', '#7fb24f'], ['H-1', '#d98a57'],
          ['H-2', '#6d78c8'], ['その他', '#9aa5b1']
        ];
        for (const [index, [className, color]] of vehicleClasses.entries()) {
          await tx.query(
            `INSERT INTO parking_vehicle_classes (site_id, name, color, display_order)
             VALUES (?, ?, ?, ?)`,
            [rows.insertId, className, color, index]
          );
        }
        for (const option of ['ETC', '車載器', '禁煙', '喫煙', 'ナビ', 'スタッドレス']) {
          await tx.query(
            `INSERT INTO parking_vehicle_option_types (site_id, name, built_in_key)
             VALUES (?, ?, ?)`,
            [rows.insertId, option, option]
          );
        }
        for (const [key, name, icon] of [
          ['unwashed', '洗車待ち', '🫧'],
          ['no_fuel', '給油待ち', '⛽'],
          ['needs_repair', '要修理', '🔧']
        ]) {
          await tx.query(
            'INSERT INTO parking_vehicle_statuses (site_id, `key`, name, icon) VALUES (?, ?, ?, ?)',
            [rows.insertId, key, name, icon]
          );
        }
        const assessmentFields = [
          ['exterior', 'body', '外装（ボディ・塗装・鈑金）', 'rating', '', 0],
          ['interior', 'body', '内装（シート・天井・フロア）', 'rating', '', 1],
          ['wheels', 'body', 'ホイール', 'rating', '', 2],
          ['registration_document', 'electrical', '車検証', 'checkbox', '確認済み', 0],
          ['radio', 'electrical', 'ラジオ', 'checkbox', '', 1],
          ['navigation', 'electrical', 'ナビ（５年以内）', 'checkbox', '', 2],
          ['air_conditioning', 'electrical', 'エアコン', 'checkbox', '', 3],
          ['side_mirror', 'electrical', 'サイドミラー調整', 'checkbox', '', 4],
          ['mileage', 'basic', '走行距離', 'number', 'km', 0],
          ['registration_year', 'basic', '初年度登録（年）', 'number', '年', 1],
          ['registration_month', 'basic', '初年度登録（月）', 'number', '月', 2]
        ];
        for (const [key, group, name, fieldType, suffix, order] of assessmentFields) {
          await tx.query(
            `INSERT INTO parking_assessment_fields
               (site_id, built_in_key, group_key, name, field_type, suffix, display_order)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [rows.insertId, key, group, name, fieldType, suffix, order]
          );
        }
        for (const [key, name, icon, color] of [
          ['scratch', '傷', '〰️', '#e34b4b'],
          ['dent', '凹み', '◉', '#805ad5']
        ]) {
          await tx.query(
            `INSERT INTO parking_damage_types (site_id, built_in_key, name, icon, color)
             VALUES (?, ?, ?, ?, ?)`,
            [rows.insertId, key, name, icon, color]
          );
        }
        return { id: rows.insertId, code, name, type, status: 'active' };
      });
    },

    async createRole({ roleKey, name, permissions }) {
      return db.transaction(async (tx) => {
        const result = await tx.query(
          'INSERT INTO roles (role_key, name) VALUES (?, ?)',
          [roleKey, name]
        );
        for (const permission of permissions) {
          await tx.query(
            'INSERT INTO role_permissions (role_id, permission_key) VALUES (?, ?)',
            [result.insertId, permission]
          );
        }
        return { id: result.insertId, roleKey, name, permissions };
      });
    },

    async createAccount({ siteId, username, displayName, passwordHash, roleIds, permissions }) {
      return db.transaction(async (tx) => {
        const result = await tx.query(
          `INSERT INTO accounts (site_id, username, display_name, password_hash)
           VALUES (?, ?, ?, ?)`,
          [siteId, username, displayName, passwordHash]
        );
        for (const roleId of roleIds) {
          await tx.query('INSERT INTO account_roles (account_id, role_id) VALUES (?, ?)', [result.insertId, roleId]);
        }
        for (const permission of permissions) {
          await tx.query(
            'INSERT INTO account_permissions (account_id, permission_key) VALUES (?, ?)',
            [result.insertId, permission]
          );
        }
        return { id: result.insertId, siteId, username, displayName };
      });
    },

    async listSites(siteId) {
      if (siteId) {
        return db.query(
          `SELECT s.id, s.code, s.name, s.type, s.status,
                  EXISTS(SELECT 1 FROM accounts a WHERE a.site_id = s.id AND a.status = 'active')
                    AS has_active_account
             FROM sites s WHERE s.id = ? ORDER BY s.id`,
          [siteId]
        );
      }
      return db.query(
        `SELECT s.id, s.code, s.name, s.type, s.status,
                EXISTS(SELECT 1 FROM accounts a WHERE a.site_id = s.id AND a.status = 'active')
                  AS has_active_account
           FROM sites s ORDER BY s.id`
      );
    },

    async listAccounts({ siteId, search, limit, offset }) {
      const filters = [];
      const params = [];
      if (siteId) {
        filters.push('a.site_id = ?');
        params.push(siteId);
      }
      if (search) {
        filters.push('(a.username LIKE ? OR a.display_name LIKE ? OR s.name LIKE ? OR s.code LIKE ?)');
        const term = `%${search}%`;
        params.push(term, term, term, term);
      }
      const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
      params.push(limit, offset);
      return db.query(
        `SELECT a.id, a.site_id, a.username, a.display_name, a.status, a.is_owner_admin,
                s.code AS site_code, s.name AS site_name, a.created_at,
                (SELECT JSON_ARRAYAGG(CAST(ar.role_id AS CHAR)) FROM account_roles ar
                  WHERE ar.account_id = a.id) AS role_ids,
                (SELECT JSON_ARRAYAGG(ap.permission_key) FROM account_permissions ap
                  WHERE ap.account_id = a.id) AS permissions
           FROM accounts a JOIN sites s ON s.id = a.site_id
          ${where}
          ORDER BY a.id LIMIT ? OFFSET ?`,
        params
      );
    },

    async updateAccount(id, fields, siteScope) {
      return db.transaction(async (tx) => {
        const siteFilter = siteScope ? ' AND site_id = ?' : '';
        const params = siteScope ? [id, siteScope] : [id];
        const found = await tx.query(
          `SELECT id FROM accounts WHERE id = ?${siteFilter} FOR UPDATE`,
          params
        );
        if (!found.length) return null;

        const sets = [];
        const values = [];
        for (const key of ['siteId', 'displayName', 'passwordHash', 'status']) {
          if (!Object.hasOwn(fields, key)) continue;
          const column = {
            siteId: 'site_id',
            displayName: 'display_name',
            passwordHash: 'password_hash',
            status: 'status'
          }[key];
          sets.push(`${column} = ?`);
          values.push(fields[key]);
        }
        if (Object.hasOwn(fields, 'passwordHash')) {
          sets.push('failed_attempts = 0');
          sets.push('locked_until = NULL');
        }
        if (sets.length) {
          values.push(id);
          await tx.query(`UPDATE accounts SET ${sets.join(', ')} WHERE id = ?`, values);
        }
        if (fields.roleIds) {
          await tx.query('DELETE FROM account_roles WHERE account_id = ?', [id]);
          for (const roleId of fields.roleIds) {
            await tx.query(
              'INSERT INTO account_roles (account_id, role_id) VALUES (?, ?)',
              [id, roleId]
            );
          }
        }
        if (fields.permissions) {
          await tx.query('DELETE FROM account_permissions WHERE account_id = ?', [id]);
          for (const permission of fields.permissions) {
            await tx.query(
              'INSERT INTO account_permissions (account_id, permission_key) VALUES (?, ?)',
              [id, permission]
            );
          }
        }
        return { id };
      });
    },

    async listRoles() {
      return db.query(
        `SELECT r.id, r.role_key, r.name,
                (SELECT JSON_ARRAYAGG(rp.permission_key) FROM role_permissions rp
                  WHERE rp.role_id = r.id) AS permissions
           FROM roles r ORDER BY r.id`
      );
    },

    async listPermissions() {
      return db.query('SELECT permission_key, description FROM permissions ORDER BY permission_key');
    },

    async dashboardStats(siteScope) {
      const siteClause = siteScope ? ' WHERE id = ?' : '';
      const accountClause = siteScope ? ' WHERE site_id = ?' : '';
      const vehicleClause = siteScope ? ' WHERE site_id = ?' : '';
      const [sites, accounts, vehicles] = await Promise.all([
        db.query(
          `SELECT COUNT(*) AS total,
                  SUM(type = 'direct') AS direct,
                  SUM(type = 'franchise') AS franchise
             FROM sites${siteClause}`,
          siteScope ? [siteScope] : []
        ),
        db.query(
          `SELECT COUNT(*) AS total,
                  SUM(status = 'active') AS active
             FROM accounts${accountClause}`,
          siteScope ? [siteScope] : []
        ),
        db.query(
          `SELECT COUNT(*) AS total,
                  SUM(status = 'available') AS available,
                  SUM(status = 'rented') AS rented,
                  SUM(status = 'maintenance') AS maintenance
             FROM vehicles${vehicleClause}`,
          siteScope ? [siteScope] : []
        )
      ]);
      const number = (value) => Number(value || 0);
      return {
        sites: {
          total: number(sites[0].total),
          direct: number(sites[0].direct),
          franchise: number(sites[0].franchise)
        },
        accounts: { total: number(accounts[0].total), active: number(accounts[0].active) },
        vehicles: {
          total: number(vehicles[0].total),
          available: number(vehicles[0].available),
          rented: number(vehicles[0].rented),
          maintenance: number(vehicles[0].maintenance)
        }
      };
    }
  };
}
