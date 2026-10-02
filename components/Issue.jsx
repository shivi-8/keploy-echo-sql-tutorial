export default function Issue({ title, fix, children }) {
  return (
    <details className="issue">
      <summary>{title}</summary>
      <div className="issue-body">
        {children}
        <p className="fix"><strong>Fix:</strong> {fix}</p>
      </div>
    </details>
  );
}
