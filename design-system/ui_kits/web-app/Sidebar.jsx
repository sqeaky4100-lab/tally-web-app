const { SidebarItem, SidebarSection, Toolbar, Button, IconButton } = window.TallyDesignSystem_788326;

const BUILT_IN = [
  { id: 'inbox',    label: 'Inbox',    icon: 'inbox',         color: 'var(--blue-400)' },
  { id: 'today',    label: 'Today',    icon: 'star',          color: 'var(--state-today)' },
  { id: 'upcoming', label: 'Upcoming', icon: 'calendar-days', color: 'var(--state-deadline)' },
  { id: 'anytime',  label: 'Anytime',  icon: 'layers',        color: 'var(--state-scheduled)' },
  { id: 'someday',  label: 'Someday',  icon: 'archive',       color: 'var(--state-someday)' },
];
const ARCHIVE = [
  { id: 'logbook', label: 'Logbook', icon: 'circle-check', color: 'var(--state-logged)' },
  { id: 'trash',   label: 'Trash',   icon: 'trash-2',      color: 'var(--text-tertiary)' },
];

function Sidebar({ view, onView, counts, projectProgress, onNewList }) {
  const D = window.TallyData;
  return (
    <div style={{
      width: 'var(--sidebar-width)', flex: '0 0 auto',
      display: 'flex', flexDirection: 'column',
      background: 'var(--canvas)', borderRight: '1px solid var(--border-subtle)',
    }}>
      <div style={{ height: 38, flex: '0 0 auto' }} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px 12px' }}>
        {BUILT_IN.map((b) => (
          <SidebarItem key={b.id} icon={b.icon} iconColor={b.color} label={b.label}
            count={counts[b.id] || 0} overdue={b.id === 'today' ? counts.overdue : 0}
            active={view.id === b.id} onClick={() => onView({ type: 'list', id: b.id })} />
        ))}
        <div style={{ height: 14 }} />
        {ARCHIVE.map((b) => (
          <SidebarItem key={b.id} icon={b.icon} iconColor={b.color} label={b.label}
            active={view.id === b.id} onClick={() => onView({ type: 'list', id: b.id })} />
        ))}
        {D.areas.map((area) => (
          <SidebarSection key={area.id} label={area.label} icon={area.icon}>
            {D.projects.filter((p) => p.area === area.id).map((p) => (
              <SidebarItem key={p.id} progress={projectProgress[p.id] || 0} label={p.label} indent={1}
                active={view.id === p.id} onClick={() => onView({ type: 'project', id: p.id })} />
            ))}
          </SidebarSection>
        ))}
      </div>
      <Toolbar position="bottom" style={{ background: 'transparent', backdropFilter: 'none' }}>
        <Button variant="ghost" size="sm" icon="plus" onClick={onNewList}>New List</Button>
        <span style={{ flex: 1 }} />
        <IconButton icon="sliders-horizontal" label="View settings" size="sm" />
      </Toolbar>
    </div>
  );
}

Object.assign(window, { Sidebar, BUILT_IN });
