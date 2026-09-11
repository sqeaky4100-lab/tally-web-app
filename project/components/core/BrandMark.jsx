import React from 'react';

/**
 * BrandMark — the Tally mark: a glass shell holding a white plate and the signature check.
 * `glass` is the full app-icon rendering; `mono` is the single-colour reduction for
 * favicons, sidebars, print and anywhere under 24px. Never recolour the glass variant.
 */
export function BrandMark({ size = 40, variant = 'glass', title, style, className }) {
  const uid = React.useId().replace(/:/g, '');
  const common = {
    xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 512 512',
    className, role: title ? 'img' : undefined, 'aria-label': title, 'aria-hidden': title ? undefined : true,
    style: { display: 'block', flex: '0 0 auto', ...style }
  };
  if (variant === 'mono') {
    return (
      <svg {...common}>
        {title ? <title>{title}</title> : null}
        <rect x="26" y="26" width="460" height="460" rx="130" fill="none" stroke="currentColor" strokeWidth="30" />
        <path d="M166 234l83 88 122-171" fill="none" stroke="currentColor" strokeWidth="45" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={uid + 's'} x1="256" y1="26" x2="256" y2="486" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#eaf1fb" /><stop offset=".45" stopColor="#d7e4f6" /><stop offset="1" stopColor="#c6d7ee" />
        </linearGradient>
        <linearGradient id={uid + 'r'} x1="256" y1="26" x2="256" y2="486" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset=".5" stopColor="#fff" stopOpacity=".25" /><stop offset="1" stopColor="#fff" stopOpacity=".8" />
        </linearGradient>
        <linearGradient id={uid + 'p'} x1="256" y1="83" x2="256" y2="423" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#f7faff" />
        </linearGradient>
        <linearGradient id={uid + 'c'} x1="166" y1="151" x2="371" y2="322" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b4657" /><stop offset="1" stopColor="#242e3d" />
        </linearGradient>
      </defs>
      <rect x="26" y="26" width="460" height="460" rx="130" fill={'url(#' + uid + 's)'} />
      <rect x="30.5" y="30.5" width="451" height="451" rx="126" fill="none" stroke={'url(#' + uid + 'r)'} strokeWidth="9" />
      <rect x="86" y="83" width="339" height="340" rx="64" fill={'url(#' + uid + 'p)'} />
      <rect x="86" y="83" width="339" height="340" rx="64" fill="none" stroke="#fff" strokeWidth="6" strokeOpacity=".9" />
      <path d="M189 423h142v18a14 14 0 0 1-14 14H203a14 14 0 0 1-14-14z" fill="#c2d3ec" />
      <path d="M166 234l83 88 122-171" fill="none" stroke={'url(#' + uid + 'c)'} strokeWidth="45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
