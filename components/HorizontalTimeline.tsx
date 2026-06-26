'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const nodes = [
  {
    yr: '2025 →',
    role: 'Software Engineer',
    co: 'Arithmiks',
    desc: 'Frontend systems, admin panels, customer & inventory management',
    current: true,
  },
  {
    yr: 'Aug–Nov 2024',
    role: 'Frontend Trainee',
    co: 'Programmers Force',
    desc: 'Web apps, Chat application, Food Services platform',
    current: false,
  },
  {
    yr: 'Jul–Sep 2023',
    role: 'Technical Intern',
    co: 'Netsol Technologies',
    desc: 'QA practices, software dev processes, cross-functional teams',
    current: false,
  },
  {
    yr: '2022–2024',
    role: 'SEO Content Writer',
    co: 'Freelance',
    desc: 'Finance, UAE law, technical topics — hundreds of articles',
    current: false,
  },
]

export default function HorizontalTimeline() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div>
      {/* Timeline line with animated fill */}
      <div className="hidden md:block h-px bg-line-strong relative mb-6 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: '25%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
        {[0, 25, 50, 75, 100].map((pct) => (
          <div
            key={pct}
            className="absolute w-px h-[7px] bg-line-strong"
            style={{ top: -3, left: `${pct}%` }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-4-even md:gap-8">
        {nodes.map((n, i) => {
          const isHov = hovered === i
          return (
            <motion.div
              key={n.yr}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: 'easeOut' }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="pt-4 pl-3 md:pl-0 cursor-default relative"
              style={{ borderTop: `1px solid ${isHov ? 'var(--accent)' : n.current ? 'var(--accent)' : 'var(--line)'}`, transition: 'border-color 0.2s' }}
            >
              {/* Glow dot on top border */}
              {(isHov || n.current) && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-[5px] left-0 w-[9px] h-[9px] rounded-full border-2 border-accent bg-bg"
                />
              )}

              <motion.div
                animate={{ y: isHov ? -2 : 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className="text-11 tracking-016 text-accent mb-2 uppercase">{n.yr}</div>
                <div
                  className="font-display italic text-22 md:text-24 leading-11 mb-[6px]"
                  style={{ color: isHov ? 'var(--ink)' : 'var(--ink)', transition: 'color 0.15s' }}
                >
                  {n.role}
                </div>
                <div
                  className="text-12 mb-[10px] font-mono"
                  style={{ color: isHov ? 'var(--accent)' : 'var(--ink)', transition: 'color 0.2s' }}
                >
                  {n.co}
                </div>
                <div className="text-11 text-ink-mute leading-relaxed">{n.desc}</div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
