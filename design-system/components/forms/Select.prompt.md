A native dropdown wearing Tally chrome — same height and border language as TextField.

```jsx
<Select options={['Open', 'In Progress', 'Done']} value={s} onChange={e => set(e.target.value)} />
```

Prefer `Menu` for anything that is a command rather than a value. Select is for picking one of a known, unchanging set.
