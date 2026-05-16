'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccentCycle } from './AccentCycler'
import SearchModal from './SearchModal'

const links = [
  { label: 'Home',    href: '/' },
  { label: 'Work',    href: '/work' },
  // { label: 'Writing', href: '/blog' },
  { label: 'About',   href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const cycle = useAccentCycle()

  // ⌘K / Ctrl+K global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      {/* Mobile: brand + hamburger (2-col auto). Desktop: 4-col nav grid */}
      <nav
        className="sticky top-0 z-50 grid items-center px-5 md:px-8 py-[14px] border-b border-line backdrop-blur-12
          grid-cols-[auto_auto] md:grid-cols-nav md:gap-8"
        style={{ background: 'rgba(10,10,10,0.85)' }}
      >
        {/* Brand — always visible */}
        <div className="flex items-center gap-2">
          <button
            onClick={cycle}
            className="w-3 h-3 shrink-0 border-0 cursor-pointer bg-accent"
            style={{ transition: 'background 0.25s ease' }}
            aria-label="Cycle accent color"
          />
          <span className="text-12 font-semibold text-ink tracking-005">muhammadali</span>
          <span className="text-12 text-ink-mute hidden sm:inline">/v6.2026</span>
        </div>

        {/* Command Bar — clickable button, hidden on mobile */}
        <button
          onClick={() => setSearchOpen(true)}
          className="hidden md:flex items-center gap-2 w-full max-w-480 mx-auto px-3 py-[6px] border border-line rounded-sm text-ink-mute cursor-pointer bg-transparent hover:border-line-strong transition-colors"
        >
          <Search size={13} />
          <span className="text-12 flex-1 text-left hidden lg:inline">Search projects, posts, snippets…</span>
          <span className="text-12 flex-1 text-left lg:hidden">Search…</span>
          <span className="border border-line px-[5px] py-[1px] text-10 tracking-005">⌘K</span>
        </button>

        {/* Nav Links — hidden on mobile */}
        <div className="hidden md:flex gap-1">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-11 uppercase tracking-012 px-[10px] py-[6px] transition-colors duration-200"
                style={{
                  color: active ? 'var(--ink)' : 'var(--ink-mute)',
                  border: active ? '1px solid var(--line)' : '1px solid transparent',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* Status — hidden on mobile */}
        <div className="hidden md:flex items-center gap-[6px]">
          <span className="glow-pulse w-[6px] h-[6px] rounded-full bg-accent block" />
          <span className="text-11 uppercase tracking-012 text-ink-mute">Online</span>
        </div>

        {/* Hamburger — visible only on mobile */}
        <button
          className="md:hidden justify-self-end bg-transparent border-0 text-ink cursor-pointer text-xl leading-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-center items-center gap-8 bg-bg"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-8 bg-transparent border-0 text-ink cursor-pointer text-2xl"
            >
              ✕
            </button>
            {/* Search entry point in mobile overlay */}
            <button
              onClick={() => { setMenuOpen(false); setSearchOpen(true) }}
              className="flex items-center gap-2 border border-line px-4 py-2 text-ink-mute text-12 cursor-pointer bg-transparent"
            >
              <Search size={13} />
              Search…
            </button>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display italic text-48 text-ink hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
