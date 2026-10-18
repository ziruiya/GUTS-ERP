import { mountParkingInspection } from './parking-inspection3d.js';
import { translateText, type Language } from './i18n.js';
import { pageFromHash as parsePageFromHash, pageHash } from './page-state.js';
import {
  beginSiteSession, clearSession, isImpersonating, restoreAdminSession,
  SESSION_TOKEN_KEY
} from './session-state.js';

type Site = {
  id: string; code: string; name: string; type: string; status: string;
  has_active_account?: boolean | number;
};
type Account = {
  id: string; site_id: string; username: string; display_name: string; status: string;
  site_code: string; site_name: string; role_ids: unknown; permissions: unknown;
  is_owner_admin: boolean | number;
};
type Employee = { id: string; site_id: string; name: string; status: string };
type Vehicle = {
  id: string; registration_number: string; vin: string | null; make: string; model: string;
  model_year: number | null; inspection_expiry_date: string | null;
  statutory_inspection_date: string | null; site_id: string; status: string;
};
type ParkingVehicle = {
  id: number; plate: string; vehicle_type: string; parking_lot_id: number | null;
  position_x: number; position_y: number; status_ids: number[]; notes: string | null;
  unwashed: boolean; no_fuel: boolean; needs_repair: boolean; options: string[];
  assessment_values: Record<string, string>;
  inspection_marks: ParkingInspectionMark[];
};
type ParkingLot = {
  id: number; name: string; display_order: number; is_active: boolean; navigation_url: string;
  area_height: number; area_width: number; markings: ParkingLotMarking[];
  capacity: number | null; class_priority: string[];
};
type ParkingLotMarking = {
  id: string; x1: number; y1: number; x2: number; y2: number; color: string;
};
type ParkingStatus = { id: number; name: string; icon: string; key: string };
type ParkingClass = { id: number; name: string; color: string; display_order: number };
type ParkingAssessmentField = {
  id: number; name: string; field_type: 'rating' | 'checkbox' | 'number' | 'text';
  suffix: string; built_in_key?: string | null; group_key?: string;
};
type ParkingDamageType = {
  id: number; name: string; icon: string; color: string; built_in_key?: string | null;
};
let vehicleCreateDamageTypes: ParkingDamageType[] = [];
type ParkingStore = { id: number; name: string };
type ParkingLotDistance = {
  from_lot_id: number; to_lot_id: number; minutes: number; km: number | null;
};
type ParkingStoreLotDistance = {
  store_id: number; lot_id: number; minutes: number; km: number | null;
};
type ParkingInspectionMark = {
  id: string; damage_type_id: number; x: number; y: number;
  world_x?: number | null; world_y?: number | null; world_z?: number | null;
  world_nx?: number | null; world_ny?: number | null; world_nz?: number | null;
  name?: string; icon?: string; color?: string;
};
type ParkingJob = {
  id: number; vehicle_id: number; destination_lot_id: number; scheduled_at: string; completed: boolean;
};
type ParkingBootstrap = {
  parking_lots: ParkingLot[]; vehicles: ParkingVehicle[]; statuses: ParkingStatus[];
  vehicle_options: { id: number; name: string }[];
  vehicle_classes: ParkingClass[];
  assessment_fields: ParkingAssessmentField[];
  damage_types: ParkingDamageType[];
  stores: ParkingStore[];
  lot_distances: ParkingLotDistance[];
  store_lot_distances: ParkingStoreLotDistance[];
  jobs: ParkingJob[];
};
type ParkingVehicleCatalog = Pick<
  ParkingBootstrap,
  'parking_lots' | 'statuses' | 'vehicle_options' | 'vehicle_classes' | 'assessment_fields' | 'damage_types'
>;
const parkingVehicleFormPreview: ParkingVehicleCatalog = {
  parking_lots: [],
  vehicle_classes: [],
  vehicle_options: ['ETC', '車載器', '禁煙', '喫煙', 'ナビ', 'スタッドレス']
    .map((name, index) => ({ id: -index - 1, name })),
  statuses: [
    { id: -1, name: '洗車待ち', icon: '🫧', key: 'unwashed' },
    { id: -2, name: '給油待ち', icon: '⛽', key: 'no_fuel' },
    { id: -3, name: '要修理', icon: '🔧', key: 'needs_repair' }
  ],
  assessment_fields: [
    { id: -1, built_in_key: 'exterior', group_key: 'body', name: '外装（ボディ・塗装・鈑金）', field_type: 'rating', suffix: '' },
    { id: -2, built_in_key: 'interior', group_key: 'body', name: '内装（シート・天井・フロア）', field_type: 'rating', suffix: '' },
    { id: -3, built_in_key: 'wheels', group_key: 'body', name: 'ホイール', field_type: 'rating', suffix: '' },
    { id: -4, built_in_key: 'registration_document', group_key: 'electrical', name: '車検証', field_type: 'checkbox', suffix: '確認済み' },
    { id: -5, built_in_key: 'radio', group_key: 'electrical', name: 'ラジオ', field_type: 'checkbox', suffix: '' },
    { id: -6, built_in_key: 'navigation', group_key: 'electrical', name: 'ナビ（５年以内）', field_type: 'checkbox', suffix: '' },
    { id: -7, built_in_key: 'air_conditioning', group_key: 'electrical', name: 'エアコン', field_type: 'checkbox', suffix: '' },
    { id: -8, built_in_key: 'side_mirror', group_key: 'electrical', name: 'サイドミラー調整', field_type: 'checkbox', suffix: '' },
    { id: -9, built_in_key: 'mileage', group_key: 'basic', name: '走行距離', field_type: 'number', suffix: 'km' },
    { id: -10, built_in_key: 'registration_year', group_key: 'basic', name: '初年度登録（年）', field_type: 'number', suffix: '年' },
    { id: -11, built_in_key: 'registration_month', group_key: 'basic', name: '初年度登録（月）', field_type: 'number', suffix: '月' }
  ],
  damage_types: [
    { id: -1, built_in_key: 'scratch', name: '傷', icon: '〰️', color: '#e34b4b' },
    { id: -2, built_in_key: 'dent', name: '凹み', icon: '◉', color: '#805ad5' }
  ]
};
type Permission = { permission_key: string; description: string };
type Reservation = {
  id: string; reservation_code: string; site_id: string; site_code: string; site_name: string;
  guest_name: string; guest_phone: string; start_at: string; end_at: string;
  vehicle_id: string | null; registration_number: string | null; make: string | null;
  model: string | null; status: string; checked_out_by_employee_id: string | null;
  checked_out_by_name: string | null; returned_by_employee_id: string | null;
  returned_by_name: string | null;
};
type Customer = {
  id: string; site_id: string; name: string; name_kana: string | null; phone: string;
  email: string | null; birth_date: string | null; address: string | null;
  emergency_contact_name: string | null; emergency_contact_relationship: string | null;
  emergency_contact_phone: string | null; workplace_school: string | null;
};
type ReservationVehicle = {
  id: string; registration_number: string; make: string; model: string;
  vehicle_class: string; options: string[] | string; parking_lot_name: string | null;
};
type Profile = {
  id: string; username: string; displayName: string; isAdmin: boolean;
  site: Site; permissions: string[];
};
type Stats = {
  sites: { total: number; direct: number; franchise: number };
  accounts: { total: number; active: number };
  vehicles: { total: number; available: number; rented: number; maintenance: number };
};
type Page = 'dashboard' | 'reservations' | 'sites' | 'accounts' | 'vehicles' | 'customers' | 'parking';

const $ = <T extends HTMLElement>(selector: string, parent: ParentNode = document) =>
  parent.querySelector<T>(selector);
const root = $('#app')!;
const appVersion = document.querySelector<HTMLMetaElement>('meta[name="app-version"]')?.content ?? '不明';
const esc = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]!));
const jsonArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value !== 'string') return [];
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch { return []; }
};
const svgPaths: Record<string, string> = {
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  site: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01"/>',
  parking: '<path d="M5 21V3h8a6 6 0 0 1 0 12H5"/><path d="M9 7h4a2 2 0 0 1 0 4H9z"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  vehicle: '<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3zM5 19v2m14-2v2"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
  sites: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',
  team: '<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6"/>',
  fleet: '<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3z"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'
};
const icon = (name: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svgPaths[name] ?? svgPaths.dashboard}</svg>`;

const titles: Record<Page, string> = {
  dashboard: '運営ダッシュボード', reservations: '予約・受付', sites: '店舗管理',
  accounts: '店舗アカウント', vehicles: '車両管理', customers: 'お客様管理',
  parking: '駐車場管理'
};
const statusLabel: Record<string, string> = {
  active: '有効', disabled: '無効', inactive: '無効', available: '貸出可能', rented: '貸出中',
  maintenance: '整備中', retired: '登録抹消', headquarters: '本部', direct: '直営店',
  franchise: '加盟店', reserved: '予約済み', checked_in: '貸出中', completed: '返却済み',
  cancelled: 'キャンセル'
};
const statusTone: Record<string, string> = {
  active: 'green', available: 'green', completed: 'gray', rented: 'blue',
  checked_in: 'blue', maintenance: 'orange', reserved: 'orange', disabled: 'red',
  cancelled: 'gray', retired: 'gray'
};
const label = (value: string) => statusLabel[value] ?? value;
const badge = (value: string) => `<span class="badge badge-${statusTone[value] ?? (value === 'headquarters' ? 'blue' : 'gray')}">${esc(label(value))}</span>`;
const text = (value: unknown) => esc(value).replace(/[^\u0000-\u007F]/gu, (character) =>
  `&#${character.codePointAt(0)};`);
