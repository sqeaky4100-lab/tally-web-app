import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** MenuItem — one command inside a Menu. */
export function MenuItem({ label, icon, shortcut, danger = false, checked = false, disabled = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  const ink = disabled ? 'var(--text-disabled)' : danger ? 'var(--text-danger)' : 'var(--text-primary)';
  const lit = hover && !disabled;
  return (
    <div
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 9,
        height: 28, padding: '0 9px', borderRadius: 'var(--radius-sm)',
        font: 'var(--type-ui)',
        color: lit ? (danger ? '#fff' : 'var(--on-accent)') : ink,
        background: lit ? (danger ? 'var(--red-500)' : 'var(--accent)') : 'transparent',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'var(--transition-hover)',
      }}
    >
      {icon && <Icon name={icon} size={14} />}
      <span style={{ flex: 1, whiteSpace: 'nowrap' }}>{label}</span>
      {checked && <Icon name="check" size={14} />}
      {shortcut && <span style={{ font: 'var(--type-mono)', opacity: 0.6 }}>{shortcut}</span>}
    </div>
  );
}

/** MenuDivider — a hairline between command groups. */
export function MenuDivider() {
  return <div style={{ height: 1, background: 'var(--border-subtle)', margin: '4px 6px' }} />;
}

/** Menu — a list of commands, usually inside a Popover. */
export function Menu({ children, width = 220, style }) {
  return (
    <div role="menu" style={{
      width, background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-popover)',
      padding: 'var(--space-2)', ...style,
    }}>
      {children}
    </div>
  );
}
