import * as React from 'react';

export interface ToastProps {
  message: string;
  /** Almost always "Undo". */
  actionLabel?: string;
  onAction?: (e: React.MouseEvent) => void;
  /** Lucide glyph. Defaults to circle-check. */
  icon?: string;
  tone?: 'neutral' | 'danger';
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element;
