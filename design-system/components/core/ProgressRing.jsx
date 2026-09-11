import React from 'react';

/** ProgressRing — the project marker. A ring that fills as its to-dos complete. */
export function ProgressRing({ value = 0, size = 14, thickness = 1.6, color = 'var(--accent)', track = 'var(--state-open)', style }) {
  const pct = Math.max(0, Math.min(1, value));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flex: '0 0 auto', display: 'block', ...style }} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={thickness} />
      {pct > 0 && (
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color}
          strokeWidth={thickness} strokeLinecap="butt"
          strokeDasharray={`${c * pct} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      )}
      {pct >= 1 && <circle cx={size / 2} cy={size / 2} r={r - thickness / 2} fill={color} />}
    </svg>
  );
}
