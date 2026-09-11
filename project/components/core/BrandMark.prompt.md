# BrandMark

The Tally mark. A glass shell (28% radius) holds a white plate with a tab at its foot, and the
check — the same stroke geometry every `check`-family icon in the system is drawn from.

```jsx
<BrandMark size={40} title="Tally" />
<BrandMark size={20} variant="mono" />
```

## Rules

- **Never recolour the glass variant.** Its blues are fixed; that is what makes it a mark and not
  an icon. If the surface behind it fights, use `mono` and let it inherit `currentColor`.
- **`mono` below 24px.** The plate, tab and rim vanish at small sizes and read as mud.
- **Never inside a button.** Use `Icon name="tally-mark"` for a UI-scale outline version.
- Clear space: at least 25% of the mark's width on every side.
