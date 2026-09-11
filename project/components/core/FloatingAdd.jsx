import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * FloatingAdd — the one persistent action in the product: make a new to-do.
 * It sits bottom-right of the list column, above the scroll, and is the only
 * filled-accent circle in the interface. There is never more than one on screen.
 */
export function FloatingAdd({ label = 'New To-Do', icon = 'plus', size = 56, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <button
      type="button" aria-label={label} title={label} onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, padding: 0, border: 'none', borderRadius: '50%',
        background: 'var(--accent)', color: '#fff', cursor: 'pointer',
        boxShadow: hover ? 'var(--shadow-modal)' : 'var(--shadow-card)',
        transform: press ? 'scale(0.94)' : hover ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-jumpy), box-shadow var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.43)} strokeWidth={2.2} />
    </button>
  );
}
