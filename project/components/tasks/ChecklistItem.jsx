import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';
import { Icon } from '../core/Icon.jsx';

/** ChecklistItem — a sub-step inside a to-do's detail card. */
export function ChecklistItem({ label, checked = false, onToggle, last = false, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '7px 0', minHeight: 28,
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
        ...style,
      }}
    >
      <Checkbox shape="circle" size={14} state={checked ? 'done' : 'open'} onToggle={onToggle}
        style={{ borderColor: checked ? undefined : 'var(--accent)' }} />
      <span style={{
        flex: 1, font: 'var(--type-ui)', fontSize: 'var(--text-base)',
        color: checked ? 'var(--text-done)' : 'var(--text-primary)',
      }}>{label}</span>
      <span style={{ opacity: hover ? 1 : 0, color: 'var(--text-tertiary)', cursor: 'grab', display: 'flex', transition: 'opacity var(--dur-fast) var(--ease-standard)' }}>
        <Icon name="grip-horizontal" size={14} />
      </span>
    </div>
  );
}
