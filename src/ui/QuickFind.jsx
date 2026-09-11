import React from 'react';
import { TextField } from '../../design-system/components/forms/TextField.jsx';
import { Icon } from '../../design-system/components/core/Icon.jsx';
import { Tag } from '../../design-system/components/core/Tag.jsx';
import { search, isClosed } from '../lib/model.js';

/** QuickFind — search over every to-do: title, notes and checklist items. */
export function QuickFind({ open, todos, projects, onPick, onDismiss }) {
  const [query, setQuery] = React.useState('');
  const [cursor, setCursor] = React.useState(0);
  const results = React.useMemo(() => search(todos, query).slice(0, 12), [todos, query]);

  React.useEffect(() => { if (open) { setQuery(''); setCursor(0); } }, [open]);
  React.useEffect(() => { setCursor(0); }, [query]);

  if (!open) return null;

  const pick = (todo) => { if (todo) onPick(todo); };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
    if (e.key === 'Enter') { e.preventDefault(); pick(results[cursor]); }
    if (e.key === 'Escape') { e.preventDefault(); onDismiss(); }
  };

  return (
    <div
      onClick={onDismiss}
      style={{
        position: 'absolute', inset: 0, zIndex: 80,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '12vh', background: 'var(--scrim)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Quick Find"
        className="tally-find"
        style={{
          width: 560, maxWidth: '92%',
          background: 'var(--surface-raised)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-modal)',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '12px 14px', borderBottom: results.length ? '1px solid var(--border-subtle)' : 'none' }}>
          <TextField
            icon="search"
            variant="bare"
            placeholder="Quick Find"
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            style={{ minHeight: 26 }}
          />
        </div>

        <div className="tally-scroll" style={{ maxHeight: '48vh', padding: results.length ? 6 : 0 }}>
          {results.map((todo, i) => {
            const project = projects.find((p) => p.id === todo.project);
            return (
              <div
                key={todo.id}
                onMouseEnter={() => setCursor(i)}
                onClick={() => pick(todo)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '7px 10px', borderRadius: 'var(--radius-sm)',
                  background: i === cursor ? 'var(--accent)' : 'transparent',
                  color: i === cursor ? 'var(--on-accent)' : 'var(--text-primary)',
                  cursor: 'pointer',
                }}
              >
                <Icon name={isClosed(todo) ? 'circle-check' : 'circle'} size={14} />
                <span style={{
                  flex: 1, minWidth: 0, font: 'var(--type-ui)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {todo.ref ? `${todo.ref}. ${todo.title}` : todo.title}
                </span>
                {project && (
                  <span style={{
                    font: 'var(--type-caption)',
                    opacity: i === cursor ? 0.8 : 1,
                    color: i === cursor ? 'inherit' : 'var(--text-tertiary)',
                    whiteSpace: 'nowrap',
                  }}>
                    {project.short || project.label}
                  </span>
                )}
              </div>
            );
          })}

          {query.trim() && results.length === 0 && (
            <div style={{ padding: '22px 16px', textAlign: 'center', color: 'var(--text-tertiary)', font: 'var(--type-ui)' }}>
              Nothing matches “{query.trim()}”.
            </div>
          )}
        </div>

        {!query.trim() && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderTop: '1px solid var(--border-subtle)' }}>
            <Tag size="sm" variant="outline">↑↓ to move</Tag>
            <Tag size="sm" variant="outline">Return to open</Tag>
            <Tag size="sm" variant="outline">Esc to close</Tag>
          </div>
        )}
      </div>
    </div>
  );
}
