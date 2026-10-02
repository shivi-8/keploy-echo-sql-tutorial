const ICONS = { info: 'i', tip: '✓', warn: '!', lesson: '★' };
export default function Callout({ type = 'info', title, children }) {
  return (
    <aside className={`callout ${type}`}>
      <span className="callout-icon" aria-hidden>{ICONS[type]}</span>
      <div>
        {title && <strong>{title}</strong>}
        {children}
      </div>
    </aside>
  );
}
