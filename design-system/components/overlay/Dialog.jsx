import React from 'react';

/** Dialog — a centred modal for destructive confirmations and short forms. */
export function Dialog({ open = true, title, description, children, footer, width = 400, onDismiss, style }) {
  if (!open) return null;
  return (
    <div
      onClick={onDismiss}
      style={{
        position: 'absolute', inset: 0, zIndex: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--scrim)',
      }}
    >
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: '92%',
          background: 'var(--surface-raised)', borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-modal)', padding: 'var(--space-8) var(--space-8) var(--space-7)',
          ...style,
        }}
      >
        {title && <h2 style={{ font: 'var(--type-heading)', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-snug)' }}>{title}</h2>}
        {description && <p style={{ margin: '8px 0 0', font: 'var(--type-ui)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', textWrap: 'pretty' }}>{description}</p>}
        {children && <div style={{ marginTop: 'var(--space-7)' }}>{children}</div>}
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 'var(--space-8)' }}>{footer}</div>}
      </div>
    </div>
  );
}
