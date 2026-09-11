import * as React from 'react';

export interface RadioProps {
  checked?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  label: string;
  /** Optional second line in --text-tertiary. */
  description?: string;
  style?: React.CSSProperties;
}

export function Radio(props: RadioProps): JSX.Element;
