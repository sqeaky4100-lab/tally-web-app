# Tally

A calm, list-first task manager for the web, built on the **Tally Design System** and seeded with
the **Kayenta FY2022 — remaining audit work** project synced from Todoist.

Live: <https://tally-web-app-kyle-tevis-projects.vercel.app>

---

## What this is

The design system in `design-system/` was mocked up in [Claude Design](https://claude.ai/design)
as HTML/CSS/JS prototypes. This repository implements those prototypes as a real, usable web app:
a three-pane desktop task manager with a left rail of lists, a flat checkbox list, inline
disclosure or a right detail pane, tags, deadlines, dark mode, quick entry and Quick Find.

Nothing was re-drawn. The app imports the design system's token CSS, its 53-glyph icon set and its
27 React components directly — the same files the Design System tab renders.

## Layout

| Path | What it is |
| --- | --- |
| `src/App.jsx` | State, layout, keyboard shortcuts, toasts, persistence |
| `src/ui/` | `Sidebar` · `ListView` · `DetailPane` · `SettingsView` · `QuickFind` · `Notes` |
| `src/lib/` | `model.js` (lists, grouping, sorting) · `date.js` · `store.js` |
| `src/data/kayenta.json` | The synced Todoist pull — the app's seed data |
| `design-system/` | The Tally Design System bundle: tokens, components, assets, guidelines, UI kits |
| `chats/` | The Claude Design transcripts the system was designed in |

`design-system/readme.md` is the design guide — content rules, visual foundations, iconography,
and the three rules that keep work on-system. Read it before changing anything visual.

## The Todoist sync

`src/data/kayenta.json` was generated from the Todoist connector on **11 September 2026** against
project `6hF6qfX77MCQFJJp`, *Kayenta FY2022 — remaining audit work*.

| Todoist | Tally |
| --- | --- |
| Project | The area **Kayenta FY2022** |
| Section (Phase 1–7) | A project, with a progress ring in the rail |
| Task | A to-do (`ref` keeps the audit numbering — 25d, 33, 41) |
| Subtask | A checklist item on its parent, keeping its own notes |
| Description | Notes, rendered from Markdown |
| Label | A tag; priority p1/p2 becomes a red/amber `P1`/`P2` tag |
| Due date | A deadline chip, with the relative days beside it |
| Completed task | The Logbook, grouped by the day it was logged |

Where a to-do sits follows the genre, not a stored field: a deadline on or before today puts it in
**Today**, a later one in **Upcoming**, an undated p4 to-do in **Someday**, everything else open in
**Anytime**. 51 to-dos and 30 checklist items came across — 17 open, 34 logged.

**To re-sync:** pull the project, its tasks and its subtasks again, rewrite
`src/data/kayenta.json` in the same shape, and bump `syncedAt`. The `syncedAt` value is part of the
`localStorage` key, so a new sync automatically replaces stale local state rather than merging into
it. Nothing in the app calls Todoist at runtime and no token ships to the browser.

## What a person can do here

- Complete a to-do, tick a checklist item, undo either from the toast
- Open a to-do inline or in the detail pane (`D` swaps), read its notes and its subtasks' notes
- Add a to-do (`N`), find any to-do by title, notes or checklist (`⌘K`)
- Filter a list by tag, switch theme, choose the opening view, reset to the synced data (`⌘,`)

Local edits persist in `localStorage` per sync stamp. They never travel back to Todoist — this is a
read-only mirror with a working surface on top.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static bundle in dist/
npm run preview
```

## Deployment

The Vercel project **tally-web-app** (team *Kyle Tevis' projects*) is linked to this repository and
builds `main` on every push — Vite preset, output `dist`. Deployment protection is off, so the
production URL is publicly reachable.

The older project **things-productivity** predates this repository. It was created from a direct
file upload and has no Git link, and Vercel will not attach one to an existing project through the
API, so it still serves its own earlier build. To move that URL onto this repository: Vercel →
`things-productivity` → Settings → Git → Connect Git Repository → `sqeaky4100-lab/tally-web-app`.
Its deployment protection is already off.

## Provenance

Tally is an original system in the genre of Cultured Code's Things 3, not a recreation of it — see
`design-system/readme.md` > Provenance. Concrete numeric values (radii, the jumpy easing curve,
panel shadows, semantic hues) come from the MIT-licensed Things theme for Obsidian by
[@paralloid](https://github.com/MrParalloid/obsidian-things). Figtree stands in for Formular, which
was not supplied.
