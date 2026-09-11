import React from 'react';
import { ViewHeader } from '../../design-system/components/navigation/ViewHeader.jsx';
import { Switch } from '../../design-system/components/forms/Switch.jsx';
import { Select } from '../../design-system/components/forms/Select.jsx';
import { Radio } from '../../design-system/components/forms/Radio.jsx';
import { Button } from '../../design-system/components/core/Button.jsx';
import { Badge } from '../../design-system/components/core/Badge.jsx';
import { Icon } from '../../design-system/components/core/Icon.jsx';
import { formatStamp } from '../lib/date.js';

function Row({ label, description, children, last = false }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '12px 16px',
      borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: 'var(--type-ui)', color: 'var(--text-primary)' }}>{label}</div>
        {description && (
          <div style={{ marginTop: 2, font: 'var(--type-caption)', color: 'var(--text-tertiary)', textWrap: 'pretty' }}>
            {description}
          </div>
        )}
      </div>
      <div style={{ flex: '0 0 auto' }}>{children}</div>
    </div>
  );
}

function Group({ title, children }) {
  return (
    <div style={{ marginTop: 26 }}>
      <div style={{ font: 'var(--type-section)', color: 'var(--text-secondary)', padding: '0 4px 8px' }}>{title}</div>
      <div style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
      }}>
        {children}
      </div>
    </div>
  );
}

const SHORTCUTS = [
  ['N', 'New To-Do'],
  ['⌘K', 'Quick Find'],
  ['⌘,', 'Settings'],
  ['D', 'Toggle detail pane'],
  ['Esc', 'Close what is open'],
];

/** SettingsView — grouped preference rows, the sync record, and the shortcut list. */
export function SettingsView({ prefs, onPrefs, source, syncedAt, counts, onReset }) {
  return (
    <div className="tally-scroll" style={{ flex: 1, minWidth: 0, background: 'var(--canvas)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '34px var(--content-gutter) 96px' }}>
        <ViewHeader icon="settings" title="Settings" actions={<span />} />

        <Group title="Appearance">
          <Row label="Theme" description="Dark drops the canvas and lifts the panels; it is not an inversion.">
            <Select
              value={prefs.theme}
              onChange={(e) => onPrefs({ theme: e.target.value })}
              options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }, { value: 'system', label: 'System' }]}
            />
          </Row>
          <Row
            label="Detail"
            description="Inline opens a to-do in place; the pane keeps it on the right."
            last
          >
            <Select
              value={prefs.detail}
              onChange={(e) => onPrefs({ detail: e.target.value })}
              options={[{ value: 'inline', label: 'Inline' }, { value: 'pane', label: 'Detail pane' }]}
            />
          </Row>
        </Group>

        <Group title="Lists">
          <Row label="Show completed to-dos" description="Completed work stays visible in projects instead of moving to the Logbook.">
            <Switch checked={prefs.showCompleted} onChange={() => onPrefs({ showCompleted: !prefs.showCompleted })} />
          </Row>
          <Row label="Group by project" description="Anytime and Someday break into their phases." last>
            <Switch checked={prefs.groupByProject} onChange={() => onPrefs({ groupByProject: !prefs.groupByProject })} />
          </Row>
        </Group>

        <Group title="Opening view">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 16px' }}>
            {[
              { id: 'today', label: 'Today', description: 'Deadlines that have landed.' },
              { id: 'anytime', label: 'Anytime', description: 'Every open to-do, grouped by phase.' },
              { id: 'upcoming', label: 'Upcoming', description: 'Dated work, ahead of today.' },
            ].map((o) => (
              <Radio
                key={o.id}
                label={o.label}
                description={o.description}
                checked={prefs.defaultView === o.id}
                onChange={() => onPrefs({ defaultView: o.id })}
              />
            ))}
          </div>
        </Group>

        <Group title="Sync">
          <Row
            label={source.projectName}
            description={`${source.provider} project ${source.projectId}. Sections became projects; subtasks became checklist items.`}
          >
            <Badge tone="neutral">{counts.total}</Badge>
          </Row>
          <Row label="Last synced" description="Edits made here stay in this browser until the next sync replaces them.">
            <span style={{ font: 'var(--type-mono)', color: 'var(--text-secondary)' }}>{formatStamp(syncedAt)}</span>
          </Row>
          <Row
            label="Reset to synced data"
            description="Discards local completions, checklist ticks and to-dos added here."
            last
          >
            <Button variant="secondary" size="sm" icon="refresh-cw" onClick={onReset}>Reset</Button>
          </Row>
        </Group>

        <Group title="Keyboard">
          <div style={{ padding: '6px 16px 10px' }}>
            {SHORTCUTS.map(([key, label], i) => (
              <div
                key={key}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0',
                  borderBottom: i === SHORTCUTS.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ font: 'var(--type-mono)', color: 'var(--text-secondary)', minWidth: 44 }}>{key}</span>
                <span style={{ font: 'var(--type-ui)', color: 'var(--text-primary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </Group>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 26, padding: '0 4px', color: 'var(--text-tertiary)' }}>
          <Icon name="tally-mark" size={14} />
          <span style={{ font: 'var(--type-caption)' }}>
            Tally Design System · {counts.open} open · {counts.done} logged
          </span>
        </div>
      </div>
    </div>
  );
}
