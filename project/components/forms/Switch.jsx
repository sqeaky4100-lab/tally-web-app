import React from 'react';

/** Switch — an immediate on/off preference. No Save button follows it. */
export function Switch({ checked = false, onChange, disabled = false, size = 'md', label, style }) {
  const w = size === 'sm' ? 32 : 40;
  const h = size === 'sm' ? 19 : 23;
  const knob = h - 4;
  const track = (
    <span
      role="switch" aria-checked={checked} tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onChange}
      onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onChange && onChange(e); } }}
      style={{
        display: 'inline-flex', alignItems: 'center', flex: '0 0 auto',
        width: w, height: h, padding: 2,
        background: checked ? 'var(--state-logged)' : 'var(--gray-300)',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background-color var(--dur-base) var(--ease-standard)',
        ...style,
      }}
    >
      <span style={{
        width: knob, height: knob, borderRadius: '50%', background: '#fff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.22)',
        transform: `translateX(${checked ? w - knob - 4 : 0}px)`,
        transition: 'transform var(--dur-base) var(--ease-out)',
      }} />
    </span>
  );
  if (!label) return track;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--type-ui)', color: 'var(--text-primary)' }}>
      {track}{label}
    </label>
  );
}
