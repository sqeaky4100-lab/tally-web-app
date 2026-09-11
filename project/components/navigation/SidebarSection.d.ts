import * as React from 'react';

export interface SidebarSectionProps {
  label: string;
  /** Lucide name for the area glyph. Defaults to "box". */
  icon?: string;
  collapsed?: boolean;
  /** Supplying this makes the heading clickable and shows a chevron. */
  onToggle?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function SidebarSection(props: SidebarSectionProps): JSX.Element;
