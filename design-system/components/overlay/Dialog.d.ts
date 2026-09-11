import * as React from 'react';

export interface DialogProps {
  open?: boolean;
  title?: string;
  /** One or two sentences. Say plainly what will happen. */
  description?: string;
  children?: React.ReactNode;
  /** Buttons, right-aligned. Cancel first, then the committing action. */
  footer?: React.ReactNode;
  width?: number;
  onDismiss?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Dialog(props: DialogProps): JSX.Element | null;
