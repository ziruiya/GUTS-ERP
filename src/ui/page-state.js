const pages = new Set([
  'dashboard', 'reservations', 'sites', 'vehicles', 'parking'
]);

export function pageFromHash(hash, allowedPages) {
  const page = String(hash || '').replace(/^#\/?/, '').split(/[?&]/, 1)[0];
  return pages.has(page) && allowedPages.includes(page) ? page : 'dashboard';
}

export function pageHash(page) {
  return `#${pages.has(page) ? page : 'dashboard'}`;
}