const moneylessDate = (value: string) => {
  const date = new Date(value);
  const locale = activeLanguage() === 'zh' ? 'zh-CN' : 'ja-JP';
  return Number.isNaN(date.getTime()) ? esc(value) : new Intl.DateTimeFormat(locale, {
    month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(date);
};
const humanError = (code: string) => ({
  invalid_credentials: 'アカウントまたはパスワードが正しくありません。',
  forbidden: 'この操作を行う権限がありません。',
  resource_conflict: '情報が重複しています。店舗コード、アカウント名、ナンバープレート、またはスタッフ名をご確認ください。',
  in_use: '車両または作業予定が残っているため、この駐車エリアは削除できません。',
  last_lot: '最後の駐車エリアは削除できません。',
  reservation_conflict: '車両または予約の状態が変更されています。画面を更新して再度お試しください。',
  password_mismatch: '新しいパスワードが一致しないか、必要な文字数を満たしていません。',
  invalid_reference: '選択した店舗、車両、スタッフ、または駐車場設定をご確認ください。',
  invalid_request: '入力内容をご確認ください。',
  internal_error: 'システムエラーが発生しました。しばらくしてから再度お試しください。',
  site_mapping_conflict: 'ERP拠点が変更された車両があります。駐車場データの拠点割当を確認してください。',
  unauthorized: 'ログインの有効期限が切れました。再度ログインしてください。',
  account_unavailable: 'アカウントまたは所属店舗が無効になっています。',
  employee_required: '担当スタッフを選択してください。',
  invalid_employee: 'スタッフ名をご確認ください。',
  account_not_found: 'アカウントが見つかりません。',
  vehicle_not_found: '車両が見つかりません。',
  reservation_not_found: '予約が見つかりません。',
  invalid_site: '店舗情報をご確認ください。',
  invalid_role: '役割情報をご確認ください。',
  invalid_account: 'アカウント情報をご確認ください。',
  unknown_permission: '選択された権限が見つかりません。',
  site_required: '店舗を選択してください。',
  invalid_reservation: '予約内容をご確認ください。',
  not_found: '対象の情報が見つかりません。'
}[code] ?? '操作を完了できませんでした。時間をおいて再度お試しください。');

let token = localStorage.getItem(SESSION_TOKEN_KEY) || '';
let profile: Profile | null = null;
let language: Language = 'ja';
const PAGE_STORAGE_KEY = 'guts_erp_current_page';
const appPages: Page[] = ['dashboard', 'reservations', 'sites', 'accounts', 'vehicles', 'customers', 'parking'];
function pageFromHash(): Page | null {
  const page = location.hash.slice(1);
  return appPages.includes(page as Page)
    ? parsePageFromHash(location.hash, appPages) as Page
    : null;
}
let currentPage: Page = pageFromHash() ?? 'dashboard';
let modal = '';
let query = '';
let offset = 0;
let statusFilter = '';
let parkingCatalogQuery = '';
let parkingClassFilter = 'all';
let parkingStatusFilter = 'all';
let parkingSettingsMarkup = '';
let cachedSites: Site[] = [];
let cachedPermissions: Permission[] = [];
let currentEmployees: Employee[] = [];
let employeeSiteId = '';
let currentReservations: Reservation[] = [];
let currentCustomers: Customer[] = [];
let currentCustomerMatches: Customer[] = [];
let customerSearchTimer = 0;
let customerSearchRequest = 0;
let availableVehicleRequest = 0;
let pendingReservationTransition: {
  reservation: Reservation; status: 'checked_in' | 'completed';
} | null = null;
let currentAccounts: Account[] = [];
let currentVehicles: Vehicle[] = [];
let isMobileNav = false;
let searchTimer = 0;
let parkingSocket: WebSocket | null = null;
let parkingReconnectTimer = 0;
const pendingInspectionMarks = new Map<number, ParkingInspectionMark[]>();
let currentParkingBoard: ParkingBootstrap | null = null;
const parkingMoveHistory: Array<{
  vehicleId: number; lotId: number | null; x: number; y: number;
}> = [];
let parkingDrag: {
  vehicleId: number; pointerId: number; source: HTMLElement; ghost: HTMLElement;
  clientX: number; clientY: number; startX: number; startY: number; moved: boolean;
  frame: number;
} | null = null;
let parkingInspection: ReturnType<typeof mountParkingInspection> | null = null;
let vehicleCreateInspectionMarks: ParkingInspectionMark[] = [];
let inspectedVehicleId: number | null = null;
let markingDrawingLotId: number | null = null;
let markingColor = '#e34b4b';
let markingDrag: { pointerId: number; lotId: number; x1: number; y1: number; svg: SVGSVGElement } | null = null;
let resizingParkingLotId: number | null = null;
let parkingResize: {
  pointerId: number; lotId: number; card: HTMLElement; map: HTMLElement; handle: HTMLElement;
  startX: number; startY: number; width: number; height: number; gridWidth: number;
  nextWidth: number; nextHeight: number;
} | null = null;

function activeLanguage(): Language {
  return profile?.isAdmin ? language : 'ja';
}
function setHtml(target: HTMLElement, html: string) {
  target.innerHTML = translateText(html, activeLanguage());
}
async function changeLanguage(next: Language) {
  if (!profile?.isAdmin) return;
  language = next;
  localStorage.setItem('guts_erp_language', language);
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'ja';
  renderShell();
  await loadPage();
}

async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Accept', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (options.body) headers.set('Content-Type', 'application/json');
  let response = await fetch(path, { ...options, headers, credentials: 'same-origin' });
  if (response.status === 401 && token) {
    const authPath = path.split('?')[0];
    if (!['/api/v1/auth/login', '/api/v1/auth/logout', '/api/v1/auth/end-site',
      '/api/v1/auth/refresh'].includes(authPath)) {
      const context = isImpersonating(localStorage) ? 'site' : 'default';
      const renewed = await refreshAccessToken(context);
      if (renewed) {
        headers.set('Authorization', `Bearer ${renewed}`);
        response = await fetch(path, { ...options, headers, credentials: 'same-origin' });
      } else if (context === 'site') {
        const ended = await fetch('/api/v1/auth/end-site', {
          method: 'POST', credentials: 'same-origin'
        });
        if (!ended.ok) throw new Error('internal_error');
        const adminSession = restoreAdminSession(localStorage);
        if (adminSession) {
          token = adminSession.token;
          localStorage.setItem(SESSION_TOKEN_KEY, token);
          if (appPages.includes(adminSession.page as Page)) {
            history.replaceState(null, '', pageHash(adminSession.page as Page));
          }
          const adminToken = await refreshAccessToken('default');
          if (adminToken) {
            window.location.reload();
            throw new Error('unauthorized');
          }
        }
      }
    }
  }
  if (response.status === 401 && token) {
    token = '';
    profile = null;
    clearSession(localStorage);
    renderLogin();
    throw new Error('unauthorized');
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || data.error || `HTTP ${response.status}`);
  return data as T;
}
async function refreshAccessToken(context: 'default' | 'site'): Promise<string | null> {
  const response = await fetch('/api/v1/auth/refresh', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ context })
  });
  if (response.status === 401) return null;
  const data = await response.json().catch(() => ({}));
  if (!response.ok || typeof data.accessToken !== 'string') {
    throw new Error(data.error || 'internal_error');
  }
  token = data.accessToken;
  localStorage.setItem(SESSION_TOKEN_KEY, token);
  return token;
}
function reportClientError(error: {
  type: 'error' | 'unhandledrejection' | 'resource';
  message: string;
  stack?: string;
  source?: string;
  path?: string;
  status?: number;
  line?: number;
  column?: number;
}) {
  void fetch('/api/v1/client-errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(error),
    keepalive: true
  }).catch((failure: unknown) => console.warn('Unable to send ERP client error report.', failure));
}
function toast(message: string, isError = false) {
  let area = $('.toast-area');
  if (!area) {
    area = document.createElement('div');
    area.className = 'toast-area';
    document.body.append(area);
  }
  const item = document.createElement('div');
  item.className = `toast${isError ? ' error' : ''}`;
  item.textContent = translateText(message, activeLanguage());
  area.append(item);
  window.setTimeout(() => item.remove(), 3600);
}
function confirmAction(message: string) {
  return window.confirm(translateText(message, activeLanguage()));
}
window.addEventListener('error', (event: ErrorEvent) => {
  const target = event.target;
  if (target instanceof Element &&
      ['AUDIO', 'EMBED', 'IFRAME', 'IMG', 'LINK', 'OBJECT', 'SCRIPT', 'SOURCE', 'TRACK', 'VIDEO']
        .includes(target.tagName)) {
    let source = target.getAttribute('src') || target.getAttribute('href') || target.getAttribute('data') || undefined;
    if (target instanceof HTMLImageElement || target instanceof HTMLMediaElement) {
      source = target.currentSrc || source;
    }
    reportClientError({
      type: 'resource',
      message: `Failed to load ${target.tagName.toLowerCase()} resource.`,
      ...(source ? { source } : {}),
      path: window.location.pathname
    });
    return;
  }
  reportClientError({
    type: 'error',
    message: event.message || 'Uncaught browser error.',
    ...(event.error instanceof Error && event.error.stack ? { stack: event.error.stack } : {}),
    ...(event.filename ? { source: event.filename } : {}),
    path: window.location.pathname,
    ...(event.lineno ? { line: event.lineno } : {}),
    ...(event.colno ? { column: event.colno } : {})
  });
}, true);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = event.reason;
  reportClientError({
    type: 'unhandledrejection',
    message: reason instanceof Error ? reason.message : String(reason),
    ...(reason instanceof Error && reason.stack ? { stack: reason.stack } : {}),
    path: window.location.pathname
  });
});
function can(permission: string) { return Boolean(profile?.permissions.includes(permission)); }
function navItems(): { page: Page; title: string; icon: string; permission?: string }[] {
  const items: { page: Page; title: string; icon: string; permission?: string }[] = [
    { page: 'dashboard', title: '運営ダッシュボード', icon: 'dashboard' },
    { page: 'reservations', title: '予約・受付', icon: 'calendar', permission: 'reservations:read' },
    { page: 'sites', title: '店舗管理', icon: 'site', permission: 'sites:read' },
    { page: 'vehicles', title: '車両管理', icon: 'vehicle', permission: 'vehicles:read' },
    { page: 'customers', title: 'お客様管理', icon: 'people', permission: 'customers:read' },
    { page: 'parking', title: '駐車場管理', icon: 'parking', permission: 'parking:read' }
  ];
  if (profile?.isAdmin) items.splice(3, 0, {
    page: 'accounts', title: '店舗アカウント', icon: 'people'
  });
  return items.filter((item) => !item.permission || can(item.permission));
}
function renderLogin() {
  document.documentElement.lang = 'ja';
  root.innerHTML = `<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="アカウント" aria-label="アカウント">
      <input name="password" type="password" autocomplete="current-password" required placeholder="パスワード" aria-label="パスワード">
      <button class="btn btn-primary" type="submit">ログイン</button>
    </form>
    <small class="app-version">バージョン ${text(appVersion)}</small>
  </main>`;
  root.onsubmit = async (event) => {
    const form = (event.target as HTMLElement).closest<HTMLFormElement>('[data-form="login"]');
    if (!form) return;
    event.preventDefault();
    const button = $<HTMLButtonElement>('button[type="submit"]', form)!;
    button.disabled = true;
    button.textContent = 'ログイン中…';
    const data = new FormData(form);
    try {
      const result = await api<{ accessToken: string }>('/api/v1/auth/login', {
        method: 'POST', body: JSON.stringify({
          username: data.get('username'), password: data.get('password')
        })
      });
      token = result.accessToken;
      clearSession(localStorage);
      localStorage.setItem(SESSION_TOKEN_KEY, token);
      await loadProfile();
    } catch (error) {
      toast(humanError((error as Error).message), true);
      button.disabled = false;
      button.textContent = 'ログイン';
    }
  };
}
async function loadProfile() {
  profile = await api<Profile>('/api/v1/auth/me');
  const savedPage = pageFromHash() ?? localStorage.getItem(PAGE_STORAGE_KEY);
  const requestedPage = appPages.includes(savedPage as Page) ? savedPage as Page : 'dashboard';
  currentPage = navItems().some((item) => item.page === requestedPage) ? requestedPage : 'dashboard';
  if (location.hash !== `#${currentPage}`) {
    history.replaceState(null, '', pageHash(currentPage));
  }
  localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
  language = profile.isAdmin && localStorage.getItem('guts_erp_language') === 'zh' ? 'zh' : 'ja';
  document.documentElement.lang = activeLanguage() === 'zh' ? 'zh-CN' : 'ja';
  renderShell();
  await loadPage();
  void connectParkingRealtime();
}
async function connectParkingRealtime() {
  if (!token || !can('parking:read') || parkingSocket) return;
  try {
    const { ticket } = await api<{ ticket: string }>('/api/v1/parking/ws-ticket', { method: 'POST' });
    if (!token || !can('parking:read')) return;
    const scheme = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(`${scheme}//${location.host}/api/v1/parking/ws?ticket=${encodeURIComponent(ticket)}`);
    parkingSocket = socket;
    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(String(event.data)) as { type?: string };
        if (message.type === 'parking:updated' && currentPage === 'parking') {
          void renderParkingBoard();
        }
      } catch {
        toast('駐車場の更新通知を読み取れませんでした。', true);
      }
    };
    socket.onclose = () => {
      if (parkingSocket === socket) parkingSocket = null;
      if (token && can('parking:read')) {
        window.clearTimeout(parkingReconnectTimer);
        parkingReconnectTimer = window.setTimeout(() => void connectParkingRealtime(), 1500);
      }
    };
    socket.onerror = () => socket.close();
  } catch (error) {
    if ((error as Error).message !== 'unauthorized') {
      toast('駐車場のリアルタイム接続に失敗しました。画面を更新して再接続してください。', true);
    }
  }
}
function renderShell() {
  if (!profile) return renderLogin();
  const menu = navItems();
  const firstName = profile.displayName.trim().slice(0, 1) || 'G';
  setHtml(root, `<div class="shell">
    <aside class="sidebar${isMobileNav ? ' open' : ''}">
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>レンタカー運営管理</small></span></a>
      <div class="nav-label">メニュー</div><nav class="nav">${menu.map((item) =>
        `<button class="nav-button${currentPage === item.page ? ' active' : ''}" data-page="${item.page}">${icon(item.icon)}<span>${item.title}</span></button>`
      ).join('')}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>所属店舗</small><strong>${text(profile.site.name)} · ${text(profile.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${text(firstName)}</span><span class="user-text"><strong>${text(profile.displayName)}</strong><small>${text(profile.username)}</small></span><button class="logout" title="ログアウト" data-action="logout">${icon('logout')}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="メニューを開く">☰</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${titles[currentPage]}</b></div><div class="top-actions">${isImpersonating(localStorage) && !profile.isAdmin ? '<button class="btn btn-sm btn-primary" data-action="return-admin">管理アカウントに戻る</button>' : ''}${profile.isAdmin ? `<div class="language-switch" role="group" aria-label="言語切替"><button class="btn btn-sm${language === 'ja' ? ' active' : ''}" data-language="ja" aria-pressed="${language === 'ja'}">日本語</button><button class="btn btn-sm${language === 'zh' ? ' active' : ''}" data-language="zh" aria-pressed="${language === 'zh'}">中文</button></div>` : ''}<span class="live"><i></i> 正常稼働中</span><button class="btn btn-sm btn-quiet" data-action="refresh">${icon('refresh')} 更新</button><small class="app-version">v${text(appVersion)}</small></div></header>
      <section class="content" id="page-content"><div class="empty">読み込み中…</div></section>
    </main>
  </div>`);
  root.onclick = handleClick;
  root.onsubmit = handleSubmit;
  root.oninput = handleInput;
  root.onchange = handleChange;
  root.onpointerdown = (event) => {
    startParkingDrag(event);
    startParkingMarking(event);
    startParkingResize(event);
  };
  root.onpointermove = (event) => {
    moveParkingDrag(event);
    moveParkingMarking(event);
    moveParkingResize(event);
  };
  root.onpointerup = (event) => {
    void finishParkingDrag(event);
    void finishParkingMarking(event);
    void finishParkingResize(event);
  };
  root.onpointercancel = (event) => {
    void finishParkingDrag(event);
    cancelParkingMarking(event);
    void finishParkingResize(event, true);
  };
}
async function loadPage() {
  try {
    switch (currentPage) {
      case 'dashboard': await renderDashboard(); break;
      case 'reservations': await renderReservations(); break;
      case 'sites': await renderSites(); break;
      case 'accounts': await renderAccounts(); break;
      case 'vehicles': await renderVehicles(); break;
      case 'customers': await renderCustomers(); break;
      case 'parking': await renderParkingBoard(); break;
    }
  } catch (error) {
    if ((error as Error).message !== 'unauthorized') {
      const content = $('#page-content');
      if (content) setHtml(content, `<div class="empty"><strong>読み込めませんでした</strong>${text(humanError((error as Error).message))}<br><br><button class="btn" data-action="refresh">${icon('refresh')} 再試行</button></div>`);
    }
  }
}
function setContent(html: string) {
  const content = $('#page-content');
  if (content) setHtml(content, html);
}
function pageHead(title: string, subtitle: string, action = '') {
  return `<div class="page-head"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="head-actions">${action}</div></div>`;
}
function statCard(title: string, number: number, foot: string, iconName: string, tone = '') {
  const locale = activeLanguage() === 'zh' ? 'zh-CN' : 'ja-JP';
  return `<article class="stat-card"><div class="stat-top">${title}<span class="stat-icon ${tone}">${icon(iconName)}</span></div><div class="stat-number">${number.toLocaleString(locale)}</div><div class="stat-foot">${foot}</div></article>`;
}
async function renderDashboard() {
  const reservationParams = new URLSearchParams({ limit: '6' });
  if (profile!.site.type === 'headquarters') reservationParams.set('siteId', profile!.site.id);
  const [stats, sitesData, reservationsData] = await Promise.all([
    api<Stats>('/api/v1/dashboard/stats'),
    can('sites:read') ? api<{ items: Site[] }>('/api/v1/sites') : Promise.resolve({ items: [] as Site[] }),
    can('reservations:read') ? api<{ items: Reservation[] }>(`/api/v1/reservations?${reservationParams}`) : Promise.resolve({ items: [] as Reservation[] })
  ]);
  cachedSites = sitesData.items;
  const upcoming = reservationsData.items.slice(0, 5);
  setContent(`${pageHead('運営ダッシュボード', `${text(profile!.site.name)} · 店舗の運営状況`,
    profile!.site.type !== 'headquarters'
      ? `<button class="btn" data-action="employee-roster" data-site-id="${text(profile!.site.id)}">${icon('team')} スタッフ名簿</button>`
      : '')}
    <div class="grid stat-grid">
      ${statCard('店舗数', stats.sites.total, `直営 ${stats.sites.direct} 店 · 加盟 ${stats.sites.franchise} 店`, 'sites')}
      ${statCard('店舗アカウント', stats.accounts.total, `有効 ${stats.accounts.active} 件`, 'team', 'green')}
      ${statCard('車両台数', stats.vehicles.total, `貸出可能 ${stats.vehicles.available} 台`, 'fleet')}
      ${statCard('貸出中', stats.vehicles.rented, `整備中 ${stats.vehicles.maintenance} 台`, 'calendar', 'orange')}
    </div>
    <div class="grid dashboard-grid">
      ${can('reservations:read') ? `<section class="panel"><div class="panel-head"><h2>最近の予約・受付</h2><button class="btn btn-sm btn-quiet" data-page="reservations">すべて表示 ${icon('arrow')}</button></div>
        ${upcoming.length ? `<div class="site-list">${upcoming.map((reservation) => `<div class="site-line"><div><div class="site-name">${text(reservation.guest_name)} <span class="secondary">${text(reservation.guest_phone)}</span></div><div class="site-meta">${moneylessDate(reservation.start_at)} &nbsp;·&nbsp; ${text(reservation.make ?? '')} ${text(reservation.model ?? '')}</div></div><span class="site-code">${text(reservation.reservation_code)}</span>${badge(reservation.status)}</div>`).join('')}</div>` : `<div class="empty">予約はありません</div>`}
      </section>` : `<section class="panel"><div class="panel-head"><h2>車両状況</h2><small>リアルタイム集計</small></div>${fleetBreakdown(stats)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${profile!.site.type === 'headquarters' ? '店舗一覧' : '所属店舗'}</h2><small>${cachedSites.length} 店舗</small></div>
        ${cachedSites.length ? `<div class="site-list">${cachedSites.slice(0, 6).map((site) => `<div class="site-line"><div><div class="site-name">${text(site.name)}</div><div class="site-meta">${text(site.code)}</div></div>${badge(site.type)}${badge(site.status)}</div>`).join('')}</div>` : `<div class="empty">店舗情報はありません</div>`}
        ${cachedSites.length > 6 ? `<button class="btn btn-sm" data-page="sites">すべての店舗を表示 ${icon('arrow')}</button>` : ''}
      </section>
      ${can('reservations:read') ? `<section class="panel"><div class="panel-head"><h2>車両状況</h2><small>リアルタイム集計</small></div>${fleetBreakdown(stats)}</section>` : ''}
    </div>`);
}
function fleetBreakdown(stats: Stats) {
  const maximum = Math.max(stats.vehicles.total, 1);
  const rows = [
    ['貸出可能', stats.vehicles.available, 'green'], ['貸出中', stats.vehicles.rented, ''],
    ['整備中', stats.vehicles.maintenance, 'orange']
  ] as const;
  return `<div class="fleet-breakdown">${rows.map(([name, count, tone]) => `<div class="fleet-row"><span>${name}</span><div class="fleet-track"><div class="fleet-fill ${tone}" style="width:${Math.min(100, count / maximum * 100)}%"></div></div><b>${count}</b></div>`).join('')}</div>`;
}
function renderToolbar(placeholder: string, filterHtml = '') {
  return `<div class="toolbar"><label class="search">${icon('search')}<input data-search placeholder="${placeholder}" value="${text(query)}"></label>${filterHtml}</div>`;
}
function pageTable(headers: string[], rows: string, emptyText: string) {
  return `<div class="table-wrap">${rows
    ? `<table class="table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`
    : `<div class="empty">${emptyText}</div>`}</div>`;
}
function pagination(total: number, pageSize = 50) {
  return `<div class="pagination"><span>${total ? offset + 1 : 0}～${offset + total}件を表示</span><div><button class="btn btn-sm" data-action="prev" ${offset <= 0 ? 'disabled' : ''}>前へ</button><button class="btn btn-sm" data-action="next" ${total < pageSize ? 'disabled' : ''}>次へ</button></div></div>`;
}
async function renderSites() {
  const result = await api<{ items: Site[] }>('/api/v1/sites');
  cachedSites = result.items;
  const items = result.items.filter((item) => `${item.name} ${item.code} ${label(item.type)}`.toLowerCase().includes(query.toLowerCase()));
  const rows = items.map((item) => {
    const switchButton = profile!.isAdmin && item.type !== 'headquarters' &&
      item.status === 'active' && Number(item.has_active_account) === 1
      ? `<button class="btn btn-sm" data-action="switch-site" data-id="${text(item.id)}">ログイン</button>`
      : '';
    return `<tr><td class="primary-cell" data-label="店舗">${text(item.name)}<span class="secondary">${text(item.code)}</span></td><td data-label="種別">${badge(item.type)}</td><td data-label="状態">${badge(item.status)}</td><td data-label="操作">${switchButton || (can('sites:write') ? '<span class="secondary">—</span>' : '')}</td></tr>`;
  }).join('');
  setContent(`${pageHead('店舗管理', '本部・直営店・加盟店を管理', can('sites:write') && profile!.site.type === 'headquarters' ? `<button class="btn btn-primary" data-modal="site">${icon('plus')} 店舗を追加</button>` : '')}
    ${renderToolbar('店舗名または店舗コードで検索')}
    ${pageTable(['店舗名 / コード', '店舗種別', '状態', '操作'], rows, '店舗が見つかりません')}`);
}
async function loadAdminLookups() {
  if (cachedSites.length && cachedPermissions.length) return;
  const [sites, permissions] = await Promise.all([
    api<{ items: Site[] }>('/api/v1/sites'),
    api<{ items: Permission[] }>('/api/v1/permissions')
  ]);
  cachedSites = sites.items;
  cachedPermissions = permissions.items;
}
async function renderAccounts() {
  await loadAdminLookups();
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (query) params.set('search', query);
  const result = await api<{ items: Account[] }>(`/api/v1/accounts?${params}`);
  currentAccounts = result.items;
  const rows = result.items.map((item) => `<tr>
    <td class="primary-cell" data-label="店舗アカウント">${text(item.site_name)}${Number(item.is_owner_admin) === 1 ? '<span class="account-admin-badge">管理者</span>' : ''}<span class="secondary">${text(item.display_name)} · ${text(item.username)}</span></td>
    <td data-label="店舗コード">${text(item.site_code)}</td>
    <td data-label="状態">${badge(item.status)}</td>
    <td data-label="操作"><div class="table-actions">${Number(item.is_owner_admin) === 1 ? '' : `<button class="btn btn-sm" data-action="edit-account" data-id="${text(item.id)}">編集</button>`}<button class="btn btn-sm" data-action="reset-account-password" data-id="${text(item.id)}">パスワード変更</button></div></td>
  </tr>`).join('');
  setContent(`${pageHead('店舗アカウント', 'すべての店舗・管理アカウントとパスワードを管理', `<button class="btn btn-primary" data-modal="account">${icon('plus')} 店舗アカウントを追加</button>`)}
    ${renderToolbar('店舗名、アカウント名で検索')}
    ${pageTable(['店舗 / アカウント', '店舗コード', '状態', '操作'], rows, 'アカウントはありません')}
    ${pagination(result.items.length)}`);
}
function siteOptions(selected = '', includeHeadquarters = false) {
  return cachedSites.filter((site) => includeHeadquarters || site.type !== 'headquarters')
    .map((site) => `<option value="${text(site.id)}" ${String(site.id) === selected ? 'selected' : ''}>${text(site.name)} · ${text(site.code)}</option>`).join('');
}
function dateInputValue(value: string | null | undefined) {
  return value ? value.slice(0, 10) : '';
}
function permissionChecks(selected: string[] = []) {
  const permissionNames: Record<string, string> = {
    'sites:read': '店舗情報の閲覧', 'sites:write': '店舗情報の管理',
    'vehicles:read': '車両情報の閲覧', 'vehicles:write': '車両情報の管理',
    'parking:read': '駐車場ボードの閲覧', 'parking:write': '駐車場ボードの操作',
    'parking:admin': '駐車場ボードの設定管理',
    'reservations:read': '予約・受付情報の閲覧',
    'reservations:write': '予約の作成、貸出・返却手続き',
    'customers:read': 'お客様情報の閲覧',
    'customers:write': 'お客様情報の管理'
  };
  const descriptions: Record<string, string> = {
    'sites:read': '店舗情報の閲覧', 'sites:write': '店舗情報の作成・管理',
    'vehicles:read': '車両情報の閲覧', 'vehicles:write': '車両情報の作成・管理',
    'parking:read': '駐車場ボードの閲覧', 'parking:write': '車両位置・業務状況の更新',
    'parking:admin': '駐車場・クラス・状態などの設定管理',
    'reservations:read': '予約情報と受付状況の閲覧',
    'reservations:write': '予約の作成、貸出・返却手続き',
    'customers:read': '店舗内のお客様情報の閲覧',
    'customers:write': '店舗内のお客様情報の作成・更新'
  };
  return `<div class="check-grid">${cachedPermissions.filter(({ permission_key }) => permission_key !== 'accounts:write').map((permission) => `<label class="check-item"><input type="checkbox" name="permissions" value="${text(permission.permission_key)}" ${selected.includes(permission.permission_key) ? 'checked' : ''}><span>${permissionNames[permission.permission_key] ?? 'その他の権限'}<small>${descriptions[permission.permission_key] ?? '権限の説明はありません'}</small></span></label>`).join('')}</div>`;
}
async function renderVehicles() {
  if (can('sites:read')) await loadSitesIfMissing();
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (profile!.site.type === 'headquarters') params.set('siteId', profile!.site.id);
  if (statusFilter) params.set('status', statusFilter);
  if (query) params.set('search', query);
  const result = await api<{ items: Vehicle[] }>(`/api/v1/vehicles?${params}`);
  currentVehicles = result.items;
  const rows = result.items.map((item) => `<tr>
    <td class="primary-cell" data-label="車両">${text(item.registration_number)}${item.make || item.model || item.model_year ? `<span class="secondary">${text(item.make)} ${text(item.model)} ${item.model_year ? `・${item.model_year}` : ''}</span>` : ''}${item.inspection_expiry_date || item.statutory_inspection_date ? `<span class="secondary vehicle-date-summary">${item.inspection_expiry_date ? `車検 ${text(dateInputValue(item.inspection_expiry_date))}` : ''}${item.inspection_expiry_date && item.statutory_inspection_date ? ' · ' : ''}${item.statutory_inspection_date ? `法定点検 ${text(dateInputValue(item.statutory_inspection_date))}` : ''}</span>` : ''}</td>
    <td data-label="店舗">${text(cachedSites.find((site) => site.id === item.site_id)?.name ??
      (profile!.site.id === item.site_id ? profile!.site.name : item.site_id))}</td>
    <td data-label="状態">${badge(item.status)}</td>
    <td data-label="操作">${can('vehicles:write') ? `<button class="btn btn-sm" data-action="edit-vehicle" data-id="${text(item.id)}">編集</button>` : ''}</td>
  </tr>`).join('');
  const filter = `<select class="filter-select" data-status><option value="">すべての状態</option>${['available','rented','maintenance','retired'].map((status) => `<option value="${status}" ${statusFilter === status ? 'selected' : ''}>${label(status)}</option>`).join('')}</select>`;
  const actions = [
    ...(can('vehicles:write') ? [
      `<button class="btn btn-primary" data-modal="vehicle">${icon('plus')} 車両を追加</button>`
    ] : [])
  ].join('');
  setContent(`${pageHead('車両管理', '車両情報と稼働状況を管理', actions)}
    ${renderToolbar('ナンバープレート、メーカー、車種で検索', filter)}
    ${pageTable(['車両 / ナンバープレート', '所属店舗', '状態', '操作'], rows, '車両が見つかりません')}
    ${pagination(result.items.length)}`);
}
async function renderCustomers() {
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (query) params.set('search', query);
  const result = await api<{ items: Customer[] }>(`/api/v1/customers?${params}`);
  currentCustomers = result.items;
  const rows = result.items.map((customer) => `<tr>
    <td class="primary-cell" data-label="お客様">${text(customer.name)}${customer.name_kana ? `<span class="secondary">${text(customer.name_kana)}</span>` : ''}</td>
    <td data-label="電話番号">${text(customer.phone)}</td>
    <td data-label="勤務先・学校">${text(customer.workplace_school ?? '—')}</td>
    <td data-label="操作">${can('customers:write') ? `<button class="btn btn-sm" data-action="edit-customer" data-id="${text(customer.id)}">編集</button>` : ''}</td>
  </tr>`).join('');
  setContent(`${pageHead('お客様管理', 'お客様の基本情報と連絡先を管理', can('customers:write') ? `<button class="btn btn-primary" data-modal="customer">${icon('plus')} お客様を追加</button>` : '')}
    ${renderToolbar('氏名、フリガナ、電話番号で検索')}
    ${pageTable(['お客様名', '電話番号', '勤務先・学校', '操作'], rows, 'お客様情報はありません')}
    ${pagination(result.items.length)}`);
}
function renderParkingCatalog(board: ParkingBootstrap) {
  const vehicles = board.vehicles.filter((vehicle) =>
    (parkingClassFilter === 'all' || vehicle.vehicle_type === parkingClassFilter) &&
    (!parkingCatalogQuery ||
      `${vehicle.plate} ${vehicle.vehicle_type} ${vehicle.options.join(' ')}`
        .toLocaleLowerCase('ja').includes(parkingCatalogQuery.toLocaleLowerCase('ja')))
  );
  const classes = ['all', ...board.vehicle_classes.map((item) => item.name)];
  return `<div class="parking-catalog-content" id="parking-catalog-content">
    <label class="parking-catalog-search">${icon('search')}<input type="search" data-parking-search
      placeholder="車番で検索" value="${text(parkingCatalogQuery)}" aria-label="車番で検索"></label>
    <div class="parking-class-filters" role="group" aria-label="車種で絞り込み">
      ${classes.map((name) => `<button type="button" class="parking-class-filter${parkingClassFilter === name ? ' active' : ''}"
        data-action="parking-class-filter" data-class="${text(name)}">${name === 'all' ? 'All' : text(name)}</button>`).join('')}
    </div>
    <div class="parking-catalog-list" aria-live="polite">
      ${vehicles.length ? vehicles.map((vehicle) => {
        const lot = board.parking_lots.find((item) => item.id === vehicle.parking_lot_id);
        const status = board.statuses.filter((item) => vehicle.status_ids.includes(item.id))
          .map((item) => `${item.icon} ${item.name}`).join('・');
        const details = [vehicle.vehicle_type, lot?.name ?? '未配置', status,
          vehicle.options.join('・')].filter(Boolean).join(' · ');
        return `<button type="button" class="parking-catalog-item" data-action="parking-focus-vehicle"
          data-id="${text(vehicle.id)}"><strong>${text(vehicle.plate)}</strong><span>${text(details)}</span></button>`;
      }).join('') : parkingCatalogQuery || parkingClassFilter !== 'all'
        ? '<p class="parking-catalog-empty">該当する車両はありません。</p>'
        : `<div class="parking-catalog-empty">車両はありません。<br>車両管理から登録してください。
          ${can('vehicles:read') ? '<button type="button" class="btn btn-sm" data-page="vehicles">車両管理へ</button>' : ''}</div>`}
    </div>
  </div>`;
}
function renderParkingStatusContent(board: ParkingBootstrap) {
  const filtered = board.vehicles.filter((vehicle) =>
    parkingStatusFilter === 'all' || vehicle.status_ids.includes(Number(parkingStatusFilter))
  );
  const filters = [{ id: 'all', label: 'すべて' }, ...board.statuses.map((status) => ({
    id: String(status.id), label: `${status.icon} ${status.name}`
  }))];
  return `<div id="parking-status-content">
    <div class="parking-status-filters" role="group" aria-label="対応ステータスで絞り込み">
      ${filters.map((filter) => `<button type="button" class="parking-status-filter${parkingStatusFilter === filter.id ? ' active' : ''}"
        data-action="parking-status-filter" data-status-id="${text(filter.id)}">${text(filter.label)}</button>`).join('')}
    </div>
    <div class="parking-status-list">
      ${filtered.length ? filtered.map((vehicle) => {
        const statuses = board.statuses.filter((status) => vehicle.status_ids.includes(status.id))
          .map((status) => `${status.icon} ${status.name}`);
        const flags = [
          vehicle.unwashed ? '洗車待ち' : '',
          vehicle.no_fuel ? '給油待ち' : '',
          vehicle.needs_repair ? '修理待ち' : ''
        ].filter(Boolean);
        const lot = board.parking_lots.find((item) => item.id === vehicle.parking_lot_id);
        return `<button type="button" class="parking-status-item" data-action="parking-focus-vehicle"
          data-id="${text(vehicle.id)}"><strong>${text(vehicle.plate)}</strong>
          <span>${text([lot?.name ?? '未配置', ...statuses, ...flags].join(' · '))}</span></button>`;
      }).join('') : '<p class="parking-catalog-empty">該当する車両はありません。</p>'}
    </div>
  </div>`;
}
async function renderParkingBoard() {
  const board = await api<ParkingBootstrap>('/api/v1/parking/bootstrap');
  currentParkingBoard = board;
  if (parkingClassFilter !== 'all' &&
      !board.vehicle_classes.some((item) => item.name === parkingClassFilter)) {
    parkingClassFilter = 'all';
  }
  if (parkingStatusFilter !== 'all' &&
      !board.statuses.some((item) => String(item.id) === parkingStatusFilter)) {
    parkingStatusFilter = 'all';
  }
  const writable = can('parking:write');
  for (const vehicle of board.vehicles) {
    if (!pendingInspectionMarks.has(vehicle.id)) {
      pendingInspectionMarks.set(vehicle.id, vehicle.inspection_marks);
    }
  }
  const controls = (vehicle: ParkingVehicle) => writable
    ? `<form class="parking-vehicle-controls" data-form="parking-vehicle" data-id="${text(vehicle.id)}">
        <label>位置 X <input name="position_x" type="number" min="0" max="1" step="0.01" value="${text(vehicle.position_x)}" required></label>
        <label>位置 Y <input name="position_y" type="number" min="0" max="1" step="0.01" value="${text(vehicle.position_y)}" required></label>
        <label>駐車区画 <select name="parking_lot_id"><option value="">未配置</option>${board.parking_lots.map((lot) =>
          `<option value="${text(lot.id)}" ${vehicle.parking_lot_id === lot.id ? 'selected' : ''}>${text(lot.name)}</option>`
        ).join('')}</select></label>
        <fieldset><legend>業務状態</legend>${board.statuses.map((status) =>
          `<label><input type="checkbox" name="status_ids" value="${text(status.id)}" ${vehicle.status_ids.includes(status.id) ? 'checked' : ''}>${text(status.icon)} ${text(status.name)}</label>`
        ).join('')}
          <label><input type="checkbox" name="unwashed" ${vehicle.unwashed ? 'checked' : ''}>洗車待ち</label>
          <label><input type="checkbox" name="no_fuel" ${vehicle.no_fuel ? 'checked' : ''}>給油待ち</label>
          <label><input type="checkbox" name="needs_repair" ${vehicle.needs_repair ? 'checked' : ''}>修理待ち</label>
        </fieldset>
        <fieldset><legend>車両オプション</legend>${board.vehicle_options.map((option) =>
          `<label><input type="checkbox" name="options" value="${text(option.name)}" ${vehicle.options.includes(option.name) ? 'checked' : ''}>${text(option.name)}</label>`
        ).join('')}</fieldset>
        ${board.assessment_fields.map((field) => {
          const value = vehicle.assessment_values[String(field.id)] ?? '';
          const input = field.field_type === 'rating'
            ? `<select data-assessment-id="${text(field.id)}"><option value="">未評価</option>${[1, 2, 3, 4, 5].map((rating) =>
              `<option value="${rating}" ${value === String(rating) ? 'selected' : ''}>${rating}</option>`
            ).join('')}</select>`
            : field.field_type === 'checkbox'
              ? `<input type="checkbox" data-assessment-id="${text(field.id)}" ${value === 'true' ? 'checked' : ''}>`
              : `<input type="${field.field_type === 'number' ? 'number' : 'text'}" ${field.field_type === 'number' ? 'step="1"' : ''} maxlength="500" data-assessment-id="${text(field.id)}" value="${text(value)}">`;
          return `<label class="assessment-input">${text(field.name)}${field.suffix ? ` (${text(field.suffix)})` : ''}${input}</label>`;
        }).join('')}
        ${board.damage_types.length ? `<fieldset class="damage-field"><legend>損傷マーカー</legend>
          <button class="btn btn-sm" type="button" data-action="parking-inspect3d" data-id="${text(vehicle.id)}">3D車両検査・損傷を編集</button>
          <div class="damage-map read-only" data-id="${text(vehicle.id)}" aria-label="損傷マーカーのプレビュー">
            <span class="damage-map-hint">3D検査で損傷位置を編集</span>
            ${(pendingInspectionMarks.get(vehicle.id) ?? []).map((mark) =>
              `<button type="button" class="damage-marker" data-action="parking-damage-remove" data-vehicle-id="${text(vehicle.id)}" data-mark-id="${text(mark.id)}" style="left:${mark.x * 100}%;top:${mark.y * 100}%;background:${text(mark.color ?? board.damage_types.find((type) => type.id === mark.damage_type_id)?.color ?? '#e34b4b')}">${text(mark.icon ?? '×')}</button>`
            ).join('')}
          </div>
        </fieldset>` : ''}
        <label>メモ <textarea name="notes" maxlength="2000">${text(vehicle.notes ?? '')}</textarea></label>
        <button class="btn btn-sm btn-primary" type="submit">配置・状態を保存</button>
      </form>`
    : `<div class="parking-statuses">${board.statuses.filter((status) => vehicle.status_ids.includes(status.id))
      .map((status) => `${text(status.icon)} ${text(status.name)}`).join('、') || '状態なし'}
      ${vehicle.inspection_marks.length ? `<div class="damage-map read-only">${vehicle.inspection_marks.map((mark) =>
        `<span class="damage-marker" style="left:${mark.x * 100}%;top:${mark.y * 100}%;background:${text(mark.color ?? '#e34b4b')}">${text(mark.icon ?? '×')}</span>`
      ).join('')}</div>` : ''}</div>`;
  const lotSections = board.parking_lots.map((lot) => {
    const vehicles = board.vehicles.filter((vehicle) => vehicle.parking_lot_id === lot.id);
    const positionedVehicles = vehicles.map((vehicle) => `<article class="parking-map-vehicle"
      data-vehicle-id="${text(vehicle.id)}"
      style="left:${vehicle.position_x * 100}%;top:${vehicle.position_y * 100}%">
      <button class="parking-drag-handle" type="button" data-parking-drag="${text(vehicle.id)}"
        aria-label="${text(vehicle.plate)}をドラッグして移動">⠿ ${text(vehicle.plate)}</button>
      <details><summary>詳細・状態</summary>${controls(vehicle)}</details>
    </article>`).join('');
    const markings = lot.markings.map((marking) =>
      `<line x1="${marking.x1 * 1000}" y1="${marking.y1 * 1000}" x2="${marking.x2 * 1000}" y2="${marking.y2 * 1000}" stroke="${text(marking.color)}" stroke-width="7" stroke-linecap="round"/>`
    ).join('');
    const lotTitle = lot.navigation_url
      ? `<a class="parking-lot-name" href="${text(lot.navigation_url)}" target="_blank" rel="noopener noreferrer">${text(lot.name)} <span aria-hidden="true">↗</span></a>`
      : `<h2 class="parking-lot-name">${text(lot.name)}</h2>`;
    return `<section class="card parking-lot" style="--parking-lot-width:${text(Math.max(30, Math.min(100, lot.area_width || 50)))}%">
      <header><div class="parking-lot-heading">${lotTitle}<span class="parking-lot-count">${lot.capacity === null ? vehicles.length : `${vehicles.length}/${lot.capacity}`} 台</span></div>
      ${can('parking:admin') ? `<div class="parking-admin-actions">
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${text(lot.id)}" data-direction="up" aria-label="上へ">↑</button>
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${text(lot.id)}" data-direction="down" aria-label="下へ">↓</button>
        <button class="btn btn-sm" data-action="parking-lot-resize" data-id="${text(lot.id)}"
          aria-pressed="${resizingParkingLotId === lot.id}">サイズ調整</button>
        <button class="btn btn-sm" data-action="parking-lot-settings" data-id="${text(lot.id)}">設定</button>
        <button class="btn btn-sm" data-action="parking-marking-toggle" data-id="${text(lot.id)}">${markingDrawingLotId === lot.id ? '線描画を終了' : '線を描く'}</button>
        <button class="btn btn-sm" data-action="parking-lot-toggle" data-id="${text(lot.id)}" data-active="${String(!lot.is_active)}">${lot.is_active ? '停止' : '再開'}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${text(lot.id)}">削除</button>
      </div>` : ''}</header>
      <div class="parking-map${lot.is_active ? '' : ' inactive'}" data-parking-map data-lot-id="${text(lot.id)}"
        style="height:${text(Math.max(160, Math.min(600, lot.area_height || 240)))}px">
        <svg class="parking-map-markings${markingDrawingLotId === lot.id ? ' editable' : ''}" data-marking-svg
          data-lot-id="${text(lot.id)}" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-label="駐車区画のライン">${markings}</svg>
        ${positionedVehicles || '<span class="parking-map-empty">ここへ車両をドラッグ</span>'}
        ${can('parking:admin') && resizingParkingLotId === lot.id
          ? `<button class="parking-resize-handle" type="button" data-parking-resize="${text(lot.id)}"
              aria-label="ドラッグして駐車エリアのサイズを変更" title="ドラッグしてサイズを変更">↘</button>` : ''}
      </div>
      ${markingDrawingLotId === lot.id ? `<div class="parking-marking-tools"><label>線の色 <input type="color" data-marking-color value="${text(markingColor)}"></label>
        <button class="btn btn-sm" data-action="parking-marking-undo" data-id="${text(lot.id)}" ${lot.markings.length ? '' : 'disabled'}>最後の線を取り消す</button>
        <span>図面内をドラッグして区画線を描きます。指を離すと保存されます。</span></div>` : ''}
      ${can('parking:write') ? '<p class="parking-map-hint">車両の⠿をドラッグして配置を変更できます。変更は自動保存されます。</p>' : '' }
    </section>`;
  }).join('');
  const unassigned = board.vehicles.filter((vehicle) => vehicle.parking_lot_id === null);
  const localTime = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000)
    .toISOString().slice(0, 16);
  const jobRows = board.jobs.map((job) => {
    const vehicle = board.vehicles.find((item) => item.id === job.vehicle_id);
    const lot = board.parking_lots.find((item) => item.id === job.destination_lot_id);
    return `<article class="parking-job${job.completed ? ' completed' : ''}">
      <div><strong>${text(vehicle?.plate ?? `#${job.vehicle_id}`)}</strong>
        <span class="secondary">${text(lot?.name ?? `#${job.destination_lot_id}`)} · ${text(job.scheduled_at)}</span></div>
      <div>${can('parking:write') ? `<button class="btn btn-sm" data-action="parking-job-toggle" data-id="${text(job.id)}" data-completed="${String(!job.completed)}">${job.completed ? '再開' : '完了'}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-job-delete" data-id="${text(job.id)}">削除</button>` : (job.completed ? '完了' : '予定')}</div>
    </article>`;
  }).join('');
  const jobContent = `${writable ? `<form class="parking-job-form" data-form="parking-job">
      <label>車両 <select name="vehicle_id" required><option value="">選択してください</option>${board.vehicles.map((vehicle) =>
        `<option value="${text(vehicle.id)}">${text(vehicle.plate)}</option>`
      ).join('')}</select></label>
      <label>送り先 <select name="destination_lot_id" required><option value="">選択してください</option>${board.parking_lots.map((lot) =>
        `<option value="${text(lot.id)}">${text(lot.name)}</option>`
      ).join('')}</select></label>
      <label>予定日時 <input name="scheduled_at" type="datetime-local" value="${text(localTime)}" required></label>
      <button class="btn btn-sm btn-primary" type="submit">予定を追加</button>
    </form>` : ''}
    <div class="parking-job-list">${jobRows || '<p class="parking-catalog-empty">予定はありません。</p>'}</div>`;
  const lotSelect = (name: string, selected?: number) => `<select name="${name}" required>
    ${board.parking_lots.map((lot) => `<option value="${text(lot.id)}" ${selected === lot.id ? 'selected' : ''}>${text(lot.name)}</option>`).join('')}
  </select>`;
  const storeSelect = (name: string, selected?: number) => `<select name="${name}" required>
    ${board.stores.map((store) => `<option value="${text(store.id)}" ${selected === store.id ? 'selected' : ''}>${text(store.name)}</option>`).join('')}
  </select>`;
  const distanceForm = (kind: 'lot-distance' | 'store-distance', first: string,
    second: string, firstId?: number, secondId?: number, minutes?: number, km?: number | null) =>
    `<form class="parking-distance-form" data-form="${kind}">
      ${kind === 'lot-distance' ? lotSelect(first, firstId) : storeSelect(first, firstId)}
      ${lotSelect(second, secondId)}
      <label>分 <input name="minutes" type="number" min="0" max="100000" step="any" value="${minutes ?? ''}"></label>
      <label>km <input name="km" type="number" min="0" max="100000" step="any" value="${km ?? ''}"></label>
      <button class="btn btn-sm" type="submit">${minutes === undefined ? '追加' : '保存'}</button>
    </form>`;
  const catalogs = can('parking:admin') ? `<section class="card parking-catalogs">
    <div><h2>車両クラス</h2><form data-form="parking-class">
      <input name="name" maxlength="40" placeholder="クラス名" required><input name="color" type="color" value="#4f86f7">
      <button class="btn btn-sm" type="submit">追加</button>
    </form>${board.vehicle_classes.map((item) => `<div class="parking-catalog-row"><span><i style="background:${text(item.color)}"></i>${text(item.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-class-delete" data-id="${text(item.id)}">削除</button></div>`).join('')}</div>
    <div class="parking-status-settings"><h2>業務状態</h2><form class="parking-status-create" data-form="parking-status">
      <input name="name" maxlength="40" placeholder="状態名" required><input name="icon" maxlength="8" placeholder="🔔">
      <button class="btn btn-sm" type="submit">追加</button>
    </form>${board.statuses.map((item) => `<form class="parking-status-edit" data-form="parking-status-edit" data-id="${text(item.id)}">
      <span class="parking-status-preview">${text(item.icon)}</span>
      <input name="name" maxlength="40" value="${text(item.name)}" aria-label="状態名" required>
      <input name="icon" maxlength="8" value="${text(item.icon)}" aria-label="アイコン">
      <button class="btn btn-sm" type="submit">保存</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-status-delete" data-id="${text(item.id)}">削除</button>
    </form>`).join('') || '<p class="empty">業務状態はありません</p>'}</div>
    <div class="parking-option-settings"><h2>車両オプション</h2><form class="parking-option-create" data-form="parking-option">
      <input name="name" maxlength="40" placeholder="オプション名" required><button class="btn btn-sm" type="submit">追加</button>
    </form>${board.vehicle_options.map((item) => `<form class="parking-option-edit" data-form="parking-option-edit" data-id="${text(item.id)}">
      <input name="name" maxlength="40" value="${text(item.name)}" aria-label="オプション名" required>
      <button class="btn btn-sm" type="submit">保存</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-option-delete" data-id="${text(item.id)}">削除</button>
    </form>`).join('') || '<p class="empty">車両オプションはありません</p>'}</div>
    <div><h2>フランチャイズ店舗 / 拠点</h2><p class="secondary">旧Parkingの店舗は現在のERP拠点に属する店舗データへ移行します。フランチャイズ拠点と店舗アカウントはERPの「店舗」「店舗アカウント」から管理してください。</p>
      <form data-form="parking-store"><input name="name" maxlength="120" placeholder="店舗名" required><button class="btn btn-sm" type="submit">追加</button></form>
      ${board.stores.map((store) => `<div class="parking-catalog-row"><span>${text(store.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-store-delete" data-id="${text(store.id)}">削除</button></div>`).join('') || '<p class="empty">店舗はありません</p>'}</div>
    <div><h2>拠点間距離</h2><p class="secondary">分を空欄にすると既存の距離を削除します。</p>
      ${distanceForm('lot-distance', 'from_lot_id', 'to_lot_id')}
      ${board.lot_distances.map((distance) => `<div class="parking-distance-row">${distanceForm('lot-distance', 'from_lot_id', 'to_lot_id',
        distance.from_lot_id, distance.to_lot_id, distance.minutes, distance.km)}</div>`).join('') || '<p class="empty">距離設定はありません</p>'}</div>
    <div><h2>店舗から駐車場まで</h2><p class="secondary">店舗と駐車場の所要時間・距離を設定します。</p>
      ${board.stores.length && board.parking_lots.length ? distanceForm('store-distance', 'store_id', 'lot_id') : '<p class="empty">店舗と駐車場を先に登録してください</p>'}
      ${board.store_lot_distances.map((distance) => `<div class="parking-distance-row">${distanceForm('store-distance', 'store_id', 'lot_id',
        distance.store_id, distance.lot_id, distance.minutes, distance.km)}</div>`).join('') || '<p class="empty">距離設定はありません</p>'}</div>
    <div><h2>査定項目</h2>${board.assessment_fields.map((field) => `<form class="parking-config-form" data-form="parking-assessment" data-id="${text(field.id)}">
      <input name="name" maxlength="120" value="${text(field.name)}" required>
      <select name="field_type">${['rating', 'checkbox', 'number', 'text'].map((type) => `<option value="${type}" ${field.field_type === type ? 'selected' : ''}>${type}</option>`).join('')}</select>
      <input name="suffix" maxlength="120" value="${text(field.suffix)}" placeholder="単位">
      ${field.built_in_key ? '<span class="secondary">標準</span>' : '<button class="btn btn-sm btn-quiet" type="button" data-action="parking-assessment-delete" data-id="' + text(field.id) + '">削除</button>'}
      <button class="btn btn-sm" type="submit">保存</button></form>`).join('')}
      <form class="parking-config-form" data-form="parking-assessment"><input name="name" maxlength="120" placeholder="査定項目名" required>
        <select name="field_type"><option value="rating">rating</option><option value="checkbox">checkbox</option><option value="number">number</option><option value="text">text</option></select>
        <input name="suffix" maxlength="120" placeholder="単位"><button class="btn btn-sm" type="submit">追加</button></form></div>
    <div><h2>損傷マーカー</h2>${board.damage_types.map((damage) => `<form class="parking-config-form" data-form="parking-damage" data-id="${text(damage.id)}">
      <input name="name" maxlength="120" value="${text(damage.name)}" required><input name="icon" maxlength="40" value="${text(damage.icon)}">
      <input name="color" type="color" value="${text(damage.color)}"><button class="btn btn-sm" type="submit">保存</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-damage-delete" data-id="${text(damage.id)}">削除</button></form>`).join('')}
      <form class="parking-config-form" data-form="parking-damage"><input name="name" maxlength="120" placeholder="損傷名" required>
        <input name="icon" maxlength="40" placeholder="⚠️"><input name="color" type="color" value="#e34b4b">
        <button class="btn btn-sm" type="submit">追加</button></form></div>
  </section>` : '';
  parkingSettingsMarkup = catalogs;
  const actionParts = [
    parkingMoveHistory.length ? '<button class="btn btn-sm" data-action="parking-move-undo">配置を取り消す</button>' : '',
    can('vehicles:read') && can('vehicles:write') && profile!.site.type === 'headquarters'
      ? '<button class="btn btn-sm" data-action="sync-parking">ERP車両を同期</button>' : '',
    can('parking:admin')
      ? `<button class="btn btn-primary" data-action="parking-location-manager">${icon('plus')} 駐車位置を管理</button>
        <button class="btn" data-action="parking-settings">駐車場設定</button>` : ''
  ].filter(Boolean);
  const actions = actionParts.join('');
  const attentionCount = board.vehicles.filter((vehicle) =>
    vehicle.status_ids.length || vehicle.unwashed || vehicle.no_fuel || vehicle.needs_repair
  ).length;
  const totalJobs = board.jobs.length;
  const pendingJobs = board.jobs.filter((job) => !job.completed).length;
  const parkingGrid = board.parking_lots.length || unassigned.length
    ? `${lotSections}${unassigned.length ? `<section class="card parking-lot parking-unassigned-lot"><header><div class="parking-lot-heading"><h2 class="parking-lot-name">未配置</h2><span class="parking-lot-count">${unassigned.length} 台</span></div></header>
      <div class="parking-map unassigned" data-parking-map data-lot-id="" style="height:auto;min-height:100px">
        ${unassigned.map((vehicle) => `<article class="parking-map-vehicle unassigned-vehicle" data-vehicle-id="${text(vehicle.id)}">
          <button class="parking-drag-handle" type="button" data-parking-drag="${text(vehicle.id)}"
            aria-label="${text(vehicle.plate)}をドラッグして移動">⠿ ${text(vehicle.plate)}</button>
          <details><summary>詳細・状態</summary>${controls(vehicle)}</details>
        </article>`).join('')}
      </div></section>` : ''}`
    : `<section class="parking-empty-state"><strong>駐車エリアがありません</strong>
      <span>「位置を管理」からエリアを追加すると、車両を配置できます。</span>
      ${can('parking:admin') ? '<button class="btn btn-sm btn-primary" data-action="parking-location-manager">位置を管理</button>' : ''}</section>`;
  setContent(`${pageHead('車両配置', '', actions)}
    <div class="parking-summary" aria-label="車両の概要">
      <div class="parking-summary-card"><span>登録車両</span><strong>${board.vehicles.length}</strong></div>
      <div class="parking-summary-card"><span>配置エリア</span><strong>${board.parking_lots.length}</strong></div>
      <div class="parking-summary-card"><span>要対応</span><strong>${attentionCount}</strong></div>
    </div>
    <section class="parking-fold"><details id="parking-status-panel">
      <summary class="parking-fold-summary"><strong>ステータス別の車両</strong><span>${board.vehicles.length} 台 <span class="parking-fold-chevron" aria-hidden="true">›</span></span></summary>
      ${renderParkingStatusContent(board)}
    </details></section>
    <section class="parking-fold"><details id="parking-job-panel">
      <summary class="parking-fold-summary"><strong>ジョブ</strong><span>未完了 ${pendingJobs} / 全 ${totalJobs} 件 <span class="parking-fold-chevron" aria-hidden="true">›</span></span></summary>
      <div class="parking-fold-content">${jobContent}</div>
    </details></section>
    ${writable ? '' : '<div class="section-note">閲覧専用です。配置を変更するには駐車場書き込み権限が必要です。</div>'}
    <div class="parking-workspace"><div class="parking-grid">${parkingGrid}</div>
      <aside class="parking-vehicle-catalog" aria-labelledby="parking-catalog-title">
        <details open><summary class="parking-catalog-heading"><strong id="parking-catalog-title">車両一覧</strong><span>${board.vehicles.length} 台 <span class="parking-fold-chevron" aria-hidden="true">⌄</span></span></summary>
          ${renderParkingCatalog(board)}
        </details>
      </aside>
    </div>`);
}
async function renderReservations() {
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (profile!.site.type === 'headquarters') params.set('siteId', profile!.site.id);
  if (statusFilter) params.set('status', statusFilter);
  if (query) params.set('search', query);
  const result = await api<{ items: Reservation[] }>(`/api/v1/reservations?${params}`);
  currentReservations = result.items;
  const rows = result.items.map((item) => {
    const action = item.status === 'reserved' && can('reservations:write')
      ? `<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${text(item.id)}">貸出手続き</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${text(item.id)}">キャンセル</button>`
      : item.status === 'checked_in' && can('reservations:write')
        ? `<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${text(item.id)}">返却手続き</button>`
        : '<span class="secondary">—</span>';
    return `<tr>
      <td class="primary-cell" data-label="予約番号">${text(item.reservation_code)}<span class="secondary">${text(item.site_name)}</span></td>
      <td data-label="お客様">${text(item.guest_name)}<span class="secondary">${text(item.guest_phone)}</span></td>
      <td data-label="利用期間">${moneylessDate(item.start_at)}<span class="secondary">～ ${moneylessDate(item.end_at)}</span></td>
      <td data-label="車両">${text(item.registration_number ?? '未割り当て')}<span class="secondary">${text(item.make ?? '')} ${text(item.model ?? '')}</span></td>
      <td data-label="状態">${badge(item.status)}${item.checked_out_by_name ? `<span class="secondary">貸出担当：${text(item.checked_out_by_name)}</span>` : ''}${item.returned_by_name ? `<span class="secondary">返却担当：${text(item.returned_by_name)}</span>` : ''}</td>
      <td data-label="受付操作">${action}</td>
    </tr>`;
  }).join('');
  const filter = `<select class="filter-select" data-status><option value="">すべての予約</option>${['reserved','checked_in','completed','cancelled'].map((status) => `<option value="${status}" ${statusFilter === status ? 'selected' : ''}>${label(status)}</option>`).join('')}</select>`;
  const actions = [
    profile!.site.type !== 'headquarters'
      ? `<button class="btn" data-action="employee-roster" data-site-id="${text(profile!.site.id)}">${icon('team')} スタッフ名簿</button>`
      : '',
    can('reservations:write')
      ? `<button class="btn btn-primary" data-modal="reservation">${icon('plus')} 予約を作成</button>`
      : ''
  ].join('');
  setContent(`${pageHead('予約・受付', '貸出・返却時に担当スタッフを記録します', actions)}
    ${renderToolbar('予約番号、お客様、ナンバープレートで検索', filter)}
    ${pageTable(['予約番号 / 店舗', 'お客様情報', '利用期間', '車両', '状態', '操作'], rows, '予約はありません。来店時に受付を登録してください')}
    ${pagination(result.items.length)}`);
}
async function openEmployeeRoster(siteId: string) {
  try {
    const site = profile?.site.id === siteId
      ? profile.site
      : (await loadSitesIfMissing(), cachedSites.find((item) => item.id === siteId));
    if (!site || site.type === 'headquarters') throw new Error('invalid_site');
    const result = await api<{ items: Employee[] }>(
      `/api/v1/employees?${new URLSearchParams({ siteId, includeDisabled: 'true' })}`
    );
    currentEmployees = result.items;
    employeeSiteId = siteId;
    modal = 'employees';
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    setHtml(overlay, `<section class="modal employee-modal" role="dialog" aria-modal="true" aria-labelledby="employee-modal-title">
      <header class="modal-head"><div><h2 id="employee-modal-title">スタッフ名簿</h2><p>${text(site.name)} · 貸出・返却の担当者選択に使います</p></div><button class="modal-close" data-action="close-modal" aria-label="閉じる">×</button></header>
      <div class="modal-body">
        <form class="employee-create" data-form="employee">
          <input type="hidden" name="siteId" value="${text(siteId)}">
          <label class="field"><span class="field-label">スタッフ名</span><input name="name" maxlength="120" required placeholder="氏名を入力"></label>
          <button class="btn btn-primary" type="submit">${icon('plus')} 追加</button>
        </form>
        <div class="employee-list">${result.items.length ? result.items.map((employee) => `<div class="employee-row">
          <span class="${employee.status === 'disabled' ? 'employee-disabled' : ''}">${text(employee.name)}${employee.status === 'disabled' ? '<small>（無効）</small>' : ''}</span>
          <div><button class="btn btn-sm" data-action="employee-edit" data-id="${text(employee.id)}">編集</button>
          <button class="btn btn-sm ${employee.status === 'active' ? 'btn-quiet' : ''}" data-action="employee-toggle" data-id="${text(employee.id)}" data-status="${employee.status === 'active' ? 'disabled' : 'active'}">${employee.status === 'active' ? '無効にする' : '再開'}</button></div>
        </div>`).join('') : '<div class="empty">スタッフ名がまだ登録されていません</div>'}</div>
      </div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">閉じる</button></footer>
    </section>`);
    root.append(overlay);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeModal();
    });
  } catch (error) {
    pendingReservationTransition = null;
    toast(humanError((error as Error).message), true);
  }
}
async function openReservationTransition(reservation: Reservation, status: 'checked_in' | 'completed') {
  const employees = await api<{ items: Employee[] }>(
    `/api/v1/employees?${new URLSearchParams({ siteId: reservation.site_id })}`
  );
  const options = employees.items.map((employee) =>
    `<option value="${text(employee.id)}">${text(employee.name)}</option>`
  ).join('');
  const actionName = status === 'checked_in' ? '貸出' : '返却';
  modalTemplate(`${actionName}手続き`, `${text(reservation.registration_number ?? '')} · 担当スタッフを選択`, `
    <input type="hidden" name="id" value="${text(reservation.id)}">
    <input type="hidden" name="status" value="${status}">
    ${selectField('employeeId', '担当スタッフ', `<option value="">スタッフを選択してください</option>${options}`)}
    ${options ? '' : `<p class="section-note">先にスタッフ名簿へ担当者を登録してください。</p><button type="button" class="btn" data-action="employee-roster" data-site-id="${text(reservation.site_id)}">スタッフ名簿を開く</button>`}
  `, 'reservation-transition', `${actionName}を確定`);
}
function field(name: string, title: string, type = 'text', value = '', placeholder = '', required = false, extra = '') {
  return `<div class="field ${extra}"><label for="f-${name}">${title}</label><input id="f-${name}" name="${name}" type="${type}" value="${text(value)}" placeholder="${text(placeholder)}" ${required ? 'required' : ''}></div>`;
}
function selectField(name: string, title: string, options: string, required = true) {
  return `<div class="field"><label for="f-${name}">${title}</label><select id="f-${name}" name="${name}" ${required ? 'required' : ''}>${options}</select></div>`;
}
function modalTemplate(title: string, subtitle: string, body: string, form: string, submit = '保存') {
  modal = form;
  const overlay = document.createElement('div');
  overlay.className = form === 'vehicle' ? 'overlay vehicle-create-overlay' : 'overlay';
  if (form === 'vehicle') {
    setHtml(overlay, `<section class="modal vehicle-create-modal" role="dialog" aria-modal="true" aria-labelledby="vehicle-create-title">
      <form data-form="${form}" class="vehicle-create-form">
        <header class="vehicle-create-header"><h2 id="vehicle-create-title">${title}</h2>
          <div class="vehicle-create-actions">
            <button type="button" class="btn vehicle-cancel" data-action="close-modal">キャンセル</button>
            <button type="submit" class="btn btn-primary vehicle-save">${submit}</button>
            <button type="button" class="vehicle-close" data-action="close-modal" aria-label="閉じる">×</button>
          </div>
        </header>
        <div class="vehicle-create-body">${body}</div>
      </form>
    </section>`);
  } else {
    setHtml(overlay, `<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${title}</h2><p>${subtitle}</p></div><button class="modal-close" data-action="close-modal" aria-label="閉じる">×</button></header><form data-form="${form}"><div class="modal-body">${body}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">キャンセル</button><button type="submit" class="btn btn-primary">${submit}</button></footer></form></section>`);
  }
  root.append(overlay);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
}
function closeModal() {
  if (modal === 'vehicle') {
    parkingInspection?.dispose();
    parkingInspection = null;
    vehicleCreateInspectionMarks = [];
    vehicleCreateDamageTypes = [];
  }
  $('.overlay')?.remove();
  modal = '';
  pendingReservationTransition = null;
}
function closeParkingRealtime() {
  window.clearTimeout(parkingReconnectTimer);
  parkingSocket?.close();
  parkingSocket = null;
}
async function switchToSite(siteId: string) {
  if (!profile?.isAdmin) return;
  const previousPage = currentPage;
  const session = await api<{ accessToken: string }>('/api/v1/auth/switch-site', {
    method: 'POST', body: JSON.stringify({ siteId })
  });
  closeParkingRealtime();
  closeParkingInspection();
  clearSiteData();
  beginSiteSession(localStorage, token, previousPage, session.accessToken);
  token = session.accessToken;
  profile = null;
  currentPage = 'dashboard';
  localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
  history.replaceState(null, '', pageHash(currentPage));
  await loadProfile();
}
async function returnToManagementAccount() {
  const response = await fetch('/api/v1/auth/end-site', {
    method: 'POST', credentials: 'same-origin'
  });
  if (!response.ok) throw new Error('internal_error');
  const adminSession = restoreAdminSession(localStorage);
  if (!adminSession) return;
  closeParkingRealtime();
  closeParkingInspection();
  clearSiteData();
  token = adminSession.token;
  const renewed = await refreshAccessToken('default');
  if (!renewed) {
    token = ''; profile = null;
    clearSession(localStorage);
    renderLogin();
    return;
  }
  const originalPage = adminSession.page;
  if (appPages.includes(originalPage as Page)) {
    currentPage = originalPage as Page;
    localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
    history.replaceState(null, '', pageHash(currentPage));
  }
  profile = null;
  await loadProfile();
}
function clearSiteData() {
  cachedSites = [];
  cachedPermissions = [];
  currentEmployees = [];
  currentReservations = [];
  currentAccounts = [];
  currentVehicles = [];
  currentParkingBoard = null;
}
function vehicleDateFields() {
  return `<section class="vehicle-dates-section" aria-labelledby="vehicle-dates-title">
    <div class="vehicle-section-heading"><h3 id="vehicle-dates-title">車検・法定点検</h3>
      <p>日付を登録すると車両情報に保存されます。</p></div>
    <div class="vehicle-dates-grid">
      <label class="field"><span class="field-label">車検満了日</span><input type="date" name="inspectionExpiryDate"></label>
      <label class="field"><span class="field-label">法定点検日</span><input type="date" name="statutoryInspectionDate"></label>
    </div>
  </section>`;
}
function vehicleParkingFields(catalog: ParkingVehicleCatalog | null, loading = false, error = false) {
  const preview = !catalog;
  const formCatalog = catalog ?? parkingVehicleFormPreview;
  const groups: Record<string, string> = {
    body: '外装・内装系', electrical: '車検証・電装系',
    basic: '基本情報', custom: '追加項目'
  };
  const assessmentControl = (item: ParkingAssessmentField, labelId: string) => {
    const id = text(item.id);
    if (item.field_type === 'rating') {
      return `<input type="hidden" data-assessment-id="${id}" ${preview ? 'disabled' : ''}>
        <div class="rating-control" role="group" aria-label="${text(item.name)}の評価">${[1, 2, 3, 4, 5].map((score) =>
          `<button type="button" data-action="vehicle-rating" data-rating-assessment-id="${id}"
              data-score="${score}" aria-label="${score}点" aria-pressed="false" ${preview ? 'disabled' : ''}>${score}</button>`
        ).join('')}</div>`;
    }
    if (item.field_type === 'checkbox') {
      return `${item.suffix ? `<span class="assessment-field-suffix">${text(item.suffix)}</span>` : ''}
          <input type="checkbox" data-assessment-id="${id}" aria-labelledby="${labelId}" ${preview ? 'disabled' : ''}>`;
    }
    const isMonth = item.built_in_key === 'registration_month';
    const isYear = item.built_in_key === 'registration_year';
    return `<input data-assessment-id="${id}"
      type="${item.field_type === 'number' ? 'number' : 'text'}"
      ${item.field_type === 'number'
        ? `min="${isMonth ? 1 : 0}" ${isMonth ? 'max="12"' : isYear ? `max="${new Date().getFullYear()}"` : 'max="999999999999"'} step="1" inputmode="numeric" maxlength="12" ${isMonth ? 'placeholder="1〜12"' : ''}`
        : 'maxlength="500"'}
      aria-labelledby="${labelId}" ${preview ? 'disabled' : ''}>${item.suffix ? `<span class="assessment-field-suffix">${text(item.suffix)}</span>` : ''}`;
  };
  const assessmentGroups = Object.entries(groups).map(([groupKey, groupLabel]) => {
    const fields = formCatalog.assessment_fields.filter((item) => (item.group_key ?? 'custom') === groupKey);
    if (!fields.length) return '';
    return `<section class="assessment-group"><h4>${groupLabel}</h4><div class="assessment-field-grid">
      ${fields.map((item) => {
        const labelId = `assessment-label-${text(item.id)}`;
        return `<div class="assessment-field">
        <span id="${labelId}">${text(item.name)}</span>
        <div class="assessment-field-control">${assessmentControl(item, labelId)}</div>
      </div>`;
      }).join('')}
    </div></section>`;
  }).join('');
  const defaultLot = formCatalog.parking_lots.find((lot) => lot.is_active);
  const defaultLocation = preview
    ? `<input type="hidden" name="parkingLotId" value="" disabled>
       <p class="default-location-note">店舗を選択すると、登録先の駐車エリアが表示されます。</p>`
    : defaultLot
    ? `<input type="hidden" name="parkingLotId" value="${text(defaultLot.id)}">
       <p class="default-location-note"><span>追加した車両は</span>「<strong>${text(defaultLot.name)}</strong>」<span>に登録されます。</span></p>`
    : `<input type="hidden" name="parkingLotId" value=""><p class="default-location-note">有効な駐車エリアがないため、車両は未配置で登録されます。</p>`;
  const catalogNotice = preview
    ? `<p class="vehicle-catalog-message" role="${loading || error ? 'status' : 'note'}">${
      error
        ? '駐車場設定を読み込めませんでした。店舗の設定を確認して再試行してください。'
        : loading
          ? '駐車場設定を読み込んでいます…'
          : '登録先の店舗の駐車場設定を読み込みます。'
    }${error ? ' <button class="btn btn-sm" type="button" data-action="vehicle-catalog-retry">再試行</button>' : ''}</p>`
    : '';
  return `<div class="vehicle-parking-form">
    ${catalogNotice}
    <div class="form-row vehicle-class-row">
      <label>クラス<select name="parkingClass" data-vehicle-class required ${preview || !formCatalog.vehicle_classes.length ? 'disabled' : ''}>
        ${formCatalog.vehicle_classes.map((item) =>
          `<option value="${text(item.name)}">${text(item.name)}</option>`
        ).join('') || `<option value="">${preview ? '店舗選択後に読み込み' : '車両クラスが登録されていません'}</option>`}
      </select></label>${defaultLocation}
    </div>
    <fieldset class="option-fields"><legend>オプション</legend><div class="status-option-list">
      ${formCatalog.vehicle_options.map((item) => `<label class="check-label">
        <input type="checkbox" name="parkingOptions" value="${text(item.name)}" ${preview ? 'disabled' : ''}>${text(item.name)}
      </label>`).join('') || '<span class="status-empty">オプションはありません。</span>'}
    </div></fieldset>
    <fieldset class="status-fields"><legend>対応ステータス</legend><div class="status-option-list">
      ${formCatalog.statuses.map((item) => `<label class="check-label">
        <input type="checkbox" name="parkingStatusIds" value="${text(item.id)}" ${preview ? 'disabled' : ''}>${text(item.icon)} ${text(item.name)}
      </label>`).join('')}
      ${formCatalog.statuses.length ? '' : '<span class="status-empty">対応ステータスはありません。</span>'}
    </div></fieldset>
    ${vehicleDateFields()}
    <section class="assessment-section">
      <h3>車両状態評価シート</h3>${assessmentGroups ||
        '<p class="assessment-empty">評価項目はありません。駐車場設定で追加できます。</p>'}
      <label class="assessment-notes-field">備考欄
        <textarea name="parkingNotes" rows="4" maxlength="5000"
          placeholder="車両について共有したいことを記録できます。" ${preview ? 'disabled' : ''}></textarea>
      </label>
    </section>
    <section class="inspection-section">
      <h3>車体の損傷位置</h3>
      ${formCatalog.damage_types.length
        ? `<div class="damage-type-palette" ${preview ? '' : 'data-vehicle-damage-palette'}>${formCatalog.damage_types.map((item) =>
          `<button class="damage-type-button" type="button" data-damage-type="${text(item.id)}"
            style="--damage-color:${text(item.color)}" ${preview ? 'disabled' : ''}>${text(item.icon)} ${text(item.name)}</button>`
        ).join('')}</div>
          <p class="inspection-hint" aria-live="polite">傷または凹みのアイコンを押したまま、3D車体の表面までドラッグしてください。</p>
          <div class="inspection-car-view" ${preview ? '' : 'data-vehicle-inspection-view'}
            ${preview ? 'role="note"' : 'role="application"'} aria-label="3D車両モデル">${
              preview ? '<p class="inspection-preview-note">店舗を選択すると3D車両モデルを読み込みます。</p>' : ''
            }</div>
          <div class="inspection-mark-list" ${preview ? '' : 'data-vehicle-inspection-marks'}></div>`
        : '<p class="assessment-empty">損傷の種類はありません。駐車場設定で追加できます。</p>'}
    </section>
  </div>`;
}
function renderVehicleParkingCatalog(
  container: HTMLElement,
  catalog: ParkingVehicleCatalog | null,
  loading = false,
  error = false
) {
  parkingInspection?.dispose();
  parkingInspection = null;
  setHtml(container, vehicleParkingFields(catalog, loading, error));
  vehicleCreateDamageTypes = catalog?.damage_types ?? [];
  const submit = container.closest('form')?.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submit) submit.disabled = loading || !catalog || !catalog.vehicle_classes.length;
  if (!catalog?.damage_types.length) return;
  const palette = $('[data-vehicle-damage-palette]', container);
  const view = $('[data-vehicle-inspection-view]', container);
  if (!palette || !view) return;
  parkingInspection = mountParkingInspection(
    view,
    catalog.damage_types,
    vehicleCreateInspectionMarks,
    (marks) => {
      vehicleCreateInspectionMarks = marks;
      renderVehicleDamageMarks(marks, catalog.damage_types, container);
    },
    palette
  );
  const canvas = $('.parking-inspection-canvas', view);
  if (canvas) canvas.setAttribute(
    'aria-label', translateText('3D車両を回転し損傷箇所をクリックして記録', activeLanguage())
  );
}
async function loadVehicleParkingCatalog(container: HTMLElement, siteId: string, siteSelect?: HTMLSelectElement) {
  vehicleCreateInspectionMarks = [];
  renderVehicleParkingCatalog(container, null, true);
  try {
    const catalog = await api<ParkingVehicleCatalog>(
      `/api/v1/parking/vehicle-catalog?${new URLSearchParams({ siteId })}`
    );
    if (siteSelect && siteSelect.value !== siteId) return;
    renderVehicleParkingCatalog(container, catalog);
  } catch (error) {
    if (siteSelect && siteSelect.value !== siteId) return;
    parkingInspection?.dispose();
    parkingInspection = null;
    renderVehicleParkingCatalog(container, null, false, true);
    const submit = container.closest('form')?.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) submit.disabled = true;
    toast(humanError((error as Error).message), true);
  }
}
function renderVehicleDamageMarks(
  marks: ParkingInspectionMark[],
  damageTypes: ParkingDamageType[],
  container: HTMLElement
) {
  const list = $('[data-vehicle-inspection-marks]', container);
  if (!list) return;
  setHtml(list, marks.length ? marks.map((mark) => {
    const type = damageTypes.find((item) => item.id === mark.damage_type_id);
    return type ? `<span class="inspection-mark-entry">${text(type.icon)} ${text(type.name)}
      <button type="button" data-action="vehicle-damage-remove" data-mark-id="${text(mark.id)}"
        aria-label="損傷マークを削除">×</button></span>` : '';
  }).join('') : '<span class="inspection-mark-empty">損傷位置はまだ記録されていません。</span>');
}
function openParkingLocations() {
  if (!can('parking:admin') || !currentParkingBoard) return;
  const board = currentParkingBoard;
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const lots = board.parking_lots.map((lot) => {
    const vehicleCount = board.vehicles.filter((vehicle) => vehicle.parking_lot_id === lot.id).length;
    const jobCount = board.jobs.filter((job) => job.destination_lot_id === lot.id).length;
    const protectedByUse = vehicleCount > 0 || jobCount > 0;
    const isLastLot = board.parking_lots.length <= 1;
    const reason = isLastLot ? '最後の駐車エリアは削除できません。'
      : protectedByUse ? `車両 ${vehicleCount} 台・作業予定 ${jobCount} 件があるため削除できません。` : '';
    return `<div class="parking-location-row"><div><strong>${text(lot.name)}</strong>
      <span class="secondary">${vehicleCount} 台 · 作業予定 ${jobCount} 件${lot.is_active ? '' : ' · 停止中'}</span>
      ${reason ? `<small>${text(reason)}</small>` : ''}</div>
      <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${text(lot.id)}"
        ${reason ? 'disabled' : ''}>削除</button></div>`;
  }).join('');
  setHtml(overlay, `<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-location-title">
    <header class="modal-head"><div><h2 id="parking-location-title">駐車位置を管理</h2>
      <p>駐車エリアの追加と削除を行います。車両や作業予定があるエリア、最後のエリアは削除できません。</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="閉じる">×</button></header>
    <div class="modal-body"><form class="card parking-lot-create" data-form="parking-lot">
      <label>駐車エリア名 <input name="name" maxlength="40" required></label>
      <label>Google Maps 案内URL <input name="navigation_url" type="url" maxlength="2000" placeholder="https://maps.google.com/…"></label>
      <button class="btn btn-sm btn-primary" type="submit">${icon('plus')} エリアを追加</button>
    </form><section class="parking-location-list" aria-label="登録済み駐車エリア">
      ${lots || '<p class="empty">駐車エリアはありません。</p>'}
    </section></div><footer class="modal-foot"><button class="btn" data-action="close-modal">閉じる</button></footer>
  </section>`);
  root.append(overlay);
  modal = 'parking-locations';
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
}
function openParkingSettings() {
  if (!can('parking:admin') || !parkingSettingsMarkup) return;
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  setHtml(overlay, `<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-settings-title">
    <header class="modal-head"><div><h2 id="parking-settings-title">駐車場設定</h2>
      <p>車両クラス、業務状態、オプション、距離、査定項目、損傷マーカーを管理します。</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="閉じる">×</button></header>
    <div class="modal-body">${parkingSettingsMarkup}</div>
    <footer class="modal-foot"><button class="btn" data-action="close-modal">閉じる</button></footer>
  </section>`);
  root.append(overlay);
  modal = 'parking-settings';
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
}
async function openModal(which: string, id = '') {
  try {
    if (['account'].includes(which)) await loadAdminLookups();
    if (which === 'site') {
      modalTemplate('店舗を追加', '直営店または加盟店を登録します', `<div class="form-grid">
        ${field('code', '店舗コード', 'text', '', '例：TKY-001', true)}
        ${selectField('type', '店舗種別', '<option value="direct">直営店</option><option value="franchise">加盟店</option>')}
        ${field('name', '店舗名', 'text', '', '店舗名を入力してください', true, 'full')}
      </div>`, 'site');
    } else if (which === 'account') {
      modalTemplate('店舗アカウントを追加', '店舗用のログインIDと利用権限を設定します', `<div class="form-grid">
        ${field('username', 'アカウント名', 'text', '', '半角英数字・記号 3～64 文字', true)}
        ${field('password', '初期パスワード', 'password', '', '12 文字以上', true)}
        ${selectField('siteId', '所属店舗', `<option value="">店舗を選択してください</option>${siteOptions()}`)}
        <div class="field full"><span class="field-label">利用権限</span>${permissionChecks()}</div>
      </div>`, 'account');
    } else if (which === 'edit-account') {
      const account = currentAccounts.find((item) => item.id === id);
      if (!account) throw new Error('not_found');
      modalTemplate('店舗アカウントを編集', `${text(account.site_name)} · ${text(account.username)}`, `<input type="hidden" name="id" value="${text(account.id)}"><div class="form-grid">
        ${selectField('status', 'アカウントの状態', `<option value="active" ${account.status === 'active' ? 'selected' : ''}>有効</option><option value="disabled" ${account.status === 'disabled' ? 'selected' : ''}>無効</option>`)}
        <div class="field full"><span class="field-label">利用権限</span>${permissionChecks(jsonArray(account.permissions))}</div>
      </div>`, 'edit-account');
    } else if (which === 'reset-account-password') {
      const account = currentAccounts.find((item) => item.id === id);
      if (!account) throw new Error('not_found');
      modalTemplate('パスワードを変更', `${text(account.site_name)} · ${text(account.username)}`, `
        <input type="hidden" name="id" value="${text(account.id)}">
        <div class="form-grid">
          <label class="field"><span class="field-label">新しいパスワード</span><input name="password" type="password" autocomplete="new-password" minlength="12" maxlength="128" placeholder="12～128 文字" required></label>
          <label class="field"><span class="field-label">新しいパスワード（確認）</span><input name="confirmPassword" type="password" autocomplete="new-password" minlength="12" maxlength="128" placeholder="もう一度入力してください" required></label>
          <p class="section-note field full">変更前にログイン済みの端末は、そのままログイン状態が続きます。</p>
        </div>`, 'reset-account-password', 'パスワードを変更');
    } else if (which === 'customer' || which === 'edit-customer') {
      const customer = which === 'edit-customer'
        ? currentCustomers.find((item) => item.id === id)
        : undefined;
      if (which === 'edit-customer' && !customer) throw new Error('not_found');
      modalTemplate(customer ? 'お客様情報を編集' : 'お客様を追加',
        '予約作成時に氏名や電話番号から検索できます。住所などは任意です。', `
          ${customer ? `<input type="hidden" name="id" value="${text(customer.id)}">` : ''}
          <div class="form-grid">
            ${field('name', '氏名', 'text', customer?.name ?? '', '氏名を入力してください', true)}
            ${field('nameKana', 'フリガナ', 'text', customer?.name_kana ?? '', 'フリガナ（任意）')}
            ${field('phone', '電話番号', 'tel', customer?.phone ?? '', '電話番号を入力してください', true)}
            ${field('email', 'メールアドレス', 'email', customer?.email ?? '', '任意')}
            ${field('birthDate', '生年月日', 'date', dateInputValue(customer?.birth_date))}
            ${field('workplaceSchool', 'お勤め先・学校', 'text', customer?.workplace_school ?? '', '任意')}
            ${field('address', '住所', 'text', customer?.address ?? '', '任意', false, 'full')}
            <div class="field full"><span class="field-label">緊急連絡先（任意）</span></div>
            ${field('emergencyContactName', '氏名', 'text', customer?.emergency_contact_name ?? '', '任意')}
            ${field('emergencyContactRelationship', '続柄', 'text', customer?.emergency_contact_relationship ?? '', '任意')}
            ${field('emergencyContactPhone', '電話番号', 'tel', customer?.emergency_contact_phone ?? '', '任意', false, 'full')}
          </div>`, customer ? 'edit-customer' : 'customer');
    } else if (which === 'employee-edit') {
      const employee = currentEmployees.find((item) => item.id === id);
      if (!employee) throw new Error('not_found');
      modalTemplate('スタッフ名を編集', '貸出・返却の記録に表示する名前を変更します', `
        <input type="hidden" name="id" value="${text(employee.id)}">
        <input type="hidden" name="siteId" value="${text(employee.site_id)}">
        ${field('name', 'スタッフ名', 'text', employee.name, '氏名を入力', true)}
      `, 'employee-edit');
    } else if (which === 'vehicle') {
      const canManageParking = can('parking:read') && can('parking:write');
      const parking = canManageParking
        ? await api<ParkingVehicleCatalog>('/api/v1/parking/vehicle-catalog') : null;
      const siteField = `<input type="hidden" name="siteId" value="${text(profile!.site.id)}">`;
      vehicleCreateInspectionMarks = [];
      vehicleCreateDamageTypes = parking?.damage_types ?? [];
      modalTemplate('車両を追加', '車両情報と駐車場情報を登録します', `<div class="vehicle-create-content">
        <div class="vehicle-registration-field">
          ${field('registrationNumber', 'ナンバー', 'text', '', '例: 品川 500 あ 1234', true)}
        </div>
        ${siteField}
        ${canManageParking ? '' : vehicleDateFields()}
        ${canManageParking ? '<div data-vehicle-parking-fields></div>' : ''}
      </div>`, 'vehicle');
      const parkingFields = $('[data-vehicle-parking-fields]');
      if (parkingFields && parking) renderVehicleParkingCatalog(parkingFields, parking);
    } else if (which === 'edit-vehicle') {
      const vehicle = currentVehicles.find((item) => item.id === id);
      if (!vehicle) throw new Error('not_found');
      if (profile!.site.type === 'headquarters') await loadSitesIfMissing();
      const siteField = profile!.site.type === 'headquarters'
        ? selectField('siteId', '所属店舗', siteOptions(vehicle.site_id, true))
        : `<input type="hidden" name="siteId" value="${text(profile!.site.id)}">`;
      modalTemplate('車両情報を編集', `${text(vehicle.registration_number)} · 固定車両IDは変更されません`, `<input type="hidden" name="id" value="${text(vehicle.id)}"><div class="form-grid">
        ${field('registrationNumber', 'ナンバープレート', 'text', vehicle.registration_number, '', true)}
        ${field('vin', '車台番号', 'text', vehicle.vin ?? '')}
        ${field('make', 'メーカー', 'text', vehicle.make)}
        ${field('model', '車種', 'text', vehicle.model)}
        ${field('modelYear', '年式', 'number', String(vehicle.model_year ?? ''))}
        ${field('inspectionExpiryDate', '車検満了日', 'date', dateInputValue(vehicle.inspection_expiry_date))}
        ${field('statutoryInspectionDate', '法定点検日', 'date', dateInputValue(vehicle.statutory_inspection_date))}
        ${siteField}
        ${selectField('status', '車両の状態', ['available','rented','maintenance','retired'].map((status) => `<option value="${status}" ${vehicle.status === status ? 'selected' : ''}>${label(status)}</option>`).join(''))}
      </div>`, 'edit-vehicle');
    } else if (which === 'reservation') {
      const defaultStart = new Date(Date.now() + 30 * 60_000);
      const defaultEnd = new Date(defaultStart.getTime() + 24 * 60 * 60_000);
      const localDate = (date: Date) => new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
      const catalog = await api<{ classes: ParkingClass[]; options: { id: number; name: string }[] }>(
        '/api/v1/reservations/vehicle-catalog'
      );
      const siteField = profile!.site.type === 'headquarters'
        ? `<input type="hidden" name="siteId" value="${text(profile!.site.id)}">`
        : '';
      modalTemplate('予約を作成', 'お客様と利用期間を登録します', `<div class="form-grid">
        <input type="hidden" name="customerId">
        <label class="field"><span class="field-label">お客様の氏名</span><input name="guestName" type="text" placeholder="氏名・フリガナで検索" data-customer-search required></label>
        <label class="field"><span class="field-label">電話番号</span><input name="guestPhone" type="tel" placeholder="電話番号で検索" data-customer-search required></label>
        <div class="customer-suggestions field full" data-customer-suggestions aria-live="polite"></div>
        ${field('startAt', '貸出予定日時', 'datetime-local', localDate(defaultStart), '', true)}
        ${field('endAt', '返却予定日時', 'datetime-local', localDate(defaultEnd), '', true)}
        ${siteField}
        ${selectField('vehicleClass', '希望クラス', `<option value="">クラスを選択してください</option>${catalog.classes.map((item) => `<option value="${text(item.name)}">${text(item.name)}</option>`).join('')}`)}
        <fieldset class="reservation-options field full"><legend class="field-label">車両の希望条件（任意）</legend>
          ${catalog.options.map((option) => `<label class="check-item"><input type="checkbox" name="reservationOptions" value="${text(option.name)}" data-reservation-filter><span>${text(option.name)}</span></label>`).join('') || '<span class="secondary">選択できる条件はありません</span>'}
        </fieldset>
        <fieldset class="available-vehicles field full"><legend class="field-label">空き車両</legend>
          <div data-available-vehicles role="status" aria-live="polite">利用日時、希望クラスを選択すると空き車両が表示されます。</div>
        </fieldset>
      </div>`, 'reservation', '予約を保存');
    } else if (which === 'parking-lot-layout') {
      const lot = currentParkingBoard?.parking_lots.find((item) => String(item.id) === id);
      if (!lot) throw new Error('not_found');
      modalTemplate('駐車エリアのレイアウト', `${text(lot.name)} · 図面サイズ、収容台数、優先クラスを設定`, `
        <input type="hidden" name="id" value="${text(lot.id)}"><div class="form-grid">
          ${field('name', 'エリア名', 'text', lot.name, '', true)}
          ${field('area_height', '図面の高さ（px）', 'number', String(lot.area_height), '160～600', true)}
          ${field('area_width', 'エリアの幅（%）', 'number', String(lot.area_width), '30～100', true)}
          ${field('capacity', '収容台数（無制限は空欄）', 'number', lot.capacity === null ? '' : String(lot.capacity), '0～1000')}
          ${field('navigation_url', 'Google Maps 案内URL', 'url', lot.navigation_url, 'https://maps.google.com/…', false, 'full')}
          ${field('class_priority', '優先車両クラス（上位からカンマ区切り）', 'text', lot.class_priority.join(', '), '', false, 'full')}
          <label class="field"><span class="field-label">稼働状態</span><select name="is_active"><option value="true" ${lot.is_active ? 'selected' : ''}>運用中</option><option value="false" ${lot.is_active ? '' : 'selected'}>停止中</option></select></label>
        </div>`, 'parking-lot-layout', 'レイアウトを保存');
    }
  } catch (error) {
    toast(humanError((error as Error).message), true);
  }
}
async function loadSitesIfMissing() {
  if (!cachedSites.length) cachedSites = (await api<{ items: Site[] }>('/api/v1/sites')).items;
}
function checkedValues(form: HTMLFormElement, name: string) {
  return [...form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)].map((item) => item.value);
}
async function searchReservationCustomers(input: HTMLInputElement) {
  const form = input.closest<HTMLFormElement>('form[data-form="reservation"]');
  const suggestions = $('[data-customer-suggestions]', form ?? document);
  if (!form || !suggestions) return;
  const term = input.value.trim();
  const requestId = ++customerSearchRequest;
  form.dataset.customerRequestId = String(requestId);
  const customerId = $<HTMLInputElement>('[name="customerId"]', form);
  if (customerId) customerId.value = '';
  if (!term) {
    currentCustomerMatches = [];
    setHtml(suggestions, '');
    return;
  }
  setHtml(suggestions, '<span class="secondary">お客様情報を検索しています…</span>');
  try {
    const response = await api<{ items: Customer[] }>(
      `/api/v1/customers?${new URLSearchParams({ search: term, limit: '8' })}`
    );
    if (!document.body.contains(form) || input.value.trim() !== term ||
        form.dataset.customerRequestId !== String(requestId)) return;
    currentCustomerMatches = response.items;
    setHtml(suggestions, response.items.length
      ? `<span class="field-label">登録済みのお客様</span><div class="customer-suggestion-list">${response.items.map((customer) =>
        `<button type="button" class="customer-suggestion" data-action="customer-select" data-id="${text(customer.id)}">
          <strong>${text(customer.name)}</strong>${customer.name_kana ? `<span>${text(customer.name_kana)}</span>` : ''}
          <small>${text(customer.phone)}</small></button>`
      ).join('')}</div>`
      : '<span class="secondary">該当するお客様はいません。予約保存時に氏名と電話番号で新規登録します。</span>');
  } catch (error) {
    if (!document.body.contains(form) || form.dataset.customerRequestId !== String(requestId)) return;
    setHtml(suggestions, `<span class="field-error">${text(humanError((error as Error).message))}</span>`);
    toast(humanError((error as Error).message), true);
  }
}
async function refreshReservationVehicles(form: HTMLFormElement) {
  const output = $('[data-available-vehicles]', form);
  if (!output) return;
  const requestId = ++availableVehicleRequest;
  form.dataset.vehicleRequestId = String(requestId);
  const selectedVehicleId = $<HTMLInputElement>('[name="vehicleId"]:checked', form)?.value ?? '';
  const values = new FormData(form);
  const vehicleClass = String(values.get('vehicleClass') ?? '').trim();
  const startAt = new Date(String(values.get('startAt') ?? ''));
  const endAt = new Date(String(values.get('endAt') ?? ''));
  if (!vehicleClass || !Number.isFinite(startAt.getTime()) ||
      !Number.isFinite(endAt.getTime()) || startAt >= endAt) {
    setHtml(output, '利用日時、希望クラスを選択すると空き車両が表示されます。');
    return;
  }
  setHtml(output, '<span class="secondary">条件に合う空き車両を検索しています…</span>');
  const params = new URLSearchParams({
    startAt: startAt.toISOString(),
    endAt: endAt.toISOString(),
    vehicleClass
  });
  checkedValues(form, 'reservationOptions').forEach((option) => params.append('options', option));
  try {
    const response = await api<{ items: ReservationVehicle[] }>(
      `/api/v1/reservations/available-vehicles?${params}`
    );
    if (!document.body.contains(form) || form.dataset.vehicleRequestId !== String(requestId)) return;
    setHtml(output, response.items.length
      ? `<div class="available-vehicle-list">${response.items.map((vehicle) => `<label class="available-vehicle">
          <input type="radio" name="vehicleId" value="${text(vehicle.id)}" required ${vehicle.id === selectedVehicleId ? 'checked' : ''}>
          <span><strong>${text(vehicle.registration_number)} · ${text(vehicle.vehicle_class)}</strong>
          <small>${text([vehicle.make, vehicle.model].filter(Boolean).join(' '))} · ${text(vehicle.parking_lot_name ?? '未配置')}</small></span>
        </label>`).join('')}</div>`
      : '<span class="secondary">条件に合う空き車両はありません。</span>');
  } catch (error) {
    if (!document.body.contains(form) || form.dataset.vehicleRequestId !== String(requestId)) return;
    setHtml(output, `<span class="field-error">${text(humanError((error as Error).message))}</span>`);
    toast(humanError((error as Error).message), true);
  }
}
function closeParkingInspection() {
  parkingInspection?.dispose();
  parkingInspection = null;
  inspectedVehicleId = null;
  $('.parking-inspection-overlay')?.remove();
}
function openParkingInspection(vehicleId: number) {
  const board = currentParkingBoard;
  const vehicle = board?.vehicles.find((item) => item.id === vehicleId);
  if (!board || !vehicle || !board.damage_types.length) return;
  closeParkingInspection();
  const overlay = document.createElement('div');
  overlay.className = 'parking-inspection-overlay';
  setHtml(overlay, `<section class="parking-inspection-dialog" role="dialog" aria-modal="true">
    <header><div><h2>3D車両検査</h2><p>${text(vehicle.plate)} · ドラッグで360°回転。種類を選んで車体をクリックすると記録、マーカーをクリックすると削除します。</p></div>
      <button class="btn btn-sm" type="button" data-action="parking-inspect3d-close">閉じる</button></header>
    <div class="parking-inspection-palette">${board.damage_types.map((type) =>
      `<button type="button" data-damage-type="${text(type.id)}" style="--damage-color:${text(type.color)}">${text(type.icon)} ${text(type.name)}</button>`
    ).join('')}</div>
    <div class="parking-inspection-view"></div>
  </section>`);
  root.append(overlay);
  inspectedVehicleId = vehicleId;
  parkingInspection = mountParkingInspection(
    $('.parking-inspection-view', overlay)!,
    board.damage_types,
    pendingInspectionMarks.get(vehicleId) ?? vehicle.inspection_marks,
    (marks) => pendingInspectionMarks.set(vehicleId, marks),
    $('.parking-inspection-palette', overlay)!
  );
  const inspectionCanvas = $('.parking-inspection-canvas', overlay);
  if (inspectionCanvas) inspectionCanvas.setAttribute(
    'aria-label', translateText('3D車両を回転し損傷箇所をクリックして記録', activeLanguage())
  );
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeParkingInspection();
  });
}
function startParkingDrag(event: PointerEvent) {
  const handle = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-parking-drag]');
  if (!handle || !can('parking:write') || !currentParkingBoard || event.button !== 0 || parkingDrag) return;
  const vehicleId = Number(handle.dataset.parkingDrag);
  const source = handle.closest<HTMLElement>('.parking-map-vehicle');
  const vehicle = currentParkingBoard.vehicles.find((item) => item.id === vehicleId);
  if (!source || !vehicle) return;
  event.preventDefault();
  const ghost = handle.cloneNode(true) as HTMLElement;
  ghost.className = 'parking-drag-ghost';
  ghost.style.left = `${event.clientX}px`;
  ghost.style.top = `${event.clientY}px`;
  document.body.append(ghost);
  parkingDrag = {
    vehicleId, pointerId: event.pointerId, source, ghost,
    clientX: event.clientX, clientY: event.clientY,
    startX: event.clientX, startY: event.clientY, moved: false, frame: 0
  };
  handle.setPointerCapture(event.pointerId);
  parkingDrag.frame = requestAnimationFrame(autoScrollParkingMap);
}
function startParkingResize(event: PointerEvent) {
  const handle = (event.target as HTMLElement).closest<HTMLElement>('[data-parking-resize]');
  if (!handle || !can('parking:admin') || !currentParkingBoard || event.button !== 0 || parkingResize) return;
  const lotId = Number(handle.dataset.parkingResize);
  const lot = currentParkingBoard.parking_lots.find((item) => item.id === lotId);
  const card = handle.closest<HTMLElement>('.parking-lot');
  const map = $('[data-parking-map]', card ?? document);
  const grid = $('.parking-grid');
  if (!lot || !card || !map || !grid) return;
  const gridWidth = grid.getBoundingClientRect().width;
  if (!gridWidth) return;
  event.preventDefault();
  event.stopPropagation();
  parkingResize = {
    pointerId: event.pointerId, lotId, card, map, handle,
    startX: event.clientX, startY: event.clientY,
    width: lot.area_width, height: lot.area_height, gridWidth,
    nextWidth: lot.area_width, nextHeight: lot.area_height
  };
  handle.setPointerCapture(event.pointerId);
  card.classList.add('parking-lot-resizing');
}
function moveParkingResize(event: PointerEvent) {
  if (!parkingResize || event.pointerId !== parkingResize.pointerId) return;
  const nextWidth = Math.max(30, Math.min(100,
    Math.round(parkingResize.width +
      (event.clientX - parkingResize.startX) / parkingResize.gridWidth * 100)));
  const nextHeight = Math.max(160, Math.min(600,
    Math.round(parkingResize.height + event.clientY - parkingResize.startY)));
  parkingResize.nextWidth = nextWidth;
  parkingResize.nextHeight = nextHeight;
  parkingResize.card.style.setProperty('--parking-lot-width', `${nextWidth}%`);
  parkingResize.map.style.height = `${nextHeight}px`;
}
async function finishParkingResize(event: PointerEvent, cancelled = false) {
  if (!parkingResize || event.pointerId !== parkingResize.pointerId) return;
  const resize = parkingResize;
  parkingResize = null;
  resize.card.classList.remove('parking-lot-resizing');
  const lot = currentParkingBoard?.parking_lots.find((item) => item.id === resize.lotId);
  if (cancelled || !lot) {
    resize.card.style.setProperty('--parking-lot-width', `${resize.width}%`);
    resize.map.style.height = `${resize.height}px`;
    return;
  }
  if (resize.nextWidth === resize.width && resize.nextHeight === resize.height) return;
  try {
    await api(`/api/v1/parking/lots/${resize.lotId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        area_width: resize.nextWidth, area_height: resize.nextHeight
      })
    });
    await renderParkingBoard();
  } catch (error) {
    toast(humanError((error as Error).message), true);
    resize.card.style.setProperty('--parking-lot-width', `${resize.width}%`);
    resize.map.style.height = `${resize.height}px`;
  }
}
function autoScrollParkingMap() {
  if (!parkingDrag) return;
  parkingDrag.frame = requestAnimationFrame(autoScrollParkingMap);
  if (!parkingDrag.moved) return;
  const edge = Math.min(90, window.innerHeight * 0.14);
  const y = parkingDrag.clientY;
  const delta = y < edge ? -Math.ceil(18 * (1 - y / edge))
    : y > window.innerHeight - edge
      ? Math.ceil(18 * (1 - (window.innerHeight - y) / edge)) : 0;
  if (delta) window.scrollBy(0, delta);
}
function moveParkingDrag(event: PointerEvent) {
  if (!parkingDrag || event.pointerId !== parkingDrag.pointerId) return;
  parkingDrag.clientX = event.clientX;
  parkingDrag.clientY = event.clientY;
  if (Math.abs(event.clientX - parkingDrag.startX) +
      Math.abs(event.clientY - parkingDrag.startY) > 5) parkingDrag.moved = true;
  if (!parkingDrag.moved) return;
  parkingDrag.ghost.style.left = `${event.clientX}px`;
  parkingDrag.ghost.style.top = `${event.clientY}px`;
  document.querySelectorAll('.parking-map.drop-target').forEach((map) =>
    map.classList.remove('drop-target'));
  document.elementFromPoint(event.clientX, event.clientY)
    ?.closest<HTMLElement>('[data-parking-map]')?.classList.add('drop-target');
}
function mapMarkPosition(svg: SVGSVGElement, clientX: number, clientY: number) {
  const rect = svg.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)),
    y: Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
  };
}
function startParkingMarking(event: PointerEvent) {
  const svg = (event.target as HTMLElement).closest<SVGSVGElement>('svg[data-marking-svg].editable');
  if (!svg || !can('parking:admin') || markingDrawingLotId !== Number(svg.dataset.lotId) ||
      event.button !== 0 || !currentParkingBoard) return;
  const point = mapMarkPosition(svg, event.clientX, event.clientY);
  event.preventDefault();
  markingDrag = {
    pointerId: event.pointerId, lotId: Number(svg.dataset.lotId),
    x1: point.x, y1: point.y, svg
  };
  svg.setPointerCapture(event.pointerId);
  const preview = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  preview.classList.add('parking-marking-preview');
  preview.dataset.draftMarking = 'true';
  preview.setAttribute('x1', String(point.x * 1000));
  preview.setAttribute('y1', String(point.y * 1000));
  preview.setAttribute('x2', String(point.x * 1000));
  preview.setAttribute('y2', String(point.y * 1000));
  preview.setAttribute('stroke', markingColor);
  preview.setAttribute('stroke-width', '7');
  preview.setAttribute('stroke-linecap', 'round');
  svg.append(preview);
}
function moveParkingMarking(event: PointerEvent) {
  if (!markingDrag || markingDrag.pointerId !== event.pointerId) return;
  const point = mapMarkPosition(markingDrag.svg, event.clientX, event.clientY);
  const preview = markingDrag.svg.querySelector('[data-draft-marking="true"]');
  preview?.setAttribute('x2', String(point.x * 1000));
  preview?.setAttribute('y2', String(point.y * 1000));
}
async function finishParkingMarking(event: PointerEvent) {
  if (!markingDrag || markingDrag.pointerId !== event.pointerId) return;
  const drag = markingDrag;
  markingDrag = null;
  const preview = drag.svg.querySelector('[data-draft-marking="true"]');
  preview?.remove();
  const point = mapMarkPosition(drag.svg, event.clientX, event.clientY);
  if (Math.hypot(point.x - drag.x1, point.y - drag.y1) < 0.005) return;
  const lot = currentParkingBoard?.parking_lots.find((item) => item.id === drag.lotId);
  if (!lot) return;
  const marking: ParkingLotMarking = {
    id: crypto.randomUUID(), x1: drag.x1, y1: drag.y1,
    x2: point.x, y2: point.y, color: markingColor
  };
  try {
    await api(`/api/v1/parking/lots/${lot.id}`, {
      method: 'PATCH', body: JSON.stringify({ markings: [...lot.markings, marking] })
    });
    await renderParkingBoard();
  } catch (error) { toast(humanError((error as Error).message), true); }
}
function cancelParkingMarking(event: PointerEvent) {
  if (!markingDrag || markingDrag.pointerId !== event.pointerId) return;
  markingDrag.svg.querySelector('[data-draft-marking="true"]')?.remove();
  markingDrag = null;
}
async function finishParkingDrag(event: PointerEvent) {
  if (!parkingDrag || event.pointerId !== parkingDrag.pointerId) return;
  const drag = parkingDrag;
  parkingDrag = null;
  cancelAnimationFrame(drag.frame);
  drag.ghost.remove();
  document.querySelectorAll('.parking-map.drop-target').forEach((map) =>
    map.classList.remove('drop-target'));
  if (!drag.moved) return;
  const target = document.elementFromPoint(event.clientX, event.clientY)
    ?.closest<HTMLElement>('[data-parking-map]');
  const vehicle = currentParkingBoard?.vehicles.find((item) => item.id === drag.vehicleId);
  if (!target || !vehicle) return;
  const rect = target.getBoundingClientRect();
  const lotId = target.dataset.lotId ? Number(target.dataset.lotId) : null;
  const x = lotId === null ? vehicle.position_x
    : Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = lotId === null ? vehicle.position_y
    : Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  const previous = {
    vehicleId: vehicle.id, lotId: vehicle.parking_lot_id,
    x: vehicle.position_x, y: vehicle.position_y
  };
  try {
    await api(`/api/v1/parking/vehicles/${vehicle.id}`, {
      method: 'PATCH', body: JSON.stringify({ parking_lot_id: lotId, position_x: x, position_y: y })
    });
    parkingMoveHistory.push(previous);
    await renderParkingBoard();
  } catch (error) {
    toast(humanError((error as Error).message), true);
  }
}
async function handleSubmit(event: Event) {
  const form = (event.target as HTMLElement).closest<HTMLFormElement>('form[data-form]');
  if (!form) return;
  event.preventDefault();
  const kind = form.dataset.form!;
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? '').trim();
  const submit = $<HTMLButtonElement>('button[type="submit"]', form);
  if (submit) submit.setAttribute('disabled', 'true');
  try {
    if (kind === 'site') {
      await api('/api/v1/sites', { method: 'POST', body: JSON.stringify({ code: value('code'), name: value('name'), type: value('type') }) });
    } else if (kind === 'account') {
      await api('/api/v1/accounts', { method: 'POST', body: JSON.stringify({
        siteId: value('siteId'), username: value('username'),
        password: value('password'), permissions: checkedValues(form, 'permissions')
      }) });
    } else if (kind === 'edit-account') {
      const payload: Record<string, unknown> = {
        status: value('status'),
        permissions: checkedValues(form, 'permissions')
      };
      await api(`/api/v1/accounts/${encodeURIComponent(value('id'))}`, { method: 'PATCH', body: JSON.stringify(payload) });
    } else if (kind === 'reset-account-password') {
      const password = String(data.get('password') ?? '');
      const confirmPassword = String(data.get('confirmPassword') ?? '');
      if (password.length < 12 || password.length > 128 || password !== confirmPassword) {
        throw new Error('password_mismatch');
      }
      await api(`/api/v1/accounts/${encodeURIComponent(value('id'))}/password`, {
        method: 'PATCH', body: JSON.stringify({ password })
      });
    } else if (kind === 'employee') {
      await api('/api/v1/employees', {
        method: 'POST', body: JSON.stringify({ siteId: value('siteId'), name: value('name') })
      });
      const siteId = value('siteId');
      const transition = pendingReservationTransition;
      pendingReservationTransition = null;
      closeModal();
      toast('スタッフ名を追加しました。');
      if (transition) await openReservationTransition(transition.reservation, transition.status);
      else await openEmployeeRoster(siteId);
      return;
    } else if (kind === 'employee-edit') {
      await api(`/api/v1/employees/${encodeURIComponent(value('id'))}`, {
        method: 'PATCH', body: JSON.stringify({ siteId: value('siteId'), name: value('name') })
      });
      const siteId = value('siteId');
      closeModal();
      toast('スタッフ名を更新しました。');
      await openEmployeeRoster(siteId);
      return;
    } else if (kind === 'customer' || kind === 'edit-customer') {
      const customerPayload = {
        name: value('name'),
        nameKana: value('nameKana') || null,
        phone: value('phone'),
        email: value('email') || null,
        birthDate: value('birthDate') || null,
        address: value('address') || null,
        emergencyContactName: value('emergencyContactName') || null,
        emergencyContactRelationship: value('emergencyContactRelationship') || null,
        emergencyContactPhone: value('emergencyContactPhone') || null,
        workplaceSchool: value('workplaceSchool') || null
      };
      await api(kind === 'customer'
        ? '/api/v1/customers'
        : `/api/v1/customers/${encodeURIComponent(value('id'))}`, {
        method: kind === 'customer' ? 'POST' : 'PATCH',
        body: JSON.stringify(customerPayload)
      });
    } else if (kind === 'reservation-transition') {
      await api(`/api/v1/reservations/${encodeURIComponent(value('id'))}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: value('status'), employeeId: value('employeeId') })
      });
    } else if (kind === 'vehicle') {
      const vehiclePayload: Record<string, unknown> = {
        registrationNumber: value('registrationNumber'),
        inspectionExpiryDate: value('inspectionExpiryDate') || null,
        statutoryInspectionDate: value('statutoryInspectionDate') || null,
        siteId: value('siteId')
      };
      if (can('parking:read') && can('parking:write')) {
        vehiclePayload.parkingClass = value('parkingClass');
        vehiclePayload.parkingOptions = checkedValues(form, 'parkingOptions');
        vehiclePayload.parkingNotes = value('parkingNotes').trim();
        vehiclePayload.parkingLotId = value('parkingLotId') ? Number(value('parkingLotId')) : null;
        vehiclePayload.parkingStatusIds = checkedValues(form, 'parkingStatusIds').map(Number);
        vehiclePayload.parkingUnwashed = Boolean(data.get('parkingUnwashed'));
        vehiclePayload.parkingNoFuel = Boolean(data.get('parkingNoFuel'));
        vehiclePayload.parkingNeedsRepair = Boolean(data.get('parkingNeedsRepair'));
        vehiclePayload.parkingAssessmentValues = Object.fromEntries(
          [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-assessment-id]')]
            .map((input) => [
              input.dataset.assessmentId!,
              input instanceof HTMLInputElement && input.type === 'checkbox' ? input.checked : input.value
            ])
        );
        vehiclePayload.parkingInspectionMarks = vehicleCreateInspectionMarks.map((mark) => ({
          id: mark.id, damage_type_id: mark.damage_type_id, x: mark.x, y: mark.y,
          ...(typeof mark.world_x === 'number' && typeof mark.world_y === 'number' &&
              typeof mark.world_z === 'number'
            ? { world_x: mark.world_x, world_y: mark.world_y, world_z: mark.world_z } : {}),
          ...(typeof mark.world_nx === 'number' && typeof mark.world_ny === 'number' &&
              typeof mark.world_nz === 'number'
            ? { world_nx: mark.world_nx, world_ny: mark.world_ny, world_nz: mark.world_nz } : {})
        }));
      }
      await api('/api/v1/vehicles', { method: 'POST', body: JSON.stringify(vehiclePayload) });
    } else if (kind === 'edit-vehicle') {
      await api(`/api/v1/vehicles/${encodeURIComponent(value('id'))}`, { method: 'PATCH', body: JSON.stringify({
        registrationNumber: value('registrationNumber'), vin: value('vin') || null,
        make: value('make'), model: value('model'), modelYear: value('modelYear') ? Number(value('modelYear')) : null,
        inspectionExpiryDate: value('inspectionExpiryDate') || null,
        statutoryInspectionDate: value('statutoryInspectionDate') || null,
        siteId: value('siteId'), status: value('status')
      }) });
    } else if (kind === 'reservation') {
      const startAt = new Date(value('startAt'));
      const endAt = new Date(value('endAt'));
      if (!Number.isFinite(startAt.getTime()) || !Number.isFinite(endAt.getTime()) || startAt >= endAt) {
        throw new Error('貸出日時と返却日時を正しく入力してください。');
      }
      const payload: Record<string, unknown> = {
        guestName: value('guestName'), guestPhone: value('guestPhone'),
        startAt: startAt.toISOString(), endAt: endAt.toISOString(), vehicleId: value('vehicleId')
      };
      if (value('customerId')) payload.customerId = value('customerId');
      if (profile!.site.type === 'headquarters') payload.siteId = value('siteId');
      await api('/api/v1/reservations', { method: 'POST', body: JSON.stringify(payload) });
    } else if (kind === 'parking-vehicle') {
      const positionX = Number(value('position_x'));
      const positionY = Number(value('position_y'));
      if (!Number.isFinite(positionX) || !Number.isFinite(positionY) ||
          positionX < 0 || positionX > 1 || positionY < 0 || positionY > 1) {
        throw new Error('invalid_request');
      }
      await api(`/api/v1/parking/vehicles/${encodeURIComponent(form.dataset.id!)}`, {
        method: 'PATCH',
        body: JSON.stringify({
          parking_lot_id: value('parking_lot_id') ? Number(value('parking_lot_id')) : null,
          position_x: positionX,
          position_y: positionY,
          status_ids: checkedValues(form, 'status_ids').map(Number),
          unwashed: Boolean(data.get('unwashed')),
          no_fuel: Boolean(data.get('no_fuel')),
          needs_repair: Boolean(data.get('needs_repair')),
          options: checkedValues(form, 'options'),
          notes: value('notes') || null,
          assessment_values: Object.fromEntries(
            [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-assessment-id]')]
              .map((input) => [
                input.dataset.assessmentId!,
                input instanceof HTMLInputElement && input.type === 'checkbox' ? input.checked : input.value
              ])
          ),
          inspection_marks: (pendingInspectionMarks.get(Number(form.dataset.id)) ?? []).map((mark) => ({
            id: mark.id, damage_type_id: mark.damage_type_id, x: mark.x, y: mark.y,
            ...(typeof mark.world_x === 'number' && typeof mark.world_y === 'number' &&
                typeof mark.world_z === 'number'
              ? { world_x: mark.world_x, world_y: mark.world_y, world_z: mark.world_z } : {}),
            ...(typeof mark.world_nx === 'number' && typeof mark.world_ny === 'number' &&
                typeof mark.world_nz === 'number'
              ? { world_nx: mark.world_nx, world_ny: mark.world_ny, world_nz: mark.world_nz } : {})
          }))
        })
      });
      pendingInspectionMarks.delete(Number(form.dataset.id));
    } else if (kind === 'parking-job') {
      await api('/api/v1/parking/jobs', {
        method: 'POST',
        body: JSON.stringify({
          vehicle_id: Number(value('vehicle_id')),
          destination_lot_id: Number(value('destination_lot_id')),
          scheduled_at: value('scheduled_at')
        })
      });
    } else if (kind === 'parking-lot') {
      await api('/api/v1/parking/lots', {
        method: 'POST',
        body: JSON.stringify({ name: value('name'), navigation_url: value('navigation_url') })
      });
    } else if (kind === 'parking-lot-layout') {
      const areaHeight = Number(value('area_height'));
      const areaWidth = Number(value('area_width'));
      const capacity = value('capacity') ? Number(value('capacity')) : null;
      if (!Number.isInteger(areaHeight) || areaHeight < 160 || areaHeight > 600 ||
          !Number.isInteger(areaWidth) || areaWidth < 30 || areaWidth > 100 ||
          capacity !== null && (!Number.isInteger(capacity) || capacity < 0 || capacity > 1000)) {
        throw new Error('invalid_request');
      }
      await api(`/api/v1/parking/lots/${encodeURIComponent(value('id'))}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: value('name'), area_height: areaHeight, area_width: areaWidth, capacity,
          navigation_url: value('navigation_url'),
          class_priority: value('class_priority').split(',').map((name) => name.trim()).filter(Boolean),
          is_active: value('is_active') === 'true'
        })
      });
    } else if (kind === 'parking-class') {
      await api('/api/v1/parking/classes', {
        method: 'POST', body: JSON.stringify({ name: value('name'), color: value('color') })
      });
    } else if (kind === 'parking-status') {
      await api('/api/v1/parking/statuses', {
        method: 'POST', body: JSON.stringify({ name: value('name'), icon: value('icon') || undefined })
      });
    } else if (kind === 'parking-status-edit') {
      await api(`/api/v1/parking/statuses/${encodeURIComponent(form.dataset.id!)}`, {
        method: 'PATCH',
        body: JSON.stringify({ name: value('name'), icon: value('icon') })
      });
    } else if (kind === 'parking-option') {
      await api('/api/v1/parking/options', {
        method: 'POST', body: JSON.stringify({ name: value('name') })
      });
    } else if (kind === 'parking-option-edit') {
      await api(`/api/v1/parking/options/${encodeURIComponent(form.dataset.id!)}`, {
        method: 'PATCH', body: JSON.stringify({ name: value('name') })
      });
    } else if (kind === 'parking-store') {
      await api('/api/v1/parking/stores', {
        method: 'POST', body: JSON.stringify({ name: value('name') })
      });
    } else if (kind === 'lot-distance' || kind === 'store-distance') {
      const minutes = value('minutes') === '' ? null : Number(value('minutes'));
      const km = value('km') === '' ? null : Number(value('km'));
      if (minutes !== null && !Number.isFinite(minutes) ||
          km !== null && !Number.isFinite(km)) throw new Error('invalid_request');
      const entry = kind === 'lot-distance'
        ? { from_lot_id: Number(value('from_lot_id')), to_lot_id: Number(value('to_lot_id')), minutes, km }
        : { store_id: Number(value('store_id')), lot_id: Number(value('lot_id')), minutes, km };
      await api(`/api/v1/parking/${kind === 'lot-distance' ? 'lot-distances' : 'store-distances'}`, {
        method: 'PUT', body: JSON.stringify({ entries: [entry] })
      });
    } else if (kind === 'parking-assessment') {
      const payload = {
        name: value('name'), field_type: value('field_type'), suffix: value('suffix')
      };
      await api(`/api/v1/parking/assessment-fields${form.dataset.id ? `/${encodeURIComponent(form.dataset.id)}` : ''}`, {
        method: form.dataset.id ? 'PATCH' : 'POST', body: JSON.stringify(payload)
      });
    } else if (kind === 'parking-damage') {
      const payload = { name: value('name'), icon: value('icon'), color: value('color') };
      await api(`/api/v1/parking/damage-types${form.dataset.id ? `/${encodeURIComponent(form.dataset.id)}` : ''}`, {
        method: form.dataset.id ? 'PATCH' : 'POST', body: JSON.stringify(payload)
      });
    }
    closeModal();
    toast('保存しました。');
    if (kind === 'site') cachedSites = [];
    await loadPage();
  } catch (error) {
    toast(humanError((error as Error).message), true);
    if (submit) submit.removeAttribute('disabled');
  }
}
async function handleClick(event: MouseEvent) {
  const retryCatalogButton = (event.target as HTMLElement).closest<HTMLButtonElement>(
    '[data-action="vehicle-catalog-retry"]'
  );
  if (retryCatalogButton) {
    const form = retryCatalogButton.closest<HTMLFormElement>('form');
    const siteSelect = form?.querySelector<HTMLSelectElement>('[data-vehicle-site]');
    const siteId = siteSelect?.value || form?.querySelector<HTMLInputElement>('[name="siteId"]')?.value;
    const fields = form?.querySelector<HTMLElement>('[data-vehicle-parking-fields]');
    if (siteId && fields) {
      await loadVehicleParkingCatalog(fields, siteId, siteSelect ?? undefined);
    }
    return;
  }
  const ratingButton = (event.target as HTMLElement).closest<HTMLButtonElement>(
    '[data-action="vehicle-rating"]'
  );
  if (ratingButton) {
    event.preventDefault();
    const group = ratingButton.closest<HTMLElement>('.assessment-field');
    const ratingInput = group?.querySelector<HTMLInputElement>(
      `input[data-assessment-id="${ratingButton.dataset.ratingAssessmentId}"]`
    );
    if (!group || !ratingInput) return;
    ratingInput.value = ratingButton.dataset.score ?? '';
    group.querySelectorAll<HTMLButtonElement>('[data-action="vehicle-rating"]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button === ratingButton));
    });
    return;
  }
  const createDamageRemove = (event.target as HTMLElement).closest<HTMLButtonElement>(
    '[data-action="vehicle-damage-remove"]'
  );
  if (createDamageRemove) {
    event.preventDefault();
    vehicleCreateInspectionMarks = vehicleCreateInspectionMarks.filter(
      (mark) => mark.id !== createDamageRemove.dataset.markId
    );
    parkingInspection?.setMarks(vehicleCreateInspectionMarks);
    const container = createDamageRemove.closest<HTMLElement>('[data-vehicle-parking-fields]');
    if (container) renderVehicleDamageMarks(
      vehicleCreateInspectionMarks, vehicleCreateDamageTypes, container
    );
    return;
  }
  const removeDamage = (event.target as HTMLElement).closest<HTMLElement>(
    '[data-action="parking-damage-remove"]'
  );
  if (removeDamage) {
    event.preventDefault();
    const vehicleId = Number(removeDamage.dataset.vehicleId);
    const markId = removeDamage.dataset.markId;
    pendingInspectionMarks.set(vehicleId,
      (pendingInspectionMarks.get(vehicleId) ?? []).filter((mark) => mark.id !== markId));
    if (inspectedVehicleId === vehicleId) {
      parkingInspection?.setMarks(pendingInspectionMarks.get(vehicleId) ?? []);
    }
    removeDamage.remove();
    return;
  }
  const damageMap = (event.target as HTMLElement).closest<HTMLElement>('[data-damage-map]');
  if (damageMap) {
    event.preventDefault();
    const form = damageMap.closest<HTMLFormElement>('form[data-form="parking-vehicle"]');
    const damageType = $<HTMLSelectElement>('[name="damage_type_id"]', form ?? document);
    if (!form || !damageType?.value) return;
    const bounds = damageMap.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const vehicleId = Number(damageMap.dataset.id);
    const mark: ParkingInspectionMark = {
      id: crypto.randomUUID(),
      damage_type_id: Number(damageType.value),
      x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)),
      y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height))
    };
    const marks = [...(pendingInspectionMarks.get(vehicleId) ?? []), mark];
    pendingInspectionMarks.set(vehicleId, marks);
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.className = 'damage-marker';
    marker.dataset.action = 'parking-damage-remove';
    marker.dataset.vehicleId = String(vehicleId);
    marker.dataset.markId = mark.id;
    marker.style.left = `${mark.x * 100}%`;
    marker.style.top = `${mark.y * 100}%`;
    marker.style.background = damageType.selectedOptions[0]?.dataset.color ?? '#e34b4b';
    marker.textContent = '×';
    damageMap.append(marker);
    return;
  }
  const target = (event.target as HTMLElement).closest<HTMLElement>(
    '[data-page],[data-action],[data-modal],[data-language]'
  );
  if (!target) return;
  if (target.dataset.language === 'ja' || target.dataset.language === 'zh') {
    await changeLanguage(target.dataset.language);
  } else if (target.dataset.action === 'customer-select') {
    const customer = currentCustomerMatches.find((item) => item.id === target.dataset.id);
    const form = target.closest<HTMLFormElement>('form[data-form="reservation"]');
    if (!customer || !form) return;
    const customerId = $<HTMLInputElement>('[name="customerId"]', form);
    const name = $<HTMLInputElement>('[name="guestName"]', form);
    const phone = $<HTMLInputElement>('[name="guestPhone"]', form);
    const suggestions = $('[data-customer-suggestions]', form);
    if (customerId) customerId.value = customer.id;
    if (name) name.value = customer.name;
    if (phone) phone.value = customer.phone;
    if (suggestions) setHtml(suggestions,
      `<span class="customer-selected"><strong>${text(customer.name)}</strong> · ${text(customer.phone)}
        <button type="button" class="btn btn-sm btn-quiet" data-action="customer-clear-selection">選択解除</button></span>`);
  } else if (target.dataset.action === 'customer-clear-selection') {
    const form = target.closest<HTMLFormElement>('form[data-form="reservation"]');
    const customerId = form && $<HTMLInputElement>('[name="customerId"]', form);
    if (customerId) customerId.value = '';
    const searchInput = form && $<HTMLInputElement>('[name="guestName"]', form);
    if (searchInput) void searchReservationCustomers(searchInput);
  } else if (target.dataset.page) {
    event.preventDefault();
    closeParkingInspection();
    const nextPage = target.dataset.page as Page;
    if (!appPages.includes(nextPage) || !navItems().some((item) => item.page === nextPage)) return;
    if (nextPage !== currentPage) history.pushState(null, '', pageHash(nextPage));
    currentPage = nextPage;
    localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
    offset = 0; query = ''; statusFilter = ''; isMobileNav = false;
    renderShell();
    await loadPage();
  } else if (target.dataset.modal) {
    await openModal(target.dataset.modal);
  } else if (target.dataset.action === 'close-modal') {
    closeModal();
  } else if (target.dataset.action === 'logout') {
    closeParkingInspection();
    closeParkingRealtime();
    try {
      const response = await fetch('/api/v1/auth/logout', {
        method: 'POST', credentials: 'same-origin'
      });
      if (!response.ok) throw new Error('internal_error');
    } catch {
      toast(humanError('internal_error'), true);
      return;
    }
    token = ''; profile = null;
    clearSession(localStorage);
    renderLogin();
  } else if (target.dataset.action === 'switch-site') {
    target.setAttribute('disabled', 'true');
    try {
      await switchToSite(target.dataset.id!);
    } catch (error) {
      toast(humanError((error as Error).message), true);
      target.removeAttribute('disabled');
    }
  } else if (target.dataset.action === 'return-admin') {
    try {
      await returnToManagementAccount();
    } catch (error) {
      toast(humanError((error as Error).message), true);
    }
  } else if (target.dataset.action === 'parking-location-manager') {
    openParkingLocations();
  } else if (target.dataset.action === 'parking-settings') {
    openParkingSettings();
  } else if (target.dataset.action === 'parking-class-filter') {
    parkingClassFilter = target.dataset.class ?? 'all';
    const content = $('#parking-catalog-content');
    if (content && currentParkingBoard) {
      setHtml(content, renderParkingCatalog(currentParkingBoard));
      content.replaceWith(content.firstElementChild!);
    }
  } else if (target.dataset.action === 'parking-status-filter') {
    parkingStatusFilter = target.dataset.statusId ?? 'all';
    const content = $('#parking-status-content');
    if (content && currentParkingBoard) {
      setHtml(content, renderParkingStatusContent(currentParkingBoard));
      content.replaceWith(content.firstElementChild!);
    }
  } else if (target.dataset.action === 'parking-focus-vehicle') {
    const vehicle = $<HTMLElement>(
      `.parking-map-vehicle[data-vehicle-id="${CSS.escape(target.dataset.id ?? '')}"]`
    );
    vehicle?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const handle = $('[data-parking-drag]', vehicle ?? document);
    handle?.focus({ preventScroll: true });
    vehicle?.classList.add('parking-vehicle-highlight');
    window.setTimeout(() => vehicle?.classList.remove('parking-vehicle-highlight'), 1700);
  } else if (target.dataset.action === 'employee-roster') {
    if (modal === 'reservation-transition') {
      const form = $('form[data-form="reservation-transition"]');
      const reservation = currentReservations.find((item) =>
        item.id === $<HTMLInputElement>('[name="id"]', form ?? document)?.value);
      const status = $<HTMLInputElement>('[name="status"]', form ?? document)?.value;
      let transition: typeof pendingReservationTransition = null;
      if (reservation && status === 'checked_in') transition = { reservation, status: 'checked_in' };
      else if (reservation && status === 'completed') transition = { reservation, status: 'completed' };
      closeModal();
      pendingReservationTransition = transition;
      await openEmployeeRoster(target.dataset.siteId ?? profile!.site.id);
      return;
    } else if (modal) closeModal();
    await openEmployeeRoster(target.dataset.siteId ?? profile!.site.id);
  } else if (target.dataset.action === 'employee-edit') {
    closeModal();
    await openModal('employee-edit', target.dataset.id!);
  } else if (target.dataset.action === 'reset-account-password') {
    await openModal('reset-account-password', target.dataset.id!);
  } else if (target.dataset.action === 'employee-toggle') {
    const siteId = employeeSiteId;
    closeModal();
    try {
      await api(`/api/v1/employees/${encodeURIComponent(target.dataset.id!)}`, {
        method: 'PATCH',
        body: JSON.stringify({ siteId, status: target.dataset.status })
      });
      toast(target.dataset.status === 'active' ? 'スタッフ名を再開しました。' : 'スタッフ名を無効にしました。');
      await openEmployeeRoster(siteId);
    } catch (error) {
      toast(humanError((error as Error).message), true);
    }
  } else if (target.dataset.action === 'parking-inspect3d') {
    openParkingInspection(Number(target.dataset.id));
  } else if (target.dataset.action === 'parking-inspect3d-close') {
    closeParkingInspection();
  } else if (target.dataset.action === 'parking-move-undo') {
    const previous = parkingMoveHistory[parkingMoveHistory.length - 1];
    if (!previous) return;
    try {
      await api(`/api/v1/parking/vehicles/${previous.vehicleId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          parking_lot_id: previous.lotId, position_x: previous.x, position_y: previous.y
        })
      });
      parkingMoveHistory.pop();
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'parking-lot-settings') {
    await openModal('parking-lot-layout', target.dataset.id);
  } else if (target.dataset.action === 'parking-lot-resize') {
    const lotId = Number(target.dataset.id);
    resizingParkingLotId = resizingParkingLotId === lotId ? null : lotId;
    await renderParkingBoard();
  } else if (target.dataset.action === 'parking-marking-toggle') {
    const lotId = Number(target.dataset.id);
    markingDrawingLotId = markingDrawingLotId === lotId ? null : lotId;
    await renderParkingBoard();
  } else if (target.dataset.action === 'parking-marking-undo') {
    const lot = currentParkingBoard?.parking_lots.find((item) => String(item.id) === target.dataset.id);
    if (!lot?.markings.length) return;
    try {
      await api(`/api/v1/parking/lots/${lot.id}`, {
        method: 'PATCH', body: JSON.stringify({ markings: lot.markings.slice(0, -1) })
      });
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'parking-job-toggle') {
    try {
      await api(`/api/v1/parking/jobs/${encodeURIComponent(target.dataset.id!)}`, {
        method: 'PATCH', body: JSON.stringify({ completed: target.dataset.completed === 'true' })
      });
      toast('予定を更新しました。');
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'parking-job-delete') {
    if (!confirmAction('この予定を削除しますか？')) return;
    try {
      await api(`/api/v1/parking/jobs/${encodeURIComponent(target.dataset.id!)}`, { method: 'DELETE' });
      toast('予定を削除しました。');
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'parking-lot-toggle') {
    try {
      await api(`/api/v1/parking/lots/${encodeURIComponent(target.dataset.id!)}`, {
        method: 'PATCH', body: JSON.stringify({ is_active: target.dataset.active === 'true' })
      });
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'parking-lot-delete') {
    if (!can('parking:admin')) return;
    if (!confirmAction('この駐車エリアを削除しますか？')) return;
    try {
      await api(`/api/v1/parking/lots/${encodeURIComponent(target.dataset.id!)}`, { method: 'DELETE' });
      closeModal();
      toast('駐車エリアを削除しました。');
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'parking-lot-order') {
    if (!currentParkingBoard) return;
    const ids = currentParkingBoard.parking_lots.map((lot) => lot.id);
    const index = ids.indexOf(Number(target.dataset.id));
    const nextIndex = index + (target.dataset.direction === 'up' ? -1 : 1);
    if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;
    [ids[index], ids[nextIndex]] = [ids[nextIndex], ids[index]];
    try {
      await api('/api/v1/parking/lots/order', { method: 'PUT', body: JSON.stringify({ ids }) });
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action?.startsWith('parking-') &&
      ['parking-class-delete', 'parking-status-delete', 'parking-option-delete', 'parking-store-delete',
        'parking-assessment-delete', 'parking-damage-delete'].includes(target.dataset.action)) {
    const path = target.dataset.action === 'parking-class-delete' ? 'classes'
      : target.dataset.action === 'parking-status-delete' ? 'statuses'
        : target.dataset.action === 'parking-option-delete' ? 'options'
          : target.dataset.action === 'parking-store-delete' ? 'stores'
            : target.dataset.action === 'parking-assessment-delete' ? 'assessment-fields' : 'damage-types';
    if (!confirmAction('この設定項目を削除しますか？')) return;
    try {
      await api(`/api/v1/parking/${path}/${encodeURIComponent(target.dataset.id!)}`, { method: 'DELETE' });
      closeModal();
      toast('設定を削除しました。');
      await renderParkingBoard();
    } catch (error) { toast(humanError((error as Error).message), true); }
  } else if (target.dataset.action === 'sync-parking') {
    const button = target as HTMLButtonElement;
    button.disabled = true;
    try {
      const result = await api<{ created: number; updated: number; synced: number }>(
        '/api/v1/parking/vehicles:sync', { method: 'POST' }
      );
      toast(`駐車場ボードを更新しました（新規 ${result.created} 台、更新 ${result.updated} 台）。`);
      await renderParkingBoard();
    } catch (error) {
      toast((error as Error).message, true);
    } finally {
      button.disabled = false;
    }
  } else if (target.dataset.action === 'refresh') {
    await loadPage();
  } else if (target.dataset.action === 'menu') {
    isMobileNav = !isMobileNav;
    $('.sidebar')?.classList.toggle('open', isMobileNav);
  } else if (target.dataset.action === 'next') {
    offset += 50; await loadPage();
  } else if (target.dataset.action === 'prev') {
    offset = Math.max(0, offset - 50); await loadPage();
  } else if (target.dataset.action === 'edit-account' || target.dataset.action === 'edit-vehicle') {
    await openModal(target.dataset.action, target.dataset.id);
  } else if (target.dataset.action?.startsWith('reservation-')) {
    const item = currentReservations.find((reservation) => reservation.id === target.dataset.id);
    if (!item) return;
    if (target.dataset.action === 'reservation-checkin' ||
        target.dataset.action === 'reservation-return') {
      try {
        await openReservationTransition(item,
          target.dataset.action === 'reservation-checkin' ? 'checked_in' : 'completed');
      } catch (error) {
        toast(humanError((error as Error).message), true);
      }
      return;
    }
    const prompt = `${item.guest_name} 様の予約をキャンセルしますか？`;
    if (!confirmAction(prompt)) return;
    try {
      await api(`/api/v1/reservations/${encodeURIComponent(item.id)}`, {
        method: 'PATCH', body: JSON.stringify({ status: 'cancelled' })
      });
      toast('予約をキャンセルしました。');
      await loadPage();
    } catch (error) { toast(humanError((error as Error).message), true); }
  }
}
function handleInput(event: Event) {
  if (!(event.target instanceof HTMLInputElement)) return;
  if (event.target.matches('[data-customer-search]')) {
    const form = event.target.closest<HTMLFormElement>('form[data-form="reservation"]');
    const customerId = form && $<HTMLInputElement>('[name="customerId"]', form);
    if (customerId) customerId.value = '';
    window.clearTimeout(customerSearchTimer);
    customerSearchTimer = window.setTimeout(() => {
      void searchReservationCustomers(event.target as HTMLInputElement);
    }, 220);
    return;
  }
  if (event.target.matches('[data-parking-search]')) {
    parkingCatalogQuery = event.target.value.trim();
    const content = $('#parking-catalog-content');
    if (content && currentParkingBoard) {
      setHtml(content, renderParkingCatalog(currentParkingBoard));
      content.replaceWith(content.firstElementChild!);
      const search = $('[data-parking-search]');
      search?.focus();
      if (search instanceof HTMLInputElement) {
        search.setSelectionRange(search.value.length, search.value.length);
      }
    }
    return;
  }
  if (event.target.matches('[data-marking-color]')) {
    markingColor = event.target.value;
    const preview = $('.parking-marking-preview');
    preview?.setAttribute('stroke', markingColor);
    return;
  }
  if (!event.target.matches('[data-search]')) return;
  const caret = event.target.selectionStart;
  query = event.target.value;
  offset = 0;
  const render = currentPage === 'sites' ? renderSites
    : currentPage === 'accounts' ? renderAccounts
      : currentPage === 'vehicles' ? renderVehicles
        : currentPage === 'reservations' ? renderReservations
          : currentPage === 'customers' ? renderCustomers : null;
  if (!render) return;
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => {
    void render().then(() => {
      const search = $('[data-search]');
      search?.focus();
      if (search instanceof HTMLInputElement && caret !== null) search.setSelectionRange(caret, caret);
    }).catch((error) => toast(humanError((error as Error).message), true));
  }, 180);
}
function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  if (target.matches('[data-reservation-filter]')) {
    const form = target.closest<HTMLFormElement>('form[data-form="reservation"]');
    if (form) void refreshReservationVehicles(form);
  } else if (target.matches('[name="startAt"], [name="endAt"], [name="vehicleClass"]')) {
    const form = target.closest<HTMLFormElement>('form[data-form="reservation"]');
    if (form) void refreshReservationVehicles(form);
  } else if (target.matches('[data-vehicle-site]')) {
    const parkingFields = $('[data-vehicle-parking-fields]', $('.overlay')!);
    if (!parkingFields) return;
    const selectedSiteId = target.value;
    vehicleCreateInspectionMarks = [];
    if (selectedSiteId) void loadVehicleParkingCatalog(parkingFields, selectedSiteId, target);
    else renderVehicleParkingCatalog(parkingFields, null);
  } else if (target.matches('[data-status]')) {
    statusFilter = target.value; offset = 0; void loadPage();
  }
}

if ('serviceWorker' in navigator && window.isSecureContext) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .catch(() => toast('オフライン用アプリの登録に失敗しました。ページを再読み込みしてください。', true));
  }, { once: true });
}

