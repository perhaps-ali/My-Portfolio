'use client'
import { motion } from 'framer-motion'

const nodes = [
  { yr: '2024 →',    role: 'Senior Engineer',  co: 'Stealth',          desc: 'Agent infra · retrieval pipelines · edge runtimes', current: true  },
  { yr: '2022 — 24', role: 'Full-stack Lead',   co: 'Swerv Automotive', desc: 'Customer surfaces, owned design system',            current: false },
  { yr: '2020 — 22', role: 'Engineer',          co: 'NICGS',            desc: 'Enterprise workflows, structured data',             current: false },
  { yr: '2019 — 20', role: 'Engineer',          co: 'FoodPro',          desc: 'Order flows, RBAC dashboards',                     current: false },
]

export default function HorizontalTimeline() {
  return (
    <div>
      {/* Rail — hidden on mobile (timeline is vertical there) */}
      <div className="hidden md:block h-px bg-line-strong relative mb-6">
        {[0, 25, 50, 75, 100].map((pct) => (
          <div
            key={pct}
            className="absolute w-px h-[7px] bg-line-strong"
            style={{ top: -3, left: `${pct}%` }}
          />
        ))}
      </div>

      {/* Mobile: vertical stack. md+: 4-col horizontal grid */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-4-even md:gap-8">
        {nodes.map((n, i) => (
          <motion.div
            key={n.yr}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.12, duration: 0.4, ease: 'easeOut' }}
            className="pt-[14px] pl-3 md:pl-0"
            style={{ borderTop: `1px solid ${n.current ? 'var(--accent)' : 'var(--line)'}` }}
          >
            <div className="text-11 tracking-016 text-accent mb-2 uppercase">{n.yr}</div>
            <div className="font-display italic text-24 leading-11 mb-[6px] text-ink">{n.role}</div>
            <div className="text-12 text-ink mb-[10px]">{n.co}</div>
            <div className="text-11 text-ink-mute">{n.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
