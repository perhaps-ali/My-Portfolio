'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    slug: 'sba-loans',
    title: 'SBA Loans',
    year: '2025–2026',
    idx: '01',
    role: 'Frontend Developer',
    desc: 'Complete frontend for an SBA loan workflow platform — application flows, partner dashboard, and document management.',
    stack: ['Next.js', 'Django', 'Tailwind'],
    cover: '/images/loanbridge.png',
    featured: true,
  },
  {
    slug: 'swerv',
    title: 'Swerv',
    year: '2025',
    idx: '02',
    role: 'Frontend Developer',
    desc: 'UI elevation and interface consistency for an automotive product — component design, usability, look & feel.',
    stack: ['Next.js', 'Django', 'Tailwind'],
    cover: '/images/autocore-dashboard.png',
  },
  {
    slug: 'nicgs',
    title: 'NICGS',
    year: '2025',
    idx: '03',
    role: 'Frontend Developer',
    desc: 'Complete frontend overhaul — rebuilt from scratch, modernised design language, restructured navigation.',
    stack: ['Next.js', 'Django', 'Tailwind'],
    cover: '/images/noor-cart.png',
  },
  {
    slug: 'quanta',
    title: 'Quanta',
    year: '2024',
    idx: '04',
    role: 'Full-Stack',
    desc: 'Data dashboard connecting multiple databases and auto-generating charts from queries or AI prompts.',
    stack: ['Next.js', 'FastAPI', 'AI'],
    cover: '/images/quanta.png',
  },
  {
    slug: 'wecare',
    title: 'WeCare',
    year: '2024',
    idx: '05',
    role: 'Full-Stack',
    desc: 'MERN stack catering & event management — reservations, menu management, and ordering.',
    stack: ['React', 'FastAPI', 'MongoDB'],
    cover: '/images/weCare.png',
  },
  {
    slug: 'chatapp',
    title: 'Chat App',
    year: '2024',
    idx: '06',
    role: 'Frontend Developer',
    desc: 'Real-time chat application frontend — Vue.js messaging UI, responsive layout, clean component architecture.',
    stack: ['Vue.js'],
    cover: '/images/ChatApp.png',
  },
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2-even lg:grid-cols-3-even gap-px bg-line border border-line">
      {projects.map((p, i) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="bg-bg flex flex-col group"
        >
          <Link href={`/work/${p.slug}`} className="flex flex-col flex-1">
            {/* Cover image */}
            <div
              className="overflow-hidden bg-bg-soft border-b border-line relative"
              style={{ height: 200 }}
            >
              <Image
                src={p.cover}
                alt={p.title}
                fill
                quality={90}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {p.featured && (
                <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.16em] uppercase text-bg bg-accent px-2 py-[3px]">
                  Featured
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-[10px]">
                <span className="font-mono text-[10px] tracking-[0.14em] text-ink-mute">{p.idx} / 06</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent">{p.year}</span>
              </div>

              <h4 className="font-display italic text-26 md:text-30 text-ink leading-none mb-1 group-hover:text-accent transition-colors duration-200">
                {p.title}
              </h4>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent mb-3">{p.role}</div>
              <p className="font-mono text-[11px] text-ink-mute leading-[1.65] flex-1">{p.desc}</p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-line">
                <div className="flex gap-[5px] flex-wrap">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[9px] border border-line px-[6px] py-[3px] text-ink-mute">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-ink-mute group-hover:text-accent transition-colors shrink-0 ml-3">
                  View →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
