import React from 'react';

/** Popover — a floating surface anchored to a control. */
export function Popover({ open = true, children, width = 240, placement = 'bottom-start', style }) {
  if (!open) return null;
  const pos = {
    'bottom-start': { top: '100%', left: 0, marginTop: 6 },
    'bottom-end': { top: '100%', right: 0, marginTop: 6 },
    'top-start': { bottom: '100%', left: 0, marginBottom: 6 },
    'top-end': { bottom: '100%', right: 0, marginBottom: 6 },
  }[placement];
  return (
    <div style={{
      position: 'absolute', zIndex: 40, width,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-popover)',
      padding: 'var(--space-2)',
      ...pos, ...style,
    }}>
      {children}
    </div>
  );
}
