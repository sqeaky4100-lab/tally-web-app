import * as React from 'react';

export interface TaskGroupHeaderProps {
  title: string;
  /** Optional item count shown beside the title in --text-tertiary. */
  count?: number;
  collapsed?: boolean;
  /** Supplying this renders a disclosure chevron. */
  onToggle?: (e: React.MouseEvent) => void;
  /** Show the hover-revealed ellipsis. Default true. */
  actions?: boolean;
  /** accent = blue (headings inside a project). quiet = grey (date groups). */
  tone?: 'accent' | 'quiet';
  style?: React.CSSProperties;
}

export function TaskGroupHeader(props: TaskGroupHeaderProps): JSX.Element;
