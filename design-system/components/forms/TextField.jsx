import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** TextField — single-line or multiline text entry. */
export function TextField({
  value, onChange, placeholder, multiline = false, rows = 3, icon,
  size = 'md', invalid = false, disabled = false, variant = 'boxed', style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sm = size === 'sm';
  const bare = variant === 'bare';
  const Tag = multiline ? 'textarea' : 'input';
  const field = (
    <Tag
      value={value} onChange={onChange} placeholder={placeholder} rows={multiline ? rows : undefined}
      disabled={disabled}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        flex: 1, width: '100%', minWidth: 0,
        font: multiline ? 'var(--type-body)' : `var(--weight-regular) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / ${multiline ? 'var(--leading-normal)' : '1'} var(--font-ui)`,
        color: 'var(--text-primary)',
        background: 'transparent', border: 'none', outline: 'none',
        padding: 0, resize: multiline ? 'vertical' : undefined,
      }}
      {...rest}
    />
  );
  return (
    <div
      style={{
        display: 'flex', alignItems: multiline ? 'flex-start' : 'center', gap: 8,
        minHeight: multiline ? undefined : (sm ? 28 : 34),
        padding: bare ? 0 : `${multiline ? 9 : 0}px ${sm ? 9 : 11}px`,
        background: bare ? 'transparent' : 'var(--surface)',
        border: bare ? 'none' : `1px solid ${invalid ? 'var(--red-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: bare ? 'none' : focus ? (invalid ? 'var(--ring-danger)' : 'var(--ring-focus)') : 'none',
        opacity: disabled ? 0.5 : 1,
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={15} color="var(--text-tertiary)" style={{ marginTop: multiline ? 2 : 0 }} />}
      {field}
    </div>
  );
}
