import * as React from 'react';

export interface ViewHeaderProps {
  title: string;
  /** Lucide glyph at 24px, coloured to match the list's identity. */
  icon?: string;
  iconColor?: string;
  /** 0-1. Renders a 20px ProgressRing instead of an icon, for project views. */
  progress?: number;
  /** Project description shown beneath the title. */
  subtitle?: string;
  /** Right-aligned controls. Defaults to a single ellipsis IconButton. */
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ViewHeader(props: ViewHeaderProps): JSX.Element;
