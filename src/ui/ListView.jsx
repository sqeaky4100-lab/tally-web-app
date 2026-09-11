import React from 'react';
import { ViewHeader } from '../../design-system/components/navigation/ViewHeader.jsx';
import { TaskRow } from '../../design-system/components/tasks/TaskRow.jsx';
import { TaskGroupHeader } from '../../design-system/components/tasks/TaskGroupHeader.jsx';
import { TaskDetailCard } from '../../design-system/components/tasks/TaskDetailCard.jsx';
import { QuickEntry } from '../../design-system/components/tasks/QuickEntry.jsx';
import { DateChip } from '../../design-system/components/tasks/DateChip.jsx';
import { Segmented } from '../../design-system/components/core/Segmented.jsx';
import { Icon } from '../../design-system/components/core/Icon.jsx';
import { FloatingAdd } from '../../design-system/components/core/FloatingAdd.jsx';
import { Notes } from './Notes.jsx';
import { LIST_META, groupTodos, metaOf, tagsOf, checklistProgress, isClosed } from '../lib/model.js';
import { formatAbsolute, formatRelative, daysFromToday } from '../lib/date.js';

function EmptyState({ icon, title, body }) {
  return (
    <div style={{ padding: '64px 10px', textAlign: 'center', color: 'var(--text-tertiary)' }}>
      <span style={{ display: 'inline-flex', opacity: 0.5 }}><Icon name={icon} size={28} /></span>
      <div style={{ marginTop: 12, font: 'var(--type-ui-strong)', color: 'var(--text-secondary)' }}>{title}</div>
      <div style={{ marginTop: 4, font: 'var(--type-ui)' }}>{body}</div>
    </div>
  );
}

function trailingFor(todo, view, projects, showProject) {
  if (todo.deadline && !isClosed(todo)) {
    const overdue = daysFromToday(todo.deadline) < 0;
    return (
      <DateChip kind="deadline" size="sm" muted={!overdue}>
        {formatAbsolute(todo.deadline)}
        <span style={{ color: 'var(--text-tertiary)', fontWeight: 'var(--weight-regular)', marginLeft: 6 }}>
          {formatRelative(todo.deadline)}
        </span>
      </DateChip>
    );
  }
  const progress = checklistProgress(todo);
  if (progress && progress.total) {
    return (
      <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>
        {progress.done}/{progress.total}
      </span>
    );
  }
  if (showProject && todo.project) {
    const project = projects.find((p) => p.id === todo.project);
    if (project) {
      return <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{project.short || project.label}</span>;
    }
  }
  return null;
}

/** ListView — the list column: a view header, optional filters, and the rows. */
export function ListView({
  view, todos, projects, selected, expanded, detailMode, tagFilter, tagOptions,
  onTagFilter, onSelect, onExpand, onToggle, onToggleItem,
  composing, draft, onDraft, onCommit, onCancelCompose, onNew, progress, subtitle, title, icon, iconColor,
  groupByProject = true,
}) {
  const groups = groupTodos(todos, view, projects, { byProject: groupByProject });
  // A row names its project only where the group heading does not already say it.
  const groupedByProject = groupByProject && (view.id === 'anytime' || view.id === 'someday');
  const showProject = view.type !== 'project' && !groupedByProject;

  const renderRow = (todo) => {
    if (expanded === todo.id && detailMode === 'inline') {
      return (
        <div key={todo.id} style={{ margin: '8px 0' }}>
          <TaskDetailCard
            title={todo.ref ? `${todo.ref}. ${todo.title}` : todo.title}
            state={todo.state}
            notes={todo.notes ? <Notes>{todo.notes}</Notes> : undefined}
            checklist={(todo.checklist || []).map((c) => ({ label: c.label, checked: c.checked }))}
            tags={tagsOf(todo)}
            deadline={todo.deadline ? { label: formatAbsolute(todo.deadline), secondary: formatRelative(todo.deadline) } : undefined}
            onToggle={() => onToggle(todo.id)}
            onToggleItem={(i) => onToggleItem(todo.id, i)}
            onClose={() => onExpand(null)}
          />
        </div>
      );
    }
    return (
      <TaskRow
        key={todo.id}
        title={todo.ref ? `${todo.ref}. ${todo.title}` : todo.title}
        state={todo.state}
        meta={metaOf(todo)}
        tags={tagsOf(todo)}
        trailing={trailingFor(todo, view, projects, showProject)}
        selected={selected === todo.id}
        onToggle={() => onToggle(todo.id)}
        onClick={() => {
          onSelect(todo.id);
          if (detailMode === 'inline') onExpand(expanded === todo.id ? null : todo.id);
        }}
      />
    );
  };

  const meta = LIST_META[view.id] || {};
  const headTitle = title || meta.title || meta.label || 'Tally';

  return (
    <div className="tally-scroll" style={{ position: 'relative', flex: 1, minWidth: 0, background: 'var(--surface)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '34px var(--content-gutter) 120px' }}>
        {typeof progress === 'number'
          ? <ViewHeader progress={progress} title={headTitle} subtitle={subtitle} />
          : <ViewHeader icon={icon || meta.icon} iconColor={iconColor || meta.color} title={headTitle} subtitle={subtitle} />}

        {tagOptions && tagOptions.length > 1 && (
          <div style={{ margin: '16px 0 0 8px' }}>
            <Segmented options={tagOptions} value={tagFilter} onChange={onTagFilter} />
          </div>
        )}

        {composing && (
          <div style={{ margin: '18px 0 4px' }}>
            <QuickEntry
              value={draft.title}
              notes={draft.notes}
              when={view.type === 'project' ? 'Anytime' : (LIST_META[view.id] || {}).label || 'Anytime'}
              onChange={(e) => onDraft({ ...draft, title: e.target.value })}
              onNotesChange={(e) => onDraft({ ...draft, notes: e.target.value })}
              onCommit={onCommit}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8, font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>
              <span>Return to add</span>
              <span
                role="button"
                tabIndex={0}
                onClick={onCancelCompose}
                onKeyDown={(e) => { if (e.key === 'Enter') onCancelCompose(); }}
                style={{ cursor: 'pointer', color: 'var(--text-accent)' }}
              >
                Cancel
              </span>
            </div>
          </div>
        )}

        <div style={{ marginTop: composing ? 8 : 20 }}>
          {groups.length === 0 && (
            <EmptyState
              icon={icon || meta.icon || 'circle-check'}
              title={`Nothing in ${headTitle}`}
              body="Press N to add the first to-do."
            />
          )}
          {groups.map((group, gi) => (
            <div key={group.key || `group-${gi}`}>
              {group.key && (
                <TaskGroupHeader
                  title={group.key}
                  count={group.items.length}
                  tone={view.type === 'project' ? 'accent' : 'quiet'}
                  style={gi === 0 ? { marginTop: 0 } : undefined}
                />
              )}
              <div style={{ marginTop: group.key ? 4 : 0 }}>{group.items.map(renderRow)}</div>
            </div>
          ))}
        </div>
      </div>

      {view.id !== 'logbook' && view.id !== 'trash' && (
        <div style={{ position: 'sticky', bottom: 24, display: 'flex', justifyContent: 'flex-end', paddingRight: 28, pointerEvents: 'none' }}>
          <span style={{ pointerEvents: 'auto' }}>
            <FloatingAdd onClick={onNew} />
          </span>
        </div>
      )}
    </div>
  );
}
