'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  meta: string
}

export default function SectionHeader({ label, title, meta }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      {/* Top rule + label row */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">[{label}]</span>
        <div className="flex-1 h-px bg-line-strong" />
        <span className="font-mono text-[10px] tracking-[0.14em] text-ink-mute">{meta}</span>
      </div>
      {/* Title */}
      <h2 className="font-display italic text-32 md:text-48 leading-none tracking-[-0.015em] text-ink">
        {title}
      </h2>
    </motion.div>
  )
}
