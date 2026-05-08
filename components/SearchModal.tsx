'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

const ALL_ITEMS = [
  // Projects
  { type: 'Project', title: 'DataDash',  href: '/work/datadash',  desc: 'High-performance database management interface.' },
  { type: 'Project', title: 'WeCare',    href: '/work/wecare',    desc: 'Catering reservations — menu, orders, payments.' },
  { type: 'Project', title: 'SBa Loans', href: '/work/sba-loans', desc: 'Loan applications & approval workflow.' },
  // Posts
  { type: 'Post', title: 'On retrieval as a first-class UI concern', href: '/blog/retrieval-as-ui',   desc: 'Why RAG belongs in design reviews.' },
  { type: 'Post', title: 'The case against the framework du jour',   href: '/blog/against-framework', desc: 'Half-life of your favorite tool.' },
  { type: 'Post', title: 'Edge runtimes, three years in',            href: '/blog/edge-runtimes',     desc: 'What I got wrong about cold starts.' },
  { type: 'Post', title: 'The CSS feature you should be using',      href: '/blog/container-queries', desc: 'Container queries, finally.' },
  { type: 'Post', title: 'Year in code: 2025',                       href: '/blog/year-in-code-2025', desc: 'Numbers, lessons, regrets.' },
  { type: 'Post', title: 'Building agent loops without losing the plot', href: '/blog/agent-loops',   desc: 'Patterns for model plan-act loops.' },
  // Pages
  { type: 'Page', title: 'About',   href: '/about', desc: 'Who I am and how I work.' },
  { type: 'Page', title: 'Work',    href: '/work',  desc: 'All projects.' },
  { type: 'Page', title: 'Writing', href: '/blog',  desc: 'All posts.' },
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

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setQuery('')
      setCursor(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  // Keep cursor in bounds when results change
  useEffect(() => {
    setCursor(0)
  }, [query])

  // Keyboard navigation
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-[80px] left-1/2 -translate-x-1/2 z-[201] w-full max-w-[600px] mx-4 border border-line-strong bg-bg-soft"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
              <Search size={14} className="text-ink-mute shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, posts, pages…"
                className="flex-1 bg-transparent text-12 text-ink placeholder:text-ink-mute outline-none border-0 font-mono"
              />
              <button onClick={onClose} className="text-ink-mute hover:text-ink transition-colors cursor-pointer bg-transparent border-0">
                <X size={14} />
              </button>
            </div>

            {/* Results */}
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

            {/* Footer hint */}
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
