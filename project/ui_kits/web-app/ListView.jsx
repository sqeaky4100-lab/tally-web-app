const {
  TaskRow, TaskGroupHeader, TaskDetailCard, QuickEntry, DateChip,
  ViewHeader, Segmented, IconButton, Icon,
} = window.TallyDesignSystem_788326;

const LIST_META = {
  inbox:    { title: 'Inbox',    icon: 'inbox',         color: 'var(--blue-400)' },
  today:    { title: 'Today',    icon: 'star',          color: 'var(--state-today)' },
  upcoming: { title: 'Upcoming', icon: 'calendar-days', color: 'var(--state-deadline)' },
  anytime:  { title: 'Anytime',  icon: 'layers',        color: 'var(--state-scheduled)' },
  someday:  { title: 'Someday',  icon: 'archive',       color: 'var(--state-someday)' },
  logbook:  { title: 'Logbook',  icon: 'circle-check',  color: 'var(--state-logged)' },
  trash:    { title: 'Trash',    icon: 'trash-2',       color: 'var(--text-tertiary)' },
};

function trailingFor(t) {
  if (t.deadline) return <DateChip kind="deadline" size="sm" muted>{t.deadline.secondary || t.deadline.label}</DateChip>;
  if (t.project && !t.group) {
    const p = window.TallyData.projects.find((x) => x.id === t.project);
    return p ? <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{p.label}</span> : null;
  }
  return null;
}

function EmptyState({ icon, title, body }) {
  return (
    <div style={{ padding: '64px 10px', textAlign: 'center', color: 'var(--text-tertiary)' }}>
      <span style={{ display: 'inline-flex', opacity: 0.5 }}><Icon name={icon} size={28} /></span>
      <div style={{ marginTop: 12, font: 'var(--type-ui-strong)', color: 'var(--text-secondary)' }}>{title}</div>
      <div style={{ marginTop: 4, font: 'var(--type-ui)' }}>{body}</div>
    </div>
  );
}

function ListView({
  view, tasks, selected, expanded, mode, filter, onFilter,
  onSelect, onExpand, onToggle, onToggleItem, composing, onCommitCompose,
}) {
  const D = window.TallyData;
  const isProject = view.type === 'project';
  const project = isProject ? D.projects.find((p) => p.id === view.id) : null;
  const meta = LIST_META[view.id] || {};

  const done = tasks.filter((t) => t.state === 'done' || t.state === 'canceled').length;
  const progress = tasks.length ? done / tasks.length : 0;

  const tags = isProject
    ? ['All'].concat(Array.from(new Set(tasks.flatMap((t) => t.tags || []))))
    : null;

  const shown = filter && filter !== 'All' ? tasks.filter((t) => (t.tags || []).indexOf(filter) >= 0) : tasks;

  const groupKey = isProject ? 'group' : (view.id === 'upcoming' || view.id === 'logbook' ? 'when' : null);
  const groups = [];
  shown.forEach((t) => {
    const k = groupKey ? (t[groupKey] || '') : '';
    const g = groups.find((x) => x.key === k);
    if (g) g.items.push(t); else groups.push({ key: k, items: [t] });
  });

  const renderRow = (t) => {
    if (expanded === t.id && mode === 'inline') {
      return (
        <div key={t.id} style={{ margin: '8px 0' }}>
          <TaskDetailCard
            title={t.title} state={t.state} notes={t.notes}
            checklist={t.checklist || []} tags={t.tags || []}
            when={t.today ? { kind: 'today', label: 'Today' } : undefined}
            deadline={t.deadline}
            onToggle={() => onToggle(t.id)}
            onToggleItem={(i) => onToggleItem(t.id, i)}
            onClose={() => onExpand(null)}
          />
        </div>
      );
    }
    return (
      <TaskRow key={t.id} title={t.title} state={t.state} today={view.id !== 'today' && t.today}
        meta={t.meta || []} tags={(t.tags || []).map((l) => ({ label: l }))}
        trailing={trailingFor(t)} selected={selected === t.id}
        onToggle={() => onToggle(t.id)}
        onClick={() => { onSelect(t.id); if (mode === 'inline') onExpand(expanded === t.id ? null : t.id); }} />
    );
  };

  return (
    <div style={{ flex: 1, minWidth: 0, overflowY: 'auto', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '34px var(--content-gutter) 120px' }}>
        {isProject
          ? <ViewHeader progress={progress} title={project.label} subtitle={project.note} />
          : <ViewHeader icon={meta.icon} iconColor={meta.color} title={meta.title} />}

        {tags && tags.length > 1 && (
          <div style={{ margin: '16px 0 0 8px' }}>
            <Segmented options={tags} value={filter || 'All'} onChange={onFilter} />
          </div>
        )}

        {composing && (
          <div style={{ margin: '18px 0 4px' }}>
            <QuickEntry when={view.id === 'today' ? 'Today' : 'Anytime'} onCommit={onCommitCompose} />
          </div>
        )}

        <div style={{ marginTop: composing ? 8 : 20 }}>
          {groups.length === 0 && (
            <EmptyState icon={meta.icon || 'circle-check'} title={'Nothing in ' + (project ? project.label : meta.title)}
              body="Press N to add the first to-do." />
          )}
          {groups.map((g, gi) => (
            <div key={g.key || gi}>
              {g.key && <TaskGroupHeader title={g.key} tone={isProject ? 'accent' : 'quiet'} style={gi === 0 ? { marginTop: 0 } : undefined} />}
              <div style={{ marginTop: g.key ? 4 : 0 }}>{g.items.map(renderRow)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ListView, LIST_META });
