'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  module: string
  title: string
  meta: string
}

export default function SectionHeader({ module, title, meta }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr auto',
        gap: '24px',
        alignItems: 'baseline',
        paddingBottom: 14,
        borderBottom: '1px solid var(--line)',
        marginBottom: 40,
      }}
    >
      <span style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        color: 'var(--accent)',
      }}>
        {module}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 48,
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: 'var(--ink)',
      }}>
        {title}
      </h2>
      <span style={{
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--ink-mute)',
      }}>
        {meta}
      </span>
    </motion.div>
  )
}
