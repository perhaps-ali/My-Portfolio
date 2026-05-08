'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const allProjects = [
  { slug: 'datadash',  title: 'DataDash',      year: '2025', idx: '01', desc: 'High-performance database management interface built for stability, speed, and developer efficiency.' },
  { slug: 'wecare',    title: 'WeCare',         year: '2024', idx: '02', desc: 'Catering reservations — menu, orders, payments.' },
  { slug: 'sba-loans', title: 'SBa Loans',      year: '2024', idx: '03', desc: 'Loan applications & approval workflow.' },
]

export default function WorkPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--line)' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(60px, 10vw, 108px)',
          lineHeight: 0.92,
          letterSpacing: '-0.02em',
          marginBottom: 60,
        }}>
          Work.
        </h1>
        <div>
          {allProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              whileHover={{ backgroundColor: 'var(--fill-2)' }}
              transition={{ duration: 0.15 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: 24,
                padding: '20px 0',
                borderTop: '1px solid var(--line)',
                alignItems: 'baseline',
              }}
            >
              <span style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.1em' }}>
                {p.year} · {p.idx}
              </span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 36,
                  color: 'var(--ink)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-mute)' }}>{p.desc}</div>
              </div>
              <Link href={`/work/${p.slug}`} style={{
                color: 'var(--accent)',
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
              }}>
                View →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </motion.div>
  )
}
