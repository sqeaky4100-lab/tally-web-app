import * as React from 'react';

export type CheckState = 'open' | 'progress' | 'done' | 'canceled';

/**
 * The system's defining control — four task states in one 16px box.
 */
export interface CheckboxProps {
  /** open = hairline outline. progress = left half filled. done = solid blue + check. canceled = solid grey + dash. */
  state?: CheckState;
  /** square marks a to-do; circle marks a project or heading. */
  shape?: 'square' | 'circle';
  /** Edge length. 16 is the row default; 18 in detail headers. */
  size?: number;
  onToggle?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  /** Renders the label beside the box and applies the done/canceled ink treatment. */
  label?: string;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
