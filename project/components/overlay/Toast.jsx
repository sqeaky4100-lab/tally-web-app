import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Toast — a transient confirmation with an undo affordance. */
export function Toast({ message, actionLabel, onAction, icon = 'circle-check', tone = 'neutral', style }) {
  return (
    <div role="status" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '9px 14px', borderRadius: 'var(--radius-pill)',
      background: tone === 'danger' ? 'var(--red-500)' : 'var(--gray-900)',
      color: 'var(--gray-0)', font: 'var(--type-ui-strong)',
      boxShadow: 'var(--shadow-popover)', whiteSpace: 'nowrap',
      ...style,
    }}>
      <Icon name={icon} size={15} />
      <span>{message}</span>
      {actionLabel && (
        <button type="button" onClick={onAction} style={{
          background: 'transparent', border: 'none', padding: '0 0 0 4px',
          font: 'var(--weight-semibold) var(--text-sm) / 1 var(--font-ui)',
          color: 'var(--blue-300)', cursor: 'pointer',
        }}>{actionLabel}</button>
      )}
    </div>
  );
}
