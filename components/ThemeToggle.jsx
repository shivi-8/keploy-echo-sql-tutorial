'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  useEffect(() => setTheme(document.documentElement.dataset.theme || 'light'), []);
  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
    setTheme(next);
  };
  return (
    <button className="toggle" onClick={flip} role="switch" aria-checked={theme === 'dark'} aria-label="Dark mode">
      <span className="knob" data-on={theme === 'dark'}>{theme === 'dark' ? '☾' : '☀'}</span>
    </button>
  );
}
