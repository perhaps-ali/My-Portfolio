'use client'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import SchematicStrip from '@/components/SchematicStrip'
import SkillGrid from '@/components/SkillGrid'
import ProjectGrid from '@/components/ProjectGrid'
import HorizontalTimeline from '@/components/HorizontalTimeline'
import Footer from '@/components/Footer'

const statusFields = [
  { key: 'status',    val: 'available',              highlight: true },
  { key: 'location',  val: 'Lahore, PK · GMT+5',    highlight: false },
  { key: 'role',      val: 'software engineer',      highlight: false },
  { key: 'exp',       val: '2–3 yrs production',      highlight: false },
  { key: 'open_to',   val: 'full-time · freelance',  highlight: false },
  { key: 'stack',     val: 'React / Next / FastAPI', highlight: false },
  { key: 'avail',     val: 'Q3 2026',                highlight: false },
]

const aboutItems = [
  { label: 'Stack',    value: 'React · Next.js · FastAPI · Django' },
  { label: 'Location', value: 'Lahore, Pakistan · GMT+5' },
  { label: 'Process',  value: 'Design-led, clean components, ship daily.' },
  { label: 'Contact',  value: 'muhammaddali908@gmail.com' },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.6 })
  const [hoveredAbout, setHoveredAbout] = useState<string | null>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="grid-bg relative border-b border-line overflow-hidden px-5 md:px-8 pt-12 pb-0 md:pt-16 md:pb-0"
      >
        {/* Cursor-tracking glow */}
        <motion.div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, rgba(245,158,11,0.03) 45%, transparent 70%)',
            x: useTransform(springX, v => v - 250),
            y: useTransform(springY, v => v - 250),
          }}
        />

        {/* Two-column layout on desktop */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 lg:gap-12 items-start">

          {/* Left — name block */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="glow-pulse inline-block w-[5px] h-[5px] rounded-full bg-accent shrink-0" />
              <span className="font-mono text-10 tracking-[0.18em] uppercase text-ink-mute">
                engineer.portfolio · build 2026
              </span>
            </motion.div>

            {/* Name */}
            <h1
              className="font-display font-medium leading-[0.88] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(60px, 14vw, 168px)' }}
            >
              {['Muhammad', 'Ali'].map((word, wi) => (
                <span key={word} className="block">
                  {word.split('').map((letter, li) => (
                    <motion.span
                      key={`${wi}-${li}`}
                      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ delay: 0.08 + wi * 0.12 + li * 0.025, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ color: 'var(--accent)', transition: { duration: 0.1 } }}
                      className="inline-block text-ink cursor-default"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45 }}
              className="font-display italic text-18 md:text-22 leading-[1.45] text-ink-mute max-w-[520px] mb-0"
            >
              2–3 years building interfaces for finance, automotive, and data systems —
              the kind that{' '}
              <span className="text-ink not-italic font-display" style={{ fontStyle: 'normal' }}>
                must not fail.
              </span>
            </motion.p>
          </div>

          {/* Right — terminal status panel */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="hidden lg:block self-start mt-1"
            style={{
              border: '1px solid var(--line-strong)',
              background: 'rgba(10,10,10,0.85)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Title bar — terminal chrome */}
            <div
              className="flex items-center gap-2 px-3 py-[9px] border-b"
              style={{ borderColor: 'var(--line-strong)', background: 'var(--bg-soft)' }}
            >
              <span className="w-[9px] h-[9px] rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-[9px] h-[9px] rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-[9px] h-[9px] rounded-full" style={{ background: '#28c840' }} />
              <span className="flex-1" />
              <span className="font-mono text-[9px] tracking-[0.18em] text-ink-mute">sys.status</span>
              <span className="flex-1" />
            </div>

            {/* Prompt line */}
            <div className="px-4 pt-3 pb-1">
              <span className="font-mono text-[10px] text-accent">$ </span>
              <span className="font-mono text-[10px] text-ink-mute">whoami --verbose</span>
            </div>

            {/* Output rows */}
            <div className="px-4 pb-3">
              {statusFields.map((f, i) => (
                <motion.div
                  key={f.key}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.07 }}
                  className="flex gap-0 leading-[1.85]"
                >
                  <span className="font-mono text-[10px] w-[80px] shrink-0" style={{ color: 'var(--ink-mute)' }}>
                    {f.key}
                  </span>
                  <span className="font-mono text-[10px] mr-2" style={{ color: 'var(--ink-mute)' }}>:</span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: f.highlight ? 'var(--accent)' : 'var(--ink)' }}
                  >
                    {f.val}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                className="flex items-center gap-1 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25 }}
              >
                <span className="font-mono text-[10px] text-accent">$ </span>
                <span
                  className="inline-block w-[6px] h-[12px]"
                  style={{
                    background: 'var(--accent)',
                    animation: 'cursor-blink 1.1s step-end infinite',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SchematicStrip — full width, below name, inside hero */}
        <SchematicStrip />
      </section>

      {/* ── About ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader label="about" title="A short introduction." meta="~60 words" />
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="font-display italic text-20 md:text-24 leading-[1.55] text-ink mb-6"
            >
              Software engineer based in Lahore with 2–3 years building production-grade interfaces.
              I specialise in React and Next.js — with full-stack capability in FastAPI, Django REST
              Framework, and SQL/NoSQL databases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display italic text-20 md:text-24 leading-[1.55] text-ink-mute"
            >
              My work spans finance platforms, automotive systems, data dashboards, and event management —
              always focused on clean architecture and real-world usability.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="md:border-l md:border-line md:pl-8 content-start pt-6 md:pt-0 border-t md:border-t-0 border-line"
          >
            {aboutItems.map((item) => (
              <motion.div
                key={item.label}
                onHoverStart={() => setHoveredAbout(item.label)}
                onHoverEnd={() => setHoveredAbout(null)}
                className="grid grid-cols-[80px_1fr] py-[12px] border-b border-line cursor-default gap-3 items-start"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent pt-[1px]">{item.label}</span>
                <span
                  className="font-mono text-11 leading-[1.6] transition-colors duration-150"
                  style={{ color: hoveredAbout === item.label ? 'var(--ink)' : 'var(--ink-mute)' }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-t border-line">
        <SectionHeader label="stack" title="The toolkit." meta="4 modules" />
        <SkillGrid />
      </section>

      {/* ── Projects ── */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-t border-line">
        <SectionHeader label="work" title="Selected projects." meta="6 total" />
        <ProjectGrid />
      </section>

      {/* ── Timeline ── */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-t border-line">
        <SectionHeader label="path" title="Trajectory." meta="2022 → present" />
        <HorizontalTimeline />
      </section>

      <Footer />
    </motion.div>
  )
}
