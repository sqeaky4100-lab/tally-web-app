import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Select — a native dropdown wearing Tally chrome. */
export function Select({ value, onChange, options = [], size = 'md', disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const sm = size === 'sm';
  return (
    <div style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center',
      height: sm ? 28 : 34, paddingLeft: sm ? 9 : 11, paddingRight: sm ? 26 : 30,
      background: 'var(--surface)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-xs)',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style,
    }}>
      <select
        value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          appearance: 'none', WebkitAppearance: 'none',
          font: `var(--weight-medium) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / 1 var(--font-ui)`,
          color: 'var(--text-primary)', background: 'transparent',
          border: 'none', outline: 'none', padding: 0, width: '100%', cursor: disabled ? 'default' : 'pointer',
        }}
        {...rest}
      >
        {options.map((o) => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
      <Icon name="chevron-down" size={13} color="var(--text-tertiary)"
        style={{ position: 'absolute', right: sm ? 8 : 10, pointerEvents: 'none' }} />
    </div>
  );
}
