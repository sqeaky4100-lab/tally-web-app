One navigable list in the left rail — a built-in view, an area, or a project.

```jsx
<SidebarItem icon="inbox" iconColor="var(--blue-400)" label="Inbox" count={2} />
<SidebarItem icon="star" iconColor="var(--state-today)" label="Today" overdue={1} count={8} active />
<SidebarItem progress={0.4} label="Prepare Presentation" indent={1} />
```

Built-in lists get a coloured glyph; projects get a ProgressRing. Active state is a grey chip, not blue — blue is reserved for selection inside the list itself.
