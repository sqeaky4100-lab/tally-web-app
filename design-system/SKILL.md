---
name: tally-design
description: Use this skill to generate well-branded interfaces and assets for Tally, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Where things are

- `readme.md` — the design guide: provenance, content fundamentals, visual foundations, iconography.
- `styles.css` — the only stylesheet to link. It imports everything in `tokens/`.
- `components/{core,forms,tasks,navigation,overlay}/` — React primitives. Each has a `.d.ts` props contract and a `.prompt.md` telling you what it is and when to use it.
- `ui_kits/web-app/` — a full click-through recreation of the product. Read this before designing a new screen.
- `guidelines/` — foundation specimen cards.
- `assets/icons/` — 53 Tally SVGs plus `tally-icons.global.js` (sets `window.TallyIcons`).
- `assets/brand/` — the Tally mark, glass and mono. In React use `BrandMark`.

## Non-negotiables

1. The Tally set (drawn from the brand mark) is the only icon set. Never import another family and never use emoji.
2. Blue means selected or done. Nothing else in the interface is blue.
3. Accent hues (yellow, red, teal, orange, green) appear only at glyph scale — never as fills, never as gradients.
4. No gradients, no background images, no textures, anywhere.
5. Task lists have no row separators and no row gaps. Group with a heading and 20px of air.
6. Sentence case for prose; Title Case for the product's own nouns (Inbox, Today, New To-Do).
7. Use the fixed vocabulary: to-do, project, area, heading, checklist item, tag, notes, when, deadline, logbook.
8. There is no logo. Set the brand name in the display face where a mark would go.
