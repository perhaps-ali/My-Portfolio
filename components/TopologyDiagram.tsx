'use client'

import { useState } from 'react'

const NODE_W = 130
const NODE_H = 60

interface TopoNode {
  id: string
  label: string
  sub: string
  top: number
  left: number
  accent?: boolean
  desc?: string
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
  stack?: string[]
  stats?: { label: string; value: string }[]
}

export default function TopologyDiagram({
  nodes, edges, figLabel, version,
  height = 380,
  axisX = 'request lifecycle →',
  axisY = 'complexity →',
  stack = [],
  stats = [],
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null)
  const map = Object.fromEntries(nodes.map(n => [n.id, n]))

  type PathEntry = { d: string; id: string; isActive: boolean }
  const paths: PathEntry[] = edges.flatMap(({ from, to }) => {
    const a = map[from], b = map[to]
    if (!a || !b) return []
    const isActive = hovered === from || hovered === to
    if (b.left >= a.left + NODE_W) {
      return [{ d: `M${a.left + NODE_W},${a.top + NODE_H / 2} L${b.left},${b.top + NODE_H / 2}`, id: `${from}-${to}`, isActive }]
    }
    return [{ d: `M${a.left + NODE_W / 2},${a.top + NODE_H} L${b.left + NODE_W / 2},${b.top}`, id: `${from}-${to}`, isActive }]
  })

  const hoveredNode = hovered ? map[hovered] : null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] border border-line-strong bg-bg-soft">

      {/* ── Diagram canvas ── */}
      <div className="relative grid-bg overflow-hidden" style={{ height }}>
        <span className="absolute top-[14px] left-[14px] text-10 uppercase tracking-01 text-ink-mute z-10">
          {figLabel}
        </span>
        <span className="absolute top-[14px] right-[14px] text-10 uppercase tracking-01 text-accent z-10">
          {version}
        </span>
        <span
          className="absolute text-10 uppercase tracking-01 text-ink-mute z-10"
          style={{ top: '50%', left: 10, transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center' }}
        >
          {axisY}
        </span>
        <span
          className="absolute bottom-[14px] text-10 uppercase tracking-01 text-ink-mute z-10"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          {axisX}
        </span>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="topo-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(245,158,11,0.7)" />
            </marker>
            <marker id="topo-arrow-dim" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.25)" />
            </marker>
          </defs>

          {paths.map(({ d, id, isActive }) => (
            <path
              key={id}
              d={d}
              stroke={isActive ? 'rgba(245,158,11,0.8)' : 'rgba(255,255,255,0.22)'}
              strokeWidth={isActive ? 1.5 : 1}
              strokeDasharray="5 5"
              fill="none"
              markerEnd={isActive ? 'url(#topo-arrow)' : 'url(#topo-arrow-dim)'}
              style={{
                strokeDashoffset: 0,
                animation: 'dash-flow 1.4s linear infinite',
              }}
            />
          ))}
        </svg>

        {nodes.map(n => {
          const isHov = hovered === n.id
          const isDim = hovered !== null && !isHov
          return (
            <div
              key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              className="absolute px-4 py-3 cursor-default select-none"
              style={{
                top: n.top,
                left: n.left,
                width: NODE_W,
                height: NODE_H,
                border: `1px solid ${isHov ? 'var(--accent)' : n.accent ? 'var(--accent)' : 'var(--line-strong)'}`,
                background: isHov
                  ? 'rgba(245,158,11,0.08)'
                  : 'rgba(0,0,0,0.6)',
                color: isDim ? 'var(--ink-mute)' : n.accent || isHov ? 'var(--accent)' : 'var(--ink)',
                transform: isHov ? 'scale(1.06)' : 'scale(1)',
                boxShadow: isHov ? '0 0 20px rgba(245,158,11,0.15)' : 'none',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease',
                zIndex: isHov ? 10 : 1,
              }}
            >
              <div className="text-11 font-mono leading-tight">{n.label}</div>
              <div className="text-[9px] uppercase tracking-01 text-ink-mute mt-[5px] leading-tight">
                {n.sub}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Right info panel ── */}
      <div className="border-t lg:border-t-0 lg:border-l border-line flex flex-col">

        {/* Active node detail — fixed height so hover never resizes the panel */}
        <div className="px-5 py-5 border-b border-line overflow-hidden" style={{ height: 130 }}>
          {hoveredNode ? (
            <>
              <div className="text-10 uppercase tracking-018 text-accent mb-2">
                ● {hoveredNode.label}
              </div>
              <div className="text-11 text-ink-mute uppercase tracking-01 mb-3">{hoveredNode.sub}</div>
              {hoveredNode.desc && (
                <p className="text-11 text-ink leading-relaxed line-clamp-2">{hoveredNode.desc}</p>
              )}
              <div className="mt-2 text-[9px] uppercase tracking-018 text-ink-mute truncate">
                connected to →{' '}
                {edges
                  .filter(e => e.from === hoveredNode.id || e.to === hoveredNode.id)
                  .map(e => (e.from === hoveredNode.id ? map[e.to]?.label : map[e.from]?.label))
                  .filter(Boolean)
                  .join(' · ')}
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center h-full">
              <div className="text-10 uppercase tracking-018 text-ink-mute mb-2">// hover a node</div>
              <div className="text-11 text-ink-mute leading-relaxed">
                Inspect each layer of the system by hovering a node.
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="px-5 py-4 border-b border-line grid grid-cols-2 gap-3">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-[9px] uppercase tracking-018 text-ink-mute mb-[3px]">{s.label}</div>
                <div className="text-13 font-mono text-accent">{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Stack pills */}
        {stack.length > 0 && (
          <div className="px-5 py-4">
            <div className="text-[9px] uppercase tracking-018 text-ink-mute mb-3">// tech stack</div>
            <div className="flex flex-wrap gap-[6px]">
              {stack.map(s => (
                <span
                  key={s}
                  className="text-[9px] uppercase tracking-01 px-2 py-[4px] border border-line text-ink-mute"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Node count */}
        <div className="mt-auto px-5 py-3 border-t border-line flex justify-between text-[9px] uppercase tracking-018 text-ink-mute">
          <span>{nodes.length} nodes</span>
          <span>{edges.length} edges</span>
        </div>
      </div>
    </div>
  )
}
