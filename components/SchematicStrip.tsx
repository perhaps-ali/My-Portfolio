'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

        {/* Animated SVG border */}
        {perimeter > 0 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible', zIndex: 10 }}>
            <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)"
              fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="1" strokeDasharray="8 8" />
            <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)"
              fill="none" stroke="rgba(245,158,11,0.9)" strokeWidth="1.5" strokeDasharray="8 80"
              style={{ strokeDashoffset: 0, animation: 'dash-flow-border 1.2s linear infinite' }} />
          </svg>
        )}

        {cells.map((c, i) => {
          const isHov = hovered === i
          return (
            <div
              key={c.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-bg-soft flex flex-col min-h-[100px] sm:min-h-[130px] cursor-default select-none overflow-hidden"
            >
              {/* Radial glow from center on hover */}
              <AnimatePresence>
                {isHov && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 60%, rgba(245,158,11,0.13) 0%, rgba(245,158,11,0.04) 50%, transparent 75%)',
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Top accent bar sweeps in */}
              <AnimatePresence>
                {isHov && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                    style={{ background: 'linear-gradient(to right, var(--accent), transparent)' }}
                  />
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="relative z-10 p-4 flex flex-col flex-1">
                {/* Spinning corner diamond */}
                <motion.span
                  className="absolute top-2 right-2 text-[8px]"
                  style={{ color: 'var(--accent)' }}
                  animate={{ opacity: isHov ? 1 : 0.2, rotate: isHov ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  ◆
                </motion.span>

                <motion.b
                  className="text-11 tracking-01 mb-2 font-mono block"
                  animate={{
                    color: c.accent || isHov ? 'var(--accent)' : 'var(--ink-mute)',
                    y: isHov ? -1 : 0,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {c.label}
                </motion.b>

                <motion.span
                  className="text-10 leading-relaxed"
                  animate={{
                    color: isHov ? 'var(--ink)' : 'rgba(138,134,128,0.6)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {c.sub}
                </motion.span>

                {/* Index */}
                <motion.span
                  className="absolute bottom-3 left-3 text-[9px] font-mono"
                  animate={{ color: isHov ? 'var(--accent)' : 'var(--line-strong)' }}
                  transition={{ duration: 0.2 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
