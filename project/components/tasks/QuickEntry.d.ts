import * as React from 'react';

export interface QuickEntryProps {
  value?: string;
  notes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNotesChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Label for the current when-date, e.g. "Today", "Someday". */
  when?: string;
  /** Fired on Enter. */
  onCommit?: (e: React.KeyboardEvent) => void;
  style?: React.CSSProperties;
}

export function QuickEntry(props: QuickEntryProps): JSX.Element;
