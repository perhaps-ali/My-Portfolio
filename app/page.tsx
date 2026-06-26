'use client'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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
  { label: 'Stack',    value: 'React · Next.js · FastAPI · Django' },
  { label: 'Location', value: 'Lahore, Pakistan · GMT+5' },
  { label: 'Process',  value: 'Design-led, clean components, ship daily.' },
  { label: 'Contact',  value: 'muhammaddali908@gmail.com' },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

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
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="grid-bg relative border-b border-line overflow-hidden
          grid grid-cols-1 md:grid-cols-hero
          gap-6 md:gap-12
          px-5 md:px-8
          py-12 md:py-24"
      >
        {/* Cursor-tracking glow */}
        <motion.div
          className="pointer-events-none absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)',
            x: useTransform(springX, v => v - 300),
            y: useTransform(springY, v => v - 300),
          }}
        />

        {/* Static ambient glow top-right */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[700px] h-[500px] opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse at top right, var(--accent), transparent 55%)' }}
        />

        {/* Animated corner brackets */}
        <motion.span
          className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-accent hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        <motion.span
          className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-accent hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />
        <motion.span
          className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-accent hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        />
        <motion.span
          className="absolute bottom-5 left-5 w-4 h-4 border-b-2 border-l-2 border-accent hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        />

        <div className="en-hero absolute inset-0 pointer-events-none hidden md:block" />

        {/* Vertical label */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:block text-10 tracking-02 text-ink-mute self-start pt-2 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          → MA · 2026.05.16 · LAHORE · BUILD 143
        </motion.div>

        <div className="relative z-10">
          {/* Chips */}
          <div className="flex gap-2 flex-wrap mb-6 md:mb-8">
            {chips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={chip.active ? {} : { borderColor: 'var(--line-strong)', color: 'var(--ink)' }}
                className="text-11 tracking-012 uppercase px-[10px] py-[5px] cursor-default"
                style={{
                  border: `1px solid ${chip.active ? 'var(--accent)' : 'var(--line)'}`,
                  color: chip.active ? 'var(--accent)' : 'var(--ink-mute)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* Name — per-letter stagger + hover lift */}
          <h1 className="leading-09 tracking-tighter mb-5 md:mb-7">
            {heroWords.map((word, wi) => (
              <span key={word} className="inline-block mr-[0.22em]" style={{ fontSize: 'clamp(52px, 12vw, 148px)' }}>
                {word.split('').map((letter, li) => (
                  <motion.span
                    key={`${wi}-${li}`}
                    initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.08 + wi * 0.18 + li * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, color: 'var(--accent)', transition: { duration: 0.15 } }}
                    className="inline-block font-display italic text-ink cursor-default"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-mono not-italic text-14 text-accent tracking-01 ml-[6px] align-top pt-2 inline-block"
            >
              [ obj.engineer ]
            </motion.span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: 'easeOut' }}
            className="font-display italic text-20 md:text-30 leading-135 max-w-600 text-ink mb-2"
          >
            I build interfaces that{' '}
            <em
              className="text-accent italic"
              style={{ textShadow: '0 0 30px rgba(245,158,11,0.3)' }}
            >
              ship in production
            </em>{' '}
            —<br className="hidden sm:block" />
            clean components, precise logic, and systems that hold under pressure.
          </motion.p>

          <SchematicStrip />
        </div>
      </section>

      {/* ── About ── */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// 01_about" title="A short introduction." meta="~ 60 words" />
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-display italic text-20 md:text-24 leading-155 text-ink mb-6"
            >
              Software engineer based in Lahore with four years of professional experience building
              production-grade interfaces. I specialise in React, Next.js — with full-stack
              capability in FastAPI, Django REST Framework, and SQL/NoSQL databases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="font-display italic text-20 md:text-24 leading-155 text-ink-mute"
            >
              My work spans finance platforms, automotive systems, data dashboards, and event management —
              always focused on clean architecture and real-world usability.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="md:border-l md:border-line md:pl-8 grid gap-0 text-12 text-ink-mute content-start pt-6 md:pt-0 border-t md:border-t-0 border-line"
          >
            {aboutItems.map((item) => (
              <motion.div
                key={item.label}
                onHoverStart={() => setHoveredAbout(item.label)}
                onHoverEnd={() => setHoveredAbout(null)}
                className="py-3 border-b border-line cursor-default"
                animate={{
                  background: hoveredAbout === item.label ? 'var(--fill)' : 'transparent',
                  x: hoveredAbout === item.label ? 4 : 0,
                }}
                transition={{ duration: 0.15 }}
                style={{ paddingLeft: 8, paddingRight: 8, marginLeft: -8, marginRight: -8 }}
              >
                <b className="text-10 uppercase tracking-018 text-accent block mb-1">{item.label}</b>
                <span style={{ color: hoveredAbout === item.label ? 'var(--ink)' : undefined, transition: 'color 0.15s' }}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-t border-line">
        <SectionHeader module="// 02_stack" title="The toolkit." meta="04 modules" />
        <SkillGrid />
      </section>

      {/* ── Projects ── */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-t border-line">
        <SectionHeader module="// 03_work" title="Selected projects." meta="6 total" />
        <ProjectGrid />
      </section>

      {/* ── Timeline ── */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-t border-line">
        <SectionHeader module="// 04_path" title="Trajectory." meta="2022 → present" />
        <HorizontalTimeline />
      </section>

      <Footer />
    </motion.div>
  )
}
