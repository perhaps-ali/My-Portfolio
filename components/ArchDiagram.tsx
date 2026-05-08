export default function ArchDiagram() {
  const nodes = [
    { id: 'browser',  label: 'Browser',  sub: 'react · cache',    top: 60,  left: 60,  accent: false },
    { id: 'edge',     label: 'Edge',     sub: 'auth · rate-limit', top: 60,  left: 280, accent: true  },
    { id: 'api',      label: 'API',      sub: 'tRPC handlers',     top: 200, left: 280, accent: false },
    { id: 'worker',   label: 'Worker',   sub: 'query exec',        top: 200, left: 540, accent: false },
    { id: 'postgres', label: 'Postgres', sub: 'primary',           top: 200, left: 800, accent: false },
    { id: 'rag',      label: 'RAG',      sub: 'schema embeddings', top: 360, left: 540, accent: true  },
    { id: 'openai',   label: 'OpenAI',   sub: 'nl → sql',          top: 360, left: 800, accent: false },
  ]

  return (
    <div className="grid-bg h-145 border border-line-strong relative p-10 overflow-hidden bg-bg-soft">
      {/* Axis labels */}
      <span className="absolute top-[14px] left-[14px] text-10 uppercase tracking-01 text-ink-mute">
        fig.02 — system topology
      </span>
      <span className="absolute top-[14px] right-[14px] text-10 uppercase tracking-01 text-accent">
        v1 · production
      </span>
      <span
        className="absolute text-10 uppercase tracking-01 text-ink-mute"
        style={{ top: '50%', left: 10, transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center' }}
      >
        latency →
      </span>
      <span
        className="absolute bottom-[14px] text-10 uppercase tracking-01 text-ink-mute"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        request lifecycle →
      </span>

      {/* SVG connectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
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

      {/* Nodes — must stay absolute-positioned; positions are dynamic pixel values */}
      {nodes.map((n) => (
        <div
          key={n.id}
          className={`absolute px-4 py-3 text-11 ${n.accent ? 'border-accent text-accent' : 'border-line-strong text-ink'}`}
          style={{
            top: n.top,
            left: n.left,
            border: `1px solid ${n.accent ? 'var(--accent)' : 'var(--line-strong)'}`,
            background: 'rgba(0,0,0,0.55)',
          }}
        >
          {n.label}
          <br />
          <small className="text-[9px] uppercase tracking-01 text-ink-mute mt-1 block">
            {n.sub}
          </small>
        </div>
      ))}
    </div>
  )
}
