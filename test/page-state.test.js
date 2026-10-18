import test from 'node:test';
import assert from 'node:assert/strict';
import { pageFromHash, pageHash } from '../src/ui/page-state.js';

const allowedPages = ['dashboard', 'vehicles', 'parking'];

test('page routing survives refreshable URL hashes and supports hash URL forms', () => {
  assert.equal(pageFromHash('#vehicles', allowedPages), 'vehicles');
  assert.equal(pageFromHash('#/parking', allowedPages), 'parking');
  assert.equal(pageFromHash('#vehicles?status=available', allowedPages), 'vehicles');
});

test('page routing rejects unknown and unauthorized pages', () => {
  assert.equal(pageFromHash('#accounts', allowedPages), 'dashboard');
  assert.equal(pageFromHash('#not-a-page', allowedPages), 'dashboard');
  assert.equal(pageHash('vehicles'), '#vehicles');
  assert.equal(pageHash('accounts'), '#dashboard');
  assert.equal(pageHash('not-a-page'), '#dashboard');
});
