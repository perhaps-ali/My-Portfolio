const NODE_W = 120
const NODE_H = 56

interface TopoNode {
  id: string
  label: string
  sub: string
  top: number
  left: number
  accent?: boolean
}

interface TopoEdge {
  from: string
  to: string
}

interface Props {
  nodes: TopoNode[]
  edges: TopoEdge[]
  figLabel: string
  version: string
  height?: number
  axisX?: string
  axisY?: string
}

export default function TopologyDiagram({
  nodes, edges, figLabel, version,
  height = 380,
  axisX = 'request lifecycle →',
  axisY = 'complexity →',
}: Props) {
  const map = Object.fromEntries(nodes.map(n => [n.id, n]))

  const paths = edges.flatMap(({ from, to }) => {
    const a = map[from], b = map[to]
    if (!a || !b) return []
    if (b.left >= a.left + NODE_W) {
      return [`M${a.left + NODE_W},${a.top + NODE_H / 2} L${b.left},${b.top + NODE_H / 2}`]
    }
    return [`M${a.left + NODE_W / 2},${a.top + NODE_H} L${b.left + NODE_W / 2},${b.top}`]
  })

  return (
    <div
      className="grid-bg border border-line-strong relative overflow-hidden bg-bg-soft"
      style={{ height }}
    >
      <span className="absolute top-[14px] left-[14px] text-10 uppercase tracking-01 text-ink-mute">
        {figLabel}
      </span>
      <span className="absolute top-[14px] right-[14px] text-10 uppercase tracking-01 text-accent">
        {version}
      </span>
      <span
        className="absolute text-10 uppercase tracking-01 text-ink-mute"
        style={{ top: '50%', left: 10, transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center' }}
      >
        {axisY}
      </span>
      <span
        className="absolute bottom-[14px] text-10 uppercase tracking-01 text-ink-mute"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        {axisX}
      </span>

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker id="topo-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeDasharray="3 4"
            fill="none"
            markerEnd="url(#topo-arrow)"
          />
        ))}
      </svg>

      {nodes.map(n => (
        <div
          key={n.id}
          className={`absolute px-4 py-3 text-11 ${n.accent ? 'text-accent' : 'text-ink'}`}
          style={{
            top: n.top,
            left: n.left,
            width: NODE_W,
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
