import * as React from 'react';
import { CheckState } from '../forms/Checkbox';

export interface DetailChecklistEntry { label: string; checked?: boolean; }
export interface DetailDate { kind?: 'today' | 'evening' | 'scheduled' | 'someday'; label: string; }
export interface DetailDeadline { label: string; secondary?: string; }

export interface TaskDetailCardProps {
  title: string;
  state?: CheckState;
  /** Free text beneath the title. */
  /** Plain text, or rendered notes (Markdown, links) as a node. */
  notes?: React.ReactNode;
  checklist?: DetailChecklistEntry[];
  tags?: Array<string | { label: string; tone?: 'neutral' | 'blue' | 'green' | 'red' | 'amber' }>;
  when?: DetailDate;
  deadline?: DetailDeadline;
  onToggle?: (e: React.SyntheticEvent) => void;
  onClose?: (e: React.MouseEvent) => void;
  onToggleItem?: (index: number) => void;
  style?: React.CSSProperties;
}

export function TaskDetailCard(props: TaskDetailCardProps): JSX.Element;
