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
      /* Mobile: stack vertically. md+: 3-col grid */
      className="flex flex-col gap-2 md:grid md:grid-cols-section-hdr md:gap-6 md:items-baseline pb-[14px] border-b border-line mb-10"
    >
      <span className="text-11 uppercase tracking-018 text-accent">{module}</span>
      <h2 className="font-display italic text-32 md:text-48 leading-none tracking-tight text-ink">{title}</h2>
      <span className="text-10 uppercase tracking-012 text-ink-mute">{meta}</span>
    </motion.div>
  )
}
