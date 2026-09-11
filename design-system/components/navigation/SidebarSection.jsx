import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** SidebarSection — an area heading grouping projects in the rail. */
export function SidebarSection({ label, icon = 'box', collapsed, onToggle, children, style }) {
  return (
    <div style={{ marginTop: 'var(--space-8)', ...style }}>
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: 9,
          height: 26, padding: '0 8px', cursor: onToggle ? 'pointer' : 'default',
        }}
      >
        <Icon name={icon} size={15} color="var(--text-tertiary)" />
        <span style={{
          flex: 1, font: 'var(--weight-semibold) var(--text-sm) / 1 var(--font-ui)',
          color: 'var(--text-primary)',
        }}>{label}</span>
        {onToggle && <Icon name={collapsed ? 'chevron-right' : 'chevron-down'} size={13} color="var(--text-tertiary)" />}
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
