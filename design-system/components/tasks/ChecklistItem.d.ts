import * as React from 'react';

export interface ChecklistItemProps {
  label: string;
  checked?: boolean;
  onToggle?: (e: React.SyntheticEvent) => void;
  /** Suppresses the bottom hairline on the final item. */
  last?: boolean;
  style?: React.CSSProperties;
}

export function ChecklistItem(props: ChecklistItemProps): JSX.Element;
