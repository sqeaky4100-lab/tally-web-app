import React from 'react';

/** Radio — one of a small mutually exclusive set, stacked with labels. */
export function Radio({ checked = false, onChange, disabled = false, label, description, style }) {
  return (
    <label style={{
      display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 10,
      cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.45 : 1, ...style,
    }}>
      <span
        role="radio" aria-checked={checked} tabIndex={disabled ? -1 : 0}
        onClick={disabled ? undefined : onChange}
        onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onChange && onChange(e); } }}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
          width: 16, height: 16, marginTop: description ? 1 : 0, boxSizing: 'border-box',
          border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--state-open)'}`,
          borderRadius: '50%', background: 'transparent',
          transition: 'var(--transition-check)',
        }}
      >
        {checked && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />}
      </span>
      <span>
        <span style={{ display: 'block', font: 'var(--type-ui)', color: 'var(--text-primary)' }}>{label}</span>
        {description && <span style={{ display: 'block', marginTop: 2, font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{description}</span>}
      </span>
    </label>
  );
}
