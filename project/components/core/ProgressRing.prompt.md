The project marker — a small ring that fills clockwise as the project's to-dos complete.

```jsx
<ProgressRing value={0.4} size={14} />
<ProgressRing value={1} size={18} color="var(--state-logged)" />
```

This is the one place the system uses a drawn indicator instead of an icon. Keep it 14px in rows and sidebars; never label it with a percentage.
