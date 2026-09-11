import * as React from 'react';

export interface BrandMarkProps {
  /** Rendered square size in px. Glass variant needs ≥24px; below that use `mono`. */
  size?: number;
  /** `glass` = full app-icon rendering; `mono` = single colour, inherits currentColor. */
  variant?: 'glass' | 'mono';
  /** Accessible label. Omit for decorative placements. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}

/** The Tally mark — glass shell, white plate, signature check. */
export declare function BrandMark(props: BrandMarkProps): React.JSX.Element;
