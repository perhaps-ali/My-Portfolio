'use client'
import { motion } from 'framer-motion'

const cells = [
  { label: 'FRONTEND', sub: 'react · ts · ssr',      accent: true  },
  { label: 'EDGE',     sub: 'workers · auth',         accent: false },
  { label: 'API',      sub: 'node · trpc · ws',       accent: false },
  { label: 'DATA',     sub: 'postgres · redis',       accent: false },
  { label: 'AI',       sub: 'openai · rag · agents',  accent: true  },
]

export default function SchematicStrip() {
  return (
    /* Mobile: 3+2 wrap. sm+: all 5 in one row */
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-px bg-line border border-dashed border-line-strong p-3 h-auto sm:h-[140px] mt-12">
      {cells.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
          className="bg-bg-soft p-[10px] text-10 text-ink-mute flex flex-col min-h-[80px] sm:min-h-0"
        >
          <b className={`text-11 tracking-01 mb-1 font-semibold block ${c.accent ? 'text-accent' : 'text-ink-mute'}`}>
            {c.label}
          </b>
          {c.sub}
        </motion.div>
      ))}
    </div>
  )
}
