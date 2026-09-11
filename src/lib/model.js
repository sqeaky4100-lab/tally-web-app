// The product's vocabulary and its rules. Tally nouns only: to-do, project, area,
// heading, checklist item, tag, notes, when, deadline, logbook.

import { daysFromToday, formatDayHeading } from './date.js';

export const BUILT_IN_LISTS = [
  { id: 'inbox', label: 'Inbox', icon: 'inbox', color: 'var(--blue-400)' },
  { id: 'today', label: 'Today', icon: 'star', color: 'var(--state-today)' },
  { id: 'upcoming', label: 'Upcoming', icon: 'calendar-days', color: 'var(--state-deadline)' },
  { id: 'anytime', label: 'Anytime', icon: 'layers', color: 'var(--state-scheduled)' },
  { id: 'someday', label: 'Someday', icon: 'archive', color: 'var(--state-someday)' },
];

export const ARCHIVE_LISTS = [
  { id: 'logbook', label: 'Logbook', icon: 'circle-check', color: 'var(--state-logged)' },
  { id: 'trash', label: 'Trash', icon: 'trash-2', color: 'var(--text-tertiary)' },
];

export const LIST_META = [...BUILT_IN_LISTS, ...ARCHIVE_LISTS].reduce((acc, l) => {
  acc[l.id] = l;
  return acc;
}, {});

export const isOpen = (t) => t.state === 'open' || t.state === 'progress';
export const isClosed = (t) => t.state === 'done' || t.state === 'canceled';

/**
 * When a to-do sits, in the genre's sense: dated work lands in Today or Upcoming,
 * undated low-priority work is Someday, everything else open is Anytime.
 */
export function whenOf(todo) {
  if (todo.trashed) return 'trash';
  if (isClosed(todo)) return 'logbook';
  if (todo.deadline) return daysFromToday(todo.deadline) <= 0 ? 'today' : 'upcoming';
  if (todo.priority === 4) return 'someday';
  return 'anytime';
}

export function inList(todo, listId) {
  if (listId === 'trash') return !!todo.trashed;
  if (todo.trashed) return false;
  if (listId === 'inbox') return isOpen(todo) && !todo.project;
  if (listId === 'logbook') return isClosed(todo);
  const when = whenOf(todo);
  if (listId === 'today') return when === 'today';
  if (listId === 'upcoming') return when === 'upcoming';
  if (listId === 'anytime') return isOpen(todo) && (when === 'anytime' || when === 'today');
  if (listId === 'someday') return when === 'someday';
  return false;
}

export function inProject(todo, projectId, showCompleted) {
  if (todo.trashed || todo.project !== projectId) return false;
  return showCompleted ? true : isOpen(todo);
}

/** Counts for the sidebar badges. A count of zero is never rendered. */
export function listCounts(todos) {
  const counts = {};
  BUILT_IN_LISTS.forEach((l) => { counts[l.id] = todos.filter((t) => inList(t, l.id)).length; });
  counts.overdue = todos.filter((t) => isOpen(t) && t.deadline && daysFromToday(t.deadline) < 0).length;
  return counts;
}

export function projectProgress(todos, projectId) {
  const own = todos.filter((t) => t.project === projectId && !t.trashed);
  if (!own.length) return 0;
  return own.filter(isClosed).length / own.length;
}

const PRIORITY_RANK = { 1: 0, 2: 1, 3: 2, 4: 3 };

function refOrder(todo) {
  const n = parseFloat(String(todo.ref || '').replace(/[^0-9.]/g, ''));
  return Number.isNaN(n) ? 9999 : n;
}

export function sortTodos(todos, projects) {
  const phase = (id) => {
    const i = projects.findIndex((p) => p.id === id);
    return i < 0 ? 99 : i;
  };
  return [...todos].sort((a, b) => {
    if (isClosed(a) !== isClosed(b)) return isClosed(a) ? 1 : -1;
    if (isClosed(a) && isClosed(b)) {
      return String(b.completedAt || '').localeCompare(String(a.completedAt || ''));
    }
    const pa = phase(a.project);
    const pb = phase(b.project);
    if (pa !== pb) return pa - pb;
    const ra = PRIORITY_RANK[a.priority] ?? 3;
    const rb = PRIORITY_RANK[b.priority] ?? 3;
    if (ra !== rb) return ra - rb;
    return refOrder(a) - refOrder(b);
  });
}

/**
 * Groups for the list column. A project groups by phase heading is redundant, so
 * projects group by nothing; dated lists group by day; the logbook groups by the
 * day the work was logged; Anytime groups by project.
 */
export function groupTodos(todos, view, projects, { byProject = true } = {}) {
  const label = (id) => (projects.find((p) => p.id === id) || {}).label || 'No project';
  const key = (t) => {
    if (view.type === 'project') return null;
    if (view.id === 'upcoming' || view.id === 'today') return formatDayHeading(t.deadline);
    if (view.id === 'logbook') return formatDayHeading(t.completedAt);
    if (!byProject) return null;
    if (view.id === 'anytime' || view.id === 'someday') return t.project ? label(t.project) : 'No project';
    return null;
  };
  const groups = [];
  todos.forEach((t) => {
    const k = key(t);
    const found = groups.find((g) => g.key === k);
    if (found) found.items.push(t);
    else groups.push({ key: k, items: [t] });
  });
  return groups;
}

/** Quick Find: title first, then notes and checklist labels. */
export function search(todos, query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hit = (t) => {
    const inTitle = t.title.toLowerCase().includes(q);
    const inNotes = (t.notes || '').toLowerCase().includes(q);
    const inChecklist = (t.checklist || []).some((c) => c.label.toLowerCase().includes(q));
    const inRef = String(t.ref || '').toLowerCase() === q;
    if (!inTitle && !inNotes && !inChecklist && !inRef) return null;
    return { todo: t, rank: inRef ? 0 : inTitle ? 1 : inChecklist ? 2 : 3 };
  };
  return todos
    .filter((t) => !t.trashed)
    .map(hit)
    .filter(Boolean)
    .sort((a, b) => a.rank - b.rank)
    .map((r) => r.todo);
}

/** Tag tones: priority reads red at P1, amber at P2; everything else is neutral. */
export function tagsOf(todo) {
  const tags = [];
  if (todo.priority === 1) tags.push({ label: 'P1', tone: 'red' });
  else if (todo.priority === 2) tags.push({ label: 'P2', tone: 'amber' });
  (todo.tags || []).forEach((label) => {
    const tone = label === 'Partner' ? 'blue' : label === 'In Progress' ? 'green' : 'neutral';
    tags.push({ label, tone });
  });
  return tags;
}

/** Row meta glyphs: notes and checklist presence, nothing else. */
export function metaOf(todo) {
  const meta = [];
  if (todo.notes) meta.push('file-text');
  if ((todo.checklist || []).length) meta.push('list-checks');
  return meta;
}

export function checklistProgress(todo) {
  const items = todo.checklist || [];
  if (!items.length) return null;
  return { done: items.filter((c) => c.checked).length, total: items.length };
}

let seq = 0;
export function newTodoId() {
  seq += 1;
  return `local-${Date.now()}-${seq}`;
}
