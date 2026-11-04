import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addDays, assessDate, assessVehicle, dateOnly, inspectionValidThrough, tokyoToday
} from '../src/services/compliance.js';

test('tokyoToday reports the Asia/Tokyo calendar date', () => {
  // 2026-11-04 16:30 UTC is already 2026-11-05 in Tokyo.
  assert.equal(tokyoToday(new Date('2026-11-04T16:30:00.000Z')), '2026-11-05');
  assert.equal(tokyoToday(new Date('2026-11-04T14:59:00.000Z')), '2026-11-04');
});

test('dateOnly normalizes strings, datetimes, Dates, and empty values', () => {
  assert.equal(dateOnly('2027-03-31'), '2027-03-31');
  assert.equal(dateOnly('2027-03-31 09:00:00.000'), '2027-03-31');
  assert.equal(dateOnly(new Date(2027, 2, 31)), '2027-03-31');
  assert.equal(dateOnly(null), null);
  assert.equal(dateOnly(undefined), null);
  assert.equal(dateOnly(''), null);
  assert.equal(dateOnly('not-a-date'), null);
});

test('addDays crosses month and year boundaries', () => {
  assert.equal(addDays('2026-11-05', 60), '2027-01-04');
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
});

test('assessDate classifies missing, overdue, due soon, and ok dates', () => {
  const today = '2026-11-05';
  assert.deepEqual(assessDate(null, today), { date: null, status: 'missing', daysRemaining: null });
  assert.deepEqual(assessDate('2026-11-04', today),
    { date: '2026-11-04', status: 'overdue', daysRemaining: -1 });
  assert.deepEqual(assessDate('2026-11-05', today),
    { date: '2026-11-05', status: 'due_soon', daysRemaining: 0 });
  assert.deepEqual(assessDate('2027-01-04', today),
    { date: '2027-01-04', status: 'due_soon', daysRemaining: 60 });
  assert.deepEqual(assessDate('2027-01-05', today),
    { date: '2027-01-05', status: 'ok', daysRemaining: 61 });
});

test('assessVehicle takes the most urgent level across both dates', () => {
  const today = '2026-11-05';
  const overdue = assessVehicle({
    inspection_expiry_date: '2026-11-01', statutory_inspection_date: '2027-06-01'
  }, today);
  assert.equal(overdue.level, 'overdue');
  const missingOnly = assessVehicle({
    inspection_expiry_date: '2027-06-01', statutory_inspection_date: null
  }, today);
  assert.equal(missingOnly.level, 'missing');
  const dueSoon = assessVehicle({
    inspection_expiry_date: '2027-06-01', statutory_inspection_date: '2026-12-01'
  }, today);
  assert.equal(dueSoon.level, 'due_soon');
  const ok = assessVehicle({
    inspection_expiry_date: '2027-06-01', statutory_inspection_date: '2027-06-01'
  }, today);
  assert.equal(ok.level, 'ok');
});

test('inspectionValidThrough requires the inspection to cover the rental end', () => {
  const vehicle = { inspection_expiry_date: '2026-11-10' };
  assert.equal(inspectionValidThrough(vehicle, '2026-11-10 09:00:00.000'), true);
  assert.equal(inspectionValidThrough(vehicle, '2026-11-11 09:00:00.000'), false);
  assert.equal(inspectionValidThrough({ inspection_expiry_date: null }, '2027-01-01'), true);
});
