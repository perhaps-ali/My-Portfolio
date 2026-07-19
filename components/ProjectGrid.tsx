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
    role: 'Full-Stack',
    desc: 'Full-stack SBA loan workflow platform — application flows, partner dashboard, document management, and Django REST API.',
    stack: ['Next.js', 'Django', 'Tailwind'],
    cover: '/images/loanbridge.png',
    featured: true,
  },
  {
    slug: 'swerv',
    title: 'Swerv',
    year: '2025',
    idx: '02',
    role: 'Full-Stack',
    desc: 'UI elevation and interface consistency for an automotive product, backed by Django REST API work — component design, usability, look & feel.',
    stack: ['Next.js', 'Django', 'Tailwind'],
    cover: '/images/autocore-dashboard.png',
  },
  {
    slug: 'nicgs',
    title: 'NICGS',
    year: '2025',
    idx: '03',
    role: 'Full-Stack',
    desc: 'Complete frontend overhaul with Django REST/CMS API work — rebuilt from scratch, modernised design language, restructured navigation.',
    stack: ['Next.js', 'Django', 'Tailwind'],
    cover: '/images/noor-cart.png',
  },
  {
    slug: 'quanta',
    title: 'Quanta',
    year: '2026',
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
]

export default function ProjectGrid() {
  return (
    <div className="flex flex-col gap-px bg-line border border-line">
      {projects.map((p, i) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileTap={{ scale: 0.99 }}
          className="bg-bg group"
        >
          <Link
            href={`/work/${p.slug}`}
            className="flex flex-col md:grid md:grid-cols-[160px_1fr_auto] gap-4 md:gap-7 items-start md:items-center pl-[18px] md:pl-[30px] pr-5 md:pr-8 py-6 border-l-2 border-transparent hover:border-accent hover:bg-fill transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2 focus-visible:border-accent"
          >
            {/* Thumbnail */}
            <div className="relative w-full md:w-[160px] h-[140px] md:h-[95px] overflow-hidden bg-bg-soft border border-line shrink-0">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                quality={90}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {p.featured && (
                <div className="absolute top-2 left-2 font-mono text-[8px] tracking-[0.14em] uppercase text-bg bg-accent px-[6px] py-[2px]">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-3 mb-[6px] flex-wrap">
                <span className="font-mono text-[10px] tracking-[0.14em] text-ink-mute">{p.idx} / 05</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent">{p.role}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-mute">{p.year}</span>
              </div>
              <h4 className="font-display italic text-24 md:text-26 text-ink leading-none mb-[6px] group-hover:text-accent transition-colors duration-200">
                {p.title}
              </h4>
              <p className="font-mono text-[11px] text-ink-mute leading-[1.6] max-w-[560px]">{p.desc}</p>
            </div>

            {/* Stack + view */}
            <div className="flex md:flex-col items-start md:items-end gap-2 md:gap-3 shrink-0 w-full md:w-auto">
              <div className="flex gap-[5px] flex-wrap md:justify-end">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[9px] border border-line px-[6px] py-[3px] text-ink-mute">
                    {s}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] text-ink-mute group-hover:text-accent transition-colors shrink-0">
                View →
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
