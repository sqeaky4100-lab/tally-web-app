import * as React from 'react';

export interface PopoverProps {
  open?: boolean;
  children?: React.ReactNode;
  width?: number;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  style?: React.CSSProperties;
}

export function Popover(props: PopoverProps): JSX.Element | null;
