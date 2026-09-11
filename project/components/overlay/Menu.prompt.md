A list of commands — the ellipsis menu on a to-do, a view-options menu, a context menu.

```jsx
<Menu>
  <MenuItem icon="calendar-days" label="When…" shortcut="⌘S" />
  <MenuItem icon="tag" label="Tags…" shortcut="⌘⇧T" />
  <MenuDivider />
  <MenuItem icon="trash-2" label="Delete To-Do" danger />
</Menu>
```

Items highlight with a full blue fill on hover — the only place in Tally where a solid accent block appears in a list. Shortcuts render in JetBrains Mono at 60% opacity.
