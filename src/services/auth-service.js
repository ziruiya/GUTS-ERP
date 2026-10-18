import bcrypt from 'bcryptjs';
import { createHash, randomBytes, randomUUID } from 'node:crypto';

const DUMMY_HASH = '$2b$12$abcdefghijklmnopqrstuuWqjL3sY8vx5ujL7YY9v0U8kBH8n0mQy';

export function createAuthService({ accounts, sessions, jwt, config }) {
  const tokenHash = (token) => createHash('sha256').update(token).digest('hex');
  const refreshExpiry = () => new Date(
    Date.now() + config.jwt.refreshExpiresIn * 1000
  ).toISOString().slice(0, 23).replace('T', ' ');

  function createAccessToken(account, permissions) {
    return jwt.sign({
      sub: String(account.id),
      username: account.username,
      siteId: String(account.site_id),
      siteCode: account.site_code,
      siteType: account.site_type,
      permissions
    }, {
      issuer: config.jwt.issuer,
      audience: config.jwt.audience,
      expiresIn: config.jwt.expiresIn
    });
  }

  async function createSession(account, permissions) {
    const refreshToken = randomBytes(32).toString('base64url');
    await sessions.create({
      id: randomUUID(),
      accountId: account.id,
      tokenHash: tokenHash(refreshToken),
      expiresAt: refreshExpiry()
    });
    return {
      accessToken: createAccessToken(account, permissions),
      refreshToken,
      tokenType: 'Bearer',
      expiresIn: config.jwt.expiresIn,
      account: {
        id: String(account.id),
        username: account.username,
        displayName: account.display_name,
        isAdmin: Number(account.is_owner_admin) === 1,
        site: {
          id: String(account.site_id),
          code: account.site_code,
          name: account.site_name,
          type: account.site_type
        },
        permissions
      }
    };
  }

  return {
    refreshExpiresIn: config.jwt.refreshExpiresIn,

    async login(username, password) {
      const account = await accounts.findByUsername(username);
      const validPassword = await bcrypt.compare(password, account?.password_hash || DUMMY_HASH);

      if (!account || account.status !== 'active' || account.site_status !== 'active') {
        return null;
      }
      if (account.locked_until && new Date(account.locked_until).getTime() > Date.now()) {
        return null;
      }
      if (!validPassword) {
        await accounts.recordFailedLogin(account.id);
        return null;
      }
      await accounts.clearFailedLogins(account.id);
      const permissions = await accounts.listPermissions(account.id);
      return createSession(account, permissions);
    },

    async switchToSite(siteId) {
      const account = await accounts.findActiveBySiteId(siteId);
      if (!account || account.status !== 'active' || account.site_status !== 'active' ||
          account.site_type === 'headquarters' || Number(account.is_owner_admin) === 1) {
        return null;
      }
      return createSession(account, await accounts.listPermissions(account.id));
    },

    async switchToAccount(accountId) {
      const account = await accounts.findById(accountId);
      if (!account || account.status !== 'active' || account.site_status !== 'active' ||
          account.site_type === 'headquarters' || Number(account.is_owner_admin) === 1) {
        return null;
      }
      return createSession(account, await accounts.listPermissions(account.id));
    },

    async refresh(refreshToken) {
      if (typeof refreshToken !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(refreshToken)) {
        return null;
      }
      const previousHash = tokenHash(refreshToken);
      const session = await sessions.findByTokenHash(previousHash);
      if (!session || session.status !== 'active' || session.site_status !== 'active') {
        return null;
      }
      const permissions = await accounts.listPermissions(session.account_id);
      const nextRefreshToken = randomBytes(32).toString('base64url');
      const rotated = await sessions.rotate({
        sessionId: session.session_id,
        tokenHash: previousHash,
        nextTokenHash: tokenHash(nextRefreshToken),
        expiresAt: refreshExpiry()
      });
      if (!rotated) return null;
      return {
        accessToken: createAccessToken(session, permissions),
        refreshToken: nextRefreshToken,
        tokenType: 'Bearer',
        expiresIn: config.jwt.expiresIn
      };
    },

    async revoke(refreshToken) {
      if (typeof refreshToken === 'string' && /^[A-Za-z0-9_-]{43}$/.test(refreshToken)) {
        await sessions.revoke(tokenHash(refreshToken));
      }
    }
  };
}
