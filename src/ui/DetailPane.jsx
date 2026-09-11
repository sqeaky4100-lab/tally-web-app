import React from 'react';
import { Checkbox } from '../../design-system/components/forms/Checkbox.jsx';
import { ChecklistItem } from '../../design-system/components/tasks/ChecklistItem.jsx';
import { IconButton } from '../../design-system/components/core/IconButton.jsx';
import { Icon } from '../../design-system/components/core/Icon.jsx';
import { Tag } from '../../design-system/components/core/Tag.jsx';
import { DateChip } from '../../design-system/components/tasks/DateChip.jsx';
import { Notes } from './Notes.jsx';
import { tagsOf } from '../lib/model.js';
import { formatAbsolute, formatRelative, formatStamp } from '../lib/date.js';

function Field({ icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0' }}>
      <Icon name={icon} size={15} color="var(--text-tertiary)" />
      <span style={{ font: 'var(--type-ui)', color: 'var(--text-primary)' }}>{children}</span>
    </div>
  );
}

/** One checklist item plus the note the sync carried with it, clamped until opened. */
function ChecklistEntry({ item, last, onToggle }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ChecklistItem label={item.label} checked={item.checked} last={last && !item.notes} onToggle={onToggle} />
      {item.notes && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => { if (e.key === 'Enter') setOpen((o) => !o); }}
          style={{
            padding: '0 0 10px 24px',
            cursor: 'pointer',
            borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
          }}
        >
          <div className={open ? undefined : 'tally-clamp'}>
            <Notes style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{item.notes}</Notes>
          </div>
        </div>
      )}
    </div>
  );
}

/** DetailPane — the right pane: one to-do, its notes, checklist and dates. */
export function DetailPane({ todo, projects, onClose, onToggle, onToggleItem, onTrash }) {
  const project = todo ? projects.find((p) => p.id === todo.project) : null;
  const checklist = (todo && todo.checklist) || [];

  return (
    <div
      style={{
        width: 'var(--detail-width)',
        flex: '0 1 auto',
        minWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface)',
        borderLeft: '1px solid var(--border-default)',
        boxShadow: 'var(--shadow-panel)',
        zIndex: 2,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 38, padding: '0 8px 0 14px', flex: '0 0 auto' }}>
        <span style={{
          flex: 1, font: 'var(--type-caption)', color: 'var(--text-tertiary)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {todo ? (todo.ref ? `${todo.ref}. ${todo.title}` : todo.title) : 'No selection'}
        </span>
        <IconButton icon="x" label="Close pane" size="sm" onClick={onClose} />
      </div>

      {!todo ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center' }}>
          <div style={{ color: 'var(--text-tertiary)' }}>
            <span style={{ display: 'inline-flex', opacity: 0.5 }}><Icon name="panel-left" size={26} /></span>
            <div style={{ marginTop: 12, font: 'var(--type-ui)' }}>
              Select a to-do to see its notes, checklist and dates here.
            </div>
          </div>
        </div>
      ) : (
        <div className="tally-scroll" style={{ flex: 1, padding: '4px 22px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
            <span style={{ marginTop: 4 }}>
              <Checkbox size={18} state={todo.state} onToggle={() => onToggle(todo.id)} />
            </span>
            <h2 style={{
              flex: 1,
              font: 'var(--weight-bold) var(--text-xl) / 1.24 var(--font-ui)',
              letterSpacing: 'var(--tracking-snug)',
              color: todo.state === 'done' ? 'var(--text-done)' : 'var(--text-primary)',
            }}>
              {todo.ref ? `${todo.ref}. ${todo.title}` : todo.title}
            </h2>
          </div>

          <div style={{ margin: '10px 0 0 29px' }}>
            {todo.notes
              ? <Notes>{todo.notes}</Notes>
              : <p style={{ font: 'var(--type-body)', color: 'var(--text-tertiary)' }}>Notes</p>}
          </div>

          {tagsOf(todo).length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '14px 0 0 29px' }}>
              {tagsOf(todo).map((t) => <Tag key={t.label} tone={t.tone}>{t.label}</Tag>)}
            </div>
          )}

          {checklist.length > 0 && (
            <div style={{ margin: '16px 0 0 29px' }}>
              <div style={{ font: 'var(--type-section)', color: 'var(--text-secondary)', paddingBottom: 4 }}>
                Checklist
                <span style={{ marginLeft: 6, color: 'var(--text-tertiary)', font: 'var(--type-caption)' }}>
                  {checklist.filter((c) => c.checked).length}/{checklist.length}
                </span>
              </div>
              <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
                {checklist.map((item, i) => (
                  <ChecklistEntry
                    key={item.id || item.label}
                    item={item}
                    last={i === checklist.length - 1}
                    onToggle={() => onToggleItem(todo.id, i)}
                  />
                ))}
              </div>
            </div>
          )}

          <div style={{ margin: '20px 0 0 29px', paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
            {todo.deadline
              ? (
                <div style={{ padding: '7px 0' }}>
                  <DateChip kind="deadline" secondary={formatRelative(todo.deadline)}>
                    {formatAbsolute(todo.deadline)}
                  </DateChip>
                </div>
              )
              : <Field icon="calendar-days">Anytime</Field>}

            {todo.completedAt && (
              <div style={{ padding: '7px 0' }}>
                <DateChip kind="logged">Logged {formatStamp(todo.completedAt)}</DateChip>
              </div>
            )}

            {project && <Field icon="box">{project.label}</Field>}

            {todo.synced && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0' }}>
                <Icon name="link" size={15} color="var(--text-tertiary)" />
                <a
                  href={`https://app.todoist.com/app/task/${todo.id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ font: 'var(--type-ui)' }}
                >
                  Open in Todoist
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2,
        height: 42, padding: '0 12px', flex: '0 0 auto',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <IconButton icon="calendar-days" label="When" size="sm" disabled={!todo} />
        <IconButton icon="tag" label="Tags" size="sm" disabled={!todo} />
        <IconButton icon="list-checks" label="Checklist" size="sm" disabled={!todo} />
        <IconButton icon="flag" label="Deadline" size="sm" disabled={!todo} />
        <span style={{ flex: 1 }} />
        <IconButton
          icon="trash-2"
          label="Move to Trash"
          tone="danger"
          size="sm"
          disabled={!todo}
          onClick={() => todo && onTrash(todo.id)}
        />
      </div>
    </div>
  );
}
