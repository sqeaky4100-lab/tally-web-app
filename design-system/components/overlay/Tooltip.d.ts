import * as React from 'react';

export interface TooltipProps {
  label: string;
  /** Keyboard shortcut appended in mono. */
  shortcut?: string;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom';
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
