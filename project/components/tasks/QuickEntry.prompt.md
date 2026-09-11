The new-to-do composer — a white card that lifts out of the list in place.

```jsx
<QuickEntry value={t} onChange={e => setT(e.target.value)} when="Today" onCommit={add} />
```

Never render this as a modal or a separate screen. It opens where the to-do will land, with the title field focused, and commits on Enter.
