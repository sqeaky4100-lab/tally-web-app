import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';
import { Icon } from '../core/Icon.jsx';
import { Tag } from '../core/Tag.jsx';
import { ProgressRing } from '../core/ProgressRing.jsx';

/** TaskRow — one line in a list. The workhorse of the entire product. */
export function TaskRow({
  title, state = 'open', shape = 'square', progress, today = false,
  meta = [], tags = [], trailing, selected = false, indent = 0,
  onToggle, onClick, style,
}) {
  const [hover, setHover] = React.useState(false);
  const done = state === 'done' || state === 'canceled';
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        minHeight: 'var(--row-height)',
        padding: `3px 10px 3px ${10 + indent * 22}px`,
        borderRadius: 'var(--radius-sm)',
        background: selected ? 'var(--surface-selected)' : hover ? 'var(--surface-hover)' : 'transparent',
        cursor: 'default',
        transition: 'var(--transition-hover)',
        ...style,
      }}
    >
      {typeof progress === 'number'
        ? <span style={{ display: 'flex', width: 16, justifyContent: 'center' }} onClick={onToggle}><ProgressRing value={progress} size={14} /></span>
        : <Checkbox state={state} shape={shape} onToggle={(e) => { e.stopPropagation(); onToggle && onToggle(e); }} />}

      <span style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0, flex: 1 }}>
        {today && <Icon name="star" size={13} color="var(--state-today)" />}
        <span style={{
          font: 'var(--type-ui)', fontSize: 'var(--text-base)',
          color: done ? 'var(--text-done)' : 'var(--text-primary)',
          textDecoration: state === 'canceled' ? 'line-through' : 'none',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{title}</span>

        {meta.map((m) => <Icon key={m} name={m} size={13} color="var(--text-tertiary)" />)}

        {tags.map((t) => (
          <Tag key={typeof t === 'string' ? t : t.label} size="sm" variant="outline" tone={typeof t === 'string' ? 'neutral' : t.tone}>
            {typeof t === 'string' ? t : t.label}
          </Tag>
        ))}
      </span>

      {trailing && <span style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 8 }}>{trailing}</span>}
    </div>
  );
}
