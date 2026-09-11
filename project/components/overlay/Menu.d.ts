import * as React from 'react';

export interface MenuItemProps {
  label: string;
  /** Lucide glyph shown at the left. */
  icon?: string;
  /** Keyboard shortcut rendered in mono at the right, e.g. Cmd-N. */
  shortcut?: string;
  /** Red ink; hovers to a red fill. */
  danger?: boolean;
  /** Trailing check, for toggled view options. */
  checked?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface MenuProps {
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}

export function Menu(props: MenuProps): JSX.Element;
export function MenuItem(props: MenuItemProps): JSX.Element;
export function MenuDivider(): JSX.Element;
