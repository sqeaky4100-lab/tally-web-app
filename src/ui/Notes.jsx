import React from 'react';

// Synced notes arrive as Todoist Markdown. This renders the subset that actually
// appears in the source — bold, inline code, links, bullet and numbered lists,
// paragraphs — as React elements, so nothing is ever injected as HTML.

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;

function renderInline(text, keyPrefix) {
  const parts = String(text).split(INLINE).filter((p) => p !== '' && p !== undefined);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (/^`[^`]+`$/.test(part)) return <code key={key}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={key} href={link[2]} target="_blank" rel="noreferrer noopener">{link[1]}</a>
      );
    }
    if (/^https?:\/\//.test(part)) {
      return <a key={key} href={part} target="_blank" rel="noreferrer noopener">{part}</a>;
    }
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

function blocks(markdown) {
  const lines = String(markdown).split('\n');
  const out = [];
  let list = null;

  const flush = () => {
    if (list) out.push(list);
    list = null;
  };

  lines.forEach((raw) => {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) { flush(); return; }

    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    const numbered = line.match(/^\s*(\d+)\.\s+(.*)$/);
    const heading = line.match(/^#{1,6}\s+(.*)$/);

    if (heading) { flush(); out.push({ type: 'heading', text: heading[1] }); return; }
    if (bullet) {
      if (!list || list.type !== 'ul') { flush(); list = { type: 'ul', items: [] }; }
      list.items.push(bullet[1]);
      return;
    }
    if (numbered) {
      if (!list || list.type !== 'ol') { flush(); list = { type: 'ol', items: [] }; }
      list.items.push(numbered[2]);
      return;
    }
    flush();
    const last = out[out.length - 1];
    if (last && last.type === 'p') last.text += ` ${line.trim()}`;
    else out.push({ type: 'p', text: line.trim() });
  });

  flush();
  return out;
}

/** Notes — the to-do's synced description, set in body type on the secondary ink. */
export function Notes({ children, style }) {
  const parsed = React.useMemo(() => (children ? blocks(children) : []), [children]);
  if (!parsed.length) return null;
  return (
    <div
      className="tally-notes"
      style={{ font: 'var(--type-body)', color: 'var(--text-secondary)', textWrap: 'pretty', ...style }}
    >
      {parsed.map((b, i) => {
        if (b.type === 'heading') {
          return (
            <p key={i} style={{ font: 'var(--type-ui-strong)', color: 'var(--text-primary)' }}>
              {renderInline(b.text, i)}
            </p>
          );
        }
        if (b.type === 'ul') {
          return <ul key={i}>{b.items.map((it, j) => <li key={j}>{renderInline(it, `${i}-${j}`)}</li>)}</ul>;
        }
        if (b.type === 'ol') {
          return <ol key={i}>{b.items.map((it, j) => <li key={j}>{renderInline(it, `${i}-${j}`)}</li>)}</ol>;
        }
        return <p key={i}>{renderInline(b.text, i)}</p>;
      })}
    </div>
  );
}
