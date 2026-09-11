import React from 'react';

/** Toolbar — a fixed strip of icon actions at the top or bottom of a pane. */
export function Toolbar({ children, position = 'top', bordered = true, style }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 4,
      height: 'var(--toolbar-height)', padding: '0 10px',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)', WebkitBackdropFilter: 'var(--blur-overlay)',
      borderTop: bordered && position === 'bottom' ? '1px solid var(--border-subtle)' : 'none',
      borderBottom: bordered && position === 'top' ? '1px solid var(--border-subtle)' : 'none',
      flex: '0 0 auto',
      ...style,
    }}>
      {children}
    </div>
  );
}
