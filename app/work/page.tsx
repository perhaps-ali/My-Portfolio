'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const allProjects = [
  {
    slug: 'sba-loans',
    title: 'SBA Loans',
    year: '2024',
    idx: '01',
    role: 'Frontend Developer',
    desc: 'Complete frontend for an SBA loan workflow platform — application flows, partner dashboard, and document management.',
  },
  {
    slug: 'swerv',
    title: 'Swerv',
    year: '2024',
    idx: '02',
    role: 'Frontend Developer',
    desc: 'UI elevation and interface consistency improvements for an automotive product — component design, usability, look & feel.',
  },
  {
    slug: 'nicgs',
    title: 'NICGS',
    year: '2024',
    idx: '03',
    role: 'Frontend Developer',
    desc: 'Complete frontend overhaul — rebuilt the UI from scratch, modernised design language, restructured navigation.',
  },
  {
    slug: 'quanta',
    title: 'Quanta',
    year: '2024',
    idx: '04',
    role: 'Full-Stack Contributor',
    desc: 'Data dashboard connecting multiple databases and auto-generating charts via queries or AI prompts. Full-stack contribution.',
  },
  {
    slug: 'wecare',
    title: 'WeCare',
    year: '2024',
    idx: '05',
    role: 'Full-Stack Developer',
    desc: 'Final Year Project — MERN stack catering and event management system with reservations, menu management, and ordering.',
  },
  {
    slug: 'chatapp',
    title: 'Chat App',
    year: '2024',
    idx: '06',
    role: 'Frontend Developer',
    desc: 'Real-time chat application frontend built with Vue.js — messaging UI, responsive layout, component architecture.',
  },
]

export default function WorkPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <h1
          className="font-display italic leading-092 tracking-tighter mb-10 md:mb-[60px] text-ink"
          style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
        >
          Work.
        </h1>
        <div>
          {allProjects.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="block">
              <motion.div
                whileHover={{ backgroundColor: 'var(--fill-2)' }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-[60px_1fr] md:grid-cols-work-row gap-4 md:gap-6 py-5 border-t border-line items-baseline cursor-pointer"
              >
                <span className="text-11 text-ink-mute tracking-01">
                  {p.idx}
                </span>
                <div>
                  <div className="font-display italic text-28 md:text-36 text-ink leading-none mb-1">{p.title}</div>
                  <div className="text-10 uppercase tracking-012 text-accent mb-1">{p.role}</div>
                  <div className="text-13 text-ink-mute">{p.desc}</div>
                </div>
                <span className="hidden md:block text-accent text-10 uppercase tracking-016">
                  View →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </motion.div>
  )
}
