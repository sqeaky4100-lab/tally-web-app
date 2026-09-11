import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Icon } from '../core/Icon.jsx';

/** TaskGroupHeader — a blue heading that divides a list into named runs. */
export function TaskGroupHeader({ title, count, collapsed, onToggle, actions = true, tone = 'accent', style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '6px 10px 5px', marginTop: 'var(--space-8)',
        borderBottom: '1px solid var(--border-subtle)',
        ...style,
      }}
    >
      {onToggle && (
        <span onClick={onToggle} style={{ display: 'flex', cursor: 'pointer', color: 'var(--text-tertiary)' }}>
          <Icon name={collapsed ? 'chevron-right' : 'chevron-down'} size={13} />
        </span>
      )}
      <span style={{
        font: 'var(--type-section)',
        color: tone === 'accent' ? 'var(--text-accent)' : 'var(--text-secondary)',
        letterSpacing: 'var(--tracking-snug)',
      }}>{title}</span>
      {typeof count === 'number' && (
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{count}</span>
      )}
      <span style={{ flex: 1 }} />
      {actions && (
        <span style={{ opacity: hover ? 1 : 0, transition: 'opacity var(--dur-fast) var(--ease-standard)' }}>
          <IconButton icon="ellipsis" label="Group actions" size="sm" />
        </span>
      )}
    </div>
  );
}
