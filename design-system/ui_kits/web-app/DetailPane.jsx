const { Checkbox, IconButton, Tag, DateChip, ChecklistItem, Icon } = window.TallyDesignSystem_788326;

function Field({ icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0' }}>
      <Icon name={icon} size={15} color="var(--text-tertiary)" />
      <span style={{ font: 'var(--type-ui)', color: 'var(--text-primary)' }}>{children}</span>
    </div>
  );
}

function DetailPane({ task, onClose, onToggle, onToggleItem }) {
  return (
    <div style={{
      width: 'var(--detail-width)', flex: '0 1 auto', minWidth: 300,
      display: 'flex', flexDirection: 'column',
      background: 'var(--surface)', borderLeft: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-panel)', zIndex: 2,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 38, padding: '0 8px 0 14px', flex: '0 0 auto' }}>
        <span style={{ flex: 1, font: 'var(--type-caption)', color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {task ? task.title : 'No selection'}
        </span>
        <IconButton icon="maximize-2" label="Open in window" size="sm" />
        <IconButton icon="x" label="Close pane" size="sm" onClick={onClose} />
      </div>

      {!task ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center' }}>
          <div style={{ color: 'var(--text-tertiary)' }}>
            <span style={{ display: 'inline-flex', opacity: 0.5 }}><Icon name="panel-left" size={26} /></span>
            <div style={{ marginTop: 12, font: 'var(--type-ui)' }}>Select a to-do to see its notes, checklist and dates here.</div>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 22px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
            <span style={{ marginTop: 4 }}><Checkbox size={18} state={task.state} onToggle={() => onToggle(task.id)} /></span>
            <h2 style={{
              flex: 1, font: 'var(--weight-bold) var(--text-xl) / 1.24 var(--font-ui)',
              letterSpacing: 'var(--tracking-snug)',
              color: task.state === 'done' ? 'var(--text-done)' : 'var(--text-primary)',
            }}>{task.title}</h2>
          </div>

          {task.notes
            ? <p style={{ margin: '10px 0 0 29px', font: 'var(--type-body)', color: 'var(--text-secondary)', textWrap: 'pretty' }}>{task.notes}</p>
            : <p style={{ margin: '10px 0 0 29px', font: 'var(--type-body)', color: 'var(--text-tertiary)' }}>Notes</p>}

          {(task.tags || []).length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '14px 0 0 29px' }}>
              {task.tags.map((t) => <Tag key={t} tone={t === 'Important' ? 'green' : 'neutral'}>{t}</Tag>)}
            </div>
          )}

          {(task.checklist || []).length > 0 && (
            <div style={{ margin: '16px 0 0 29px', borderTop: '1px solid var(--border-subtle)' }}>
              {task.checklist.map((c, i) => (
                <ChecklistItem key={c.label} label={c.label} checked={c.checked}
                  last={i === task.checklist.length - 1} onToggle={() => onToggleItem(task.id, i)} />
              ))}
            </div>
          )}

          <div style={{ margin: '20px 0 0 29px', paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
            {task.today && <div style={{ padding: '7px 0' }}><DateChip kind="today">Today</DateChip></div>}
            {task.deadline && <div style={{ padding: '7px 0' }}><DateChip kind="deadline" secondary={task.deadline.secondary}>{task.deadline.label}</DateChip></div>}
            {!task.today && !task.deadline && <Field icon="calendar-days">Anytime</Field>}
            {task.project && (
              <Field icon="box">{(window.TallyData.projects.find((p) => p.id === task.project) || {}).label}</Field>
            )}
          </div>
        </div>
      )}

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2,
        height: 42, padding: '0 12px', flex: '0 0 auto',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <IconButton icon="calendar-days" label="When" size="sm" />
        <IconButton icon="tag" label="Tags" size="sm" />
        <IconButton icon="list-checks" label="Checklist" size="sm" />
        <IconButton icon="flag" label="Deadline" size="sm" />
        <span style={{ flex: 1 }} />
        <IconButton icon="trash-2" label="Delete" tone="danger" size="sm" />
      </div>
    </div>
  );
}

Object.assign(window, { DetailPane });
