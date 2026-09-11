import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Tag } from '../core/Tag.jsx';
import { DateChip } from './DateChip.jsx';
import { ChecklistItem } from './ChecklistItem.jsx';

/** TaskDetailCard — a to-do opened in place, revealing notes, checklist and dates. */
export function TaskDetailCard({
  title, state = 'open', notes, checklist = [], tags = [], when, deadline,
  onToggle, onClose, onToggleItem, style,
}) {
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)', padding: '14px 16px 8px',
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ marginTop: 2 }}><Checkbox state={state} onToggle={onToggle} /></span>
        <span style={{
          flex: 1, font: 'var(--weight-semibold) var(--text-md) / 1.32 var(--font-ui)',
          color: state === 'done' ? 'var(--text-done)' : 'var(--text-primary)',
        }}>{title}</span>
        {onClose && <IconButton icon="chevron-up" label="Close" size="sm" onClick={onClose} />}
      </div>

      {notes && (
        <p style={{ margin: '6px 0 0 26px', font: 'var(--type-body)', color: 'var(--text-secondary)', textWrap: 'pretty' }}>{notes}</p>
      )}

      {checklist.length > 0 && (
        <div style={{ margin: '12px 0 0 26px', borderTop: '1px solid var(--border-subtle)' }}>
          {checklist.map((c, i) => (
            <ChecklistItem key={c.label} label={c.label} checked={c.checked}
              last={i === checklist.length - 1} onToggle={() => onToggleItem && onToggleItem(i)} />
          ))}
        </div>
      )}

      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '12px 0 0 26px' }}>
          {tags.map((t) => (
            <Tag key={typeof t === 'string' ? t : t.label} tone={typeof t === 'string' ? 'neutral' : t.tone}>
              {typeof t === 'string' ? t : t.label}
            </Tag>
          ))}
        </div>
      )}

      {(when || deadline) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '14px 0 0 26px' }}>
          {when && <DateChip kind={when.kind || 'today'}>{when.label}</DateChip>}
          {deadline && <DateChip kind="deadline" secondary={deadline.secondary}>{deadline.label}</DateChip>}
        </div>
      )}

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2,
        marginTop: 14, paddingTop: 6, borderTop: '1px solid var(--border-subtle)',
      }}>
        <IconButton icon="calendar-days" label="When" size="sm" />
        <IconButton icon="tag" label="Tags" size="sm" />
        <IconButton icon="list-checks" label="Checklist" size="sm" />
        <IconButton icon="flag" label="Deadline" size="sm" />
        <IconButton icon="ellipsis" label="More" size="sm" />
      </div>
    </div>
  );
}
