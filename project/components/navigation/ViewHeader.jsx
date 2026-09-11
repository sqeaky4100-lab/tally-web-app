import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { ProgressRing } from '../core/ProgressRing.jsx';
import { IconButton } from '../core/IconButton.jsx';

/** ViewHeader — the large title at the top of a list. */
export function ViewHeader({ title, icon, iconColor, progress, subtitle, actions, style }) {
  return (
    <div style={{ padding: '0 10px', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {typeof progress === 'number'
          ? <ProgressRing value={progress} size={20} thickness={2} />
          : icon && <Icon name={icon} size={24} color={iconColor || 'var(--text-tertiary)'} />}
        <h1 style={{
          flex: 1, font: 'var(--type-title)', letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-primary)',
        }}>{title}</h1>
        {actions && <span style={{ display: 'flex', gap: 2 }}>{actions}</span>}
        {!actions && <IconButton icon="ellipsis" label="View options" />}
      </div>
      {subtitle && (
        <p style={{ margin: '6px 0 0', font: 'var(--type-body)', color: 'var(--text-secondary)', textWrap: 'pretty' }}>{subtitle}</p>
      )}
    </div>
  );
}
