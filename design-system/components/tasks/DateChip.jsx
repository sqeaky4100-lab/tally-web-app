import React from 'react';
import { Icon } from '../core/Icon.jsx';

const KINDS = {
  today:     { icon: 'star',          ink: 'var(--state-today)',    fill: true },
  evening:   { icon: 'moon',          ink: 'var(--blue-400)',       fill: true },
  scheduled: { icon: 'calendar-days', ink: 'var(--state-scheduled)' },
  someday:   { icon: 'archive',       ink: 'var(--state-someday)' },
  deadline:  { icon: 'flag',          ink: 'var(--state-deadline)' },
  logged:    { icon: 'circle-check',  ink: 'var(--state-logged)' },
  repeat:    { icon: 'repeat',        ink: 'var(--text-tertiary)' },
};

/** DateChip — when a to-do is due, scheduled, or was completed. */
export function DateChip({ kind = 'scheduled', children, secondary, muted = false, size = 'md', style }) {
  const k = KINDS[kind] || KINDS.scheduled;
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: sm ? 4 : 6,
      font: `var(--weight-medium) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / 1 var(--font-ui)`,
      color: muted ? 'var(--text-tertiary)' : 'var(--text-primary)',
      whiteSpace: 'nowrap', ...style,
    }}>
      <Icon name={k.icon} size={sm ? 12 : 14} color={muted ? 'var(--text-tertiary)' : k.ink} />
      {children}
      {secondary && <span style={{ color: 'var(--text-tertiary)', fontWeight: 'var(--weight-regular)' }}>{secondary}</span>}
    </span>
  );
}
