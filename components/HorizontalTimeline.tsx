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
      {/* Track with label + animated fill */}
      <div className="hidden md:block mb-8">
        <div className="flex justify-between mb-1">
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-mute">2022</span>
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-accent">now</span>
        </div>
        <div className="h-px bg-line-strong relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 right-0 bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: '25%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          {/* Tick marks at each column boundary */}
          {[0, 25, 50, 75, 100].map((pct) => (
            <div
              key={pct}
              className="absolute w-px h-[6px] bg-line-strong"
              style={{ top: -2.5, left: `${pct}%` }}
            />
          ))}
        </div>
      </div>

      <div className="border border-line md:border-none">
        <div className="flex flex-col md:grid md:grid-cols-4-even">
          {nodes.map((n, i) => {
            const isHov = hovered === i
            const active = n.current || isHov
            return (
              <motion.div
                key={n.yr}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.09, duration: 0.4 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="cursor-default relative p-4 md:p-0 md:pr-6 border-b border-line last:border-b-0 md:border-b-0"
              >
                {/* Top border indicator — desktop only */}
                <div
                  className="hidden md:block h-[2px] mb-5 transition-colors duration-200"
                  style={{ background: active ? 'var(--accent)' : 'var(--line-strong)' }}
                />

                <motion.div animate={{ y: isHov ? -2 : 0 }} transition={{ duration: 0.15 }}>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent mb-2">{n.yr}</div>
                  <div className="font-display italic text-20 md:text-22 leading-[1.15] mb-[5px] text-ink">
                    {n.role}
                  </div>
                  <div
                    className="font-mono text-11 mb-[10px] transition-colors duration-200"
                    style={{ color: isHov ? 'var(--accent)' : 'var(--ink-mute)' }}
                  >
                    {n.co}
                  </div>
                  <div className="font-mono text-[11px] text-ink-mute leading-[1.6]">{n.desc}</div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
