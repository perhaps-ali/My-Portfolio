'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    slug: 'datadash', title: 'DataDash', year: '2025', featured: true, version: 'v 1.4.2',
    desc: 'High-performance database management interface built for stability, speed, and developer efficiency.',
    stack: ['Next.js', 'tRPC', 'Postgres', 'Redis', 'Docker'],
  },
  {
    slug: 'wecare', title: 'WeCare', year: '2024', status: 'shipped',
    desc: 'Catering reservations — menu, orders, payments.',
    stack: ['Vue', 'Node'],
  },
  {
    slug: 'sba-loans', title: 'SBa Loans', year: '2024', status: 'shipped',
    desc: 'Loan applications & approval workflow.',
    stack: ['Next.js', 'Postgres'],
  },
]

export default function ProjectGrid() {
  const [featured, ...secondary] = projects

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 1,
      background: 'var(--line)',
      border: '1px solid var(--line)',
      height: 680,
    }}>
      {/* Featured */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15 }}
        style={{
          gridRow: '1 / span 2',
          background: 'var(--bg)',
          padding: 36,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 10,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
          marginBottom: 16,
        }}>
          <span>★ FEATURED — {featured.year}</span>
          <span style={{ color: 'var(--accent)' }}>{featured.version}</span>
        </div>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 64,
          color: 'var(--ink)',
          lineHeight: 1,
        }}>
          {featured.title}
        </h4>
        <p style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 12 }}>
          {featured.desc}
        </p>
        <div style={{
          margin: '24px 0',
          flex: 1,
          minHeight: 160,
          background: 'var(--bg-soft)',
          border: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ink-mute)',
          fontSize: 11,
          letterSpacing: '0.12em',
        }}>
          [ cover image ]
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
          paddingTop: 14,
          borderTop: '1px solid var(--line)',
        }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {featured.stack.map((s) => (
              <span key={s} style={{
                fontSize: 10,
                border: '1px solid var(--line)',
                padding: '2px 7px',
                color: 'var(--ink-mute)',
              }}>{s}</span>
            ))}
          </div>
          <Link href={`/work/${featured.slug}`} style={{
            color: 'var(--accent)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>
            Case study →
          </Link>
        </div>
      </motion.div>

      {/* Secondary cards */}
      {secondary.map((p) => (
        <motion.div
          key={p.slug}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
          style={{
            background: 'var(--bg)',
            padding: '28px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 10,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
            marginBottom: 12,
          }}>
            <span>{p.year}</span>
            <span style={{ color: 'var(--accent)' }}>{p.status}</span>
          </div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 32,
            color: 'var(--ink)',
            marginBottom: 8,
          }}>
            {p.title}
          </h4>
          <p style={{ fontSize: 13, color: 'var(--ink-mute)' }}>{p.desc}</p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: 14,
            borderTop: '1px solid var(--line)',
          }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {p.stack.map((s) => (
                <span key={s} style={{
                  fontSize: 10,
                  border: '1px solid var(--line)',
                  padding: '2px 7px',
                  color: 'var(--ink-mute)',
                }}>{s}</span>
              ))}
            </div>
            <Link href={`/work/${p.slug}`} style={{
              color: 'var(--accent)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}>
              View →
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
