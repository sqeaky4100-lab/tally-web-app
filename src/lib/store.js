// Local persistence. The synced Todoist pull is the seed; everything a person does
// in the app afterwards lives in this browser until the next sync replaces it.

import seed from '../data/kayenta.json';

const KEY = `tally:todos:${seed.syncedAt}`;
const PREFS_KEY = 'tally:prefs';

export const DEFAULT_PREFS = {
  theme: 'light',
  detail: 'inline',
  showCompleted: false,
  groupByProject: true,
  defaultView: 'anytime',
};

function read(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private windows and full quotas both land here; the app still works */
  }
}

export function loadTodos() {
  return read(KEY, null) || seed.todos.map((t) => ({ ...t }));
}

export function saveTodos(todos) {
  write(KEY, todos);
}

export function resetTodos() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  return seed.todos.map((t) => ({ ...t }));
}

export function loadPrefs() {
  return { ...DEFAULT_PREFS, ...read(PREFS_KEY, {}) };
}

export function savePrefs(prefs) {
  write(PREFS_KEY, prefs);
}

export const source = seed.source;
export const areas = seed.areas;
export const projects = seed.projects;
export const syncedAt = seed.syncedAt;
