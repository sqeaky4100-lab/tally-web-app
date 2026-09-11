import React from 'react';

const TONES = {
  neutral: ['var(--surface-sunken)', 'var(--text-secondary)'],
  accent: ['var(--accent)', 'var(--on-accent)'],
  danger: ['var(--red-500)', '#fff'],
  quiet: ['transparent', 'var(--text-tertiary)'],
};

/** Badge — a count. Sidebar rows, group headers, unread markers. */
export function Badge({ children, tone = 'quiet', style, ...rest }) {
  const [bg, ink] = TONES[tone] || TONES.quiet;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 18, height: 18, padding: '0 6px',
        font: 'var(--weight-semibold) var(--text-2xs) / 1 var(--font-ui)',
        fontVariantNumeric: 'tabular-nums',
        color: ink, background: bg, borderRadius: 'var(--radius-pill)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
