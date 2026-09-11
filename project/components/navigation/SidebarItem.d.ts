import * as React from 'react';

/**
 * One navigable list in the left rail.
 */
export interface SidebarItemProps {
  label: string;
  /** Lucide name for built-in lists (inbox, star, calendar-days, layers, archive). */
  icon?: string;
  /** Overrides the grey glyph — built-in lists each own a colour. */
  iconColor?: string;
  /** 0-1. Renders a ProgressRing instead of an icon, for project rows. */
  progress?: number;
  /** Right-aligned quiet count. Hidden when 0. */
  count?: number;
  /** Right-aligned red count shown before the quiet count. */
  overdue?: number;
  active?: boolean;
  /** Nesting depth under an area heading. */
  indent?: number;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function SidebarItem(props: SidebarItemProps): JSX.Element;
