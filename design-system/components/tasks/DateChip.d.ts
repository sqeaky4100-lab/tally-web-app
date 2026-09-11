import * as React from 'react';

export type DateKind = 'today' | 'evening' | 'scheduled' | 'someday' | 'deadline' | 'logged' | 'repeat';

export interface DateChipProps {
  /** Picks the glyph and its colour: star/yellow for today, flag/red for deadline, calendar/teal for scheduled. */
  kind?: DateKind;
  /** The primary date label, e.g. "Tue, 2 Apr". */
  children?: React.ReactNode;
  /** Trailing relative note in --text-tertiary, e.g. "5 days left". */
  secondary?: string;
  /** Greys the glyph too — used in dense list rows. */
  muted?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function DateChip(props: DateChipProps): JSX.Element;
