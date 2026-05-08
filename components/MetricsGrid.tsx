const metrics = [
  { num: '−74', unit: '%', label: 'Time to first query',       desc: 'From signup to first executed statement.' },
  { num: '3.2', unit: '×', label: 'Daily active engineers',    desc: 'QoQ post-launch.' },
  { num: '99.9', unit: '',  label: 'Uptime, %',                desc: 'Edge + workers, full year.' },
  { num: '<80', unit: 'ms', label: 'P95 latency',              desc: 'Query roundtrip, US-East.' },
]

export default function MetricsGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 1,
      background: 'var(--line)',
      border: '1px solid var(--line)',
    }}>
      {metrics.map((m) => (
        <div key={m.label} style={{ background: 'var(--bg)', padding: 32 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 64,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: 'var(--ink)',
          }}>
            {m.num}<em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{m.unit}</em>
          </div>
          <div style={{
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--ink-mute)',
            marginTop: 10,
          }}>
            {m.label}
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink)', marginTop: 8 }}>
            {m.desc}
          </div>
        </div>
      ))}
    </div>
  )
}
