Renders a Lucide glyph inline — the only way icons enter a Tally interface.

```jsx
<Icon name="star" size={16} color="var(--state-today)" />
<Icon name="calendar-days" size={14} title="Scheduled" />
```

The path data ships inside the design system (52 icons, ISC-licensed, copied from lucide-static v0.544.0), so nothing loads from a network. Icons inherit colour from any ancestor. Decorative icons render aria-hidden. If you need a glyph that is not in ICON_NAMES, add the .svg to /assets/icons and its path data to components/core/lucide-icons.js rather than hand-drawing one.
