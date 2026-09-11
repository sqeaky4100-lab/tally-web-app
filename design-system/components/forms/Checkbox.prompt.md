The defining control of Tally — a 16px box carrying all four task states.

```jsx
<Checkbox state="open" onToggle={t} />
<Checkbox state="progress" />
<Checkbox state="done" label="Upload screenshots" />
<Checkbox shape="circle" state="progress" />
```

Square = to-do, circle = project or heading. Completing runs on `--ease-jumpy`, the only springy curve in the system. Never restyle the checkmark or swap in an icon.
