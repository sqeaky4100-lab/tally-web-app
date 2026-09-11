A soft-filled or outlined label attached to a to-do — contexts like Errand, Home, Waiting On.

```jsx
<Tag tone="green">Important</Tag>
<Tag variant="outline" size="sm">Waiting On</Tag>
<Tag tone="blue" icon="tag" onRemove={drop}>Office</Tag>
```

Use `outline size="sm"` inside list rows so tags never out-shout the to-do title; use `soft` in detail panes. Tone carries meaning only when the product defines one — otherwise stay neutral.
