import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: ['var(--tag-bg)', 'var(--tag-ink)'],
  blue: ['var(--tag-bg-blue)', 'var(--tag-ink-blue)'],
  green: ['var(--tag-bg-green)', 'var(--tag-ink-green)'],
  red: ['var(--tag-bg-red)', 'var(--tag-ink-red)'],
  amber: ['var(--tag-bg-amber)', 'var(--tag-ink-amber)'],
};

/** Tag — a soft-filled or outlined label attached to a to-do. */
export function Tag({ children, tone = 'neutral', variant = 'soft', size = 'md', icon, onRemove, style, ...rest }) {
  const [bg, ink] = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: sm ? 4 : 5,
        height: sm ? 18 : 21, padding: `0 ${sm ? 7 : 9}px`,
        font: `var(--weight-medium) ${sm ? 'var(--text-2xs)' : 'var(--text-xs)'} / 1 var(--font-ui)`,
        color: ink,
        background: variant === 'soft' ? bg : 'transparent',
        border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={sm ? 10 : 11} />}
      {children}
      {onRemove && (
        <span onClick={onRemove} role="button" aria-label="Remove tag"
          style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.55, marginRight: -2 }}>
          <Icon name="x" size={sm ? 10 : 11} />
        </span>
      )}
    </span>
  );
}
