A centred modal — reserved for destructive confirmations and short forms. Never for viewing or editing a to-do.

```jsx
<Dialog title="Delete “Prepare Presentation”?"
  description="This project and its 8 to-dos move to Trash."
  footer={<><Button>Cancel</Button><Button variant="danger">Delete</Button></>} />
```

Positions itself against the nearest positioned ancestor, so it can be demoed inside a window frame. 18px radius, deep soft shadow, 28% scrim.
