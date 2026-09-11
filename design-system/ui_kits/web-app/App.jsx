const {
  Toolbar, IconButton, Button, TextField, Segmented, Menu, MenuItem, MenuDivider,
  Popover, Toast, Icon, Tooltip,
} = window.TallyDesignSystem_788326;

function filterTasks(tasks, view) {
  const open = (t) => t.state === 'open' || t.state === 'progress';
  if (view.type === 'project') return tasks.filter((t) => t.project === view.id);
  if (view.id === 'today') return tasks.filter((t) => t.today);
  if (view.id === 'anytime') return tasks.filter((t) => open(t) && (t.project || t.list === 'inbox'));
  if (view.id === 'trash') return [];
  return tasks.filter((t) => t.list === view.id);
}

function App() {
  const D = window.TallyData;
  const [tasks, setTasks] = React.useState(D.tasks);
  const [view, setView] = React.useState({ type: 'list', id: 'today' });
  const [selected, setSelected] = React.useState(null);
  const [expanded, setExpanded] = React.useState(null);
  const [mode, setMode] = React.useState('inline');
  const [filter, setFilter] = React.useState('All');
  const [composing, setComposing] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  const [toast, setToast] = React.useState(null);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  React.useEffect(() => { setFilter('All'); setExpanded(null); }, [view.id]);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const counts = React.useMemo(() => {
    const open = (t) => t.state === 'open' || t.state === 'progress';
    return {
      inbox: tasks.filter((t) => t.list === 'inbox' && open(t)).length,
      today: tasks.filter((t) => t.today && open(t)).length,
      overdue: 1,
      upcoming: 0, anytime: 0, someday: 0,
    };
  }, [tasks]);

  const projectProgress = React.useMemo(() => {
    const out = {};
    D.projects.forEach((p) => {
      const own = tasks.filter((t) => t.project === p.id);
      const closed = own.filter((t) => t.state === 'done' || t.state === 'canceled').length;
      out[p.id] = own.length ? closed / own.length : 0;
    });
    return out;
  }, [tasks]);

  const visible = React.useMemo(() => {
    let list = filterTasks(tasks, view);
    if (query.trim()) list = tasks.filter((t) => t.title.toLowerCase().indexOf(query.trim().toLowerCase()) >= 0);
    return list;
  }, [tasks, view, query]);

  const toggle = (id) => setTasks((prev) => prev.map((t) => {
    if (t.id !== id) return t;
    const next = t.state === 'done' ? 'open' : 'done';
    if (next === 'done') setToast({ message: '“' + t.title + '” completed', action: 'Undo' });
    return { ...t, state: next };
  }));

  const toggleItem = (id, i) => setTasks((prev) => prev.map((t) => {
    if (t.id !== id || !t.checklist) return t;
    const cl = t.checklist.map((c, ci) => ci === i ? { ...c, checked: !c.checked } : c);
    return { ...t, checklist: cl };
  }));

  const selectedTask = tasks.find((t) => t.id === selected) || null;

  return (
    <div style={{
      position: 'relative', display: 'flex', height: '100%', overflow: 'hidden',
      background: 'var(--surface)', color: 'var(--text-primary)', minWidth: 900,
    }}>
      <Sidebar view={view} onView={(v) => { setView(v); setSelected(null); setQuery(''); }}
        counts={counts} projectProgress={projectProgress}
        onNewList={() => setToast({ message: 'New list created in Work' })} />

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Toolbar style={{ background: 'var(--surface)', backdropFilter: 'none', borderBottom: 'none', height: 38, gap: 6 }}>
          <div style={{ width: 190 }}>
            <TextField icon="search" size="sm" placeholder="Quick Find" value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ background: 'var(--surface-sunken)', border: '1px solid transparent' }} />
          </div>
          <span style={{ flex: 1 }} />
          <Segmented size="sm" value={mode} onChange={(m) => { setMode(m); setExpanded(null); }}
            options={[{ value: 'inline', label: 'Inline' }, { value: 'pane', label: 'Detail pane' }]} />
          <span style={{ width: 8 }} />
          <Tooltip label={theme === 'light' ? 'Dark' : 'Light'}>
            <IconButton icon={theme === 'light' ? 'moon' : 'sun'} label="Theme" size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          </Tooltip>
          <span style={{ position: 'relative' }}>
            <IconButton icon="ellipsis" label="View options" size="sm" active={menu} onClick={() => setMenu(!menu)} />
            <Popover open={menu} width={218} placement="bottom-end">
              <MenuItem icon="calendar-days" label="Show scheduled" checked />
              <MenuItem icon="circle-check" label="Show completed" onClick={() => setMenu(false)} />
              <MenuItem icon="tags" label="Group by tag" onClick={() => setMenu(false)} />
              <MenuDivider />
              <MenuItem icon="settings" label="Settings…" shortcut="⌘," onClick={() => setMenu(false)} />
            </Popover>
          </span>
          <Tooltip label="New To-Do" shortcut="N">
            <IconButton icon="plus" label="New To-Do" size="sm" active={composing} onClick={() => setComposing(!composing)} />
          </Tooltip>
        </Toolbar>

        <div style={{ flex: 1, minHeight: 0, minWidth: 0, display: 'flex', overflow: 'hidden' }}>
          <ListView view={view} tasks={visible} selected={selected} expanded={expanded} mode={mode}
            filter={filter} onFilter={setFilter}
            onSelect={setSelected} onExpand={setExpanded}
            onToggle={toggle} onToggleItem={toggleItem}
            composing={composing} onCommitCompose={() => { setComposing(false); setToast({ message: 'To-do added to ' + (view.id === 'today' ? 'Today' : 'this list') }); }} />

          {mode === 'pane' && (
            <DetailPane task={selectedTask} onClose={() => setMode('inline')}
              onToggle={toggle} onToggleItem={toggleItem} />
          )}
        </div>
      </div>

      {toast && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 26, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
          <Toast message={toast.message} actionLabel={toast.action} icon={toast.action ? 'circle-check' : 'plus'} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { App });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
