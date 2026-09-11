A fixed 44px strip of icon actions pinned to the top or bottom of a pane.

```jsx
<Toolbar position="bottom">
  <Button variant="ghost" size="sm" icon="plus">New List</Button>
  <span style={{ flex: 1 }} />
  <IconButton icon="sliders-horizontal" label="View settings" />
</Toolbar>
```

Translucent with a backdrop blur so content scrolling beneath it stays faintly visible. Fill it with IconButtons and at most one ghost Button.
