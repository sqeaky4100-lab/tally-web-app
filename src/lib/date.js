// Dates the way Tally speaks them: digits, tabular, relative where a person would
// say it that way and absolute where precision matters. See design-system/readme.md
// > Content fundamentals > Numbers.

const DAY = 86400000;
const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Midnight, local time, for whatever the runtime thinks today is. */
export function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/** Parse a `YYYY-MM-DD` or ISO timestamp into a local Date at midnight. */
export function toDay(value) {
  if (!value) return null;
  const iso = String(value).slice(0, 10).split('-').map(Number);
  if (iso.length !== 3 || Number.isNaN(iso[0])) return null;
  return new Date(iso[0], iso[1] - 1, iso[2]);
}

/** Whole days from today. Negative is in the past. */
export function daysFromToday(value) {
  const day = toDay(value);
  if (!day) return null;
  return Math.round((day - startOfToday()) / DAY);
}

/** Absolute, always unambiguous: `Fri, 14 Aug`. */
export function formatAbsolute(value) {
  const day = toDay(value);
  if (!day) return '';
  return `${WEEKDAY[day.getDay()].slice(0, 3)}, ${day.getDate()} ${MONTH[day.getMonth()]}`;
}

/** The heading a dated group gets: `Today`, `Tomorrow`, `Monday 14 September`. */
export function formatDayHeading(value) {
  const delta = daysFromToday(value);
  const day = toDay(value);
  if (!day) return 'Someday';
  if (delta === 0) return 'Today';
  if (delta === 1) return 'Tomorrow';
  if (delta === -1) return 'Yesterday';
  return `${WEEKDAY[day.getDay()]} ${day.getDate()} ${MONTH[day.getMonth()]}`;
}

/** The quiet second half of a deadline chip: `6 days left`, `2 days overdue`. */
export function formatRelative(value) {
  const delta = daysFromToday(value);
  if (delta === null) return '';
  if (delta === 0) return 'today';
  if (delta === 1) return 'tomorrow';
  if (delta === -1) return '1 day overdue';
  if (delta < 0) return `${-delta} days overdue`;
  if (delta < 14) return `${delta} days left`;
  if (delta < 60) return `${Math.round(delta / 7)} weeks`;
  return `${Math.round(delta / 30)} months`;
}

/** `10 September 2026, 23:59` — used for sync stamps and completion times. */
export function formatStamp(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getDate()} ${MONTH[d.getMonth()]} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
