import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { DateChip } from './DateChip.jsx';

/** QuickEntry — the new-to-do composer. Appears in place, never as a modal. */
export function QuickEntry({ value = '', notes = '', onChange, onNotesChange, when = 'Today', onCommit, style }) {
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)', padding: '14px 16px 10px',
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Checkbox state="open" />
        <input
          autoFocus value={value} onChange={onChange} placeholder="New To-Do"
          onKeyDown={(e) => { if (e.key === 'Enter' && onCommit) onCommit(e); }}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            font: 'var(--weight-medium) var(--text-md) / 1.3 var(--font-ui)',
            color: 'var(--text-primary)',
          }}
        />
      </div>
      <input
        value={notes} onChange={onNotesChange} placeholder="Notes"
        style={{
          width: '100%', marginTop: 6, marginLeft: 26, border: 'none', outline: 'none',
          background: 'transparent', font: 'var(--type-body)', color: 'var(--text-primary)',
        }}
      />
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, marginTop: 12,
        paddingTop: 10, borderTop: '1px solid var(--border-subtle)',
      }}>
        <DateChip kind="today">{when}</DateChip>
        <span style={{ flex: 1 }} />
        <IconButton icon="tag" label="Tags" size="sm" />
        <IconButton icon="list-checks" label="Checklist" size="sm" />
        <IconButton icon="flag" label="Deadline" size="sm" />
      </div>
    </div>
  );
}
