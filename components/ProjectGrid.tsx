'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'

const INDEX_DIGITS = 2

function formatIndex(value: number) {
  return String(value).padStart(INDEX_DIGITS, '0')
}

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
                <span className="font-mono text-[10px] tracking-[0.14em] text-ink-mute">{formatIndex(i + 1)} / {formatIndex(projects.length)}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent">{p.role}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-mute">{p.year}</span>
              </div>
              <h4 className="font-display italic text-24 md:text-26 text-ink leading-none mb-[6px] group-hover:text-accent transition-colors duration-200">
                {p.title}
              </h4>
              <p className="font-mono text-[11px] text-ink-mute leading-[1.6] max-w-[560px]">{p.summary}</p>
            </div>

            {/* Stack + view */}
            <div className="flex md:flex-col items-start md:items-end gap-2 md:gap-3 shrink-0 w-full md:w-auto">
              <div className="flex gap-[5px] flex-wrap md:justify-end">
                {p.cardStack.map((s) => (
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
