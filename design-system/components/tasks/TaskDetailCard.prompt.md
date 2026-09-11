A to-do opened in place — the row expands into a white card carrying notes, checklist, tags and dates.

```jsx
<TaskDetailCard
  title="Update slide layouts"
  notes="Our brand guidelines are on the website, but John will send an updated version soon."
  checklist={[{ label: 'Introduction needs more images' }, { label: 'Add our company logo', checked: true }]}
  tags={['Important']}
  when={{ kind: 'today', label: 'Today' }}
  deadline={{ label: 'Tue, 2 Apr', secondary: '5 days left' }}
/>
```

This is Tally's inline-disclosure pattern: the card takes the place of its row rather than opening a modal, so the surrounding list stays visible. Use the right-hand detail pane instead only on wide layouts where the user is working through many items.
