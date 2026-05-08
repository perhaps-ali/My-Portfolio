'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import SchematicStrip from '@/components/SchematicStrip'
import SkillGrid from '@/components/SkillGrid'
import ProjectGrid from '@/components/ProjectGrid'
import HorizontalTimeline from '@/components/HorizontalTimeline'
import Footer from '@/components/Footer'

const chips = [
  { label: '● Available · Q3 2026', active: true },
  { label: 'Web Engineer', active: false },
  { label: 'AI Engineer', active: false },
  { label: 'Lahore / Remote', active: false },
]

const heroWords = ['Muhammad', 'Ali']

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Hero */}
      <section className="grid-bg" style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 48,
        padding: '80px 32px',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
      }}>
        {/* Corner marks */}
        <style>{`
          .en-hero::before, .en-hero::after {
            content: '';
            width: 8px; height: 8px;
            border: 1px solid var(--accent);
            position: absolute;
          }
          .en-hero::before { top: 24px; left: 24px; }
          .en-hero::after  { bottom: 24px; right: 24px; }
        `}</style>
        <div className="en-hero" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        {/* Vertical timestamp */}
        <div style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: 10,
          letterSpacing: '0.2em',
          color: 'var(--ink-mute)',
          alignSelf: 'start',
          paddingTop: 8,
          textTransform: 'uppercase',
        }}>
          → MA · 2026.05.07 · 09:42 GMT+1 · BUILD 142
        </div>

        {/* Right column */}
        <div>
          {/* Status chips */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {chips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                style={{
                  border: `1px solid ${chip.active ? 'var(--accent)' : 'var(--line)'}`,
                  padding: '5px 10px',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: chip.active ? 'var(--accent)' : 'var(--ink-mute)',
                }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* h1 */}
          <h1 style={{ lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: 20 }}>
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                style={{
                  display: 'inline-block',
                  marginRight: '0.25em',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(72px, 12vw, 148px)',
                  color: 'var(--ink)',
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontStyle: 'normal',
                fontSize: 14,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginLeft: 6,
                verticalAlign: 'top',
                paddingTop: 8,
                display: 'inline-block',
              }}
            >
              [ obj.engineer ]
            </motion.span>
          </h1>

          {/* One-liner */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 30,
            lineHeight: 1.35,
            maxWidth: 600,
            color: 'var(--ink)',
          }}>
            I build things that live at the{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>edge of the web</em>{' '}
            —<br />where architecture meets intelligence, and the network is the runtime.
          </p>

          <SchematicStrip />
        </div>
      </section>

      {/* About */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHeader module="// 01_about" title="A short introduction." meta="~ 80 words" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 60,
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 24,
              lineHeight: 1.55,
              color: 'var(--ink)',
              marginBottom: 24,
            }}>
              I&apos;m a web and AI engineer who treats interfaces like sentences — every word in the right place, every silence intentional. Six years across product surfaces, infrastructure, and the strange new layer where models live next to APIs.
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
              { label: 'Process', value: 'Design-led, ship daily, write everything down.' },
              { label: 'Tools',   value: 'Cursor · Linear · Figma · iA Writer' },
              { label: 'Hours',   value: 'Mon–Fri · 09:00–17:00 GMT+1' },
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

      {/* Skills */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHeader module="// 02_stack" title="The toolkit." meta="04 modules" />
        <SkillGrid />
      </section>

      {/* Projects */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHeader module="// 03_work" title="Selected projects." meta="9 total / 3 featured" />
        <ProjectGrid />
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHeader module="// 04_path" title="Trajectory." meta="2019 → present" />
        <HorizontalTimeline />
      </section>

      <Footer />
    </motion.div>
  )
}
