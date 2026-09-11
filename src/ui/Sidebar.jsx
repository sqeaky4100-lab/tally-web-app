import React from 'react';
import { SidebarItem } from '../../design-system/components/navigation/SidebarItem.jsx';
import { SidebarSection } from '../../design-system/components/navigation/SidebarSection.jsx';
import { Toolbar } from '../../design-system/components/navigation/Toolbar.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { IconButton } from '../../design-system/components/core/IconButton.jsx';
import { BrandMark } from '../../design-system/components/core/BrandMark.jsx';
import { BUILT_IN_LISTS, ARCHIVE_LISTS } from '../lib/model.js';

/** Sidebar — the left rail: built-in lists, then areas and their projects. */
export function Sidebar({ view, onView, counts, progressOf, areas, projects, onSettings, onNewList }) {
  const [collapsed, setCollapsed] = React.useState({});

  return (
    <div
      className="tally-sidebar"
      style={{
        width: 'var(--sidebar-width)',
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--canvas)',
        borderRight: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, height: 38, padding: '0 14px', flex: '0 0 auto' }}>
        <BrandMark size={18} variant="mono" title="Tally" style={{ color: 'var(--text-secondary)' }} />
        <span style={{ font: 'var(--weight-semibold) var(--text-sm) / 1 var(--font-ui)', color: 'var(--text-secondary)' }}>
          Tally
        </span>
      </div>

      <div className="tally-scroll" style={{ flex: 1, padding: '0 8px 12px' }}>
        {BUILT_IN_LISTS.map((l) => (
          <SidebarItem
            key={l.id}
            icon={l.icon}
            iconColor={l.color}
            label={l.label}
            count={counts[l.id] || 0}
            overdue={l.id === 'today' ? counts.overdue : undefined}
            active={view.type === 'list' && view.id === l.id}
            onClick={() => onView({ type: 'list', id: l.id })}
          />
        ))}

        <div style={{ height: 14 }} />

        {ARCHIVE_LISTS.map((l) => (
          <SidebarItem
            key={l.id}
            icon={l.icon}
            iconColor={l.color}
            label={l.label}
            active={view.type === 'list' && view.id === l.id}
            onClick={() => onView({ type: 'list', id: l.id })}
          />
        ))}

        {areas.map((area) => (
          <SidebarSection
            key={area.id}
            label={area.label}
            icon={area.icon}
            collapsed={!!collapsed[area.id]}
            onToggle={() => setCollapsed((c) => ({ ...c, [area.id]: !c[area.id] }))}
          >
            {projects
              .filter((p) => p.area === area.id)
              .map((p) => (
                <SidebarItem
                  key={p.id}
                  label={p.nav || p.label}
                  indent={1}
                  progress={progressOf(p.id)}
                  active={view.type === 'project' && view.id === p.id}
                  onClick={() => onView({ type: 'project', id: p.id })}
                />
              ))}
          </SidebarSection>
        ))}
      </div>

      <Toolbar position="bottom" style={{ background: 'transparent', backdropFilter: 'none' }}>
        <Button variant="ghost" size="sm" icon="plus" onClick={onNewList}>New List</Button>
        <span style={{ flex: 1 }} />
        <IconButton
          icon="settings"
          label="Settings"
          size="sm"
          active={view.type === 'settings'}
          onClick={onSettings}
        />
      </Toolbar>
    </div>
  );
}
