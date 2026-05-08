const steps = [
  {
    step: '01',
    total: '03',
    title: 'Listening before drawing.',
    body: 'Twelve interviews with backend engineers across three companies. The pattern: fewer tabs, not a new IDE.',
    callout: '"I just want my queries to remember me." — #07',
  },
  {
    step: '02',
    total: '03',
    title: 'Finding the spine.',
    body: 'Thirty-plus prototypes thrown away to land on a command-bar-first model. The interface became one generous surface.',
    callout: null,
  },
  {
    step: '03',
    total: '03',
    title: 'Engineering the calm.',
    body: 'A query orchestrator that hides retries, surfaces errors as suggestions, routes NL through schema-aware RAG.',
    callout: null,
  },
]

export default function ProcessGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      background: 'var(--line)',
      border: '1px solid var(--line)',
    }}>
      {steps.map((s) => (
        <div
          key={s.step}
          style={{
            background: 'var(--bg)',
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
          }}>
            <span>// step {s.step}</span>
            <span style={{ color: 'var(--accent)' }}>{s.step} / {s.total}</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 32,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
          }}>
            {s.title}
          </h3>
          <p style={{ fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{s.body}</p>
          {s.callout && (
            <div style={{
              borderLeft: '2px solid var(--accent)',
              paddingLeft: 12,
              fontSize: 12,
              color: 'var(--ink)',
            }}>
              {s.callout}
            </div>
          )}
          <div style={{
            height: 140,
            background: 'var(--bg-soft)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            color: 'var(--ink-mute)',
            letterSpacing: '0.1em',
          }}>
            [ visual ]
          </div>
        </div>
      ))}
    </div>
  )
}
