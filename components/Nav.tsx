'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccentCycle } from './AccentCycler'
import SearchModal from './SearchModal'
import ContactOverlay from './ContactOverlay'

const links = [
  { label: 'Home',  href: '/' },
  { label: 'Work',  href: '/work' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [searchOpen,  setSearchOpen]  = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
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
      <nav
        className="sticky top-0 z-50 grid items-center px-5 md:px-8 py-[14px] border-b border-line backdrop-blur-12
          grid-cols-[auto_auto] md:grid-cols-nav md:gap-8"
        style={{ background: 'rgba(10,10,10,0.85)' }}
      >
        {/* Brand */}
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

        {/* Command Bar */}
        <button
          onClick={() => setSearchOpen(true)}
          className="hidden md:flex items-center gap-2 w-full max-w-480 mx-auto px-3 py-[6px] border border-line-strong rounded-sm text-ink-mute cursor-pointer hover:border-accent hover:text-ink transition-colors"
          style={{ background: 'var(--fill-2)' }}
        >
          <Search size={13} />
          <span className="text-12 flex-1 text-left hidden lg:inline">Search projects, snippets…</span>
          <span className="text-12 flex-1 text-left lg:hidden">Search…</span>
          <span className="border border-line px-[5px] py-[1px] text-10 tracking-005">⌘K</span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex gap-1 items-center">
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
          {/* Contact button */}
          <button
            onClick={() => setContactOpen(true)}
            className="text-11 uppercase tracking-012 px-[10px] py-[6px] border border-accent text-accent cursor-pointer bg-transparent transition-colors duration-200 hover:bg-accent hover:text-bg ml-1"
          >
            Contact
          </button>
        </div>

        {/* Status */}
        <div className="hidden md:flex items-center gap-[6px]">
          <span className="glow-pulse w-[6px] h-[6px] rounded-full bg-accent block" />
          <span className="text-11 uppercase tracking-012 text-ink-mute">Online</span>
        </div>

        {/* Mobile: Contact + Hamburger */}
        <div className="md:hidden justify-self-end flex items-center gap-2">
          <button
            onClick={() => setContactOpen(true)}
            className="text-10 uppercase tracking-012 px-3 py-[5px] border border-accent text-accent cursor-pointer bg-transparent"
          >
            Contact
          </button>
          <button
            className="bg-transparent border-0 text-ink cursor-pointer text-xl leading-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
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
      <ContactOverlay open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
