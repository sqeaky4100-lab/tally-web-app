---
name: Focused Productivity
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8dae2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fc'
  surface-container: '#ecedf6'
  surface-container-high: '#e6e8f0'
  surface-container-highest: '#e1e2eb'
  on-surface: '#191c22'
  on-surface-variant: '#414752'
  inverse-surface: '#2d3037'
  inverse-on-surface: '#eff0f9'
  outline: '#727784'
  outline-variant: '#c1c6d4'
  surface-tint: '#005db5'
  primary: '#005db5'
  on-primary: '#ffffff'
  primary-container: '#4d94f7'
  on-primary-container: '#002c5b'
  inverse-primary: '#a9c8ff'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#715d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba800'
  on-tertiary-container: '#4c3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c8ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468b'
  secondary-fixed: '#e1e2e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffe178'
  tertiary-fixed-dim: '#ebc300'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#f9f9ff'
  on-background: '#191c22'
  surface-variant: '#e1e2eb'
  sidebar-bg: '#f5f6f8'
  main-bg: '#ffffff'
  text-extreme: '#000000'
  text-muted: '#818893'
  status-red: '#f83366'
  status-cyan: '#54ada4'
  tag-bg: '#eef1f4'
  magic-plus-blue: '#4d94f7'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar-width: 260px
  content-max-width: 800px
  gutter: 32px
  stack-gap: 8px
  section-gap: 40px
  inset-squish: 4px 12px
  inset-square: 12px
---

## Brand & Style

This design system is a direct homage to the premier task management experience on macOS. It is defined by **Layered Minimalism**—a philosophy that rejects heavy borders and visual clutter in favor of depth, generous whitespace, and a high-fidelity tactile feel. The goal is to evoke a sense of calm, focus, and executive precision.

The aesthetic utilizes a "Liquid Glass" approach, where UI elements feel like physical objects molded with soft edges. It bridges the gap between digital utility and premium hardware design, prioritizing the content (tasks) above the chrome of the interface. It is professional, refined, and exceptionally breathable.

## Colors

The palette is anchored by a vibrant blue accent that denotes activity and primary interaction. The background strategy uses subtle shifts in gray to define regional hierarchy rather than lines:
- **Primary Surface:** Pure white for the focused work area.
- **Secondary Surface:** A soft, cool gray for the sidebar and navigational elements.
- **Text:** High-contrast black for headings, with a balanced gray for secondary metadata to maintain a clean visual hierarchy.
- **Semantic Accents:** Limited use of yellow for stars/priority and red for urgency, ensuring the interface remains tranquil until action is required.

## Typography

The system uses a highly legible, neutral sans-serif stack to emulate the native macOS system font. 

- **Hierarchy:** Headings use tighter letter spacing and semi-bold weights to appear grounded and authoritative. 
- **Readability:** Body text is set at 15px with generous line height to prevent "wall of text" fatigue during long-form planning.
- **Labels:** Small UI labels utilize medium weights to maintain legibility despite their reduced scale.
- **Scaling:** On mobile, `headline-lg` should scale down to 22px to ensure titles do not wrap aggressively.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model.
- **Sidebar:** A fixed-width container on the left for navigation.
- **Main Content:** A fluid area that centers content within a maximum width of 800px to maintain optimal line lengths for task lists.
- **Rhythm:** An 8px base unit drives all spacing. Vertical rhythm is "breathable," with significant gaps between major sections to isolate different projects or timeframes.
- **Breakpoints:** On tablets, the sidebar collapses into a hidden drawer. On mobile, the layout becomes a single column with horizontal margins reduced to 16px.

## Elevation & Depth

This system avoids traditional shadows in favor of **Liquid Glass** effects. Depth is conveyed through:

- **Tonal Layering:** The sidebar is visually "behind" the main content area.
- **Subtle Shadows:** Elements like the Magic Plus button and active cards use a highly diffused, low-opacity shadow (`0 10px 30px rgba(0,0,0,0.08)`) to appear as if hovering slightly above the surface.
- **Backdrop Blur:** Modals and mobile drawers use a 20px background blur (frosted glass) to maintain context while focusing the user.
- **Inner Borders:** High-fidelity components use a 0.5px subtle inner stroke rather than a drop shadow to define edges against white backgrounds.

## Shapes

The shape language is the "signature" of the design system. It uses an exaggerated roundedness that feels friendly and tactile.

- **Standard Radius:** 8px for small components like tags and input fields.
- **Container Radius:** 18px for popovers and selection states in lists.
- **Large Radius:** 28px for the primary action button (Magic Plus) and main modal containers. This extreme rounding is essential to the "Things" aesthetic.

## Components

### Magic Plus Button
The primary action is a floating circular button (56x56px) positioned in the bottom right. It uses the `magic-plus-blue` background and a white `+` icon. It should have a pronounced but soft shadow to indicate its high elevation.

### Checkboxes
Checkboxes are custom-styled circles (not squares). 
- **Inactive:** A 1.5px border in `text-muted` gray.
- **Active:** Filled with `primary-color-hex` with a white checkmark.
- **Animation:** Use a "jumpy" cubic-bezier transition when toggling to create a tactile pop.

### Sidebar Items
Items use an 18px radius for hover and active states. The active state is indicated by a light gray background (`tag-bg`) rather than the primary blue, keeping the sidebar secondary to the main content.

### Task Cards
Individual tasks should not have borders. Use whitespace and a very subtle divider line (0.5px) that does not span the full width of the container. 

### Tags & Chips
Tags use a `label-sm` font in all-caps or semibold, housed in a pill-shaped container with a very light gray background. They should appear "ghost-like" so they don't distract from the task title.

### Input Fields
Inputs are borderless by default, using a subtle background tint when focused. Typography within inputs should match the `body-lg` style for a seamless transition between viewing and editing.