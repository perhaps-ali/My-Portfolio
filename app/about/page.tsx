'use client'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function AboutPage() {
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
          color: 'var(--ink)',
        }}>
          About.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60 }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 28,
              lineHeight: 1.5,
              color: 'var(--ink)',
              marginBottom: 28,
            }}>
              Muhammad Ali is a Web & AI engineer based in Lahore, available for remote work globally.
              Six years building at the intersection of design and engineering — products that think, scale, and delight.
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 24,
              lineHeight: 1.55,
              color: 'var(--ink-mute)',
            }}>
              Most of my recent work sits at the intersection of architecture and AI: retrieval pipelines, agent loops, the unsexy plumbing that decides whether a clever idea actually ships.
            </p>
          </div>
          <div style={{
            borderLeft: '1px solid var(--line)',
            paddingLeft: 32,
            display: 'grid',
            gap: 14,
            fontSize: 12,
            color: 'var(--ink-mute)',
            alignContent: 'start',
          }}>
            {[
              { label: 'Location', value: 'Lahore, Pakistan / Remote' },
              { label: 'Availability', value: 'Q3 2026 · Open to work' },
              { label: 'Process', value: 'Design-led, ship daily, write everything down.' },
              { label: 'Tools', value: 'Cursor · Linear · Figma · iA Writer' },
              { label: 'Hours', value: 'Mon–Fri · 09:00–17:00 GMT+1' },
              { label: 'Currency', value: 'USD · NGN · Crypto OK' },
            ].map((item) => (
              <div key={item.label}>
                <b style={{
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: 4,
                }}>
                  {item.label}
                </b>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  )
}
