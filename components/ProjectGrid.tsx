'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    slug: 'sba-loans',
    title: 'SBA Loans',
    year: '2024',
    idx: '01',
    role: 'Frontend Developer',
    desc: 'Complete frontend for an SBA loan workflow platform — application flows, partner dashboard, and document management.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'swerv',
    title: 'Swerv',
    year: '2024',
    idx: '02',
    role: 'Frontend Developer',
    desc: 'UI elevation and interface consistency for an automotive product — component design, usability, look & feel.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'nicgs',
    title: 'NICGS',
    year: '2024',
    idx: '03',
    role: 'Frontend Developer',
    desc: 'Complete frontend overhaul — rebuilt from scratch, modernised design language, restructured navigation.',
    stack: ['Next.js', 'Tailwind CSS', 'CMS API'],
  },
  {
    slug: 'quanta',
    title: 'Quanta',
    year: '2024',
    idx: '04',
    role: 'Full-Stack Contributor',
    desc: 'Data dashboard connecting multiple databases and auto-generating charts from queries or AI prompts.',
    stack: ['React', 'Node.js', 'OpenAI API'],
  },
  {
    slug: 'wecare',
    title: 'WeCare',
    year: '2024',
    idx: '05',
    role: 'Full-Stack Developer',
    desc: 'Final Year Project — MERN stack catering & event management with reservations, menu management, and ordering.',
    stack: ['React', 'Express', 'MongoDB'],
  },
  {
    slug: 'chatapp',
    title: 'Chat App',
    year: '2024',
    idx: '06',
    role: 'Frontend Developer',
    desc: 'Real-time chat application frontend — Vue.js messaging UI, responsive layout, clean component architecture.',
    stack: ['Vue.js', 'Vuex', 'WebSockets'],
  },
]

export default function ProjectGrid() {
  return (
    /* Mobile: 1 col. md: 2 col. lg: 3 col — all 6 projects in a 2×3 grid */
    <div className="grid grid-cols-1 md:grid-cols-2-even lg:grid-cols-3-even gap-px bg-line border border-line">
      {projects.map((p, i) => (
        <motion.div
          key={p.slug}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
          className="bg-bg p-6 md:p-8 flex flex-col"
        >
          <div className="flex justify-between text-10 tracking-016 uppercase text-ink-mute mb-4">
            <span>{i === 0 ? '★ featured · ' : ''}{p.year}</span>
            <span className="text-accent">{p.idx} / 06</span>
          </div>
          <h4 className="font-display italic text-32 md:text-40 text-ink leading-none mb-1">{p.title}</h4>
          <div className="text-10 uppercase tracking-012 text-accent mb-3">{p.role}</div>
          <p className="text-13 text-ink-mute">{p.desc}</p>
          <div className="my-5 bg-bg-soft border border-line flex items-center justify-center text-ink-mute text-11 tracking-012" style={{ height: 120 }}>
            [ cover image ]
          </div>
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
