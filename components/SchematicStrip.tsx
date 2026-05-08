'use client'
import { motion } from 'framer-motion'

const cells = [
  { label: 'FRONTEND', sub: 'react · ts · ssr', accent: true },
  { label: 'EDGE',     sub: 'workers · auth',   accent: false },
  { label: 'API',      sub: 'node · trpc · ws',  accent: false },
  { label: 'DATA',     sub: 'postgres · redis',  accent: false },
  { label: 'AI',       sub: 'openai · rag · agents', accent: true },
]

export default function SchematicStrip() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 1,
      background: 'var(--line)',
      border: '1px dashed var(--line-strong)',
      padding: 12,
      height: 140,
      marginTop: 48,
    }}>
      {cells.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
          style={{
            background: 'var(--bg-soft)',
            padding: 10,
            fontSize: 10,
            color: 'var(--ink-mute)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <b style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            marginBottom: 4,
            color: c.accent ? 'var(--accent)' : 'var(--ink-mute)',
            fontWeight: 600,
            display: 'block',
          }}>
            {c.label}
          </b>
          {c.sub}
        </motion.div>
      ))}
    </div>
  )
}
