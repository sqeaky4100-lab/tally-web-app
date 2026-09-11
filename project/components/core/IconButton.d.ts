import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: string;
  /** Required — becomes aria-label and the native tooltip. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  /** Persistent on-state: blue glyph on a soft blue chip. */
  active?: boolean;
  tone?: 'default' | 'danger';
  disabled?: boolean;
}

export function IconButton(props: IconButtonProps): JSX.Element;
