import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** soft = filled chip (detail panes). outline = hairline pill (dense list rows). */
  variant?: 'soft' | 'outline';
  tone?: 'neutral' | 'blue' | 'green' | 'red' | 'amber';
  size?: 'sm' | 'md';
  /** Optional leading Lucide glyph. */
  icon?: string;
  /** Renders a trailing x. Omit for read-only tags. */
  onRemove?: (e: React.MouseEvent) => void;
}

export function Tag(props: TagProps): JSX.Element;
