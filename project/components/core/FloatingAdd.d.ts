import * as React from 'react';

export interface FloatingAddProps {
  /** Accessible label and tooltip. Defaults to "New To-Do". */
  label?: string;
  /** Glyph name. Only ever `plus` in production; the prop exists for prototypes. */
  icon?: string;
  /** Diameter in px. 56 on desktop, 48 on narrow layouts. */
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** The single persistent "new to-do" action — one per screen, bottom-right. */
export declare function FloatingAdd(props: FloatingAddProps): React.JSX.Element;
