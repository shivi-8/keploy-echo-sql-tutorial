'use client';
import { useRef, useState } from 'react';

export default function CodeBlock({ children, ...props }) {
  const ref = useRef(null);
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ref.current?.textContent || '');
      setDone(true);
      setTimeout(() => setDone(false), 1500);
    } catch {}
  };
  return (
    <div className="code">
      <button className="copy" onClick={copy}>{done ? 'Copied' : 'Copy'}</button>
      <pre ref={ref} {...props}>{children}</pre>
    </div>
  );
}
