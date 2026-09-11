import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { ProgressRing } from '../core/ProgressRing.jsx';

/** SidebarItem — one navigable list in the left rail. */
export function SidebarItem({
  label, icon, iconColor, progress, count, overdue, active = false,
  indent = 0, onClick, style,
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 9,
        height: 28, padding: '0 8px 0 ' + (8 + indent * 18) + 'px',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--surface-sunken)' : hover ? 'var(--surface-hover)' : 'transparent',
        cursor: 'default', transition: 'var(--transition-hover)',
        ...style,
      }}
    >
      {typeof progress === 'number'
        ? <ProgressRing value={progress} size={14} />
        : <Icon name={icon} size={15} color={iconColor || 'var(--text-tertiary)'} />}
      <span style={{
        flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        font: 'var(--weight-' + (active ? 'semibold' : 'medium') + ') var(--text-sm) / 1 var(--font-ui)',
        color: 'var(--text-primary)',
      }}>{label}</span>
      {typeof overdue === 'number' && overdue > 0 && <Badge tone="danger">{overdue}</Badge>}
      {typeof count === 'number' && count > 0 && <Badge>{count}</Badge>}
    </div>
  );
}
