import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import ThemeToggle from '@/components/ThemeToggle';
import './globals.css';

const sans = Bricolage_Grotesque({ subsets: ['latin'], variable: '--sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--mono' });

export const metadata = {
  title: 'Record and replay Go API tests with Keploy (Echo + PostgreSQL)',
  description: 'A beginner tutorial: record real API calls and PostgreSQL traffic, then replay them as tests with Keploy.',
};

const sections = [
  ['why-keploy', 'Why Keploy'], ['my-setup', 'My setup'], ['run-the-app', 'Run the app'], ['record', 'Record'],
  ['what-was-recorded', 'What was recorded'], ['replay', 'Replay'], ['how-it-compares', 'How it compares'],
  ['regression-lesson', 'Regression lesson'], ['issues-and-fixes', 'Issues and fixes'], ['recap', 'Recap'],
];

const themeScript = `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <header className="top">
          <span className="brand">Keploy + Go quickstart</span>
          <ThemeToggle />
        </header>
        <div className="shell">
          <nav className="toc" aria-label="On this page">
            {sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <main className="doc">{children}</main>
        </div>
        <footer className="foot">Written from a real run on Windows 10 + WSL2 (Ubuntu 22.04).</footer>
      </body>
    </html>
  );
}
