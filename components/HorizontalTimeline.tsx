'use client'
import { motion } from 'framer-motion'

const nodes = [
  { yr: '2024 →', role: 'Senior Engineer', co: 'Stealth', desc: 'Agent infra · retrieval pipelines · edge runtimes', current: true },
  { yr: '2022 — 24', role: 'Full-stack Lead', co: 'Swerv Automotive', desc: 'Customer surfaces, owned design system', current: false },
  { yr: '2020 — 22', role: 'Engineer', co: 'NICGS', desc: 'Enterprise workflows, structured data', current: false },
  { yr: '2019 — 20', role: 'Engineer', co: 'FoodPro', desc: 'Order flows, RBAC dashboards', current: false },
]

export default function HorizontalTimeline() {
  return (
    <div>
      {/* Rail */}
      <div style={{ height: 1, background: 'var(--line-strong)', position: 'relative', margin: '0 0 24px' }}>
        {[0, 25, 50, 75, 100].map((pct) => (
          <div key={pct} style={{
            position: 'absolute',
            top: -3,
            left: `${pct}%`,
            width: 1,
            height: 7,
            background: 'var(--line-strong)',
          }} />
        ))}
      </div>

      {/* Nodes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 32,
      }}>
        {nodes.map((n, i) => (
          <motion.div
            key={n.yr}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.12, duration: 0.4, ease: 'easeOut' }}
            style={{
              borderTop: `1px solid ${n.current ? 'var(--accent)' : 'var(--line)'}`,
              paddingTop: 14,
            }}
          >
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: 8, textTransform: 'uppercase' }}>
              {n.yr}
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 24,
              lineHeight: 1.1,
              marginBottom: 6,
              color: 'var(--ink)',
            }}>
              {n.role}
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink)', marginBottom: 10 }}>
              {n.co}
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>
              {n.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
