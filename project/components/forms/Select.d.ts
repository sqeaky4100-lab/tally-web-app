import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: Array<string | SelectOption>;
  value?: string;
  size?: 'sm' | 'md';
  disabled?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
