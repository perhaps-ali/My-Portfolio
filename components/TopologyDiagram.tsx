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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] border border-line-strong bg-bg-soft">

      {/* ── Diagram canvas ── */}
      <div className="relative grid-bg overflow-hidden" style={{ height }}>
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(245,158,11,0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)',
          }}
        />

        <span className="absolute top-[14px] left-[14px] font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute z-10">
          {figLabel}
        </span>
        <span className="absolute top-[14px] right-[14px] font-mono text-[10px] uppercase tracking-[0.1em] text-accent z-10">
          {version}
        </span>
        <span
          className="absolute font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute z-10"
          style={{ top: '50%', left: 10, transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center' }}
        >
          {axisY}
        </span>
        <span
          className="absolute bottom-[14px] font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute z-10"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          {axisX}
        </span>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="topo-arrow" markerWidth="7" markerHeight="7" refX="3.2" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--accent)" />
            </marker>
            <marker id="topo-arrow-dim" markerWidth="7" markerHeight="7" refX="3.2" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(255,255,255,0.28)" />
            </marker>
            <filter id="topo-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {paths.map(({ d, id, isActive }) => (
            <g key={id}>
              {isActive && (
                <path d={d} stroke="var(--accent)" strokeWidth={4} strokeOpacity={0.16} fill="none" filter="url(#topo-glow)" />
              )}
              <path
                d={d}
                stroke={isActive ? 'var(--accent)' : 'rgba(255,255,255,0.22)'}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray="5 5"
                fill="none"
                markerEnd={isActive ? 'url(#topo-arrow)' : 'url(#topo-arrow-dim)'}
                style={{ animation: 'dash-flow 1.4s linear infinite' }}
              />
              <circle r={isActive ? 2.6 : 1.8} fill={isActive ? 'var(--accent)' : 'rgba(255,255,255,0.45)'} className="flow-dot">
                <animateMotion dur={isActive ? '1.3s' : '2.6s'} repeatCount="indefinite" path={d} />
              </circle>
            </g>
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
              className="absolute px-4 py-3 cursor-default select-none rounded-[3px]"
              style={{
                top: n.top,
                left: n.left,
                width: NODE_W,
                height: NODE_H,
                border: `1px solid ${isHov ? 'var(--accent)' : n.accent ? 'var(--accent)' : 'var(--line-strong)'}`,
                background: isHov
                  ? 'linear-gradient(155deg, rgba(245,158,11,0.14), rgba(0,0,0,0.65))'
                  : 'linear-gradient(155deg, rgba(255,255,255,0.05), rgba(0,0,0,0.7))',
                color: isDim ? 'var(--ink-mute)' : n.accent || isHov ? 'var(--accent)' : 'var(--ink)',
                transform: isHov ? 'scale(1.06)' : 'scale(1)',
                boxShadow: isHov
                  ? '0 0 24px rgba(245,158,11,0.22), 0 6px 16px rgba(0,0,0,0.4)'
                  : n.accent
                  ? '0 0 14px rgba(245,158,11,0.1), 0 4px 10px rgba(0,0,0,0.3)'
                  : '0 4px 10px rgba(0,0,0,0.3)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease',
                zIndex: isHov ? 10 : 1,
              }}
            >
              {n.accent && (
                <span
                  className="radar-ping pointer-events-none absolute inset-0 rounded-[3px] border"
                  style={{ borderColor: 'var(--accent)' }}
                  aria-hidden="true"
                />
              )}
              <div className="font-mono text-[11px] leading-tight flex items-center gap-[5px]">
                {n.accent && <span className="inline-block w-[5px] h-[5px] rounded-full bg-accent shrink-0" aria-hidden="true" />}
                {n.label}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute mt-[5px] leading-tight">
                {n.sub}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Right info panel — always visible, no hover-gated content ── */}
      <div className="border-t lg:border-t-0 lg:border-l border-line flex flex-col">

        {/* Node list — all visible, active one highlighted */}
        <div className="px-5 py-4 border-b border-line flex-1">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-mute mb-3 flex items-center gap-[6px]">
            nodes
            {nodes.some(n => n.accent) && (
              <span className="normal-case tracking-normal text-ink-mute flex items-center gap-1">
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                key node
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[2px]">
            {nodes.map(n => {
              const isHov = hovered === n.id
              const connections = edges
                .filter(e => e.from === n.id || e.to === n.id)
                .map(e => (e.from === n.id ? map[e.to]?.label : map[e.from]?.label))
                .filter(Boolean)
              return (
                <div
                  key={n.id}
                  tabIndex={0}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(n.id)}
                  onBlur={() => setHovered(null)}
                  className="py-[7px] border-b border-line last:border-b-0 cursor-default transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  style={{ paddingLeft: isHov ? 6 : 0, transition: 'padding-left 0.15s' }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-mono text-[11px] transition-colors duration-150 flex items-center gap-[5px]"
                      style={{ color: n.accent || isHov ? 'var(--accent)' : 'var(--ink)' }}
                    >
                      {n.accent && <span className="inline-block w-[5px] h-[5px] rounded-full bg-accent shrink-0" aria-hidden="true" />}
                      {n.label}
                    </span>
                    <span className="font-mono text-[9px] text-ink-mute shrink-0">{n.sub}</span>
                  </div>
                  {isHov && connections.length > 0 && (
                    <div className="font-mono text-[9px] text-ink-mute mt-[3px]">
                      ↳ {connections.join(' · ')}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="px-5 py-4 border-b border-line grid grid-cols-2 gap-3">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-mute mb-[3px]">{s.label}</div>
                <div className="font-mono text-[13px] text-accent">{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Stack pills */}
        {stack.length > 0 && (
          <div className="px-5 py-4">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute mb-3">stack</div>
            <div className="flex flex-wrap gap-[5px]">
              {stack.map(s => (
                <span
                  key={s}
                  className="font-mono text-[9px] uppercase tracking-[0.08em] px-2 py-[4px] border border-line text-ink-mute"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto px-5 py-3 border-t border-line flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-ink-mute">
          <span>{nodes.length} nodes</span>
          <span>{edges.length} edges</span>
        </div>
      </div>
    </div>
  )
}
