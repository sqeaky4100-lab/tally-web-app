# Tally for Web — UI kit

A click-through recreation of the Tally task manager as a desktop web app. Everything here is
composed from the design system's own components; no primitive is re-implemented inside the kit.

## Layout

```
┌ Sidebar 248px ┬ List column (max 720px, centred) ┬ Detail pane 380px (optional) ┐
```

The list column is the product. The sidebar names lists; the detail pane is a convenience, not a
requirement — the same information is reachable by expanding a row in place.

## The two disclosure modes

Switch between them with the segmented control in the toolbar.

| Mode | Behaviour | Use when |
| --- | --- | --- |
| **Inline** (default) | Clicking a row replaces it with a `TaskDetailCard` in the flow of the list. The list never moves out from under the user. | Most of the time. Lists under ~40 items, casual triage. |
| **Detail pane** | Clicking a row fills a fixed 380px pane on the right. The row stays a row. | Working through many items in sequence; long notes and checklists. |

## Files

| File | What it is |
| --- | --- |
| `index.html` | Entry point. Loads the bundle, then the four scripts below. |
| `data.js` | Sample content on `window.TallyData`. Original, illustrative. |
| `Sidebar.jsx` | Built-in lists, archive lists, areas with their projects, bottom toolbar. |
| `ListView.jsx` | View header, tag filter, quick entry, grouped rows, inline detail, empty states. |
| `DetailPane.jsx` | The right-hand pane: title, notes, tags, checklist, dates, action strip. |
| `App.jsx` | State, routing between views, counts, project progress, toasts, theme. |

## What you can click

- Any sidebar list or project switches the view; counts and progress rings are live.
- Any checkbox completes a to-do — a toast with **Undo** confirms it, and the project's ring advances.
- Any row selects; in Inline mode it also expands into a detail card.
- Checklist items inside a card or pane toggle independently.
- The tag bar above a project's list filters it.
- **+** opens quick entry at the top of the list; Enter commits.
- **⋯** opens the view-options menu; the moon/sun toggles the dark theme.
- Quick Find searches every to-do by title.

## Deliberate omissions

The source material for this system covers list management only. Calendar grids, repeating-schedule
editors, sharing, and account settings are **not** designed here — they are left out rather than
invented. If you need them, design them first and add them to the system.
