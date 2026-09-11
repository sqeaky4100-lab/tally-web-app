import * as React from 'react';

export interface TextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  /** Renders a textarea. Used for a to-do's Notes. */
  multiline?: boolean;
  rows?: number;
  /** Leading Lucide glyph — "search" on filter fields. */
  icon?: string;
  size?: 'sm' | 'md';
  /** boxed = bordered field. bare = no chrome, for in-place title and note editing. */
  variant?: 'boxed' | 'bare';
  invalid?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function TextField(props: TextFieldProps): JSX.Element;
