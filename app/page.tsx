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
  { label: 'Web Engineer',          active: false },
  { label: 'AI Engineer',           active: false },
  { label: 'Lahore / Remote',       active: false },
]

const heroWords = ['Muhammad', 'Ali']

const aboutItems = [
  { label: 'Process',  value: 'Design-led, ship daily, write everything down.' },
  { label: 'Tools',    value: 'Cursor · Linear · Figma · iA Writer' },
  { label: 'Hours',    value: 'Mon–Fri · 09:00–17:00 GMT+1' },
  { label: 'Currency', value: 'USD · NGN · Crypto OK' },
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

        {/* Corner bracket marks (desktop only — too cramped on mobile) */}
        <div className="en-hero absolute inset-0 pointer-events-none hidden md:block" />

        {/* Vertical timestamp — hidden on mobile */}
        <div
          className="hidden md:block text-10 tracking-02 text-ink-mute self-start pt-2 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          → MA · 2026.05.07 · 09:42 GMT+1 · BUILD 142
        </div>

        {/* Right / main column */}
        <div>
          {/* Status chips */}
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

          {/* h1 — clamp handles all sizes */}
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

          {/* One-liner */}
          <p className="font-display italic text-20 md:text-30 leading-135 max-w-600 text-ink">
            I build things that live at the{' '}
            <em className="text-accent italic">edge of the web</em>{' '}
            —<br className="hidden sm:block" />where architecture meets intelligence, and the network is the runtime.
          </p>

          <SchematicStrip />
        </div>
      </section>

      {/* ── About ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 01_about" title="A short introduction." meta="~ 80 words" />
        {/* Mobile: 1 col. md+: 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink mb-6">
              I&apos;m a web and AI engineer who treats interfaces like sentences — every word in the right place, every silence intentional. Six years across product surfaces, infrastructure, and the strange new layer where models live next to APIs.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink-mute">
              Most of my recent work sits at the intersection of architecture and AI: retrieval pipelines, agent loops, the unsexy plumbing that decides whether a clever idea actually ships.
            </p>
          </div>
          {/* Sidebar — on mobile: no left border, just stacked */}
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
        <SectionHeader module="// 03_work" title="Selected projects." meta="9 total / 3 featured" />
        <ProjectGrid />
      </section>

      {/* ── Timeline ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 04_path" title="Trajectory." meta="2019 → present" />
        <HorizontalTimeline />
      </section>

      <Footer />
    </motion.div>
  )
}
