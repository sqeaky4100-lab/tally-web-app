import React from 'react';
import { Toolbar } from '../design-system/components/navigation/Toolbar.jsx';
import { IconButton } from '../design-system/components/core/IconButton.jsx';
import { Segmented } from '../design-system/components/core/Segmented.jsx';
import { Tooltip } from '../design-system/components/overlay/Tooltip.jsx';
import { Popover } from '../design-system/components/overlay/Popover.jsx';
import { MenuItem, MenuDivider } from '../design-system/components/overlay/Menu.jsx';
import { Toast } from '../design-system/components/overlay/Toast.jsx';
import { Dialog } from '../design-system/components/overlay/Dialog.jsx';
import { Button } from '../design-system/components/core/Button.jsx';
import { Sidebar } from './ui/Sidebar.jsx';
import { ListView } from './ui/ListView.jsx';
import { DetailPane } from './ui/DetailPane.jsx';
import { SettingsView } from './ui/SettingsView.jsx';
import { QuickFind } from './ui/QuickFind.jsx';
import {
  LIST_META, inList, inProject, listCounts, projectProgress, sortTodos,
  isOpen, isClosed, tagsOf, newTodoId,
} from './lib/model.js';
import {
  loadTodos, saveTodos, resetTodos, loadPrefs, savePrefs,
  projects, areas, source, syncedAt,
} from './lib/store.js';

const EMPTY_DRAFT = { title: '', notes: '' };

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'system') {
    const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
  } else {
    root.setAttribute('data-theme', theme);
  }
}

