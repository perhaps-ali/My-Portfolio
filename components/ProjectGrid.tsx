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
    /* Mobile: single column stack. lg+: 2-col asymmetric grid with fixed height */
    <div className="flex flex-col gap-px lg:grid lg:grid-cols-projects lg:grid-rows-2 bg-line border border-line lg:h-170">

      {/* Featured */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15 }}
        className="lg:row-span-2 bg-bg p-6 md:p-9 flex flex-col"
      >
        <div className="flex justify-between text-10 tracking-016 uppercase text-ink-mute mb-4">
          <span>★ FEATURED — {featured.year}</span>
          <span className="text-accent">{featured.version}</span>
        </div>
        <h4 className="font-display italic text-40 md:text-64 text-ink leading-none">{featured.title}</h4>
        <p className="text-13 text-ink-mute mt-3">{featured.desc}</p>
        <div className="my-6 flex-1 min-h-40 bg-bg-soft border border-line flex items-center justify-center text-ink-mute text-11 tracking-012">
          [ cover image ]
        </div>
        <div className="flex justify-between items-center mt-auto pt-[14px] border-t border-line">
          <div className="flex gap-[6px] flex-wrap">
            {featured.stack.map((s) => (
              <span key={s} className="text-10 border border-line px-[7px] py-[2px] text-ink-mute">{s}</span>
            ))}
          </div>
          <Link href={`/work/${featured.slug}`} className="text-accent text-11 tracking-016 uppercase shrink-0 ml-3">
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
          className="bg-bg px-6 md:px-8 py-7 flex flex-col"
        >
          <div className="flex justify-between text-10 tracking-016 uppercase text-ink-mute mb-3">
            <span>{p.year}</span>
            <span className="text-accent">{p.status}</span>
          </div>
          <h4 className="font-display italic text-28 md:text-32 text-ink mb-2">{p.title}</h4>
          <p className="text-13 text-ink-mute">{p.desc}</p>
          <div className="flex justify-between items-center mt-auto pt-[14px] border-t border-line">
            <div className="flex gap-[6px] flex-wrap">
              {p.stack.map((s) => (
                <span key={s} className="text-10 border border-line px-[7px] py-[2px] text-ink-mute">{s}</span>
              ))}
            </div>
            <Link href={`/work/${p.slug}`} className="text-accent text-11 tracking-016 uppercase shrink-0 ml-3">
              View →
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
