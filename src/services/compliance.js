const DAY_MS = 86_400_000;

const LEVEL_PRIORITY = { overdue: 0, due_soon: 1, missing: 2, ok: 3 };

export function tokyoToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now);
  const values = {};
  for (const part of parts) values[part.type] = part.value;
  return `${values.year}-${values.month}-${values.day}`;
}

export function dateOnly(value) {
  if (value === null || value === undefined || value === '') return null;
  if (value instanceof Date) {
    if (!Number.isFinite(value.getTime())) return null;
    const pad = (number) => String(number).padStart(2, '0');
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
  }
  const text = String(value).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : null;
}

function dayNumber(dateOnlyText) {
  return Date.parse(`${dateOnlyText}T00:00:00.000Z`) / DAY_MS;
}

export function addDays(dateOnlyText, days) {
  return new Date((dayNumber(dateOnlyText) + days) * DAY_MS).toISOString().slice(0, 10);
}

export function assessDate(value, today, withinDays = 60) {
  const date = dateOnly(value);
  if (!date) return { date: null, status: 'missing', daysRemaining: null };
  const daysRemaining = dayNumber(date) - dayNumber(today);
  if (daysRemaining < 0) return { date, status: 'overdue', daysRemaining };
  if (daysRemaining <= withinDays) return { date, status: 'due_soon', daysRemaining };
  return { date, status: 'ok', daysRemaining };
}

export function assessVehicle(vehicle, today, withinDays = 60) {
  const inspection = assessDate(vehicle.inspection_expiry_date, today, withinDays);
  const statutory = assessDate(vehicle.statutory_inspection_date, today, withinDays);
  const level = [inspection.status, statutory.status]
    .sort((a, b) => LEVEL_PRIORITY[a] - LEVEL_PRIORITY[b])[0];
  return { inspection, statutory, level };
}

export function compareCompliance(a, b) {
  const levelDiff = LEVEL_PRIORITY[a.compliance.level] - LEVEL_PRIORITY[b.compliance.level];
  if (levelDiff) return levelDiff;
  const earliest = (entry) => Math.min(
    entry.compliance.inspection.daysRemaining ?? Number.POSITIVE_INFINITY,
    entry.compliance.statutory.daysRemaining ?? Number.POSITIVE_INFINITY
  );
  return earliest(a) - earliest(b);
}

export function inspectionValidThrough(vehicle, endDate) {
  const expiry = dateOnly(vehicle.inspection_expiry_date);
  const end = dateOnly(endDate);
  if (!expiry || !end) return true;
  return expiry >= end;
}
