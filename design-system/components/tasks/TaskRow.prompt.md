One line in a to-do list. Everything else in the product exists to support this row.

```jsx
<TaskRow title="Upload screenshots" meta={['file-text']} />
<TaskRow title="Design search" today tags={['Errand']} trailing={<DateChip kind="deadline" size="sm" muted>5d left</DateChip>} />
<TaskRow title="Prepare Presentation" progress={0.4} selected />
<TaskRow title="Review journal" state="done" />
```

Rows are 30px tall, gapless, and have no rules between them — grouping comes from TaskGroupHeader. Hover tints; selection uses the soft blue. Pass `progress` to turn a row into a project row.
