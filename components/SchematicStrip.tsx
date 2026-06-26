'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const cells = [
  { label: 'FRONTEND', sub: 'React · TS · SSR',       accent: true  },
  { label: 'EDGE',     sub: 'Workers · Auth',          accent: false },
  { label: 'API',      sub: 'FastAPI · DRF · REST',    accent: false },
  { label: 'DATA',     sub: 'Postgres · MongoDB',      accent: false },
  { label: 'AI',       sub: 'OpenAI · RAG · Agents',  accent: true  },
]

export default function SchematicStrip() {
  const [hovered, setHovered] = useState<number | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [perimeter, setPerimeter] = useState(0)

  // measure the box so we can set dasharray to the full perimeter
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      setPerimeter(Math.round((width + height) * 2))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="mt-12">
      <div ref={wrapRef} className="relative grid grid-cols-3 sm:grid-cols-5 gap-px bg-line">

        {/* Animated SVG border — drawn over the whole strip */}
        {perimeter > 0 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible', zIndex: 10 }}
          >
            <rect
              x="0.5" y="0.5"
              width="calc(100% - 1px)" height="calc(100% - 1px)"
              fill="none"
              stroke="rgba(245,158,11,0.55)"
              strokeWidth="1"
              strokeDasharray={`6 6`}
              style={{
                strokeDashoffset: 0,
                animation: 'dash-flow-border 3s linear infinite',
              }}
            />
          </svg>
        )}

        {cells.map((c, i) => {
          const isHov = hovered === i
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-bg-soft p-4 flex flex-col min-h-[100px] sm:min-h-[130px] overflow-hidden cursor-default select-none"
              style={{
                background: isHov ? 'rgba(245,158,11,0.06)' : undefined,
                transition: 'background 0.2s ease',
              }}
            >
              {/* Spinning corner diamond */}
              <motion.span
                className="absolute top-2 right-2 text-[8px]"
                style={{ color: 'var(--accent)', opacity: isHov ? 1 : 0.25 }}
                animate={{ rotate: isHov ? 360 : 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                ◆
              </motion.span>

              {/* Bottom sweep on hover */}
              {isHov && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
                />
              )}

              <motion.b
                className="text-11 tracking-01 mb-2 font-mono block"
                style={{ color: c.accent || isHov ? 'var(--accent)' : 'var(--ink-mute)' }}
                animate={{ y: isHov ? -2 : 0 }}
                transition={{ duration: 0.15 }}
              >
                {c.label}
              </motion.b>

              <motion.span
                className="text-10 text-ink-mute leading-relaxed"
                animate={{ opacity: isHov ? 1 : 0.6 }}
                transition={{ duration: 0.15 }}
              >
                {c.sub}
              </motion.span>

              <span
                className="absolute bottom-3 left-3 text-[9px] font-mono"
                style={{ color: isHov ? 'var(--accent)' : 'var(--line-strong)', transition: 'color 0.2s' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
