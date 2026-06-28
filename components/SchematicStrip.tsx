'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const cells = [
  { label: 'FRONTEND', accent: true,  items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { label: 'EDGE',     accent: false, items: ['Middleware', 'JWT', 'Auth', 'CORS', 'Sessions'] },
  { label: 'API',      accent: false, items: ['FastAPI', 'Django REST', 'REST', 'OpenAPI', 'Webhooks'] },
  { label: 'DATA',     accent: false, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Mongoose', 'PL/SQL'] },
  { label: 'AI',       accent: true,  items: ['Anthropic', 'OpenAI', 'Gemini', 'RAG', 'Agents'] },
]

// Stagger timing: each cell starts after the previous finishes printing
const ITEM_DELAY = 0.12   // seconds between items within a cell
const CELL_GAP   = 0.08   // extra gap before next cell starts

function getCellStartDelay(cellIndex: number) {
  // Each cell's items take (items.length * ITEM_DELAY) to finish
  let t = 0.5 // initial pause after page load
  for (let c = 0; c < cellIndex; c++) {
    t += cells[c].items.length * ITEM_DELAY + CELL_GAP
  }
  return t
}

export default function SchematicStrip() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="mt-10 -mx-5 md:-mx-8">
      {/* Label bar */}
      <div className="flex items-center gap-3 px-5 md:px-8 py-[9px] border-t border-line bg-bg-soft">
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-mute">stack.modules</span>
        <div className="flex-1 h-px bg-line" />
        <motion.span
          className="font-mono text-[9px] tracking-[0.16em] text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          v6.2026
        </motion.span>
      </div>

      {/* Mobile: 2-col grid, last cell (AI) spans full width. sm+: all 5 in one row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-line">
        {cells.map((c, ci) => {
          const isHov = hovered === ci
          const cellStart = getCellStartDelay(ci)
          // Last cell spans both columns on mobile to avoid orphan layout
          const isLast = ci === cells.length - 1

          return (
            <div
              key={c.label}
              onMouseEnter={() => setHovered(ci)}
              onMouseLeave={() => setHovered(null)}
              className={[
                'relative flex flex-col cursor-default select-none overflow-hidden',
                'border-b sm:border-b-0 border-r border-line transition-colors duration-150',
                // Right border: remove on even index (right col) on mobile, always show on sm+
                ci % 2 === 1 ? 'border-r-0 sm:border-r' : '',
                // Last cell: span 2 cols on mobile, restore border
                isLast ? 'col-span-2 sm:col-span-1 border-r-0 sm:border-r-0' : '',
              ].join(' ')}
              style={{ background: isHov ? 'var(--fill-2)' : 'var(--bg-soft)' }}
            >
              {/* Top accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: 'linear-gradient(to right, var(--accent), transparent)',
                  opacity: c.accent ? 0.3 : 0,
                }}
                animate={{ opacity: isHov ? 1 : c.accent ? 0.3 : 0 }}
                transition={{ duration: 0.15 }}
              />

              <div className="p-4 sm:p-5 sm:pb-6 flex flex-col flex-1 min-h-[130px] sm:min-h-[160px]">
                {/* Label + index */}
                <motion.div
                  className="flex items-center justify-between mb-3 sm:mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: cellStart - 0.05, duration: 0.2 }}
                >
                  <b
                    className="font-mono text-[11px] sm:text-[12px] tracking-[0.1em] transition-colors duration-150"
                    style={{ color: c.accent || isHov ? 'var(--accent)' : 'var(--ink-mute)' }}
                  >
                    {c.label}
                  </b>
                  <span className="font-mono text-[9px] text-ink-mute opacity-30">
                    {String(ci + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Items — on mobile last cell shows horizontally as tags */}
                {isLast ? (
                  <div className="flex flex-wrap gap-[6px] sm:flex-col sm:gap-[5px] flex-1">
                    {c.items.map((item, ii) => (
                      <motion.span
                        key={item}
                        className="sm:hidden font-mono text-[11px] px-2 py-[3px] border border-line transition-colors duration-150"
                        style={{ color: isHov ? 'var(--ink)' : 'var(--ink-mute)', borderColor: isHov ? 'var(--line-strong)' : 'var(--line)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: cellStart + ii * ITEM_DELAY, duration: 0.18 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                    {/* sm+ uses normal column layout */}
                    {c.items.map((item, ii) => (
                      <motion.div
                        key={`sm-${item}`}
                        className="hidden sm:flex items-center gap-[6px]"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: cellStart + ii * ITEM_DELAY, duration: 0.18, ease: 'easeOut' }}
                      >
                        <span className="font-mono text-[10px] shrink-0 transition-colors duration-150" style={{ color: isHov ? 'var(--accent)' : 'var(--line-strong)' }}>›</span>
                        <span className="font-mono text-[12px] transition-colors duration-150" style={{ color: isHov ? 'var(--ink)' : 'var(--ink-mute)' }}>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-[5px] flex-1">
                    {c.items.map((item, ii) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-[6px]"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: cellStart + ii * ITEM_DELAY, duration: 0.18, ease: 'easeOut' }}
                      >
                        <span
                          className="font-mono text-[10px] shrink-0 transition-colors duration-150"
                          style={{ color: isHov ? 'var(--accent)' : 'var(--line-strong)' }}
                        >
                          ›
                        </span>
                        <span
                          className="font-mono text-[11px] sm:text-[12px] transition-colors duration-150"
                          style={{ color: isHov ? 'var(--ink)' : 'var(--ink-mute)' }}
                        >
                          {item}
                        </span>
                      </motion.div>
                    ))}

                    <motion.span
                      className="inline-block w-[5px] h-[11px] ml-[13px]"
                      style={{ background: 'var(--accent)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ delay: cellStart + c.items.length * ITEM_DELAY, duration: 1.0, times: [0, 0.15, 0.75, 1], ease: 'easeInOut' }}
                    />
                  </div>
                )}
              </div>

              {/* Bottom scan line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px origin-left"
                style={{ background: 'linear-gradient(to right, var(--accent), transparent)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHov ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
