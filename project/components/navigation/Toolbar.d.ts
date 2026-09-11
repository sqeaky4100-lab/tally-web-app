import * as React from 'react';

export interface ToolbarProps {
  children?: React.ReactNode;
  /** Decides which edge carries the hairline. */
  position?: 'top' | 'bottom';
  bordered?: boolean;
  style?: React.CSSProperties;
}

export function Toolbar(props: ToolbarProps): JSX.Element;
