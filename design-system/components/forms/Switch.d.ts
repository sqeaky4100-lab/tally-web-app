import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  size?: 'sm' | 'md';
  label?: string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
