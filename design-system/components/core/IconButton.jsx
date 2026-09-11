import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 24, md: 30, lg: 36 };

/** IconButton — a bare glyph target. Always give it a label. */
export function IconButton({ icon, label, size = 'md', active = false, tone = 'default', disabled = false, style, ...rest }) {
  const box = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const ink = disabled ? 'var(--text-disabled)'
    : tone === 'danger' ? 'var(--text-danger)'
    : active ? 'var(--accent)'
    : hover ? 'var(--text-primary)' : 'var(--text-tertiary)';
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: box, height: box, padding: 0,
        color: ink,
        background: active ? 'var(--accent-soft)' : press ? 'var(--surface-pressed)' : hover ? 'var(--surface-hover)' : 'transparent',
        border: 'none', borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'var(--transition-hover)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={box <= 24 ? 14 : box <= 30 ? 16 : 18} />
    </button>
  );
}
