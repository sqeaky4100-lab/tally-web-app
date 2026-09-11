import React from 'react';

/** Segmented — a compact row of mutually exclusive filters. */
export function Segmented({ options = [], value, onChange, size = 'md', style }) {
  const sm = size === 'sm';
  return (
    <div role="tablist" style={{ display: 'inline-flex', alignItems: 'center', gap: sm ? 2 : 4, ...style }}>
      {options.map((o) => {
        const val = typeof o === 'string' ? o : o.value;
        const label = typeof o === 'string' ? o : o.label;
        const on = val === value;
        return (
          <button
            key={val} role="tab" aria-selected={on} type="button"
            onClick={() => onChange && onChange(val)}
            style={{
              height: sm ? 22 : 26, padding: `0 ${sm ? 9 : 11}px`,
              font: `var(--weight-${on ? 'semibold' : 'medium'}) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / 1 var(--font-ui)`,
              color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
              background: on ? 'var(--surface-sunken)' : 'transparent',
              border: 'none', borderRadius: 'var(--radius-pill)',
              cursor: 'pointer', transition: 'var(--transition-hover)', whiteSpace: 'nowrap',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
