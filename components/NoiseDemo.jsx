'use client';
import { useState } from 'react';

const rows = [
  { key: 'status', exp: '200', act: '200', noisy: false },
  { key: 'body.url', exp: 'http://localhost:8082/Lhr4BWAi', act: 'http://localhost:8082/Lhr4BWAi', noisy: false },
  { key: 'body.ts', exp: '1716546241744809281', act: '1790965823695936000', noisy: true },
  { key: 'header.Date', exp: 'old date', act: 'new date', noisy: true },
];

export default function NoiseDemo() {
  const [ignore, setIgnore] = useState(false);
  const fails = rows.filter((r) => r.exp !== r.act && !(ignore && r.noisy)).length;
  return (
    <figure className="noise">
      <label className="switch">
        <input type="checkbox" checked={ignore} onChange={(e) => setIgnore(e.target.checked)} />
        <span>Ignore noisy fields (what Keploy does)</span>
      </label>
      <div className="noise-scroll">
        <table>
          <thead><tr><th>Field</th><th>Recorded</th><th>Replayed</th><th>Result</th></tr></thead>
          <tbody>
            {rows.map((r) => {
              const same = r.exp === r.act;
              const skipped = ignore && r.noisy;
              return (
                <tr key={r.key}>
                  <td><code>{r.key}</code></td>
                  <td><code>{r.exp}</code></td>
                  <td><code>{r.act}</code></td>
                  <td className={same || skipped ? 'ok' : 'bad'}>{same ? 'match' : skipped ? 'ignored' : 'differs'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className={`verdict ${fails ? 'bad' : 'ok'}`}>
        {fails ? `${fails} fields differ: the test would fail on harmless values.` : 'All meaningful fields match: test passes.'}
      </p>
    </figure>
  );
}
