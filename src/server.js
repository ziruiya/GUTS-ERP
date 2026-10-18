import Fastify, { LogController } from 'fastify';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import { getConfig } from './config.js';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createPool } from './db/pool.js';
import { createMysqlRepository } from './repositories/mysql-repository.js';
import { createAccountRepository } from './repositories/account-repository.js';
import { createAuthSessionRepository } from './repositories/auth-session-repository.js';
import { createAdminRepository } from './repositories/admin-repository.js';
import { createVehicleRepository } from './repositories/vehicle-repository.js';
import { createReservationRepository } from './repositories/reservation-repository.js';
import { createCustomerRepository } from './repositories/customer-repository.js';
import { createEmployeeRepository } from './repositories/employee-repository.js';
import { createParkingRepository } from './repositories/parking-repository.js';
import { createParkingRealtime } from './parking-realtime.js';
import { createParkingSyncService } from './services/parking-sync-service.js';
import { createAuthService } from './services/auth-service.js';
import { registerRoutes } from './routes.js';
import { createErrorLogger } from './error-logger.js';

export async function buildApp({ config = getConfig(), pool, logger = true, errorLogger } = {}) {
  const errors = errorLogger || createErrorLogger({
    filePath: config.errorLogPath || resolve(process.cwd(), '.runtime/erp-errors.log')
  });
  const app = Fastify({
    logger,
    logController: new LogController({ disableRequestLogging: true }),
    trustProxy: ['127.0.0.1', '::1'],
    bodyLimit: 64 * 1024
  });
  await app.register(rateLimit, { global: false });
  await app.register(jwt, {
    secret: config.jwt.secret,
    sign: { algorithm: 'HS256' },
    verify: {
      algorithms: ['HS256'],
      issuer: config.jwt.issuer,
      audience: config.jwt.audience
    }
  });
  const parkingRealtime = createParkingRealtime(app, config.publicBaseUrl);

  const webRoot = resolve(fileURLToPath(new URL('../public/', import.meta.url)));
  const [indexTemplate, appBundle, styles, serviceWorker, manifest, icon, packageJson] = await Promise.all([
    readFile(resolve(webRoot, 'index.html'), 'utf8'),
    readFile(resolve(webRoot, 'app.js')),
    readFile(resolve(webRoot, 'styles.css')),
    readFile(resolve(webRoot, 'sw.js')),
    readFile(resolve(webRoot, 'manifest.webmanifest')),
    readFile(resolve(webRoot, 'icon.svg')),
    readFile(resolve(webRoot, '..', 'package.json'), 'utf8')
  ]);
  const assetHash = (content) => createHash('sha256').update(content).digest('hex').slice(0, 12);
  const indexHtml = indexTemplate
    .replaceAll('__APP_VERSION__', JSON.parse(packageJson).version)
    .replaceAll('__APP_JS_HASH__', assetHash(appBundle))
    .replaceAll('__APP_CSS_HASH__', assetHash(styles));
  app.get('/', async (_request, reply) => reply
    .type('text/html; charset=utf-8')
    .header('Cache-Control', 'no-cache')
    .send(indexHtml));
  app.get('/assets/app.js', async (_request, reply) => reply
    .type('application/javascript; charset=utf-8')
    .header('Cache-Control', 'public, max-age=300')
    .send(appBundle));
  app.get('/assets/styles.css', async (_request, reply) => reply
    .type('text/css; charset=utf-8')
    .header('Cache-Control', 'public, max-age=3600')
    .send(styles));
  app.get('/sw.js', async (_request, reply) => reply
    .type('application/javascript; charset=utf-8')
    .header('Cache-Control', 'no-cache')
    .header('Service-Worker-Allowed', '/')
    .send(serviceWorker));
  app.get('/manifest.webmanifest', async (_request, reply) => reply
    .type('application/manifest+json; charset=utf-8')
    .header('Cache-Control', 'public, max-age=3600')
    .send(manifest));
  app.get('/icon.svg', async (_request, reply) => reply
    .type('image/svg+xml; charset=utf-8')
    .header('Cache-Control', 'public, max-age=86400')
    .send(icon));

  app.post('/api/v1/client-errors', {
    config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        required: ['type', 'message'],
        properties: {
          type: { type: 'string', enum: ['error', 'unhandledrejection', 'resource'] },
          message: { type: 'string', minLength: 1, maxLength: 2000 },
          stack: { type: 'string', maxLength: 8000 },
          source: { type: 'string', maxLength: 1000 },
          path: { type: 'string', maxLength: 300 },
          status: { type: 'integer', minimum: 100, maximum: 599 },
          line: { type: 'integer', minimum: 0 },
          column: { type: 'integer', minimum: 0 }
        }
      }
    }
  }, async (request, reply) => {
    let origin;
    try {
      origin = new URL(request.headers.origin || '').origin;
    } catch {
      return reply.code(403).send({ error: 'same_origin_required' });
    }
    if (origin !== new URL(config.publicBaseUrl).origin) {
      return reply.code(403).send({ error: 'same_origin_required' });
    }
    errors.record({
      method: 'CLIENT',
      path: request.body.path || '/',
      code: 'internal_error',
      message: request.body.message,
      stack: request.body.stack,
      source: request.body.source,
      type: request.body.type,
      status: request.body.status,
      line: request.body.line,
      column: request.body.column
    });
    return reply.code(202).send();
  });

  const mysqlPool = pool || createPool(config.database);
  const db = createMysqlRepository(mysqlPool);
  const accounts = createAccountRepository(db);
  const authSessions = createAuthSessionRepository(db);
  const admin = createAdminRepository(db);
  const parkingBoard = createParkingRepository(db);
  const vehicles = createVehicleRepository(db, parkingBoard);
  const parkingSync = createParkingSyncService({
    vehicles, parkingBoard, parkingRealtime, errorLogger: errors
  });
  const reservations = createReservationRepository(db);
  const customers = createCustomerRepository(db);
  const employees = createEmployeeRepository(db);
  const auth = createAuthService({ accounts, sessions: authSessions, jwt: app.jwt, config });
  registerRoutes(app, {
    accounts, admin, vehicles, reservations, customers, employees, auth, parkingBoard, parkingRealtime,
    parkingSync
  }, errors, () => mysqlPool.execute('SELECT 1'));

  app.setErrorHandler((error, request, reply) => {
    if (error.validation) {
      return reply.code(400).send({ error: 'invalid_request' });
    }
    if (error.code?.startsWith('FST_JWT_')) {
      return reply.code(401).send({ error: 'unauthorized' });
    }
    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
      return reply.code(400).send({ error: 'invalid_reference' });
    }
    if (error.code === 'ER_DUP_ENTRY') {
      return reply.code(409).send({ error: 'resource_conflict' });
    }
    if (error.code === 'ERP_CONFLICT') {
      return reply.code(409).send({ error: 'reservation_conflict', message: error.message });
    }
    if (error.code === 'ERP_INVALID_REFERENCE') {
      return reply.code(400).send({ error: 'invalid_reference' });
    }
    if (Number.isInteger(error.statusCode) && error.statusCode >= 400 && error.statusCode < 500) {
      return reply.code(error.statusCode).send({ error: 'invalid_request' });
    }
    errors.record({
      method: request.method,
      path: request.routeOptions.url || '/unmatched',
      code: 'internal_error',
      message: error.message,
      stack: error.stack
    });
    return reply.code(500).send({ error: 'internal_error' });
  });

  app.addHook('onClose', async () => {
    await parkingSync.close();
    await db.close();
  });
  app.decorate('parkingSync', parkingSync);
  return app;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const config = getConfig();
  const app = await buildApp({ config });
  await app.listen({ host: config.host, port: config.port });
  app.parkingSync.start();
}
