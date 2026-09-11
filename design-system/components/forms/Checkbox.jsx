import React from 'react';

/**
 * Checkbox — the single most important control in the system.
 * Four states, two shapes. A square marks a to-do; a circle marks a project.
 */
export function Checkbox({
  state = 'open', shape = 'square', size = 16, onToggle, disabled = false, label, style,
}) {
  const [hover, setHover] = React.useState(false);
  const radius = shape === 'circle' ? '50%' : 'var(--radius-checkbox)';
  const filled = state === 'done' || state === 'canceled';
  const bg = state === 'done' ? 'var(--state-done)'
    : state === 'canceled' ? 'var(--state-canceled)'
    : 'transparent';
  const border = state === 'progress' ? 'var(--state-progress)'
    : filled ? bg
    : hover && !disabled ? 'var(--text-tertiary)' : 'var(--state-open)';

  const box = (
    <span
      role="checkbox" aria-checked={state === 'done'} aria-label={label} tabIndex={disabled ? -1 : 0}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={disabled ? undefined : onToggle}
      onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onToggle && onToggle(e); } }}
      style={{
        position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, flex: '0 0 auto',
        boxSizing: 'border-box',
        background: bg,
        border: `1.5px solid ${border}`,
        borderRadius: radius,
        overflow: 'hidden',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'var(--transition-check)',
        ...style,
      }}
    >
      {state === 'progress' && (
        <span style={{
          position: 'absolute', inset: 0, width: '50%',
          background: 'var(--state-progress)',
        }} />
      )}
      {state === 'done' && (
        <svg width={size * 0.66} height={size * 0.66} viewBox="0 0 12 12" fill="none" style={{ position: 'relative' }} aria-hidden="true">
          <path d="M2.2 6.3 L4.7 8.8 L9.9 3.3" stroke="var(--on-accent)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {state === 'canceled' && (
        <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 12 12" fill="none" style={{ position: 'relative' }} aria-hidden="true">
          <path d="M2.4 6 H9.6" stroke="var(--on-accent)" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );

  if (!label) return box;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {box}
      <span style={{ font: 'var(--type-ui)', color: state === 'open' || state === 'progress' ? 'var(--text-primary)' : 'var(--text-done)', textDecoration: state === 'canceled' ? 'line-through' : 'none' }}>{label}</span>
    </span>
  );
}
