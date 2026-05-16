'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import SchematicStrip from '@/components/SchematicStrip'
import SkillGrid from '@/components/SkillGrid'
import ProjectGrid from '@/components/ProjectGrid'
import HorizontalTimeline from '@/components/HorizontalTimeline'
import Footer from '@/components/Footer'

const chips = [
  { label: '● Available · Q3 2026', active: true  },
  { label: 'Software Engineer',     active: false },
  { label: 'Lahore / Remote',       active: false },
]

const heroWords = ['Muhammad', 'Ali']

const aboutItems = [
  { label: 'Stack',    value: 'React · Next.js · Vue · Node.js' },
  { label: 'Location', value: 'Lahore, Pakistan · GMT+5' },
  { label: 'Process',  value: 'Design-led, clean components, ship daily.' },
  { label: 'Contact',  value: 'muhammadali908@gmail.com' },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* ── Hero ── */}
      <section className="grid-bg relative border-b border-line
        grid grid-cols-1 md:grid-cols-hero
        gap-6 md:gap-12
        px-5 md:px-8
        py-12 md:py-20">

        <div className="en-hero absolute inset-0 pointer-events-none hidden md:block" />

        <div
          className="hidden md:block text-10 tracking-02 text-ink-mute self-start pt-2 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          → MA · 2026.05.16 · LAHORE · BUILD 143
        </div>

        <div>
          <div className="flex gap-2 flex-wrap mb-5 md:mb-6">
            {chips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                className="text-11 tracking-012 uppercase px-[10px] py-[5px]"
                style={{
                  border: `1px solid ${chip.active ? 'var(--accent)' : 'var(--line)'}`,
                  color: chip.active ? 'var(--accent)' : 'var(--ink-mute)',
                }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>

          <h1 className="leading-09 tracking-tighter mb-4 md:mb-5">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                className="inline-block mr-[0.25em] font-display italic text-ink"
                style={{ fontSize: 'clamp(52px, 12vw, 148px)' }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="font-mono not-italic text-14 text-accent tracking-01 ml-[6px] align-top pt-2 inline-block"
            >
              [ obj.engineer ]
            </motion.span>
          </h1>

          <p className="font-display italic text-20 md:text-30 leading-135 max-w-600 text-ink">
            I build interfaces that{' '}
            <em className="text-accent italic">ship in production</em>{' '}
            —<br className="hidden sm:block" />clean components, precise logic, and systems that hold under pressure.
          </p>

          <SchematicStrip />
        </div>
      </section>

      {/* ── About ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 01_about" title="A short introduction." meta="~ 60 words" />
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink mb-6">
              Software engineer based in Lahore with four years of professional experience building
              production-grade interfaces. I specialise in React, Next.js, and Vue — with full-stack
              capability in Node.js and MongoDB.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink-mute">
              My work spans finance platforms, automotive systems, data dashboards, and event management —
              always focused on clean architecture and real-world usability.
            </p>
          </div>
          <div className="md:border-l md:border-line md:pl-8 grid gap-[14px] text-12 text-ink-mute content-start pt-6 md:pt-0 border-t md:border-t-0 border-line">
            {aboutItems.map((item) => (
              <div key={item.label}>
                <b className="text-10 uppercase tracking-018 text-accent block mb-1">{item.label}</b>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 02_stack" title="The toolkit." meta="04 modules" />
        <SkillGrid />
      </section>

      {/* ── Projects ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 03_work" title="Selected projects." meta="7 total / 3 featured" />
        <ProjectGrid />
      </section>

      {/* ── Timeline ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 04_path" title="Trajectory." meta="2022 → present" />
        <HorizontalTimeline />
      </section>

      <Footer />
    </motion.div>
  )
}
