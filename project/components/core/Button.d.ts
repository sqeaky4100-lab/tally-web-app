import * as React from 'react';

/**
 * The standard action control.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = the one committing action in a view. ghost = toolbar / low-stakes. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label — chevrons, external links. */
  iconAfter?: string;
  fullWidth?: boolean;
  /** Fully rounded ends. Used for filter and floating actions. */
  pill?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
