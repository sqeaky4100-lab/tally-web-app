import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 26, padX: 10, gap: 6, font: 'var(--text-xs)', radius: 'var(--radius-md)' },
  md: { height: 32, padX: 14, gap: 7, font: 'var(--text-sm)', radius: 'var(--radius-md)' },
  lg: { height: 38, padX: 18, gap: 8, font: 'var(--text-base)', radius: 'var(--radius-lg)' },
};

const VARIANTS = {
  primary: { bg: 'var(--accent)', ink: 'var(--on-accent)', border: 'transparent', shadow: 'var(--shadow-xs)' },
  secondary: { bg: 'var(--surface)', ink: 'var(--text-primary)', border: 'var(--border-default)', shadow: 'var(--shadow-xs)' },
  ghost: { bg: 'transparent', ink: 'var(--text-secondary)', border: 'transparent', shadow: 'none' },
  danger: { bg: 'var(--red-500)', ink: '#fff', border: 'transparent', shadow: 'var(--shadow-xs)' },
};

/** Button — the standard action control. Primary is used at most once per view. */
export function Button({
  variant = 'secondary', size = 'md', icon, iconAfter, fullWidth = false,
  disabled = false, pill = false, type = 'button', children, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.secondary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const tint = press ? 'brightness(0.94)' : hover ? 'brightness(0.975)' : 'none';
  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: `0 ${s.padX}px`,
        font: `var(--weight-medium) ${s.font} / 1 var(--font-ui)`,
        letterSpacing: 'var(--tracking-snug)',
        color: v.ink,
        background: variant === 'ghost' && (hover || press)
          ? (press ? 'var(--surface-pressed)' : 'var(--surface-hover)')
          : v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: pill ? 'var(--radius-pill)' : s.radius,
        boxShadow: v.shadow,
        filter: variant === 'ghost' ? 'none' : tint,
        opacity: disabled ? 0.42 : 1,
        cursor: disabled ? 'default' : 'pointer',
        transform: press && !disabled ? 'scale(0.975)' : 'scale(1)',
        transition: 'filter var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={size === 'lg' ? 17 : 15} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={size === 'lg' ? 17 : 15} />}
    </button>
  );
}