export function App() {
  const [todos, setTodos] = React.useState(loadTodos);
  const [prefs, setPrefs] = React.useState(loadPrefs);
  const [view, setView] = React.useState(() => ({ type: 'list', id: loadPrefs().defaultView }));
  const [selected, setSelected] = React.useState(null);
  const [expanded, setExpanded] = React.useState(null);
  const [tagFilter, setTagFilter] = React.useState('All');
  const [composing, setComposing] = React.useState(false);
  const [draft, setDraft] = React.useState(EMPTY_DRAFT);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [findOpen, setFindOpen] = React.useState(false);
  const [confirmReset, setConfirmReset] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => { saveTodos(todos); }, [todos]);
  React.useEffect(() => { savePrefs(prefs); applyTheme(prefs.theme); }, [prefs]);
  React.useEffect(() => { setTagFilter('All'); setExpanded(null); }, [view.type, view.id]);

  React.useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const setPref = (patch) => setPrefs((p) => ({ ...p, ...patch }));

  const counts = React.useMemo(() => listCounts(todos), [todos]);

  const progressOf = React.useCallback((id) => projectProgress(todos, id), [todos]);

  const project = view.type === 'project' ? projects.find((p) => p.id === view.id) : null;

  const visible = React.useMemo(() => {
    let list = view.type === 'project'
      ? todos.filter((t) => inProject(t, view.id, prefs.showCompleted))
      : todos.filter((t) => inList(t, view.id));
    if (tagFilter && tagFilter !== 'All') {
      list = list.filter((t) => tagsOf(t).some((tag) => tag.label === tagFilter));
    }
    return sortTodos(list, projects);
  }, [todos, view, prefs.showCompleted, tagFilter]);

  const tagOptions = React.useMemo(() => {
    const pool = view.type === 'project'
      ? todos.filter((t) => inProject(t, view.id, prefs.showCompleted))
      : todos.filter((t) => inList(t, view.id));
    const labels = Array.from(new Set(pool.flatMap((t) => tagsOf(t).map((tag) => tag.label))));
    return labels.length ? ['All', ...labels] : null;
  }, [todos, view, prefs.showCompleted]);

  const selectedTodo = todos.find((t) => t.id === selected) || null;

  const toggle = (id) => setTodos((prev) => prev.map((t) => {
    if (t.id !== id) return t;
    const done = isClosed(t);
    if (done) return { ...t, state: t.priorState || 'open', completedAt: null };
    setToast({ message: `“${t.title}” completed`, action: 'Undo', undo: id });
    return { ...t, priorState: t.state, state: 'done', completedAt: new Date().toISOString() };
  }));

  const toggleItem = (id, index) => setTodos((prev) => prev.map((t) => {
    if (t.id !== id || !t.checklist) return t;
    const checklist = t.checklist.map((c, i) => (i === index ? { ...c, checked: !c.checked } : c));
    return { ...t, checklist };
  }));

  const trash = (id) => {
    const todo = todos.find((t) => t.id === id);
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, trashed: true } : t)));
    setSelected(null);
    setExpanded(null);
    if (todo) setToast({ message: `“${todo.title}” moved to Trash`, action: 'Undo', undo: id, kind: 'trash' });
  };

  const undo = () => {
    if (!toast || !toast.undo) return;
    const id = toast.undo;
    setTodos((prev) => prev.map((t) => {
      if (t.id !== id) return t;
      if (toast.kind === 'trash') return { ...t, trashed: false };
      return { ...t, state: t.priorState || 'open', completedAt: null };
    }));
    setToast(null);
  };

  const commitDraft = () => {
    const title = draft.title.trim();
    if (!title) { setComposing(false); setDraft(EMPTY_DRAFT); return; }
    const target = view.type === 'project' ? view.id : null;
    const todo = {
      id: newTodoId(),
      title,
      notes: draft.notes.trim() || '',
      project: target,
      state: 'open',
      priority: 3,
      tags: [],
      checklist: [],
      deadline: view.id === 'today' ? new Date().toISOString().slice(0, 10) : null,
      addedHere: true,
    };
    setTodos((prev) => [todo, ...prev]);
    setDraft(EMPTY_DRAFT);
    setComposing(false);
    setSelected(todo.id);
    const where = view.type === 'project' ? (project || {}).label : (LIST_META[view.id] || {}).label;
    setToast({ message: `To-do added to ${where}` });
  };

  const reset = () => {
    setTodos(resetTodos());
    setSelected(null);
    setExpanded(null);
    setConfirmReset(false);
    setToast({ message: 'Reset to the synced data' });
  };

  const openTodo = (todo) => {
    const list = todo.trashed ? 'trash' : isClosed(todo) ? 'logbook' : null;
    if (todo.project && !list) setView({ type: 'project', id: todo.project });
    else if (list) setView({ type: 'list', id: list });
    setSelected(todo.id);
    if (prefs.detail === 'inline') setExpanded(todo.id);
    setFindOpen(false);
  };

  React.useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA)$/.test(e.target.tagName);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setFindOpen(true);
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === ',') {
        e.preventDefault();
        setView({ type: 'settings', id: 'settings' });
        return;
      }
      if (e.key === 'Escape') {
        if (findOpen) setFindOpen(false);
        else if (composing) { setComposing(false); setDraft(EMPTY_DRAFT); }
        else if (menuOpen) setMenuOpen(false);
        else if (expanded) setExpanded(null);
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.toLowerCase() === 'n' && view.type !== 'settings') { e.preventDefault(); setComposing(true); }
      if (e.key.toLowerCase() === 'd') setPref({ detail: prefs.detail === 'inline' ? 'pane' : 'inline' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [findOpen, composing, menuOpen, expanded, prefs.detail, view.type]);

  const summary = React.useMemo(() => ({
    total: todos.filter((t) => !t.trashed).length,
    open: todos.filter((t) => !t.trashed && isOpen(t)).length,
    done: todos.filter((t) => !t.trashed && isClosed(t)).length,
  }), [todos]);

  const meta = LIST_META[view.id] || {};

  return (
    <div style={{
      position: 'relative', display: 'flex', height: '100%', overflow: 'hidden',
      background: 'var(--surface)', color: 'var(--text-primary)',
    }}>
      <Sidebar
        view={view}
        onView={(v) => { setView(v); setSelected(null); }}
        counts={counts}
        progressOf={progressOf}
        areas={areas}
        projects={projects}
        onSettings={() => setView({ type: 'settings', id: 'settings' })}
        onNewList={() => setToast({ message: 'Lists arrive with the next sync' })}
      />

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Toolbar style={{ background: 'var(--surface)', backdropFilter: 'none', borderBottom: 'none', height: 38, gap: 6 }}>
          <Tooltip label="Quick Find" shortcut="⌘K">
            <IconButton icon="search" label="Quick Find" size="sm" onClick={() => setFindOpen(true)} />
          </Tooltip>
          <span style={{ flex: 1 }} />
          <Segmented
            size="sm"
            value={prefs.detail}
            onChange={(detail) => { setPref({ detail }); setExpanded(null); }}
            options={[{ value: 'inline', label: 'Inline' }, { value: 'pane', label: 'Detail pane' }]}
          />
          <span style={{ width: 8 }} />
          <Tooltip label={prefs.theme === 'dark' ? 'Light' : 'Dark'}>
            <IconButton
              icon={prefs.theme === 'dark' ? 'sun' : 'moon'}
              label="Theme"
              size="sm"
              onClick={() => setPref({ theme: prefs.theme === 'dark' ? 'light' : 'dark' })}
            />
          </Tooltip>
          <span style={{ position: 'relative' }}>
            <IconButton icon="ellipsis" label="View options" size="sm" active={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
            <Popover open={menuOpen} width={228} placement="bottom-end">
              <MenuItem
                icon="circle-check"
                label="Show completed"
                checked={prefs.showCompleted}
                onClick={() => { setPref({ showCompleted: !prefs.showCompleted }); setMenuOpen(false); }}
              />
              <MenuItem
                icon="layers"
                label="Group by project"
                checked={prefs.groupByProject}
                onClick={() => { setPref({ groupByProject: !prefs.groupByProject }); setMenuOpen(false); }}
              />
              <MenuDivider />
              <MenuItem icon="search" label="Quick Find…" shortcut="⌘K" onClick={() => { setMenuOpen(false); setFindOpen(true); }} />
              <MenuItem icon="settings" label="Settings…" shortcut="⌘," onClick={() => { setMenuOpen(false); setView({ type: 'settings', id: 'settings' }); }} />
            </Popover>
          </span>
          <Tooltip label="New To-Do" shortcut="N">
            <IconButton
              icon="plus"
              label="New To-Do"
              size="sm"
              active={composing}
              disabled={view.type === 'settings'}
              onClick={() => setComposing(!composing)}
            />
          </Tooltip>
        </Toolbar>

        <div style={{ flex: 1, minHeight: 0, minWidth: 0, display: 'flex', overflow: 'hidden' }}>
          {view.type === 'settings' ? (
            <SettingsView
              prefs={prefs}
              onPrefs={setPref}
              source={source}
              syncedAt={syncedAt}
              counts={summary}
              onReset={() => setConfirmReset(true)}
            />
          ) : (
            <ListView
              view={view}
              todos={visible}
              projects={projects}
              selected={selected}
              expanded={expanded}
              detailMode={prefs.detail}
              tagFilter={tagFilter}
              tagOptions={tagOptions}
              onTagFilter={setTagFilter}
              onSelect={setSelected}
              onExpand={setExpanded}
              onToggle={toggle}
              onToggleItem={toggleItem}
              composing={composing}
              draft={draft}
              onDraft={setDraft}
              onCommit={commitDraft}
              onCancelCompose={() => { setComposing(false); setDraft(EMPTY_DRAFT); }}
              onNew={() => setComposing(true)}
              groupByProject={prefs.groupByProject}
              title={project ? project.label : meta.label}
              subtitle={project ? project.note : undefined}
              progress={project ? progressOf(project.id) : undefined}
              icon={meta.icon}
              iconColor={meta.color}
            />
          )}

          {prefs.detail === 'pane' && view.type !== 'settings' && (
            <DetailPane
              todo={selectedTodo}
              projects={projects}
              onClose={() => setPref({ detail: 'inline' })}
              onToggle={toggle}
              onToggleItem={toggleItem}
              onTrash={trash}
            />
          )}
        </div>
      </div>

      <QuickFind
        open={findOpen}
        todos={todos}
        projects={projects}
        onPick={openTodo}
        onDismiss={() => setFindOpen(false)}
      />

      <Dialog
        open={confirmReset}
        title="Reset to synced data"
        description="Local completions, checklist ticks and to-dos added here are discarded. The synced Todoist pull is restored."
        onDismiss={() => setConfirmReset(false)}
        footer={(
          <>
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>Cancel</Button>
            <Button variant="danger" onClick={reset}>Reset</Button>
          </>
        )}
      />

      {toast && (
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 26,
          display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 90,
        }}>
          <span style={{ pointerEvents: 'auto' }}>
            <Toast
              message={toast.message}
              actionLabel={toast.action}
              onAction={undo}
              icon={toast.kind === 'trash' ? 'trash-2' : toast.action ? 'circle-check' : 'plus'}
            />
          </span>
        </div>
      )}
    </div>
  );
}
