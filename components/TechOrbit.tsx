'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TECH_ICON_MAP } from '@/lib/tech-icons'

interface Ring {
  id: string
  color: string
  radius: number // percent of container, from center
  duration: number // seconds per revolution
  reverse: boolean
  items: string[]
}

// Ordered innermost → outermost by item count, so denser rings get more circumference.
const RINGS: Ring[] = [
  { id: 'data',     color: '#34d399', radius: 17, duration: 42, reverse: false, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Mongoose', 'PL/SQL'] },
  { id: 'tooling',  color: '#a78bfa', radius: 25, duration: 58, reverse: true,  items: ['Git', 'GitHub', 'Linux', 'Figma', 'Bootstrap', 'VS Code'] },
  { id: 'backend',  color: '#38bdf8', radius: 34, duration: 74, reverse: false, items: ['FastAPI', 'Django REST', 'Node.js', 'Express', 'REST', 'JWT / Auth', 'OpenAPI'] },
  { id: 'frontend', color: '#e8e6e1', radius: 43, duration: 92, reverse: true,  items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js', 'HTML / CSS'] },
]

const CENTER = 50

function round(n: number) {
  // Math.cos/sin can differ in their last bit between server (Node) and client (browser)
  // engines; rounding keeps SSR and hydration output byte-identical.
  return Math.round(n * 1000) / 1000
}

function toXY(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: round(CENTER + radius * Math.cos(rad)), y: round(CENTER + radius * Math.sin(rad)) }
}

export default function TechOrbit() {
  const [hoveredRing, setHoveredRing] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="relative mx-auto w-full max-w-[600px] min-w-[300px] aspect-square select-none overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.03) 40%, transparent 72%)' }}
      />

      {/* Static orbit path rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100">
        {RINGS.map((r) => {
          const isDim = hoveredRing !== null && hoveredRing !== r.id
          return (
            <circle
              key={r.id}
              cx={CENTER} cy={CENTER} r={r.radius}
              fill="none"
              stroke={r.color}
              strokeWidth={hoveredRing === r.id ? 0.5 : 0.28}
              strokeOpacity={isDim ? 0.06 : hoveredRing === r.id ? 0.55 : 0.16}
              strokeDasharray="0.6 1.8"
              style={{ transition: 'stroke-opacity 0.25s ease, stroke-width 0.25s ease' }}
            />
          )
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full border z-20"
        style={{
          left: `${CENTER}%`, top: `${CENTER}%`, transform: 'translate(-50%,-50%)',
          width: '20%', height: '20%',
          borderColor: 'var(--accent)',
          background: 'radial-gradient(circle at 35% 30%, rgba(245,158,11,0.16), var(--bg-soft) 72%)',
          boxShadow: '0 0 32px rgba(245,158,11,0.2)',
        }}
      >
        <span
          className="radar-ping pointer-events-none absolute inset-0 rounded-full border"
          style={{ borderColor: 'var(--accent)' }}
          aria-hidden="true"
        />
        <span className="font-mono text-[11px] sm:text-[16px] text-ink leading-none whitespace-nowrap">Muhammad</span>
        <span className="font-mono text-[8px] sm:text-[11px] uppercase tracking-[0.1em] text-accent mt-[6px] whitespace-nowrap">
          Full-Stack
        </span>
      </div>

      {/* Orbiting rings */}
      {RINGS.map((ring) => {
        const isRingDim = hoveredRing !== null && hoveredRing !== ring.id
        const n = ring.items.length
        return (
          <motion.div
            key={ring.id}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ opacity: isRingDim ? 0.25 : 1, transition: 'opacity 0.25s ease' }}
            animate={{ rotate: ring.reverse ? -360 : 360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: ring.duration }}
          >
            {ring.items.map((item, i) => {
              const angle = (360 / n) * i
              const pos = toXY(ring.radius, angle)
              const entry = TECH_ICON_MAP[item]
              const isHovered = hoveredItem === item
              const code = item.replace(/[^A-Za-z]/g, ' ').trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()
              return (
                <motion.div
                  key={item}
                  className="absolute flex items-center justify-center pointer-events-auto"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)', zIndex: isHovered ? 40 : 1 }}
                  animate={{ rotate: ring.reverse ? 360 : -360 }}
                  transition={{ repeat: Infinity, ease: 'linear', duration: ring.duration }}
                  onMouseEnter={() => { setHoveredRing(ring.id); setHoveredItem(item) }}
                  onMouseLeave={() => { setHoveredRing(null); setHoveredItem(null) }}
                  onFocus={() => { setHoveredRing(ring.id); setHoveredItem(item) }}
                  onBlur={() => { setHoveredRing(null); setHoveredItem(null) }}
                  tabIndex={0}
                >
                  <div
                    className="relative rounded-full border flex items-center justify-center w-7 h-7 sm:w-11 sm:h-11 cursor-default transition-transform duration-150"
                    style={{
                      borderColor: ring.color,
                      background: 'var(--bg-soft)',
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: isHovered ? `0 0 18px ${ring.color}66` : 'none',
                    }}
                  >
                    {entry ? (
                      <entry.Icon className="w-[13px] h-[13px] sm:w-5 sm:h-5" style={{ color: entry.color }} />
                    ) : (
                      <span className="font-mono text-[7px] sm:text-[10px] font-bold" style={{ color: ring.color }}>
                        {code}
                      </span>
                    )}
                    {/* Full name — reveals on hover/focus only, keeps the ring collision-free at rest */}
                    <span
                      className="absolute top-full mt-[6px] font-mono text-[8px] sm:text-[11px] uppercase tracking-[0.02em] whitespace-nowrap pointer-events-none transition-opacity duration-150"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        color: ring.color,
                        background: 'var(--bg)',
                        border: `1px solid ${ring.color}`,
                        padding: '2px 5px',
                        zIndex: 40,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )
      })}
    </div>
  )
}
