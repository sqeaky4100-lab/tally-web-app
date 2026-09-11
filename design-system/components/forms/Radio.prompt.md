One of a small mutually exclusive set, stacked vertically with labels.

```jsx
<Radio checked={v === 'today'} onChange={() => set('today')} label="Today" description="Show up in the Today list" />
```

Use `Segmented` instead when the options are short filters shown in a row. Radio is for settings sheets where each option needs a description.
