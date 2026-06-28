'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const allProjects = [
  { slug: 'sba-loans', title: 'SBA Loans',  year: '2025–26', role: 'Frontend Developer',    type: 'Production', desc: 'Complete frontend for an SBA loan workflow platform — application flows, partner dashboard, document management.' },
  { slug: 'swerv',     title: 'Swerv',      year: '2025',    role: 'Frontend Developer',    type: 'Internal',   desc: 'UI elevation and interface consistency for an automotive product — component design, usability, look & feel.' },
  { slug: 'nicgs',     title: 'NICGS',      year: '2025',    role: 'Frontend Developer',    type: 'Revamp',     desc: 'Complete frontend overhaul — rebuilt from scratch, modernised design language, restructured navigation.' },
  { slug: 'quanta',    title: 'Quanta',     year: '2024', role: 'Full-Stack',            type: 'Live',       desc: 'Data dashboard connecting multiple databases and auto-generating charts via queries or AI prompts.' },
  { slug: 'wecare',    title: 'WeCare',     year: '2024', role: 'Full-Stack',            type: 'FYP',        desc: 'MERN stack catering and event management — reservations, menu management, and ordering.' },
  { slug: 'chatapp',   title: 'Chat App',   year: '2024', role: 'Frontend Developer',    type: 'Shipped',    desc: 'Real-time chat frontend built with Vue.js — messaging UI, responsive layout, component architecture.' },
]

export default function WorkPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <h1
          className="font-display leading-[0.88] tracking-[-0.03em] mb-10 md:mb-[56px] text-ink"
          style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
        >
          Work.
        </h1>

        {/* Table */}
        <div className="border border-line">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[40px_1fr_90px_90px] border-b border-line bg-bg-soft">
            {['#', 'project', 'year', 'type'].map((h) => (
              <div key={h} className="px-4 py-2 border-r border-line last:border-r-0">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">{h}</span>
              </div>
            ))}
          </div>

          {allProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="border-b border-line last:border-b-0 group"
            >
              <Link href={`/work/${p.slug}`} className="grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_90px_90px] hover:bg-fill transition-colors duration-150">
                {/* Index */}
                <div className="px-4 py-5 border-r border-line flex items-start">
                  <span className="font-mono text-[10px] text-ink-mute pt-[3px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + desc */}
                <div className="px-4 py-5 border-r border-line">
                  <div className="flex items-baseline gap-3 mb-[6px] flex-wrap">
                    <span className="font-display italic text-24 md:text-32 text-ink leading-none group-hover:text-accent transition-colors duration-200">
                      {p.title}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent">{p.role}</span>
                  </div>
                  <p className="font-mono text-[11px] text-ink-mute leading-[1.6] mb-3">{p.desc}</p>
                  {/* Year + type badges — mobile only */}
                  <div className="flex gap-[6px] md:hidden">
                    <span className="font-mono text-[9px] tracking-[0.1em] px-2 py-[3px] border border-line text-accent">
                      {p.year}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-[3px] border border-line text-ink-mute">
                      {p.type}
                    </span>
                  </div>
                </div>

                {/* Year */}
                <div className="hidden md:flex px-4 py-5 border-r border-line items-start">
                  <span className="font-mono text-[10px] text-ink-mute">{p.year}</span>
                </div>

                {/* Type */}
                <div className="hidden md:flex px-4 py-5 items-start">
                  <span className="font-mono text-[10px] text-ink-mute">{p.type}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
