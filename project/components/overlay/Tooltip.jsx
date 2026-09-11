import React from 'react';

/** Tooltip — a dark label that names an unlabelled control. */
export function Tooltip({ label, shortcut, children, placement = 'top', style }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'top'
    ? { bottom: '100%', left: '50%', transform: 'translate(-50%, -6px)' }
    : { top: '100%', left: '50%', transform: 'translate(-50%, 6px)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', zIndex: 70, display: 'flex', alignItems: 'center', gap: 6,
          padding: '4px 8px', borderRadius: 'var(--radius-sm)',
          background: 'var(--gray-900)', color: 'var(--gray-0)',
          font: 'var(--type-caption)', whiteSpace: 'nowrap',
          boxShadow: 'var(--shadow-popover)', pointerEvents: 'none',
          ...pos, ...style,
        }}>
          {label}
          {shortcut && <span style={{ font: 'var(--type-mono)', opacity: 0.6 }}>{shortcut}</span>}
        </span>
      )}
    </span>
  );
}
