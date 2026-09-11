A compact row of mutually exclusive filters — the tag bar above a project's to-dos.

```jsx
<Segmented options={['All', 'Important', 'Diane']} value={f} onChange={setF} />
```

Unselected options are bare `--text-tertiary` text with no chrome; only the selected one gets a grey pill. This keeps the filter bar from competing with the list beneath it.
