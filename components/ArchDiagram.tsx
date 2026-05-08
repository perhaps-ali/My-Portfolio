export default function ArchDiagram() {
  const nodes = [
    { id: 'browser',  label: 'Browser',  sub: 'react · cache',      top: 60,  left: 60,  accent: false },
    { id: 'edge',     label: 'Edge',     sub: 'auth · rate-limit',   top: 60,  left: 280, accent: true  },
    { id: 'api',      label: 'API',      sub: 'tRPC handlers',       top: 200, left: 280, accent: false },
    { id: 'worker',   label: 'Worker',   sub: 'query exec',          top: 200, left: 540, accent: false },
    { id: 'postgres', label: 'Postgres', sub: 'primary',             top: 200, left: 800, accent: false },
    { id: 'rag',      label: 'RAG',      sub: 'schema embeddings',   top: 360, left: 540, accent: true  },
    { id: 'openai',   label: 'OpenAI',   sub: 'nl → sql',            top: 360, left: 800, accent: false },
  ]

  return (
    <div
      className="grid-bg"
      style={{
        height: 580,
        border: '1px solid var(--line-strong)',
        position: 'relative',
        padding: 40,
        backgroundColor: 'var(--bg-soft)',
        overflow: 'hidden',
      }}
    >
      {/* Axis labels */}
      <span style={{ position: 'absolute', top: 14, left: 14, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-mute)' }}>
        fig.02 — system topology
      </span>
      <span style={{ position: 'absolute', top: 14, right: 14, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>
        v1 · production
      </span>
      <span style={{
        position: 'absolute', top: '50%', left: 10,
        transform: 'translateY(-50%) rotate(-90deg)',
        fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-mute)',
        transformOrigin: 'center',
      }}>
        latency →
      </span>
      <span style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-mute)' }}>
        request lifecycle →
      </span>

      {/* SVG connectors */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>
        {[
          'M180,90 L280,90',
          'M380,122 L380,200',
          'M460,228 L540,228',
          'M660,228 L800,228',
          'M620,260 L620,360',
          'M680,388 L800,388',
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeDasharray="3 4"
            fill="none"
            markerEnd="url(#arrow)"
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((n) => (
        <div
          key={n.id}
          style={{
            position: 'absolute',
            top: n.top,
            left: n.left,
            padding: '12px 16px',
            border: `1px solid ${n.accent ? 'var(--accent)' : 'var(--line-strong)'}`,
            background: 'rgba(0,0,0,0.55)',
            fontSize: 11,
            color: n.accent ? 'var(--accent)' : 'var(--ink)',
          }}
        >
          {n.label}
          <br />
          <small style={{
            fontSize: 9,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--ink-mute)',
            marginTop: 4,
            display: 'block',
          }}>
            {n.sub}
          </small>
        </div>
      ))}
    </div>
  )
}
