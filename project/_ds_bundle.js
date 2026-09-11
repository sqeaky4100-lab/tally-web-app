/* @ds-bundle: {"format":4,"namespace":"TallyDesignSystem_788326","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FloatingAdd","sourcePath":"components/core/FloatingAdd.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProgressRing","sourcePath":"components/core/ProgressRing.jsx"},{"name":"Segmented","sourcePath":"components/core/Segmented.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ICONS","sourcePath":"components/core/tally-icons.js"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/SidebarItem.jsx"},{"name":"SidebarSection","sourcePath":"components/navigation/SidebarSection.jsx"},{"name":"Toolbar","sourcePath":"components/navigation/Toolbar.jsx"},{"name":"ViewHeader","sourcePath":"components/navigation/ViewHeader.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"MenuItem","sourcePath":"components/overlay/Menu.jsx"},{"name":"MenuDivider","sourcePath":"components/overlay/Menu.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Popover","sourcePath":"components/overlay/Popover.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"},{"name":"ChecklistItem","sourcePath":"components/tasks/ChecklistItem.jsx"},{"name":"DateChip","sourcePath":"components/tasks/DateChip.jsx"},{"name":"QuickEntry","sourcePath":"components/tasks/QuickEntry.jsx"},{"name":"TaskDetailCard","sourcePath":"components/tasks/TaskDetailCard.jsx"},{"name":"TaskGroupHeader","sourcePath":"components/tasks/TaskGroupHeader.jsx"},{"name":"TaskRow","sourcePath":"components/tasks/TaskRow.jsx"}],"sourceHashes":{"assets/icons/tally-icons.global.js":"9de35322d9d3","components/core/Badge.jsx":"02a01f7aec20","components/core/BrandMark.jsx":"6b2125c0c241","components/core/Button.jsx":"2ce420c75dc7","components/core/FloatingAdd.jsx":"f7f01fe571e6","components/core/Icon.jsx":"ab37515a68b6","components/core/IconButton.jsx":"19ad55a37679","components/core/ProgressRing.jsx":"e0f9b427e942","components/core/Segmented.jsx":"acb87f4534d3","components/core/Tag.jsx":"0f4b684cf0b3","components/core/tally-icons.js":"40bb1de89e5f","components/forms/Checkbox.jsx":"68df204e3d3f","components/forms/Radio.jsx":"8acd61bdd8fd","components/forms/Select.jsx":"ae9482aae890","components/forms/Switch.jsx":"67245ecd8ff4","components/forms/TextField.jsx":"a379bdee0a3c","components/navigation/SidebarItem.jsx":"aa386fd32c6a","components/navigation/SidebarSection.jsx":"f35bcc6f43e4","components/navigation/Toolbar.jsx":"032c461b233b","components/navigation/ViewHeader.jsx":"cbf7259da459","components/overlay/Dialog.jsx":"230c4310c194","components/overlay/Menu.jsx":"038d091ef681","components/overlay/Popover.jsx":"3d22c5c0d12a","components/overlay/Toast.jsx":"1f1d4edbc110","components/overlay/Tooltip.jsx":"410c63135638","components/tasks/ChecklistItem.jsx":"58698f085ee8","components/tasks/DateChip.jsx":"b38fbb88c412","components/tasks/QuickEntry.jsx":"5a150107523e","components/tasks/TaskDetailCard.jsx":"d8ac45fa9e88","components/tasks/TaskGroupHeader.jsx":"50f1c6c6b8cb","components/tasks/TaskRow.jsx":"d428c762f4c4","ui_kits/web-app/App.jsx":"a3dda0eb4496","ui_kits/web-app/DetailPane.jsx":"0a954106f049","ui_kits/web-app/ListView.jsx":"f9952d1a1d00","ui_kits/web-app/Sidebar.jsx":"6a03dea09edf","ui_kits/web-app/data.js":"954bf17348aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TallyDesignSystem_788326 = window.TallyDesignSystem_788326 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/tally-icons.global.js
try { (() => {
// Tally iconography — plain-script build (window.TallyIcons). Derived from the Tally brand mark.
// ES-module build: components/core/tally-icons.js. Raw SVGs: this directory.
window.TallyIcons = {
  "check": "<path d=\"M7.8 11.9 11.7 16 17.4 8\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"9\" /> <path d=\"M8.4 12.2 11.1 15 15.8 9.2\" />",
  "square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" />",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"9\" />",
  "inbox": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" /> <path d=\"M3 13.5h4.2l1.6 2.4h6.4l1.6-2.4H21\" />",
  "panel-left": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" /> <path d=\"M9.5 3.4v17.2\" />",
  "layers": "<path d=\"M12.7 2.7a1.7 1.7 0 0 0-1.4 0L3.6 6.3a.9.9 0 0 0 0 1.6l7.7 3.6a1.7 1.7 0 0 0 1.4 0l7.7-3.6a.9.9 0 0 0 0-1.6z\" /> <path d=\"M3.2 12.3 11.3 16a1.7 1.7 0 0 0 1.4 0l8.1-3.7\" /> <path d=\"M3.2 17 11.3 20.7a1.7 1.7 0 0 0 1.4 0l8.1-3.7\" />",
  "archive": "<rect x=\"3\" y=\"3.5\" width=\"18\" height=\"5\" rx=\"2\" /> <path d=\"M5 8.5V18a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 18V8.5\" /> <path d=\"M10 13h4\" />",
  "box": "<path d=\"M20.5 8.2a2 2 0 0 0-1-1.73l-6.5-3.7a2 2 0 0 0-2 0l-6.5 3.7a2 2 0 0 0-1 1.73v7.6a2 2 0 0 0 1 1.73l6.5 3.7a2 2 0 0 0 2 0l6.5-3.7a2 2 0 0 0 1-1.73z\" /> <path d=\"m3.8 7.3 8.2 4.7 8.2-4.7\" /> <path d=\"M12 21.4V12\" />",
  "briefcase": "<rect x=\"2.5\" y=\"6.5\" width=\"19\" height=\"13\" rx=\"3\" /> <path d=\"M8.5 6.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5\" />",
  "folder": "<path d=\"M3 8a2.5 2.5 0 0 1 2.5-2.5h3.1a2 2 0 0 1 1.6.8L11.5 8h7A2.5 2.5 0 0 1 21 10.5v7A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z\" />",
  "book-open": "<path d=\"M12 7.6v12.2\" /> <path d=\"M12 7.6C10.5 6.1 8.5 5.4 5.5 5.4A1.5 1.5 0 0 0 4 6.9v9.7a1.5 1.5 0 0 0 1.5 1.5c3 0 5 .7 6.5 2.2\" /> <path d=\"M12 7.6c1.5-1.5 3.5-2.2 6.5-2.2A1.5 1.5 0 0 1 20 6.9v9.7a1.5 1.5 0 0 1-1.5 1.5c-3 0-5 .7-6.5 2.2\" />",
  "file-text": "<path d=\"M14.5 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V8z\" /> <path d=\"M14.5 3v3.5A1.5 1.5 0 0 0 16 8h3.5\" /> <path d=\"M8.5 13h7\" /> <path d=\"M8.5 16.5h4.5\" />",
  "list-checks": "<path d=\"M11 6.5h9\" /> <path d=\"M11 12h9\" /> <path d=\"M11 17.5h9\" /> <path d=\"M3.5 6.2 5.1 7.9 8 4.6\" /> <path d=\"M3.5 17.2 5.1 18.9 8 15.6\" />",
  "calendar": "<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"16.5\" rx=\"4.5\" /> <path d=\"M3 9.6h18\" /> <path d=\"M8 2.6v3.8\" /> <path d=\"M16 2.6v3.8\" />",
  "calendar-days": "<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"16.5\" rx=\"4.5\" /> <path d=\"M3 9.6h18\" /> <path d=\"M8 2.6v3.8\" /> <path d=\"M16 2.6v3.8\" /> <path d=\"M7.6 13.4h.8\" /> <path d=\"M11.6 13.4h.8\" /> <path d=\"M15.6 13.4h.8\" /> <path d=\"M7.6 17.2h.8\" /> <path d=\"M11.6 17.2h.8\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"9\" /> <path d=\"M12 6.8v5.5l3.4 2\" />",
  "alarm-clock": "<circle cx=\"12\" cy=\"13.2\" r=\"7.6\" /> <path d=\"M12 9.4v3.8l2.4 1.4\" /> <path d=\"M3.4 6.6 6.6 3.4\" /> <path d=\"M20.6 6.6 17.4 3.4\" /> <path d=\"M6.2 19.8 4.4 21.6\" /> <path d=\"M17.8 19.8 19.6 21.6\" />",
  "bell": "<path d=\"M18 9.4a6 6 0 1 0-12 0c0 4.6-2 6.2-2 6.2h16s-2-1.6-2-6.2\" /> <path d=\"M13.8 19a2.1 2.1 0 0 1-3.6 0\" />",
  "star": "<path d=\"m12 3.4 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.9l6.1-.9z\" />",
  "flag": "<path d=\"M5.2 21.2V3.6\" /> <path d=\"M5.2 5.2h11.4l-2.2 3.9 2.2 3.9H5.2\" />",
  "tag": "<path d=\"M11.6 3H4.6A1.6 1.6 0 0 0 3 4.6v7a1.6 1.6 0 0 0 .47 1.13l8.2 8.2a2 2 0 0 0 2.83 0l6.33-6.33a2 2 0 0 0 0-2.83l-8.2-8.2A1.6 1.6 0 0 0 11.6 3z\" /> <circle cx=\"7.6\" cy=\"7.6\" r=\".9\" fill=\"currentColor\" stroke=\"none\" />",
  "tags": "<path d=\"M9.9 3H4.6A1.6 1.6 0 0 0 3 4.6v5.3a1.6 1.6 0 0 0 .47 1.13l6.5 6.5a2 2 0 0 0 2.83 0l4.63-4.63a2 2 0 0 0 0-2.83l-6.5-6.5A1.6 1.6 0 0 0 9.9 3z\" /> <path d=\"M14.2 4.6h.6a1.6 1.6 0 0 1 1.13.47l6.5 6.5\" /> <circle cx=\"7\" cy=\"7\" r=\".9\" fill=\"currentColor\" stroke=\"none\" />",
  "hash": "<path d=\"M5.6 9.4h13\" /> <path d=\"M5 14.9h13\" /> <path d=\"M10.7 3.6 8.6 20.6\" /> <path d=\"M16.4 3.6l-2.1 17\" />",
  "home": "<path d=\"M4 10.4 12 3.8l8 6.6v8.2A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.6z\" /> <path d=\"M9.6 21v-5.8h4.8V21\" />",
  "user": "<circle cx=\"12\" cy=\"8.2\" r=\"3.8\" /> <path d=\"M4.6 20.6a7.4 7.4 0 0 1 14.8 0\" />",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"7.2\" /> <path d=\"m16.3 16.3 4.4 4.4\" />",
  "filter": "<path d=\"M4 5.6h16l-6.1 7.1v6.1l-3.8 2.1v-8.2z\" />",
  "sliders-horizontal": "<path d=\"M3.5 8.4h4.2\" /> <path d=\"M12.3 8.4h8.2\" /> <path d=\"M3.5 15.6h8.2\" /> <path d=\"M16.3 15.6h4.2\" /> <circle cx=\"10\" cy=\"8.4\" r=\"2.3\" /> <circle cx=\"14\" cy=\"15.6\" r=\"2.3\" />",
  "settings": "<circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2.4\" /> <path d=\"M18 12h2.4\" /> <path d=\"M3.6 12H6\" /> <path d=\"M12 6V3.6\" /> <path d=\"M12 18v2.4\" /> <path d=\"m16.24 7.76 1.7-1.7\" /> <path d=\"m6.06 17.94 1.7-1.7\" /> <path d=\"m16.24 16.24 1.7 1.7\" /> <path d=\"m6.06 6.06 1.7 1.7\" />",
  "plus": "<path d=\"M12 5.6v12.8\" /> <path d=\"M5.6 12h12.8\" />",
  "x": "<path d=\"m6.6 6.6 10.8 10.8\" /> <path d=\"m17.4 6.6-10.8 10.8\" />",
  "trash-2": "<path d=\"M4 6.4h16\" /> <path d=\"M9.5 6.4V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1.4\" /> <path d=\"M6.6 6.4v12.1A2.5 2.5 0 0 0 9.1 21h5.8a2.5 2.5 0 0 0 2.5-2.5V6.4\" /> <path d=\"M10.4 10.8v5.8\" /> <path d=\"M13.6 10.8v5.8\" />",
  "pencil": "<path d=\"M16.9 3.6a2.6 2.6 0 0 1 3.5 3.5L8.6 18.9 3.5 20.5l1.6-5.1z\" /> <path d=\"m14.9 5.6 3.5 3.5\" />",
  "copy": "<rect x=\"8.5\" y=\"8.5\" width=\"12\" height=\"12\" rx=\"3.4\" /> <path d=\"M15.5 8.5V6.4A2.9 2.9 0 0 0 12.6 3.5H6.4A2.9 2.9 0 0 0 3.5 6.4v6.2a2.9 2.9 0 0 0 2.9 2.9h2.1\" />",
  "link": "<path d=\"M10.2 13.8a4.4 4.4 0 0 0 6.3 0l2.4-2.4a4.4 4.4 0 0 0-6.3-6.3l-1.1 1.1\" /> <path d=\"M13.8 10.2a4.4 4.4 0 0 0-6.3 0l-2.4 2.4a4.4 4.4 0 0 0 6.3 6.3l1.1-1.1\" />",
  "paperclip": "<path d=\"M19.8 11.6 12 19.4a5 5 0 0 1-7.1-7.1l8.3-8.3a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6\" />",
  "arrow-right": "<path d=\"M4.4 12h14.4\" /> <path d=\"m13.2 6.4 5.6 5.6-5.6 5.6\" />",
  "chevron-down": "<path d=\"M6.6 9.6 12 15l5.4-5.4\" />",
  "chevron-up": "<path d=\"M6.6 14.4 12 9l5.4 5.4\" />",
  "chevron-right": "<path d=\"M9.6 6.6 15 12l-5.4 5.4\" />",
  "chevron-left": "<path d=\"M14.4 6.6 9 12l5.4 5.4\" />",
  "undo-2": "<path d=\"M8.6 7.2 4 11.8l4.6 4.6\" /> <path d=\"M4 11.8h9.6a4.9 4.9 0 0 1 0 9.8h-2.8\" />",
  "repeat": "<path d=\"M4 10.2V9.6A3.1 3.1 0 0 1 7.1 6.5h12.4\" /> <path d=\"m16.4 3.4 3.1 3.1-3.1 3.1\" /> <path d=\"M20 13.8v.6a3.1 3.1 0 0 1-3.1 3.1H4.5\" /> <path d=\"m7.6 20.6-3.1-3.1 3.1-3.1\" />",
  "refresh-cw": "<path d=\"M20.2 9.4a8.4 8.4 0 0 0-14.4-3L3.8 8.4\" /> <path d=\"M3.8 3.8v4.6h4.6\" /> <path d=\"M3.8 14.6a8.4 8.4 0 0 0 14.4 3l2-2\" /> <path d=\"M20.2 20.2v-4.6h-4.6\" />",
  "move": "<path d=\"M12 3.6v16.8\" /> <path d=\"M3.6 12h16.8\" /> <path d=\"m9.6 6 2.4-2.4L14.4 6\" /> <path d=\"m9.6 18 2.4 2.4L14.4 18\" /> <path d=\"m6 9.6-2.4 2.4L6 14.4\" /> <path d=\"m18 9.6 2.4 2.4-2.4 2.4\" />",
  "maximize-2": "<path d=\"M14.4 3.8h5.8v5.8\" /> <path d=\"M9.6 20.2H3.8v-5.8\" /> <path d=\"m20.2 3.8-6.6 6.6\" /> <path d=\"m3.8 20.2 6.6-6.6\" />",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"9\" /> <circle cx=\"12\" cy=\"12\" r=\"4.8\" /> <circle cx=\"12\" cy=\"12\" r=\"1.4\" fill=\"currentColor\" stroke=\"none\" />",
  "grip-horizontal": "<circle cx=\"8\" cy=\"9.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"12\" cy=\"9.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"16\" cy=\"9.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"8\" cy=\"14.4\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"12\" cy=\"14.4\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"16\" cy=\"14.4\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" />",
  "ellipsis": "<circle cx=\"5.4\" cy=\"12\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"12\" cy=\"12\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"18.6\" cy=\"12\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2.6v2\" /> <path d=\"M12 19.4v2\" /> <path d=\"M2.6 12h2\" /> <path d=\"M19.4 12h2\" /> <path d=\"m5.3 5.3 1.4 1.4\" /> <path d=\"m17.3 17.3 1.4 1.4\" /> <path d=\"m18.7 5.3-1.4 1.4\" /> <path d=\"m6.7 17.3-1.4 1.4\" />",
  "moon": "<path d=\"M20.6 13.3A8.9 8.9 0 1 1 10.7 3.4a6.9 6.9 0 0 0 9.9 9.9z\" />",
  "tally-mark": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" /> <path d=\"M7.8 11.9 11.7 16 17.4 8\" />"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/tally-icons.global.js", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--surface-sunken)', 'var(--text-secondary)'],
  accent: ['var(--accent)', 'var(--on-accent)'],
  danger: ['var(--red-500)', '#fff'],
  quiet: ['transparent', 'var(--text-tertiary)']
};

/** Badge — a count. Sidebar rows, group headers, unread markers. */
function Badge({
  children,
  tone = 'quiet',
  style,
  ...rest
}) {
  const [bg, ink] = TONES[tone] || TONES.quiet;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 18,
      height: 18,
      padding: '0 6px',
      font: 'var(--weight-semibold) var(--text-2xs) / 1 var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      color: ink,
      background: bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
/**
 * BrandMark — the Tally mark: a glass shell holding a white plate and the signature check.
 * `glass` is the full app-icon rendering; `mono` is the single-colour reduction for
 * favicons, sidebars, print and anywhere under 24px. Never recolour the glass variant.
 */
function BrandMark({
  size = 40,
  variant = 'glass',
  title,
  style,
  className
}) {
  const uid = React.useId().replace(/:/g, '');
  const common = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 512 512',
    className,
    role: title ? 'img' : undefined,
    'aria-label': title,
    'aria-hidden': title ? undefined : true,
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  };
  if (variant === 'mono') {
    return /*#__PURE__*/React.createElement("svg", common, title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("rect", {
      x: "26",
      y: "26",
      width: "460",
      height: "460",
      rx: "130",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "30"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M166 234l83 88 122-171",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "45",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", common, title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: uid + 's',
    x1: "256",
    y1: "26",
    x2: "256",
    y2: "486",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#eaf1fb"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".45",
    stopColor: "#d7e4f6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c6d7ee"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: uid + 'r',
    x1: "256",
    y1: "26",
    x2: "256",
    y2: "486",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: ".95"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#fff",
    stopOpacity: ".25"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: ".8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: uid + 'p',
    x1: "256",
    y1: "83",
    x2: "256",
    y2: "423",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#f7faff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: uid + 'c',
    x1: "166",
    y1: "151",
    x2: "371",
    y2: "322",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#3b4657"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#242e3d"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "26",
    width: "460",
    height: "460",
    rx: "130",
    fill: 'url(#' + uid + 's)'
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30.5",
    y: "30.5",
    width: "451",
    height: "451",
    rx: "126",
    fill: "none",
    stroke: 'url(#' + uid + 'r)',
    strokeWidth: "9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "86",
    y: "83",
    width: "339",
    height: "340",
    rx: "64",
    fill: 'url(#' + uid + 'p)'
  }), /*#__PURE__*/React.createElement("rect", {
    x: "86",
    y: "83",
    width: "339",
    height: "340",
    rx: "64",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "6",
    strokeOpacity: ".9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M189 423h142v18a14 14 0 0 1-14 14H203a14 14 0 0 1-14-14z",
    fill: "#c2d3ec"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M166 234l83 88 122-171",
    fill: "none",
    stroke: 'url(#' + uid + 'c)',
    strokeWidth: "45",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressRing.jsx
try { (() => {
/** ProgressRing — the project marker. A ring that fills as its to-dos complete. */
function ProgressRing({
  value = 0,
  size = 14,
  thickness = 1.6,
  color = 'var(--accent)',
  track = 'var(--state-open)',
  style
}) {
  const pct = Math.max(0, Math.min(1, value));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      flex: '0 0 auto',
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: thickness
  }), pct > 0 && /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "butt",
    strokeDasharray: `${c * pct} ${c}`,
    transform: `rotate(-90 ${size / 2} ${size / 2})`
  }), pct >= 1 && /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r - thickness / 2,
    fill: color
  }));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/core/Segmented.jsx
try { (() => {
/** Segmented — a compact row of mutually exclusive filters. */
function Segmented({
  options = [],
  value,
  onChange,
  size = 'md',
  style
}) {
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 2 : 4,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const on = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(val),
      style: {
        height: sm ? 22 : 26,
        padding: `0 ${sm ? 9 : 11}px`,
        font: `var(--weight-${on ? 'semibold' : 'medium'}) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / 1 var(--font-ui)`,
        color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
        background: on ? 'var(--surface-sunken)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        transition: 'var(--transition-hover)',
        whiteSpace: 'nowrap'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/core/tally-icons.js
try { (() => {
// Tally iconography — drawn for this design system, derived from the Tally brand mark.
// Geometry rules (see readme.md > Iconography):
//   · 24×24 grid, 2px stroke, round caps and joins, no fills except intentional dots.
//   · The check is lifted verbatim from the brand mark: M7.8 11.9 11.7 16 17.4 8.
//   · Container glyphs reuse the mark's shell: rect 3,3,18,18 rx 5 (28% radius).
//   · Terminals stop on half-units so strokes stay crisp at 16px and 20px.
const ICONS = {
  "check": "<path d=\"M7.8 11.9 11.7 16 17.4 8\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"9\" /> <path d=\"M8.4 12.2 11.1 15 15.8 9.2\" />",
  "square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" />",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"9\" />",
  "inbox": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" /> <path d=\"M3 13.5h4.2l1.6 2.4h6.4l1.6-2.4H21\" />",
  "panel-left": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" /> <path d=\"M9.5 3.4v17.2\" />",
  "layers": "<path d=\"M12.7 2.7a1.7 1.7 0 0 0-1.4 0L3.6 6.3a.9.9 0 0 0 0 1.6l7.7 3.6a1.7 1.7 0 0 0 1.4 0l7.7-3.6a.9.9 0 0 0 0-1.6z\" /> <path d=\"M3.2 12.3 11.3 16a1.7 1.7 0 0 0 1.4 0l8.1-3.7\" /> <path d=\"M3.2 17 11.3 20.7a1.7 1.7 0 0 0 1.4 0l8.1-3.7\" />",
  "archive": "<rect x=\"3\" y=\"3.5\" width=\"18\" height=\"5\" rx=\"2\" /> <path d=\"M5 8.5V18a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 18V8.5\" /> <path d=\"M10 13h4\" />",
  "box": "<path d=\"M20.5 8.2a2 2 0 0 0-1-1.73l-6.5-3.7a2 2 0 0 0-2 0l-6.5 3.7a2 2 0 0 0-1 1.73v7.6a2 2 0 0 0 1 1.73l6.5 3.7a2 2 0 0 0 2 0l6.5-3.7a2 2 0 0 0 1-1.73z\" /> <path d=\"m3.8 7.3 8.2 4.7 8.2-4.7\" /> <path d=\"M12 21.4V12\" />",
  "briefcase": "<rect x=\"2.5\" y=\"6.5\" width=\"19\" height=\"13\" rx=\"3\" /> <path d=\"M8.5 6.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5\" />",
  "folder": "<path d=\"M3 8a2.5 2.5 0 0 1 2.5-2.5h3.1a2 2 0 0 1 1.6.8L11.5 8h7A2.5 2.5 0 0 1 21 10.5v7A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z\" />",
  "book-open": "<path d=\"M12 7.6v12.2\" /> <path d=\"M12 7.6C10.5 6.1 8.5 5.4 5.5 5.4A1.5 1.5 0 0 0 4 6.9v9.7a1.5 1.5 0 0 0 1.5 1.5c3 0 5 .7 6.5 2.2\" /> <path d=\"M12 7.6c1.5-1.5 3.5-2.2 6.5-2.2A1.5 1.5 0 0 1 20 6.9v9.7a1.5 1.5 0 0 1-1.5 1.5c-3 0-5 .7-6.5 2.2\" />",
  "file-text": "<path d=\"M14.5 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V8z\" /> <path d=\"M14.5 3v3.5A1.5 1.5 0 0 0 16 8h3.5\" /> <path d=\"M8.5 13h7\" /> <path d=\"M8.5 16.5h4.5\" />",
  "list-checks": "<path d=\"M11 6.5h9\" /> <path d=\"M11 12h9\" /> <path d=\"M11 17.5h9\" /> <path d=\"M3.5 6.2 5.1 7.9 8 4.6\" /> <path d=\"M3.5 17.2 5.1 18.9 8 15.6\" />",
  "calendar": "<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"16.5\" rx=\"4.5\" /> <path d=\"M3 9.6h18\" /> <path d=\"M8 2.6v3.8\" /> <path d=\"M16 2.6v3.8\" />",
  "calendar-days": "<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"16.5\" rx=\"4.5\" /> <path d=\"M3 9.6h18\" /> <path d=\"M8 2.6v3.8\" /> <path d=\"M16 2.6v3.8\" /> <path d=\"M7.6 13.4h.8\" /> <path d=\"M11.6 13.4h.8\" /> <path d=\"M15.6 13.4h.8\" /> <path d=\"M7.6 17.2h.8\" /> <path d=\"M11.6 17.2h.8\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"9\" /> <path d=\"M12 6.8v5.5l3.4 2\" />",
  "alarm-clock": "<circle cx=\"12\" cy=\"13.2\" r=\"7.6\" /> <path d=\"M12 9.4v3.8l2.4 1.4\" /> <path d=\"M3.4 6.6 6.6 3.4\" /> <path d=\"M20.6 6.6 17.4 3.4\" /> <path d=\"M6.2 19.8 4.4 21.6\" /> <path d=\"M17.8 19.8 19.6 21.6\" />",
  "bell": "<path d=\"M18 9.4a6 6 0 1 0-12 0c0 4.6-2 6.2-2 6.2h16s-2-1.6-2-6.2\" /> <path d=\"M13.8 19a2.1 2.1 0 0 1-3.6 0\" />",
  "star": "<path d=\"m12 3.4 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.9l6.1-.9z\" />",
  "flag": "<path d=\"M5.2 21.2V3.6\" /> <path d=\"M5.2 5.2h11.4l-2.2 3.9 2.2 3.9H5.2\" />",
  "tag": "<path d=\"M11.6 3H4.6A1.6 1.6 0 0 0 3 4.6v7a1.6 1.6 0 0 0 .47 1.13l8.2 8.2a2 2 0 0 0 2.83 0l6.33-6.33a2 2 0 0 0 0-2.83l-8.2-8.2A1.6 1.6 0 0 0 11.6 3z\" /> <circle cx=\"7.6\" cy=\"7.6\" r=\".9\" fill=\"currentColor\" stroke=\"none\" />",
  "tags": "<path d=\"M9.9 3H4.6A1.6 1.6 0 0 0 3 4.6v5.3a1.6 1.6 0 0 0 .47 1.13l6.5 6.5a2 2 0 0 0 2.83 0l4.63-4.63a2 2 0 0 0 0-2.83l-6.5-6.5A1.6 1.6 0 0 0 9.9 3z\" /> <path d=\"M14.2 4.6h.6a1.6 1.6 0 0 1 1.13.47l6.5 6.5\" /> <circle cx=\"7\" cy=\"7\" r=\".9\" fill=\"currentColor\" stroke=\"none\" />",
  "hash": "<path d=\"M5.6 9.4h13\" /> <path d=\"M5 14.9h13\" /> <path d=\"M10.7 3.6 8.6 20.6\" /> <path d=\"M16.4 3.6l-2.1 17\" />",
  "home": "<path d=\"M4 10.4 12 3.8l8 6.6v8.2A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.6z\" /> <path d=\"M9.6 21v-5.8h4.8V21\" />",
  "user": "<circle cx=\"12\" cy=\"8.2\" r=\"3.8\" /> <path d=\"M4.6 20.6a7.4 7.4 0 0 1 14.8 0\" />",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"7.2\" /> <path d=\"m16.3 16.3 4.4 4.4\" />",
  "filter": "<path d=\"M4 5.6h16l-6.1 7.1v6.1l-3.8 2.1v-8.2z\" />",
  "sliders-horizontal": "<path d=\"M3.5 8.4h4.2\" /> <path d=\"M12.3 8.4h8.2\" /> <path d=\"M3.5 15.6h8.2\" /> <path d=\"M16.3 15.6h4.2\" /> <circle cx=\"10\" cy=\"8.4\" r=\"2.3\" /> <circle cx=\"14\" cy=\"15.6\" r=\"2.3\" />",
  "settings": "<circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2.4\" /> <path d=\"M18 12h2.4\" /> <path d=\"M3.6 12H6\" /> <path d=\"M12 6V3.6\" /> <path d=\"M12 18v2.4\" /> <path d=\"m16.24 7.76 1.7-1.7\" /> <path d=\"m6.06 17.94 1.7-1.7\" /> <path d=\"m16.24 16.24 1.7 1.7\" /> <path d=\"m6.06 6.06 1.7 1.7\" />",
  "plus": "<path d=\"M12 5.6v12.8\" /> <path d=\"M5.6 12h12.8\" />",
  "x": "<path d=\"m6.6 6.6 10.8 10.8\" /> <path d=\"m17.4 6.6-10.8 10.8\" />",
  "trash-2": "<path d=\"M4 6.4h16\" /> <path d=\"M9.5 6.4V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1.4\" /> <path d=\"M6.6 6.4v12.1A2.5 2.5 0 0 0 9.1 21h5.8a2.5 2.5 0 0 0 2.5-2.5V6.4\" /> <path d=\"M10.4 10.8v5.8\" /> <path d=\"M13.6 10.8v5.8\" />",
  "pencil": "<path d=\"M16.9 3.6a2.6 2.6 0 0 1 3.5 3.5L8.6 18.9 3.5 20.5l1.6-5.1z\" /> <path d=\"m14.9 5.6 3.5 3.5\" />",
  "copy": "<rect x=\"8.5\" y=\"8.5\" width=\"12\" height=\"12\" rx=\"3.4\" /> <path d=\"M15.5 8.5V6.4A2.9 2.9 0 0 0 12.6 3.5H6.4A2.9 2.9 0 0 0 3.5 6.4v6.2a2.9 2.9 0 0 0 2.9 2.9h2.1\" />",
  "link": "<path d=\"M10.2 13.8a4.4 4.4 0 0 0 6.3 0l2.4-2.4a4.4 4.4 0 0 0-6.3-6.3l-1.1 1.1\" /> <path d=\"M13.8 10.2a4.4 4.4 0 0 0-6.3 0l-2.4 2.4a4.4 4.4 0 0 0 6.3 6.3l1.1-1.1\" />",
  "paperclip": "<path d=\"M19.8 11.6 12 19.4a5 5 0 0 1-7.1-7.1l8.3-8.3a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6\" />",
  "arrow-right": "<path d=\"M4.4 12h14.4\" /> <path d=\"m13.2 6.4 5.6 5.6-5.6 5.6\" />",
  "chevron-down": "<path d=\"M6.6 9.6 12 15l5.4-5.4\" />",
  "chevron-up": "<path d=\"M6.6 14.4 12 9l5.4 5.4\" />",
  "chevron-right": "<path d=\"M9.6 6.6 15 12l-5.4 5.4\" />",
  "chevron-left": "<path d=\"M14.4 6.6 9 12l5.4 5.4\" />",
  "undo-2": "<path d=\"M8.6 7.2 4 11.8l4.6 4.6\" /> <path d=\"M4 11.8h9.6a4.9 4.9 0 0 1 0 9.8h-2.8\" />",
  "repeat": "<path d=\"M4 10.2V9.6A3.1 3.1 0 0 1 7.1 6.5h12.4\" /> <path d=\"m16.4 3.4 3.1 3.1-3.1 3.1\" /> <path d=\"M20 13.8v.6a3.1 3.1 0 0 1-3.1 3.1H4.5\" /> <path d=\"m7.6 20.6-3.1-3.1 3.1-3.1\" />",
  "refresh-cw": "<path d=\"M20.2 9.4a8.4 8.4 0 0 0-14.4-3L3.8 8.4\" /> <path d=\"M3.8 3.8v4.6h4.6\" /> <path d=\"M3.8 14.6a8.4 8.4 0 0 0 14.4 3l2-2\" /> <path d=\"M20.2 20.2v-4.6h-4.6\" />",
  "move": "<path d=\"M12 3.6v16.8\" /> <path d=\"M3.6 12h16.8\" /> <path d=\"m9.6 6 2.4-2.4L14.4 6\" /> <path d=\"m9.6 18 2.4 2.4L14.4 18\" /> <path d=\"m6 9.6-2.4 2.4L6 14.4\" /> <path d=\"m18 9.6 2.4 2.4-2.4 2.4\" />",
  "maximize-2": "<path d=\"M14.4 3.8h5.8v5.8\" /> <path d=\"M9.6 20.2H3.8v-5.8\" /> <path d=\"m20.2 3.8-6.6 6.6\" /> <path d=\"m3.8 20.2 6.6-6.6\" />",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"9\" /> <circle cx=\"12\" cy=\"12\" r=\"4.8\" /> <circle cx=\"12\" cy=\"12\" r=\"1.4\" fill=\"currentColor\" stroke=\"none\" />",
  "grip-horizontal": "<circle cx=\"8\" cy=\"9.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"12\" cy=\"9.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"16\" cy=\"9.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"8\" cy=\"14.4\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"12\" cy=\"14.4\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"16\" cy=\"14.4\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\" />",
  "ellipsis": "<circle cx=\"5.4\" cy=\"12\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"12\" cy=\"12\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\" /> <circle cx=\"18.6\" cy=\"12\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2.6v2\" /> <path d=\"M12 19.4v2\" /> <path d=\"M2.6 12h2\" /> <path d=\"M19.4 12h2\" /> <path d=\"m5.3 5.3 1.4 1.4\" /> <path d=\"m17.3 17.3 1.4 1.4\" /> <path d=\"m18.7 5.3-1.4 1.4\" /> <path d=\"m6.7 17.3-1.4 1.4\" />",
  "moon": "<path d=\"M20.6 13.3A8.9 8.9 0 1 1 10.7 3.4a6.9 6.9 0 0 0 9.9 9.9z\" />",
  "tally-mark": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" /> <path d=\"M7.8 11.9 11.7 16 17.4 8\" />"
};
Object.assign(__ds_scope, { ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/tally-icons.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — renders a Tally glyph as inline SVG so it always inherits currentColor.
 * The Tally set is drawn from the brand mark and is the system's only icon set;
 * see readme.md > Iconography.
 */
function Icon({
  name,
  size = 16,
  color,
  strokeWidth = 2,
  style,
  className,
  title
}) {
  const body = __ds_scope.ICONS[name];
  if (!body) {
    if (typeof console !== 'undefined') console.warn('[Tally] Unknown icon: ' + name);
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + body
    }
  });
}

/** The full set of icon names bundled with this design system. */
const ICON_NAMES = Object.keys(__ds_scope.ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 26,
    padX: 10,
    gap: 6,
    font: 'var(--text-xs)',
    radius: 'var(--radius-md)'
  },
  md: {
    height: 32,
    padX: 14,
    gap: 7,
    font: 'var(--text-sm)',
    radius: 'var(--radius-md)'
  },
  lg: {
    height: 38,
    padX: 18,
    gap: 8,
    font: 'var(--text-base)',
    radius: 'var(--radius-lg)'
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--accent)',
    ink: 'var(--on-accent)',
    border: 'transparent',
    shadow: 'var(--shadow-xs)'
  },
  secondary: {
    bg: 'var(--surface)',
    ink: 'var(--text-primary)',
    border: 'var(--border-default)',
    shadow: 'var(--shadow-xs)'
  },
  ghost: {
    bg: 'transparent',
    ink: 'var(--text-secondary)',
    border: 'transparent',
    shadow: 'none'
  },
  danger: {
    bg: 'var(--red-500)',
    ink: '#fff',
    border: 'transparent',
    shadow: 'var(--shadow-xs)'
  }
};

/** Button — the standard action control. Primary is used at most once per view. */
function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  pill = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.secondary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const tint = press ? 'brightness(0.94)' : hover ? 'brightness(0.975)' : 'none';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.padX}px`,
      font: `var(--weight-medium) ${s.font} / 1 var(--font-ui)`,
      letterSpacing: 'var(--tracking-snug)',
      color: v.ink,
      background: variant === 'ghost' && (hover || press) ? press ? 'var(--surface-pressed)' : 'var(--surface-hover)' : v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: pill ? 'var(--radius-pill)' : s.radius,
      boxShadow: v.shadow,
      filter: variant === 'ghost' ? 'none' : tint,
      opacity: disabled ? 0.42 : 1,
      cursor: disabled ? 'default' : 'pointer',
      transform: press && !disabled ? 'scale(0.975)' : 'scale(1)',
      transition: 'filter var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 17 : 15
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 17 : 15
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FloatingAdd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FloatingAdd — the one persistent action in the product: make a new to-do.
 * It sits bottom-right of the list column, above the scroll, and is the only
 * filled-accent circle in the interface. There is never more than one on screen.
 */
function FloatingAdd({
  label = 'New To-Do',
  icon = 'plus',
  size = 56,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      padding: 0,
      border: 'none',
      borderRadius: '50%',
      background: 'var(--accent)',
      color: '#fff',
      cursor: 'pointer',
      boxShadow: hover ? 'var(--shadow-modal)' : 'var(--shadow-card)',
      transform: press ? 'scale(0.94)' : hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-fast) var(--ease-jumpy), box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.43),
    strokeWidth: 2.2
  }));
}
Object.assign(__ds_scope, { FloatingAdd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FloatingAdd.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 24,
  md: 30,
  lg: 36
};

/** IconButton — a bare glyph target. Always give it a label. */
function IconButton({
  icon,
  label,
  size = 'md',
  active = false,
  tone = 'default',
  disabled = false,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const ink = disabled ? 'var(--text-disabled)' : tone === 'danger' ? 'var(--text-danger)' : active ? 'var(--accent)' : hover ? 'var(--text-primary)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      padding: 0,
      color: ink,
      background: active ? 'var(--accent-soft)' : press ? 'var(--surface-pressed)' : hover ? 'var(--surface-hover)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: box <= 24 ? 14 : box <= 30 ? 16 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--tag-bg)', 'var(--tag-ink)'],
  blue: ['var(--tag-bg-blue)', 'var(--tag-ink-blue)'],
  green: ['var(--tag-bg-green)', 'var(--tag-ink-green)'],
  red: ['var(--tag-bg-red)', 'var(--tag-ink-red)'],
  amber: ['var(--tag-bg-amber)', 'var(--tag-ink-amber)']
};

/** Tag — a soft-filled or outlined label attached to a to-do. */
function Tag({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  icon,
  onRemove,
  style,
  ...rest
}) {
  const [bg, ink] = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 4 : 5,
      height: sm ? 18 : 21,
      padding: `0 ${sm ? 7 : 9}px`,
      font: `var(--weight-medium) ${sm ? 'var(--text-2xs)' : 'var(--text-xs)'} / 1 var(--font-ui)`,
      color: ink,
      background: variant === 'soft' ? bg : 'transparent',
      border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 10 : 11
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    role: "button",
    "aria-label": "Remove tag",
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.55,
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: sm ? 10 : 11
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — the single most important control in the system.
 * Four states, two shapes. A square marks a to-do; a circle marks a project.
 */
function Checkbox({
  state = 'open',
  shape = 'square',
  size = 16,
  onToggle,
  disabled = false,
  label,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const radius = shape === 'circle' ? '50%' : 'var(--radius-checkbox)';
  const filled = state === 'done' || state === 'canceled';
  const bg = state === 'done' ? 'var(--state-done)' : state === 'canceled' ? 'var(--state-canceled)' : 'transparent';
  const border = state === 'progress' ? 'var(--state-progress)' : filled ? bg : hover && !disabled ? 'var(--text-tertiary)' : 'var(--state-open)';
  const box = /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": state === 'done',
    "aria-label": label,
    tabIndex: disabled ? -1 : 0,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onToggle,
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onToggle && onToggle(e);
      }
    },
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      boxSizing: 'border-box',
      background: bg,
      border: `1.5px solid ${border}`,
      borderRadius: radius,
      overflow: 'hidden',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-check)',
      ...style
    }
  }, state === 'progress' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '50%',
      background: 'var(--state-progress)'
    }
  }), state === 'done' && /*#__PURE__*/React.createElement("svg", {
    width: size * 0.66,
    height: size * 0.66,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.2 6.3 L4.7 8.8 L9.9 3.3",
    stroke: "var(--on-accent)",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), state === 'canceled' && /*#__PURE__*/React.createElement("svg", {
    width: size * 0.62,
    height: size * 0.62,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.4 6 H9.6",
    stroke: "var(--on-accent)",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  })));
  if (!label) return box;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, box, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-ui)',
      color: state === 'open' || state === 'progress' ? 'var(--text-primary)' : 'var(--text-done)',
      textDecoration: state === 'canceled' ? 'line-through' : 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio — one of a small mutually exclusive set, stacked with labels. */
function Radio({
  checked = false,
  onChange,
  disabled = false,
  label,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "radio",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: disabled ? undefined : onChange,
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(e);
      }
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: 16,
      height: 16,
      marginTop: description ? 1 : 0,
      boxSizing: 'border-box',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--state-open)'}`,
      borderRadius: '50%',
      background: 'transparent',
      transition: 'var(--transition-check)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-ui)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — a native dropdown wearing Tally chrome. */
function Select({
  value,
  onChange,
  options = [],
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      height: sm ? 28 : 34,
      paddingLeft: sm ? 9 : 11,
      paddingRight: sm ? 26 : 30,
      background: 'var(--surface)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-xs)',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      font: `var(--weight-medium) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / 1 var(--font-ui)`,
      color: 'var(--text-primary)',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      padding: 0,
      width: '100%',
      cursor: disabled ? 'default' : 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 13,
    color: "var(--text-tertiary)",
    style: {
      position: 'absolute',
      right: sm ? 8 : 10,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — an immediate on/off preference. No Save button follows it. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  style
}) {
  const w = size === 'sm' ? 32 : 40;
  const h = size === 'sm' ? 19 : 23;
  const knob = h - 4;
  const track = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: disabled ? undefined : onChange,
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(e);
      }
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flex: '0 0 auto',
      width: w,
      height: h,
      padding: 2,
      background: checked ? 'var(--state-logged)' : 'var(--gray-300)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.22)',
      transform: `translateX(${checked ? w - knob - 4 : 0}px)`,
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return track;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--type-ui)',
      color: 'var(--text-primary)'
    }
  }, track, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TextField — single-line or multiline text entry. */
function TextField({
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 3,
  icon,
  size = 'md',
  invalid = false,
  disabled = false,
  variant = 'boxed',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sm = size === 'sm';
  const bare = variant === 'bare';
  const Tag = multiline ? 'textarea' : 'input';
  const field = /*#__PURE__*/React.createElement(Tag, _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: multiline ? rows : undefined,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      width: '100%',
      minWidth: 0,
      font: multiline ? 'var(--type-body)' : `var(--weight-regular) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / ${multiline ? 'var(--leading-normal)' : '1'} var(--font-ui)`,
      color: 'var(--text-primary)',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      padding: 0,
      resize: multiline ? 'vertical' : undefined
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 8,
      minHeight: multiline ? undefined : sm ? 28 : 34,
      padding: bare ? 0 : `${multiline ? 9 : 0}px ${sm ? 9 : 11}px`,
      background: bare ? 'transparent' : 'var(--surface)',
      border: bare ? 'none' : `1px solid ${invalid ? 'var(--red-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: bare ? 'none' : focus ? invalid ? 'var(--ring-danger)' : 'var(--ring-focus)' : 'none',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-tertiary)",
    style: {
      marginTop: multiline ? 2 : 0
    }
  }), field);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarItem.jsx
try { (() => {
/** SidebarItem — one navigable list in the left rail. */
function SidebarItem({
  label,
  icon,
  iconColor,
  progress,
  count,
  overdue,
  active = false,
  indent = 0,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 28,
      padding: '0 8px 0 ' + (8 + indent * 18) + 'px',
      borderRadius: 'var(--radius-sm)',
      background: active ? 'var(--surface-sunken)' : hover ? 'var(--surface-hover)' : 'transparent',
      cursor: 'default',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, typeof progress === 'number' ? /*#__PURE__*/React.createElement(__ds_scope.ProgressRing, {
    value: progress,
    size: 14
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: iconColor || 'var(--text-tertiary)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      font: 'var(--weight-' + (active ? 'semibold' : 'medium') + ') var(--text-sm) / 1 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  }, label), typeof overdue === 'number' && overdue > 0 && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "danger"
  }, overdue), typeof count === 'number' && count > 0 && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, count));
}
Object.assign(__ds_scope, { SidebarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarSection.jsx
try { (() => {
/** SidebarSection — an area heading grouping projects in the rail. */
function SidebarSection({
  label,
  icon = 'box',
  collapsed,
  onToggle,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 26,
      padding: '0 8px',
      cursor: onToggle ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--weight-semibold) var(--text-sm) / 1 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  }, label), onToggle && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: collapsed ? 'chevron-right' : 'chevron-down',
    size: 13,
    color: "var(--text-tertiary)"
  })), !collapsed && /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { SidebarSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarSection.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toolbar.jsx
try { (() => {
/** Toolbar — a fixed strip of icon actions at the top or bottom of a pane. */
function Toolbar({
  children,
  position = 'top',
  bordered = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      height: 'var(--toolbar-height)',
      padding: '0 10px',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      WebkitBackdropFilter: 'var(--blur-overlay)',
      borderTop: bordered && position === 'bottom' ? '1px solid var(--border-subtle)' : 'none',
      borderBottom: bordered && position === 'top' ? '1px solid var(--border-subtle)' : 'none',
      flex: '0 0 auto',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toolbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ViewHeader.jsx
try { (() => {
/** ViewHeader — the large title at the top of a list. */
function ViewHeader({
  title,
  icon,
  iconColor,
  progress,
  subtitle,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 10px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, typeof progress === 'number' ? /*#__PURE__*/React.createElement(__ds_scope.ProgressRing, {
    value: progress,
    size: 20,
    thickness: 2
  }) : icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: iconColor || 'var(--text-tertiary)'
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      flex: 1,
      font: 'var(--type-title)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, title), actions && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, actions), !actions && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "ellipsis",
    label: "View options"
  })), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { ViewHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ViewHeader.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
/** Dialog — a centred modal for destructive confirmations and short forms. */
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  width = 400,
  onDismiss,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onDismiss,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--scrim)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '92%',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-8) var(--space-8) var(--space-7)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-heading)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      font: 'var(--type-ui)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 'var(--space-8)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Menu.jsx
try { (() => {
/** MenuItem — one command inside a Menu. */
function MenuItem({
  label,
  icon,
  shortcut,
  danger = false,
  checked = false,
  disabled = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const ink = disabled ? 'var(--text-disabled)' : danger ? 'var(--text-danger)' : 'var(--text-primary)';
  const lit = hover && !disabled;
  return /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 28,
      padding: '0 9px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-ui)',
      color: lit ? danger ? '#fff' : 'var(--on-accent)' : ink,
      background: lit ? danger ? 'var(--red-500)' : 'var(--accent)' : 'transparent',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'var(--transition-hover)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap'
    }
  }, label), checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }), shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      opacity: 0.6
    }
  }, shortcut));
}

/** MenuDivider — a hairline between command groups. */
function MenuDivider() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '4px 6px'
    }
  });
}

/** Menu — a list of commands, usually inside a Popover. */
function Menu({
  children,
  width = 220,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      width,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-popover)',
      padding: 'var(--space-2)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { MenuItem, MenuDivider, Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Popover.jsx
try { (() => {
/** Popover — a floating surface anchored to a control. */
function Popover({
  open = true,
  children,
  width = 240,
  placement = 'bottom-start',
  style
}) {
  if (!open) return null;
  const pos = {
    'bottom-start': {
      top: '100%',
      left: 0,
      marginTop: 6
    },
    'bottom-end': {
      top: '100%',
      right: 0,
      marginTop: 6
    },
    'top-start': {
      bottom: '100%',
      left: 0,
      marginBottom: 6
    },
    'top-end': {
      bottom: '100%',
      right: 0,
      marginBottom: 6
    }
  }[placement];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 40,
      width,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-popover)',
      padding: 'var(--space-2)',
      ...pos,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Popover.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
/** Toast — a transient confirmation with an undo affordance. */
function Toast({
  message,
  actionLabel,
  onAction,
  icon = 'circle-check',
  tone = 'neutral',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 14px',
      borderRadius: 'var(--radius-pill)',
      background: tone === 'danger' ? 'var(--red-500)' : 'var(--gray-900)',
      color: 'var(--gray-0)',
      font: 'var(--type-ui-strong)',
      boxShadow: 'var(--shadow-popover)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: 'transparent',
      border: 'none',
      padding: '0 0 0 4px',
      font: 'var(--weight-semibold) var(--text-sm) / 1 var(--font-ui)',
      color: 'var(--blue-300)',
      cursor: 'pointer'
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
/** Tooltip — a dark label that names an unlabelled control. */
function Tooltip({
  label,
  shortcut,
  children,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'top' ? {
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, -6px)'
  } : {
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 70,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gray-900)',
      color: 'var(--gray-0)',
      font: 'var(--type-caption)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-popover)',
      pointerEvents: 'none',
      ...pos,
      ...style
    }
  }, label, shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      opacity: 0.6
    }
  }, shortcut)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/tasks/ChecklistItem.jsx
try { (() => {
/** ChecklistItem — a sub-step inside a to-do's detail card. */
function ChecklistItem({
  label,
  checked = false,
  onToggle,
  last = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '7px 0',
      minHeight: 28,
      borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    shape: "circle",
    size: 14,
    state: checked ? 'done' : 'open',
    onToggle: onToggle,
    style: {
      borderColor: checked ? undefined : 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-ui)',
      fontSize: 'var(--text-base)',
      color: checked ? 'var(--text-done)' : 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: hover ? 1 : 0,
      color: 'var(--text-tertiary)',
      cursor: 'grab',
      display: 'flex',
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "grip-horizontal",
    size: 14
  })));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tasks/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/tasks/DateChip.jsx
try { (() => {
const KINDS = {
  today: {
    icon: 'star',
    ink: 'var(--state-today)',
    fill: true
  },
  evening: {
    icon: 'moon',
    ink: 'var(--blue-400)',
    fill: true
  },
  scheduled: {
    icon: 'calendar-days',
    ink: 'var(--state-scheduled)'
  },
  someday: {
    icon: 'archive',
    ink: 'var(--state-someday)'
  },
  deadline: {
    icon: 'flag',
    ink: 'var(--state-deadline)'
  },
  logged: {
    icon: 'circle-check',
    ink: 'var(--state-logged)'
  },
  repeat: {
    icon: 'repeat',
    ink: 'var(--text-tertiary)'
  }
};

/** DateChip — when a to-do is due, scheduled, or was completed. */
function DateChip({
  kind = 'scheduled',
  children,
  secondary,
  muted = false,
  size = 'md',
  style
}) {
  const k = KINDS[kind] || KINDS.scheduled;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 4 : 6,
      font: `var(--weight-medium) ${sm ? 'var(--text-xs)' : 'var(--text-sm)'} / 1 var(--font-ui)`,
      color: muted ? 'var(--text-tertiary)' : 'var(--text-primary)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: sm ? 12 : 14,
    color: muted ? 'var(--text-tertiary)' : k.ink
  }), children, secondary && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontWeight: 'var(--weight-regular)'
    }
  }, secondary));
}
Object.assign(__ds_scope, { DateChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tasks/DateChip.jsx", error: String((e && e.message) || e) }); }

// components/tasks/QuickEntry.jsx
try { (() => {
/** QuickEntry — the new-to-do composer. Appears in place, never as a modal. */
function QuickEntry({
  value = '',
  notes = '',
  onChange,
  onNotesChange,
  when = 'Today',
  onCommit,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: '14px 16px 10px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    state: "open"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: value,
    onChange: onChange,
    placeholder: "New To-Do",
    onKeyDown: e => {
      if (e.key === 'Enter' && onCommit) onCommit(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--weight-medium) var(--text-md) / 1.3 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    value: notes,
    onChange: onNotesChange,
    placeholder: "Notes",
    style: {
      width: '100%',
      marginTop: 6,
      marginLeft: 26,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      paddingTop: 10,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DateChip, {
    kind: "today"
  }, when), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "tag",
    label: "Tags",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "list-checks",
    label: "Checklist",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "flag",
    label: "Deadline",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { QuickEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tasks/QuickEntry.jsx", error: String((e && e.message) || e) }); }

// components/tasks/TaskDetailCard.jsx
try { (() => {
/** TaskDetailCard — a to-do opened in place, revealing notes, checklist and dates. */
function TaskDetailCard({
  title,
  state = 'open',
  notes,
  checklist = [],
  tags = [],
  when,
  deadline,
  onToggle,
  onClose,
  onToggleItem,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: '14px 16px 8px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    state: state,
    onToggle: onToggle
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--weight-semibold) var(--text-md) / 1.32 var(--font-ui)',
      color: state === 'done' ? 'var(--text-done)' : 'var(--text-primary)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-up",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), notes && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0 26px',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, notes), checklist.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 0 0 26px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, checklist.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.ChecklistItem, {
    key: c.label,
    label: c.label,
    checked: c.checked,
    last: i === checklist.length - 1,
    onToggle: () => onToggleItem && onToggleItem(i)
  }))), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      margin: '12px 0 0 26px'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: typeof t === 'string' ? t : t.label,
    tone: typeof t === 'string' ? 'neutral' : t.tone
  }, typeof t === 'string' ? t : t.label))), (when || deadline) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      margin: '14px 0 0 26px'
    }
  }, when && /*#__PURE__*/React.createElement(__ds_scope.DateChip, {
    kind: when.kind || 'today'
  }, when.label), deadline && /*#__PURE__*/React.createElement(__ds_scope.DateChip, {
    kind: "deadline",
    secondary: deadline.secondary
  }, deadline.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 2,
      marginTop: 14,
      paddingTop: 6,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "calendar-days",
    label: "When",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "tag",
    label: "Tags",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "list-checks",
    label: "Checklist",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "flag",
    label: "Deadline",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "ellipsis",
    label: "More",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { TaskDetailCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tasks/TaskDetailCard.jsx", error: String((e && e.message) || e) }); }

// components/tasks/TaskGroupHeader.jsx
try { (() => {
/** TaskGroupHeader — a blue heading that divides a list into named runs. */
function TaskGroupHeader({
  title,
  count,
  collapsed,
  onToggle,
  actions = true,
  tone = 'accent',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px 5px',
      marginTop: 'var(--space-8)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, onToggle && /*#__PURE__*/React.createElement("span", {
    onClick: onToggle,
    style: {
      display: 'flex',
      cursor: 'pointer',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: collapsed ? 'chevron-right' : 'chevron-down',
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-section)',
      color: tone === 'accent' ? 'var(--text-accent)' : 'var(--text-secondary)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title), typeof count === 'number' && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), actions && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "ellipsis",
    label: "Group actions",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { TaskGroupHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tasks/TaskGroupHeader.jsx", error: String((e && e.message) || e) }); }

// components/tasks/TaskRow.jsx
try { (() => {
/** TaskRow — one line in a list. The workhorse of the entire product. */
function TaskRow({
  title,
  state = 'open',
  shape = 'square',
  progress,
  today = false,
  meta = [],
  tags = [],
  trailing,
  selected = false,
  indent = 0,
  onToggle,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const done = state === 'done' || state === 'canceled';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 'var(--row-height)',
      padding: `3px 10px 3px ${10 + indent * 22}px`,
      borderRadius: 'var(--radius-sm)',
      background: selected ? 'var(--surface-selected)' : hover ? 'var(--surface-hover)' : 'transparent',
      cursor: 'default',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, typeof progress === 'number' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 16,
      justifyContent: 'center'
    },
    onClick: onToggle
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressRing, {
    value: progress,
    size: 14
  })) : /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    state: state,
    shape: shape,
    onToggle: e => {
      e.stopPropagation();
      onToggle && onToggle(e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minWidth: 0,
      flex: 1
    }
  }, today && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 13,
    color: "var(--state-today)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-ui)',
      fontSize: 'var(--text-base)',
      color: done ? 'var(--text-done)' : 'var(--text-primary)',
      textDecoration: state === 'canceled' ? 'line-through' : 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), meta.map(m => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: m,
    name: m,
    size: 13,
    color: "var(--text-tertiary)"
  })), tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: typeof t === 'string' ? t : t.label,
    size: "sm",
    variant: "outline",
    tone: typeof t === 'string' ? 'neutral' : t.tone
  }, typeof t === 'string' ? t : t.label))), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, trailing));
}
Object.assign(__ds_scope, { TaskRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tasks/TaskRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/App.jsx
try { (() => {
const {
  Toolbar,
  IconButton,
  Button,
  TextField,
  Segmented,
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  Toast,
  Icon,
  Tooltip
} = window.TallyDesignSystem_788326;
function filterTasks(tasks, view) {
  const open = t => t.state === 'open' || t.state === 'progress';
  if (view.type === 'project') return tasks.filter(t => t.project === view.id);
  if (view.id === 'today') return tasks.filter(t => t.today);
  if (view.id === 'anytime') return tasks.filter(t => open(t) && (t.project || t.list === 'inbox'));
  if (view.id === 'trash') return [];
  return tasks.filter(t => t.list === view.id);
}
function App() {
  const D = window.TallyData;
  const [tasks, setTasks] = React.useState(D.tasks);
  const [view, setView] = React.useState({
    type: 'list',
    id: 'today'
  });
  const [selected, setSelected] = React.useState(null);
  const [expanded, setExpanded] = React.useState(null);
  const [mode, setMode] = React.useState('inline');
  const [filter, setFilter] = React.useState('All');
  const [composing, setComposing] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  const [toast, setToast] = React.useState(null);
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  React.useEffect(() => {
    setFilter('All');
    setExpanded(null);
  }, [view.id]);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);
  const counts = React.useMemo(() => {
    const open = t => t.state === 'open' || t.state === 'progress';
    return {
      inbox: tasks.filter(t => t.list === 'inbox' && open(t)).length,
      today: tasks.filter(t => t.today && open(t)).length,
      overdue: 1,
      upcoming: 0,
      anytime: 0,
      someday: 0
    };
  }, [tasks]);
  const projectProgress = React.useMemo(() => {
    const out = {};
    D.projects.forEach(p => {
      const own = tasks.filter(t => t.project === p.id);
      const closed = own.filter(t => t.state === 'done' || t.state === 'canceled').length;
      out[p.id] = own.length ? closed / own.length : 0;
    });
    return out;
  }, [tasks]);
  const visible = React.useMemo(() => {
    let list = filterTasks(tasks, view);
    if (query.trim()) list = tasks.filter(t => t.title.toLowerCase().indexOf(query.trim().toLowerCase()) >= 0);
    return list;
  }, [tasks, view, query]);
  const toggle = id => setTasks(prev => prev.map(t => {
    if (t.id !== id) return t;
    const next = t.state === 'done' ? 'open' : 'done';
    if (next === 'done') setToast({
      message: '“' + t.title + '” completed',
      action: 'Undo'
    });
    return {
      ...t,
      state: next
    };
  }));
  const toggleItem = (id, i) => setTasks(prev => prev.map(t => {
    if (t.id !== id || !t.checklist) return t;
    const cl = t.checklist.map((c, ci) => ci === i ? {
      ...c,
      checked: !c.checked
    } : c);
    return {
      ...t,
      checklist: cl
    };
  }));
  const selectedTask = tasks.find(t => t.id === selected) || null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--surface)',
      color: 'var(--text-primary)',
      minWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    onView: v => {
      setView(v);
      setSelected(null);
      setQuery('');
    },
    counts: counts,
    projectProgress: projectProgress,
    onNewList: () => setToast({
      message: 'New list created in Work'
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Toolbar, {
    style: {
      background: 'var(--surface)',
      backdropFilter: 'none',
      borderBottom: 'none',
      height: 38,
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    icon: "search",
    size: "sm",
    placeholder: "Quick Find",
    value: query,
    onChange: e => setQuery(e.target.value),
    style: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: mode,
    onChange: m => {
      setMode(m);
      setExpanded(null);
    },
    options: [{
      value: 'inline',
      label: 'Inline'
    }, {
      value: 'pane',
      label: 'Detail pane'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: theme === 'light' ? 'Dark' : 'Light'
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: theme === 'light' ? 'moon' : 'sun',
    label: "Theme",
    size: "sm",
    onClick: () => setTheme(theme === 'light' ? 'dark' : 'light')
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis",
    label: "View options",
    size: "sm",
    active: menu,
    onClick: () => setMenu(!menu)
  }), /*#__PURE__*/React.createElement(Popover, {
    open: menu,
    width: 218,
    placement: "bottom-end"
  }, /*#__PURE__*/React.createElement(MenuItem, {
    icon: "calendar-days",
    label: "Show scheduled",
    checked: true
  }), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "circle-check",
    label: "Show completed",
    onClick: () => setMenu(false)
  }), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "tags",
    label: "Group by tag",
    onClick: () => setMenu(false)
  }), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "settings",
    label: "Settings\u2026",
    shortcut: "\u2318,",
    onClick: () => setMenu(false)
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "New To-Do",
    shortcut: "N"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "New To-Do",
    size: "sm",
    active: composing,
    onClick: () => setComposing(!composing)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      minWidth: 0,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ListView, {
    view: view,
    tasks: visible,
    selected: selected,
    expanded: expanded,
    mode: mode,
    filter: filter,
    onFilter: setFilter,
    onSelect: setSelected,
    onExpand: setExpanded,
    onToggle: toggle,
    onToggleItem: toggleItem,
    composing: composing,
    onCommitCompose: () => {
      setComposing(false);
      setToast({
        message: 'To-do added to ' + (view.id === 'today' ? 'Today' : 'this list')
      });
    }
  }), mode === 'pane' && /*#__PURE__*/React.createElement(DetailPane, {
    task: selectedTask,
    onClose: () => setMode('inline'),
    onToggle: toggle,
    onToggleItem: toggleItem
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 26,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    message: toast.message,
    actionLabel: toast.action,
    icon: toast.action ? 'circle-check' : 'plus'
  })));
}
Object.assign(window, {
  App
});
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/DetailPane.jsx
try { (() => {
const {
  Checkbox,
  IconButton,
  Tag,
  DateChip,
  ChecklistItem,
  Icon
} = window.TallyDesignSystem_788326;
function Field({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '7px 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-ui)',
      color: 'var(--text-primary)'
    }
  }, children));
}
function DetailPane({
  task,
  onClose,
  onToggle,
  onToggleItem
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--detail-width)',
      flex: '0 1 auto',
      minWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface)',
      borderLeft: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-panel)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height: 38,
      padding: '0 8px 0 14px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, task ? task.title : 'No selection'), /*#__PURE__*/React.createElement(IconButton, {
    icon: "maximize-2",
    label: "Open in window",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close pane",
    size: "sm",
    onClick: onClose
  })), !task ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "panel-left",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: 'var(--type-ui)'
    }
  }, "Select a to-do to see its notes, checklist and dates here."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 22px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    size: 18,
    state: task.state,
    onToggle: () => onToggle(task.id)
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: 1,
      font: 'var(--weight-bold) var(--text-xl) / 1.24 var(--font-ui)',
      letterSpacing: 'var(--tracking-snug)',
      color: task.state === 'done' ? 'var(--text-done)' : 'var(--text-primary)'
    }
  }, task.title)), task.notes ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0 29px',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, task.notes) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0 29px',
      font: 'var(--type-body)',
      color: 'var(--text-tertiary)'
    }
  }, "Notes"), (task.tags || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      margin: '14px 0 0 29px'
    }
  }, task.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: t === 'Important' ? 'green' : 'neutral'
  }, t))), (task.checklist || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0 0 29px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, task.checklist.map((c, i) => /*#__PURE__*/React.createElement(ChecklistItem, {
    key: c.label,
    label: c.label,
    checked: c.checked,
    last: i === task.checklist.length - 1,
    onToggle: () => onToggleItem(task.id, i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px 0 0 29px',
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, task.today && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 0'
    }
  }, /*#__PURE__*/React.createElement(DateChip, {
    kind: "today"
  }, "Today")), task.deadline && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 0'
    }
  }, /*#__PURE__*/React.createElement(DateChip, {
    kind: "deadline",
    secondary: task.deadline.secondary
  }, task.deadline.label)), !task.today && !task.deadline && /*#__PURE__*/React.createElement(Field, {
    icon: "calendar-days"
  }, "Anytime"), task.project && /*#__PURE__*/React.createElement(Field, {
    icon: "box"
  }, (window.TallyData.projects.find(p => p.id === task.project) || {}).label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 2,
      height: 42,
      padding: '0 12px',
      flex: '0 0 auto',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "calendar-days",
    label: "When",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "tag",
    label: "Tags",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "list-checks",
    label: "Checklist",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "flag",
    label: "Deadline",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "trash-2",
    label: "Delete",
    tone: "danger",
    size: "sm"
  })));
}
Object.assign(window, {
  DetailPane
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/DetailPane.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/ListView.jsx
try { (() => {
const {
  TaskRow,
  TaskGroupHeader,
  TaskDetailCard,
  QuickEntry,
  DateChip,
  ViewHeader,
  Segmented,
  IconButton,
  Icon
} = window.TallyDesignSystem_788326;
const LIST_META = {
  inbox: {
    title: 'Inbox',
    icon: 'inbox',
    color: 'var(--blue-400)'
  },
  today: {
    title: 'Today',
    icon: 'star',
    color: 'var(--state-today)'
  },
  upcoming: {
    title: 'Upcoming',
    icon: 'calendar-days',
    color: 'var(--state-deadline)'
  },
  anytime: {
    title: 'Anytime',
    icon: 'layers',
    color: 'var(--state-scheduled)'
  },
  someday: {
    title: 'Someday',
    icon: 'archive',
    color: 'var(--state-someday)'
  },
  logbook: {
    title: 'Logbook',
    icon: 'circle-check',
    color: 'var(--state-logged)'
  },
  trash: {
    title: 'Trash',
    icon: 'trash-2',
    color: 'var(--text-tertiary)'
  }
};
function trailingFor(t) {
  if (t.deadline) return /*#__PURE__*/React.createElement(DateChip, {
    kind: "deadline",
    size: "sm",
    muted: true
  }, t.deadline.secondary || t.deadline.label);
  if (t.project && !t.group) {
    const p = window.TallyData.projects.find(x => x.id === t.project);
    return p ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-tertiary)'
      }
    }, p.label) : null;
  }
  return null;
}
function EmptyState({
  icon,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 10px',
      textAlign: 'center',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: 'var(--type-ui-strong)',
      color: 'var(--text-secondary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-ui)'
    }
  }, body));
}
function ListView({
  view,
  tasks,
  selected,
  expanded,
  mode,
  filter,
  onFilter,
  onSelect,
  onExpand,
  onToggle,
  onToggleItem,
  composing,
  onCommitCompose
}) {
  const D = window.TallyData;
  const isProject = view.type === 'project';
  const project = isProject ? D.projects.find(p => p.id === view.id) : null;
  const meta = LIST_META[view.id] || {};
  const done = tasks.filter(t => t.state === 'done' || t.state === 'canceled').length;
  const progress = tasks.length ? done / tasks.length : 0;
  const tags = isProject ? ['All'].concat(Array.from(new Set(tasks.flatMap(t => t.tags || [])))) : null;
  const shown = filter && filter !== 'All' ? tasks.filter(t => (t.tags || []).indexOf(filter) >= 0) : tasks;
  const groupKey = isProject ? 'group' : view.id === 'upcoming' || view.id === 'logbook' ? 'when' : null;
  const groups = [];
  shown.forEach(t => {
    const k = groupKey ? t[groupKey] || '' : '';
    const g = groups.find(x => x.key === k);
    if (g) g.items.push(t);else groups.push({
      key: k,
      items: [t]
    });
  });
  const renderRow = t => {
    if (expanded === t.id && mode === 'inline') {
      return /*#__PURE__*/React.createElement("div", {
        key: t.id,
        style: {
          margin: '8px 0'
        }
      }, /*#__PURE__*/React.createElement(TaskDetailCard, {
        title: t.title,
        state: t.state,
        notes: t.notes,
        checklist: t.checklist || [],
        tags: t.tags || [],
        when: t.today ? {
          kind: 'today',
          label: 'Today'
        } : undefined,
        deadline: t.deadline,
        onToggle: () => onToggle(t.id),
        onToggleItem: i => onToggleItem(t.id, i),
        onClose: () => onExpand(null)
      }));
    }
    return /*#__PURE__*/React.createElement(TaskRow, {
      key: t.id,
      title: t.title,
      state: t.state,
      today: view.id !== 'today' && t.today,
      meta: t.meta || [],
      tags: (t.tags || []).map(l => ({
        label: l
      })),
      trailing: trailingFor(t),
      selected: selected === t.id,
      onToggle: () => onToggle(t.id),
      onClick: () => {
        onSelect(t.id);
        if (mode === 'inline') onExpand(expanded === t.id ? null : t.id);
      }
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      overflowY: 'auto',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '34px var(--content-gutter) 120px'
    }
  }, isProject ? /*#__PURE__*/React.createElement(ViewHeader, {
    progress: progress,
    title: project.label,
    subtitle: project.note
  }) : /*#__PURE__*/React.createElement(ViewHeader, {
    icon: meta.icon,
    iconColor: meta.color,
    title: meta.title
  }), tags && tags.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0 0 8px'
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: tags,
    value: filter || 'All',
    onChange: onFilter
  })), composing && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(QuickEntry, {
    when: view.id === 'today' ? 'Today' : 'Anytime',
    onCommit: onCommitCompose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: composing ? 8 : 20
    }
  }, groups.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: meta.icon || 'circle-check',
    title: 'Nothing in ' + (project ? project.label : meta.title),
    body: "Press N to add the first to-do."
  }), groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.key || gi
  }, g.key && /*#__PURE__*/React.createElement(TaskGroupHeader, {
    title: g.key,
    tone: isProject ? 'accent' : 'quiet',
    style: gi === 0 ? {
      marginTop: 0
    } : undefined
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: g.key ? 4 : 0
    }
  }, g.items.map(renderRow)))))));
}
Object.assign(window, {
  ListView,
  LIST_META
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/ListView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Sidebar.jsx
try { (() => {
const {
  SidebarItem,
  SidebarSection,
  Toolbar,
  Button,
  IconButton
} = window.TallyDesignSystem_788326;
const BUILT_IN = [{
  id: 'inbox',
  label: 'Inbox',
  icon: 'inbox',
  color: 'var(--blue-400)'
}, {
  id: 'today',
  label: 'Today',
  icon: 'star',
  color: 'var(--state-today)'
}, {
  id: 'upcoming',
  label: 'Upcoming',
  icon: 'calendar-days',
  color: 'var(--state-deadline)'
}, {
  id: 'anytime',
  label: 'Anytime',
  icon: 'layers',
  color: 'var(--state-scheduled)'
}, {
  id: 'someday',
  label: 'Someday',
  icon: 'archive',
  color: 'var(--state-someday)'
}];
const ARCHIVE = [{
  id: 'logbook',
  label: 'Logbook',
  icon: 'circle-check',
  color: 'var(--state-logged)'
}, {
  id: 'trash',
  label: 'Trash',
  icon: 'trash-2',
  color: 'var(--text-tertiary)'
}];
function Sidebar({
  view,
  onView,
  counts,
  projectProgress,
  onNewList
}) {
  const D = window.TallyData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--sidebar-width)',
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--canvas)',
      borderRight: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 38,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 8px 12px'
    }
  }, BUILT_IN.map(b => /*#__PURE__*/React.createElement(SidebarItem, {
    key: b.id,
    icon: b.icon,
    iconColor: b.color,
    label: b.label,
    count: counts[b.id] || 0,
    overdue: b.id === 'today' ? counts.overdue : 0,
    active: view.id === b.id,
    onClick: () => onView({
      type: 'list',
      id: b.id
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), ARCHIVE.map(b => /*#__PURE__*/React.createElement(SidebarItem, {
    key: b.id,
    icon: b.icon,
    iconColor: b.color,
    label: b.label,
    active: view.id === b.id,
    onClick: () => onView({
      type: 'list',
      id: b.id
    })
  })), D.areas.map(area => /*#__PURE__*/React.createElement(SidebarSection, {
    key: area.id,
    label: area.label,
    icon: area.icon
  }, D.projects.filter(p => p.area === area.id).map(p => /*#__PURE__*/React.createElement(SidebarItem, {
    key: p.id,
    progress: projectProgress[p.id] || 0,
    label: p.label,
    indent: 1,
    active: view.id === p.id,
    onClick: () => onView({
      type: 'project',
      id: p.id
    })
  }))))), /*#__PURE__*/React.createElement(Toolbar, {
    position: "bottom",
    style: {
      background: 'transparent',
      backdropFilter: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "plus",
    onClick: onNewList
  }, "New List"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "sliders-horizontal",
    label: "View settings",
    size: "sm"
  })));
}
Object.assign(window, {
  Sidebar,
  BUILT_IN
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/data.js
try { (() => {
// Sample content for the Tally web app UI kit. Original, illustrative data.
window.TallyData = {
  areas: [{
    id: 'work',
    label: 'Work',
    icon: 'briefcase'
  }, {
    id: 'home',
    label: 'Home',
    icon: 'home'
  }],
  projects: [{
    id: 'brand',
    area: 'work',
    label: 'Q3 Brand Refresh',
    note: 'Land the new identity before the September announcement. Keep decisions reversible until the print run.'
  }, {
    id: 'hire',
    area: 'work',
    label: 'Hire a Researcher'
  }, {
    id: 'kitchen',
    area: 'home',
    label: 'Kitchen Renovation'
  }],
  tasks: [{
    id: 1,
    list: 'inbox',
    title: 'Ask Priya about the vendor contract',
    state: 'open'
  }, {
    id: 2,
    list: 'inbox',
    title: 'Read the accessibility audit',
    state: 'open',
    meta: ['file-text']
  }, {
    id: 10,
    project: 'brand',
    list: 'today',
    group: 'Identity',
    title: 'Sign off the wordmark spacing',
    state: 'progress',
    today: true,
    meta: ['file-text'],
    tags: ['Important'],
    notes: 'Three optical fixes left. The lowercase l still reads a hair tight against the y.',
    checklist: [{
      label: 'Tighten l–y pair',
      checked: true
    }, {
      label: 'Re-kern at 12px',
      checked: false
    }, {
      label: 'Export test sheet',
      checked: false
    }],
    deadline: {
      label: 'Fri, 14 Aug',
      secondary: '6 days left'
    }
  }, {
    id: 11,
    project: 'brand',
    list: 'today',
    group: 'Identity',
    title: 'Collect stationery quotes',
    state: 'open',
    today: true,
    tags: ['Waiting On']
  }, {
    id: 12,
    project: 'brand',
    list: 'today',
    group: 'Rollout',
    title: 'Draft the announcement post',
    state: 'open',
    today: true,
    meta: ['list-checks'],
    notes: 'Short. Two paragraphs and the new mark.',
    checklist: [{
      label: 'Opening line'
    }, {
      label: 'Credit the studio'
    }]
  }, {
    id: 13,
    project: 'kitchen',
    list: 'today',
    title: 'Measure the alcove again',
    state: 'open',
    today: true
  }, {
    id: 14,
    list: 'today',
    title: 'Renew the domain',
    state: 'done',
    today: true
  }, {
    id: 20,
    project: 'brand',
    group: 'Identity',
    title: 'Pick two accent colours',
    state: 'open',
    tags: ['Errand']
  }, {
    id: 21,
    project: 'brand',
    group: 'Identity',
    title: 'Review the icon grid',
    state: 'open',
    meta: ['file-text']
  }, {
    id: 22,
    project: 'brand',
    group: 'Rollout',
    title: 'Update the deck template',
    state: 'open',
    deadline: {
      label: 'Tue, 2 Sep',
      secondary: '3 weeks'
    }
  }, {
    id: 23,
    project: 'brand',
    group: 'Rollout',
    title: 'Brief the print vendor',
    state: 'open',
    tags: ['Waiting On']
  }, {
    id: 24,
    project: 'brand',
    group: 'Rollout',
    title: 'Archive the old asset library',
    state: 'canceled'
  }, {
    id: 25,
    project: 'hire',
    title: 'Write the role description',
    state: 'done'
  }, {
    id: 26,
    project: 'hire',
    title: 'Post to three boards',
    state: 'open'
  }, {
    id: 27,
    project: 'hire',
    title: 'Schedule first-round calls',
    state: 'open',
    tags: ['Important']
  }, {
    id: 28,
    project: 'kitchen',
    title: 'Order the tile samples',
    state: 'open'
  }, {
    id: 29,
    project: 'kitchen',
    title: 'Book the electrician',
    state: 'open',
    deadline: {
      label: 'Mon, 11 Aug',
      secondary: '3 days left'
    }
  }, {
    id: 40,
    list: 'upcoming',
    when: 'Tomorrow',
    title: 'Studio all-hands',
    state: 'open'
  }, {
    id: 41,
    list: 'upcoming',
    when: 'Tomorrow',
    title: 'Send the invoice',
    state: 'open'
  }, {
    id: 42,
    list: 'upcoming',
    when: 'Monday 11 August',
    title: 'Book the electrician',
    state: 'open',
    project: 'kitchen'
  }, {
    id: 43,
    list: 'upcoming',
    when: 'Monday 11 August',
    title: 'Quarterly numbers with Olu',
    state: 'open'
  }, {
    id: 44,
    list: 'upcoming',
    when: 'Friday 14 August',
    title: 'Wordmark sign-off due',
    state: 'open',
    project: 'brand'
  }, {
    id: 50,
    list: 'someday',
    title: 'Learn to develop film at home',
    state: 'open'
  }, {
    id: 51,
    list: 'someday',
    title: 'Rebuild the studio bookshelf',
    state: 'open'
  }, {
    id: 60,
    list: 'logbook',
    when: 'Yesterday',
    title: 'Send the contract to Priya',
    state: 'done'
  }, {
    id: 61,
    list: 'logbook',
    when: 'Yesterday',
    title: 'Approve the photography budget',
    state: 'done'
  }, {
    id: 62,
    list: 'logbook',
    when: 'Wednesday 6 August',
    title: 'Cancel the old hosting plan',
    state: 'canceled'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FloatingAdd = __ds_scope.FloatingAdd;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.SidebarItem = __ds_scope.SidebarItem;

__ds_ns.SidebarSection = __ds_scope.SidebarSection;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.ViewHeader = __ds_scope.ViewHeader;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.MenuDivider = __ds_scope.MenuDivider;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.DateChip = __ds_scope.DateChip;

__ds_ns.QuickEntry = __ds_scope.QuickEntry;

__ds_ns.TaskDetailCard = __ds_scope.TaskDetailCard;

__ds_ns.TaskGroupHeader = __ds_scope.TaskGroupHeader;

__ds_ns.TaskRow = __ds_scope.TaskRow;

})();
