import * as React from 'react';

export interface IconProps {
  /** Lucide name in kebab-case, e.g. "calendar-days". Must be one of ICON_NAMES. */
  name: string;
  /** Edge length in px. 13-14 for inline meta, 15-16 for rows, 20-24 for headers. */
  size?: number;
  /** Overrides currentColor. Prefer inheriting. */
  color?: string;
  /** Lucide draws at 2. Do not go below 1.5. */
  strokeWidth?: number;
  /** Accessible label. Omit for decorative icons — they render aria-hidden. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Icon(props: IconProps): JSX.Element;
export const ICON_NAMES: string[];
