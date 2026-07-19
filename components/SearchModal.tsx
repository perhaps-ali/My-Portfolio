'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

const ALL_ITEMS = [
  // Projects
  { type: 'Project', title: 'SBA Loans', href: '/work/sba-loans', desc: 'Complete frontend for an SBA loan workflow platform.' },
  { type: 'Project', title: 'Swerv',     href: '/work/swerv',     desc: 'UI elevation and interface consistency for an automotive product.' },
  { type: 'Project', title: 'NICGS',     href: '/work/nicgs',     desc: 'Complete frontend overhaul — rebuilt from scratch, responsive.' },
  { type: 'Project', title: 'Quanta',    href: '/work/quanta',    desc: 'Data dashboard — multi-DB, AI-generated charts, full-stack.' },
  { type: 'Project', title: 'WeCare',    href: '/work/wecare',    desc: 'MERN stack catering & event management system (FYP).' },
  // Pages
  { type: 'Page', title: 'About', href: '/about', desc: 'Who I am and how I work.' },
  { type: 'Page', title: 'Work',  href: '/work',  desc: 'All projects.' },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim() === ''
    ? ALL_ITEMS
    : ALL_ITEMS.filter((item) =>
        `${item.title} ${item.desc} ${item.type}`.toLowerCase().includes(query.toLowerCase())
      )

  useEffect(() => {
    if (open) {
      setQuery('')
      setCursor(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setCursor(0)
  }, [query])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)) }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)) }
      if (e.key === 'Enter' && results[cursor]) {
        onClose()
        window.location.href = results[cursor].href
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, cursor, results, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-[80px] inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-[201] md:w-full md:max-w-[600px] border border-line-strong bg-bg-soft"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
              <Search size={14} className="text-ink-mute shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, pages…"
                className="flex-1 bg-transparent text-12 text-ink placeholder:text-ink-mute outline-none border-0 font-mono"
              />
              <button onClick={onClose} className="text-ink-mute hover:text-ink transition-colors cursor-pointer bg-transparent border-0">
                <X size={14} />
              </button>
            </div>

            <ul className="max-h-[380px] overflow-y-auto">
              {results.length === 0 && (
                <li className="px-4 py-8 text-center text-12 text-ink-mute">No results for &ldquo;{query}&rdquo;</li>
              )}
              {results.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    onMouseEnter={() => setCursor(i)}
                    className="flex items-start gap-3 px-4 py-3 border-b border-line transition-colors"
                    style={{ background: i === cursor ? 'var(--fill-2)' : 'transparent' }}
                  >
                    <span
                      className="text-[9px] uppercase tracking-018 mt-[3px] shrink-0 px-[6px] py-[2px] border"
                      style={{
                        color: item.type === 'Project' ? 'var(--accent)' : 'var(--ink-mute)',
                        borderColor: item.type === 'Project' ? 'var(--accent)' : 'var(--line)',
                      }}
                    >
                      {item.type}
                    </span>
                    <div>
                      <div className="text-12 text-ink">{item.title}</div>
                      <div className="text-11 text-ink-mute mt-[2px]">{item.desc}</div>
                    </div>
                    {i === cursor && (
                      <span className="ml-auto text-10 text-ink-mute self-center shrink-0">↵</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 px-4 py-2 border-t border-line text-[10px] text-ink-mute tracking-012 uppercase">
              <span><kbd className="font-mono">↑↓</kbd> navigate</span>
              <span><kbd className="font-mono">↵</kbd> open</span>
              <span><kbd className="font-mono">esc</kbd> close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
