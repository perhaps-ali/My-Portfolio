'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const allProjects = [
  { slug: 'datadash',  title: 'DataDash',  year: '2025', idx: '01', desc: 'High-performance database management interface built for stability, speed, and developer efficiency.' },
  { slug: 'wecare',    title: 'WeCare',    year: '2024', idx: '02', desc: 'Catering reservations — menu, orders, payments.' },
  { slug: 'sba-loans', title: 'SBa Loans', year: '2024', idx: '03', desc: 'Loan applications & approval workflow.' },
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
            <motion.div
              key={p.slug}
              whileHover={{ backgroundColor: 'var(--fill-2)' }}
              transition={{ duration: 0.15 }}
              /* Mobile: 2-col (year + content), no CTA column. md+: 3-col */
              className="grid grid-cols-[60px_1fr] md:grid-cols-work-row gap-4 md:gap-6 py-5 border-t border-line items-baseline"
            >
              <span className="text-11 text-ink-mute tracking-01">{p.year}<span className="hidden md:inline"> · {p.idx}</span></span>
              <div>
                <div className="font-display italic text-28 md:text-36 text-ink leading-none mb-1">{p.title}</div>
                <div className="text-13 text-ink-mute">{p.desc}</div>
                {/* CTA inline on mobile */}
                <Link href={`/work/${p.slug}`} className="md:hidden text-accent text-10 uppercase tracking-016 mt-2 inline-block">
                  View →
                </Link>
              </div>
              {/* CTA in own column on desktop */}
              <Link href={`/work/${p.slug}`} className="hidden md:block text-accent text-10 uppercase tracking-016">
                View →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </motion.div>
  )
}
