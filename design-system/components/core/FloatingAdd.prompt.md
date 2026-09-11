# FloatingAdd

The one persistent action in the product. A 56px filled-accent circle, bottom-right of the list
column, floating above the scroll on a soft shadow. It opens `QuickEntry`.

```jsx
<FloatingAdd onClick={() => setQuickEntryOpen(true)} />
```

## Rules

- **One per screen.** If a second floating action shows up, the screen has two ideas in it.
- **It is the only filled accent circle in the interface.** Nothing else earns that weight, which is
  what lets the eye find it without a label.
- Bottom-right, 32px from both edges, sitting over the list column — not the sidebar, not the
  detail pane.
- Press scales to 0.94 on `--ease-jumpy`. That tactile pop is the whole point; do not flatten it.
- On touch layouts drop to 48px, never below — that is the floor for a primary target.