window.addEventListener('hashchange', () => {
  if (!profile) return;
  const requestedPage = pageFromHash() ?? 'dashboard';
  currentPage = navItems().some((item) => item.page === requestedPage) ? requestedPage : 'dashboard';
  if (location.hash !== pageHash(currentPage)) history.replaceState(null, '', pageHash(currentPage));
  localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
  closeParkingInspection();
  renderShell();
  void loadPage();
});

async function resumeSession() {
  try {
    if (!token) {
      const context = isImpersonating(localStorage) ? 'site' : 'default';
      let renewed = await refreshAccessToken(context);
      if (!renewed && context === 'site') {
        const ended = await fetch('/api/v1/auth/end-site', {
          method: 'POST', credentials: 'same-origin'
        });
        if (!ended.ok) throw new Error('internal_error');
        const adminSession = restoreAdminSession(localStorage);
        if (adminSession) {
          token = adminSession.token;
          renewed = await refreshAccessToken('default');
        }
      }
      if (!renewed) {
        token = ''; profile = null;
        clearSession(localStorage);
        renderLogin();
        return;
      }
    }
    await loadProfile();
  } catch (error) {
    if ((error as Error).message === 'unauthorized') {
      token = ''; profile = null;
      clearSession(localStorage);
    } else {
      toast(humanError((error as Error).message), true);
    }
    renderLogin();
  }
}
void resumeSession();
