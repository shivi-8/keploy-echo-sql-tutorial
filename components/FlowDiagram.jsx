'use client';
import { useEffect, useState } from 'react';

const FLOWS = {
  record: {
    nodes: ['curl', 'Keploy', 'Echo app', 'PostgreSQL'],
    steps: [
      { on: [0], text: 'You send a real request: POST /url with a long URL.' },
      { on: [0, 1], text: 'Keploy sits in front of the app and captures the request.' },
      { on: [1, 2], text: 'The Echo app receives it and generates a short ID.' },
      { on: [2, 3], text: 'The app talks to PostgreSQL. Keploy records that exchange as a mock.' },
      { on: [1, 2], text: 'The response comes back. Keploy saves request + response as test-1.yaml.' },
    ],
  },
  replay: {
    nodes: ['test-1.yaml', 'Echo app', 'mocks.yaml', 'Compare'],
    steps: [
      { on: [0, 1], text: 'Keploy reads test-1.yaml and replays the saved request against the app.' },
      { on: [1, 2], text: 'The app queries Postgres. Keploy answers from the recorded mock.' },
      { on: [1, 3], text: 'The app responds. Keploy compares it with the expected response.' },
      { on: [3], text: 'Noise (ts, Date header) is ignored. Status, URL and body shape must match.' },
      { on: [0, 1, 2, 3], text: 'Result: 1 passed, 0 failed. Keploy reports verified_green.' },
    ],
  },
};

export default function FlowDiagram() {
  const [mode, setMode] = useState('record');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const flow = FLOWS[mode];

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setStep((s) => {
        if (s >= flow.steps.length - 1) { setPlaying(false); return s; }
        return s + 1;
      });
    }, 1800);
    return () => clearInterval(id);
  }, [playing, flow]);

  const pick = (m) => { setMode(m); setStep(0); setPlaying(false); };
  const play = () => { if (step >= flow.steps.length - 1) setStep(0); setPlaying(true); };
  const cur = flow.steps[step];

  return (
    <figure className="flow">
      <div className="flow-tabs" role="tablist">
        {['record', 'replay'].map((m) => (
          <button key={m} role="tab" aria-selected={mode === m} onClick={() => pick(m)}>
            keploy {m}
          </button>
        ))}
      </div>
      <div className="flow-row">
        {flow.nodes.map((n, i) => (
          <div key={n} className="flow-cell">
            <div className={`node ${cur.on.includes(i) ? 'active' : ''}`}>{n}</div>
            {i < flow.nodes.length - 1 && (
              <div className={`edge ${cur.on.includes(i) && cur.on.includes(i + 1) ? 'active' : ''}`} />
            )}
          </div>
        ))}
      </div>
      <p className="flow-caption" aria-live="polite"><b>Step {step + 1}/{flow.steps.length}.</b> {cur.text}</p>
      <div className="flow-controls">
        <button onClick={() => { setPlaying(false); setStep(Math.max(0, step - 1)); }} disabled={step === 0}>Back</button>
        <button className="primary" onClick={playing ? () => setPlaying(false) : play}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={() => { setPlaying(false); setStep(Math.min(flow.steps.length - 1, step + 1)); }} disabled={step === flow.steps.length - 1}>Next</button>
      </div>
    </figure>
  );
}
