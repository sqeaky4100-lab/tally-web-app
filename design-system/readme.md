# Tally Design System

**Tally** is a design system for calm, list-first task management on the web. It covers a single
product surface — a three-pane desktop task manager — built around one idea: *the row is the
product*. Everything else (sidebar, headers, detail panes, menus) exists to keep a list of to-dos
legible, quiet, and fast to act on.

---

## ⚠️ Provenance — read this first

This system was commissioned as a "Things To Do app" design system, with reference material drawn
from **Cultured Code's Things 3** (screenshots and screen recordings of the Mac, iPad and iOS apps).

**Tally is not a recreation of Things 3.** Things' interface, iconography and brand are Cultured
Code's proprietary work, and cloning them into a reusable design system would hand consumers
someone else's intellectual property. What this system does instead is design an *original* task
manager that shares the genre's conventions — a left rail of lists, a flat checkbox list, inline
disclosure, tags, scheduled/deadline dates — with its own palette, type, spacing, motion, icon
usage and screen composition.

**No logo or brand mark exists in this system.** None was supplied and none was invented. Wherever
a mark would go, the word *Tally* is set in the display face (see `thumbnail.html`). If you have a
real mark, drop it in `assets/` and replace those wordmarks.

### Sources used

| Source | What was taken from it |
| --- | --- |
| `uploads/theme.css` — *Things 3 theme for Obsidian*, v2.7.2 by **@paralloid** ([MrParalloid/obsidian-things](https://github.com/MrParalloid/obsidian-things)) | Concrete numeric values: radius steps (10 / 18 / 28px), the `--anim-motion-jumpy` easing curve, panel and tab shadow recipes, semantic hue set (yellow / red / cyan / blue / green / grey), light and dark neutral ramps, 13px UI size, 500/600 weight pairing. |
| [colineckert/obsidian-things](https://github.com/colineckert/obsidian-things) | Cross-reference for the same theme lineage. |
| [danielfrg/things](https://github.com/danielfrg/things) | Data-model vocabulary (to-do, project, area, heading, checklist item, tag, when, deadline, logbook). |
| [Gan-Tu/iOSThingsClone](https://github.com/Gan-Tu/iOSThingsClone) | Cross-reference for list/detail structure. |
| Uploaded screenshots + screen recordings | High-level genre conventions only — never traced. |
| The supplied Tally mark (customer artwork) | The brand mark, and the geometry the whole icon set is drawn from. |

Anyone extending this system should read those repositories directly — they carry far more detail
than any summary here, and the Obsidian theme in particular is a well-documented reading of how
this genre handles density, hierarchy and dark mode.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point. `@import` list only. Link this and nothing else. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `elevation` · `motion` · `base` |
| `components/core/` | `BrandMark` `Icon` `Button` `IconButton` `FloatingAdd` `Tag` `Badge` `Segmented` `ProgressRing` |
| `components/forms/` | `Checkbox` `TextField` `Select` `Switch` `Radio` |
| `components/tasks/` | `TaskRow` `TaskGroupHeader` `TaskDetailCard` `ChecklistItem` `DateChip` `QuickEntry` |
| `components/navigation/` | `SidebarItem` `SidebarSection` `ViewHeader` `Toolbar` |
| `components/overlay/` | `Menu` `MenuItem` `MenuDivider` `Popover` `Dialog` `Tooltip` `Toast` |
| `ui_kits/web-app/` | The full click-through product recreation. Start here. |
| `templates/` | Starting files: `task-list` · `upcoming` (dated agenda) · `settings` |
| `guidelines/` | 20 foundation specimen cards (Colors · Type · Spacing · Brand) |
| `assets/icons/` | 53 Tally SVGs + `tally-icons.global.js` (plain-script build) |
| `assets/brand/` | `tally-mark.svg` (glass) · `tally-mark-mono.svg` (single colour) |
| `thumbnail.html` | The homepage tile |
| `SKILL.md` | Agent Skills front-matter for use in Claude Code |

Every component directory also carries `<Name>.d.ts` (props contract) and `<Name>.prompt.md`
(what it is, when to use it, a usage example).

---

## Content fundamentals

Tally's copy sounds like a well-made tool: it says what a thing is and then gets out of the way.
The product has no personality to perform, because the user's own to-dos supply all the content.

**Voice.** Plain, declarative, unhurried. Never enthusiastic, never apologetic. The interface is
confident enough not to explain itself.

**Person.** Second person only when instructing (*"Press N to add the first to-do"*). Never first
person — the app is not a character and does not say *"I've added that for you."* Possessives are
avoided: it is **Inbox**, not *Your Inbox*.

**Casing.** Sentence case for prose and descriptions. **Title Case for nouns the product owns** —
list names and object types: *Inbox, Today, Upcoming, Anytime, Someday, Logbook, Trash, New To-Do,
New List, Quick Find*. Menu commands are Title Case and end in `…` when they open something:
*"When…", "Deadline…", "Settings…"*. Button labels are Title Case and 1–3 words.

**Nouns are fixed vocabulary.** Use exactly these and nothing else:

> to-do · project · area · heading · checklist item · tag · notes · when · deadline · logbook

Never *task*, *item*, *card*, *entry*, *folder*, *due date*, *priority*, or *status*.

**Length.** Empty states are two lines: what is not here, then the single next action.

> **Nothing in Q3 Brand Refresh**
> Press N to add the first to-do.

Dialog descriptions are one sentence stating the consequence in the present tense:

> This project and its 8 to-dos move to Trash.

Toasts are a fact plus an out:

> 4 to-dos moved to Logbook · **Undo**

**Numbers.** Always digits, always tabular. Relative where a person would speak that way — *6 days
left*, *3 weeks*, *Yesterday*, *Tomorrow* — and absolute where precision matters — *Fri, 14 Aug*.
Never "0 items"; a count of zero is simply not rendered.

**Punctuation.** No exclamation marks anywhere. No ampersands in UI labels. Ellipsis (`…`) means
"this opens something", so never use it decoratively. Em dashes are fine in documentation, absent
from UI copy.

**Emoji: never.** Not in labels, not in empty states, not in documentation UI. The one place a
coloured glyph appears is a Tally icon in a state colour. This is a firm rule — emoji in a task
list turns a calm surface into a noticeboard.

---

## Visual foundations

### The premise

A to-do list is mostly white space with a column of short sentences in it. Tally's entire visual
strategy is to protect that: almost nothing is drawn, and the few marks that exist carry real
meaning. If a designer is reaching for a border, a shadow, or a background fill, the answer is
usually more space instead.

### Colour

- **Canvas `--gray-50` (#f5f6f8), surface `--gray-0` (#ffffff).** The sidebar sits on the canvas;
  the list sits on white. That one-step difference is the only "chrome" in the app.
- **Ink is `--gray-800` (#373a3e), not black.** Secondary `--gray-600`, tertiary `--gray-400`.
  Hierarchy is carried by ink and weight far more than by size.
- **One signal colour: blue.** `--accent` = `--blue-500` (#1f7ae0). It appears on completed
  checkboxes, selection, links, group headings inside a project, and menu hover. Nothing else in
  the product is blue.
- **Accent hues appear only at glyph scale.** Yellow (`#fdd31b`) for Today, red (`#f83366`) for
  deadlines, teal (`#54ada4`) for scheduled, orange (`#e96100`) for Someday, green (`#55a66d`) for
  the Logbook and Switch-on. These are never used as area fills, never as gradients, never as
  card backgrounds. A 14px star is the largest yellow object in the interface.
- **No gradients.** Not one, anywhere — not in backgrounds, buttons, or scrims. The single scrim
  is a flat `rgba(19,21,25,0.28)`.
- **Dark theme is not an inversion.** Canvas drops to `#13181d`; panels *lift* to `#1d2228`;
  popovers lift again to `#262b31`. Blue brightens to `--blue-400` because a dark canvas eats
  saturation. Text tops out at `#e7e9ec`, never pure white.

### Type

**Figtree** does everything — display, UI and body. It is a humanist-geometric sans with open
apertures and slightly rounded terminals: legible at 12px, warm at 34px, and free of the
neutral-grotesque coldness that makes productivity apps feel like spreadsheets.
**JetBrains Mono** appears in exactly two places: keyboard shortcuts in menus and tooltips, and
token names in this documentation.

> **Substitution flagged.** The source theme calls for *Formular* (`a.tag { font-family: 'Formular' }`),
> a licensed face that was not supplied. Figtree is the nearest freely-licensed match in
> proportion and warmth. **If you have the real font files, drop them in `assets/fonts/`, write the
> `@font-face` rules into `tokens/fonts.css`, and change `--font-ui`** — nothing else needs to move.

The scale is deliberately dense at the bottom: **13px is the workhorse** (rows, menus, fields,
sidebar), **15px carries to-do titles and notes**, and the jump to **28px view titles** is abrupt on
purpose — there is no mid-scale heading competing with the list. Weights are 400 / 500 / 600 / 700,
and 500 does most of the work that other systems give to 600.

All numerals are `tabular-nums` globally, so counts and dates never jitter as they change.

### Space

4px base, with **2px and 6px kept in the scale** because task rows live or die on two pixels.
Layout constants the whole product agrees on: sidebar **248px**, detail pane **380px**, list column
**720px max, centred**, canvas gutter **32px**, row **30px**, toolbar **44px**.

The list has **no gap between rows and no rules between them.** Rows are separated by nothing at
all; grouping is done by a `TaskGroupHeader` with 20px of air above it and a single hairline
beneath. This is the most important spacing decision in the system — a list with row separators
reads as a table, and a table reads as work.

### Backgrounds

**There are none.** No photography, no illustration, no pattern, no texture, no noise, no grain.
The canvas is a flat grey; surfaces are flat white. Nothing is full-bleed because there is nothing
to bleed. If a marketing surface is ever built on this system, it should introduce imagery there
and leave the app alone.

### Borders, cards and shadows

- **Hairlines are `rgba(0,0,0,0.05)`** — `--border-subtle`, used under group headings, between
  checklist items, and along pane edges. `--border-default` (`--gray-200`) is reserved for input
  and button outlines.
- **Cards have no border.** A `TaskDetailCard` or `QuickEntry` is white, `--radius-lg` (10px), and
  lifted by `--shadow-card` (`0 1px 3px / 0 6px 18px`, both at 6–7% black). That is the whole
  recipe. No coloured left-border accents, no ring, no outline.
- **Shadows are soft, wide, and nearly colourless.** Five steps only: `xs` (hairline lift),
  `sm` (buttons), `card`, `popover`, `modal`, plus `--shadow-panel` (`0 0 20px rgba(0,0,0,0.1)` —
  taken verbatim from the source theme) for the detail pane's edge. Never a hard drop shadow,
  never a coloured glow, never an inner shadow.
- **Radii.** 3 / 5 / 8 / 10 / 18 / 28 / pill. Small controls stay crisp (checkbox 4px, row 5px,
  button 8px); panels and dialogs go generously round (10–18px); filters, tags, badges and toasts
  are full pills. The 10 / 18 / 28 steps carry over from the source theme.

### Transparency and blur

Used **once**: `Toolbar` renders on `--surface-overlay` (86% white) with
`saturate(180%) blur(20px)`, so content scrolling under a pinned strip stays faintly visible.
Nothing else in the system is translucent. Blur is not a decorative material here.

### Motion

Short, eased, and almost invisible. Hover and tint transitions run **120ms** on
`cubic-bezier(.4,0,.2,1)`; panels and popovers **180ms** on `cubic-bezier(.16,1,.3,1)`.

There is exactly **one springy curve**: `--ease-jumpy` = `cubic-bezier(.58,.53,.57,1.16)`, lifted
verbatim from the source theme, and it is reserved for **completing a to-do**. That tiny overshoot
is the one moment of delight the product allows itself. Using it anywhere else spends the effect.

`prefers-reduced-motion` zeroes every duration token, so honouring it is automatic.

### Interaction states

| State | Treatment |
| --- | --- |
| **Hover, rows and ghost controls** | `--surface-hover` — `rgba(100,115,120,0.07)`. A tint, never a border or a shadow. |
| **Hover, solid buttons** | `filter: brightness(0.975)`. Never a different colour token. |
| **Hover, menu items** | Full `--accent` fill with white text — the only solid accent block in a list. |
| **Press** | `brightness(0.94)` plus `scale(0.975)`. Nothing moves position. |
| **Selected row** | `--surface-selected` (`--blue-50`) at `--radius-sm`. Text colour does not change. |
| **Active sidebar row** | `--surface-sunken` grey, *not* blue — blue means "selected in the list". |
| **Focus** | `--ring-focus`: `0 0 0 3px rgba(77,148,247,0.35)`. Never grows or moves the control. |
| **Disabled** | `opacity: 0.42–0.5`. No greyed-out colour swaps. |
| **Row affordances** | Drag handles and group `⋯` menus are `opacity: 0` until the row is hovered. |

### Fixed elements

The sidebar and both toolbars are fixed; only the list column and the detail pane scroll, and they
scroll independently. Nothing is sticky inside a list — not group headers, not the view title. When
you scroll past a heading it is gone, which is correct: you are somewhere else now.

---

## Iconography

**The Tally set** is the only icon set, and it is drawn from the brand mark. The mark supplies three
constants that every glyph inherits, so an icon and the app icon read as the same object:

| From the mark | Rule in the set |
| --- | --- |
| The check stroke | `check` is the mark's check verbatim: `M7.8 11.9 11.7 16 17.4 8`. Every tick in the system descends from it. |
| The shell, 28% radius | Container glyphs are `rect 3,3,18,18 rx 5` — `square`, `inbox`, `panel-left`, `tally-mark`. |
| Rounded terminals, heavy stroke | 24×24 grid, 2px stroke, round caps and joins. Nothing thinner: at 13–16px a 1.5px stroke goes to fog. |

- **53 glyphs live in this system** as raw SVGs in `assets/icons/`, plus two builds of the path
  data: `components/core/tally-icons.js` (ES module, consumed by `Icon.jsx`) and
  `assets/icons/tally-icons.global.js` (plain script, sets `window.TallyIcons`). **Nothing loads
  from a CDN at runtime.**
- **Always render icons through `<Icon name="…">`.** It inlines the path data as SVG with
  `stroke="currentColor"`, so a glyph inherits colour from any ancestor and needs no variant.
- **Sizes:** 13–14px for inline row meta, 15–16px for rows and toolbars, 20px for view headers with
  a ring, 24px for view headers with a glyph. Stroke stays at 2.
- **Colour:** grey (`--text-tertiary`) by default. A coloured glyph is a *statement of state* —
  yellow star = Today, red flag = deadline, teal calendar = scheduled, orange archive = Someday,
  green check = logged. Colour an icon for any other reason and the semantics break.
- **No emoji. No unicode glyphs used as icons.** The only marks outside the set are the `Checkbox`
  tick and dash and the `ProgressRing`, drawn inline because they are brand-defining shapes.
- **The mark itself is not an icon.** `BrandMark` is the glass rendering, for app icons, splash and
  lockups. When you need the mark at UI scale and UI weight, use `<Icon name="tally-mark">`.
- **Need a glyph that isn't here?** Draw it on the 24 grid at 2px with round terminals, reusing the
  mark's check and shell wherever the idea allows, and add it to `tally-icons.js` and
  `assets/icons/`. Never mix in a second icon family.

### Intentional additions

The reference material defines no component library, so the primitive set was authored from the
product's needs rather than copied. Two entries are worth naming explicitly:

- **`BrandMark`** — the mark itself, glass and mono. It is a component rather than an image file so
  the mono variant inherits `currentColor` and never ships as a second, drifting asset.
- **`Icon`** — a wrapper over the Tally set. Without it, every consumer inlines SVG by hand and
  stroke weight and sizing drift immediately.
- **`FloatingAdd`** — the new-to-do action. It is a component rather than a Button variant because
  it is a singleton with its own elevation and its own press physics, and treating it as a variant
  invites a second one onto the screen.
- **`ProgressRing`** — the project marker. The genre needs a "how far along is this project"
  indicator that reads at 14px in a sidebar; no icon can do that job.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

```jsx
const { TaskRow, DateChip, ViewHeader } = window.TallyDesignSystem_788326;

<ViewHeader icon="star" iconColor="var(--state-today)" title="Today" />
<TaskRow title="Sign off the wordmark spacing" state="progress" today
         meta={['file-text']} tags={['Important']}
         trailing={<DateChip kind="deadline" size="sm" muted>6 days left</DateChip>} />
```

Consume tokens through their **semantic** names (`--text-primary`, `--surface`, `--state-today`),
not the ramps (`--gray-800`, `--yellow-400`). The ramps exist so the semantics can be re-pointed.

### Three rules that keep work on-system

1. **One primary button per view.** If two things are equally important, neither is.
2. **Blue means selected or done.** Never decorative, never a brand flourish.
3. **Reach for space before you reach for a line.** The list has no row separators for a reason.

---

## Known gaps

- **No logo or brand mark** — none was provided; see Provenance.
- **No calendar grid, repeating-schedule editor, sharing UI, or account settings.** The reference
  material does not cover them, so they were left undesigned rather than invented.
- **No mobile or tablet kit.** The brief scoped this to the web interface. The tokens and
  primitives are size-agnostic, but the touch targets, sheets and gestures those platforms need
  have not been designed.
- **Figtree stands in for Formular** — see Type.
