import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** quiet = bare number (default sidebar counts). danger = overdue. */
  tone?: 'quiet' | 'neutral' | 'accent' | 'danger';
}

export function Badge(props: BadgeProps): JSX.Element;
