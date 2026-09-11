A floating surface anchored to a control — date pickers, tag pickers, view options.

```jsx
<span style={{ position: 'relative' }}>
  <IconButton icon="calendar-days" label="When" onClick={open} />
  <Popover open={isOpen} width={260}>...</Popover>
</span>
```

Requires a positioned parent. 10px radius, hairline border, soft wide shadow — never a hard drop shadow or an arrow/tail.
