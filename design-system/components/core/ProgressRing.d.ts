import * as React from 'react';

export interface ProgressRingProps {
  /** 0–1. At 1 the ring fills solid. */
  value: number;
  /** Diameter in px. 14 in sidebars and list rows, 18 in view headers. */
  size?: number;
  thickness?: number;
  color?: string;
  track?: string;
  style?: React.CSSProperties;
}

export function ProgressRing(props: ProgressRingProps): JSX.Element;
