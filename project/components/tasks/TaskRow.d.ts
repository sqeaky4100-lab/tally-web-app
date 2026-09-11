import * as React from 'react';
import { CheckState } from '../forms/Checkbox';

export interface TaskRowTag { label: string; tone?: 'neutral' | 'blue' | 'green' | 'red' | 'amber'; }

/**
 * One line in a to-do list — the workhorse of the product.
 * @startingPoint section="Tasks" subtitle="Task rows, group headers, checklist, detail card, quick entry" viewport="700x300"
 */
export interface TaskRowProps {
  title: string;
  state?: CheckState;
  shape?: 'square' | 'circle';
  /** 0–1. Renders a ProgressRing instead of a checkbox — for project rows. */
  progress?: number;
  /** Yellow star before the title, marking membership in Today. */
  today?: boolean;
  /** Lucide names for the small grey affordance glyphs after the title (notes, checklist, tag). */
  meta?: string[];
  tags?: Array<string | TaskRowTag>;
  /** Right-aligned content — usually a DateChip or Badge. */
  trailing?: React.ReactNode;
  selected?: boolean;
  /** Nesting depth; each level adds 22px of left padding. */
  indent?: number;
  onToggle?: (e: React.SyntheticEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function TaskRow(props: TaskRowProps): JSX.Element;
