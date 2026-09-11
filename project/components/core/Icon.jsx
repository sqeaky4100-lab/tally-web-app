import React from 'react';
import { ICONS } from './tally-icons.js';

/**
 * Icon — renders a Tally glyph as inline SVG so it always inherits currentColor.
 * The Tally set is drawn from the brand mark and is the system's only icon set;
 * see readme.md > Iconography.
 */
export function Icon({ name, size = 16, color, strokeWidth = 2, style, className, title }) {
  const body = ICONS[name];
  if (!body) {
    if (typeof console !== 'undefined') console.warn('[Tally] Unknown icon: ' + name);
    return <span aria-hidden="true" style={{ display: 'inline-block', width: size, height: size, flex: '0 0 auto', ...style }} />;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color || 'currentColor'}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{ display: 'block', flex: '0 0 auto', ...style }}
      dangerouslySetInnerHTML={{ __html: (title ? '<title>' + title + '</title>' : '') + body }}
    />
  );
}

/** The full set of icon names bundled with this design system. */
export const ICON_NAMES = Object.keys(ICONS);
