'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        style={{ background: 'rgba(10,10,10,0.88)' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[3px]">
            <span className="glow-pulse w-[7px] h-[7px] rounded-full block" style={{ backgroundColor: 'var(--accent)' }} />
          </div>
          <Link href="/" className="text-12 font-semibold text-ink tracking-005 hover:text-accent transition-colors">
            muhammadali
          </Link>
          <span className="text-11 text-ink-mute hidden sm:inline">/v6.2026</span>
        </div>

        {/* Command Bar */}
        <button
          onClick={() => setSearchOpen(true)}
          className="hidden md:flex items-center gap-2 w-full max-w-480 mx-auto px-3 py-[6px] border border-line rounded-sm text-ink-mute cursor-pointer hover:border-accent hover:text-ink transition active:scale-[0.98]"
          style={{ background: 'var(--fill)' }}
        >
          <Search size={12} />
          <span className="text-11 flex-1 text-left">Search projects…</span>
          <kbd className="border border-line px-[5px] py-[1px] text-10 tracking-005 font-mono">⌘K</kbd>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex gap-1 items-center">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-11 tracking-005 px-3 py-[6px] transition duration-200 rounded-sm active:scale-[0.96] inline-block"
                style={{
                  color: active ? 'var(--ink)' : 'var(--ink-mute)',
                  background: active ? 'var(--fill-2)' : 'transparent',
                }}
              >
                {l.label}
              </Link>
            )
          })}
          <button
            onClick={() => setContactOpen(true)}
            className="text-11 tracking-005 px-3 py-[6px] border border-accent text-accent cursor-pointer bg-transparent transition duration-200 hover:bg-accent hover:text-bg rounded-sm ml-1 active:scale-[0.96]"
          >
            Contact
          </button>
        </div>

        {/* Status */}
        <div className="hidden md:flex items-center gap-[6px]">
          <span className="glow-pulse w-[7px] h-[7px] rounded-full block" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="text-11 tracking-005 text-ink-mute">Available</span>
        </div>

        {/* Mobile */}
        <div className="md:hidden justify-self-end flex items-center gap-2">
          <button
            onClick={() => setContactOpen(true)}
            className="text-10 tracking-005 px-3 py-[5px] border border-accent text-accent cursor-pointer bg-transparent rounded-sm transition-transform active:scale-[0.94]"
          >
            Contact
          </button>
          <button
            className="bg-transparent border-0 text-ink cursor-pointer leading-none p-[10px] -m-[10px] transition-transform active:scale-90"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
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
              className="absolute top-5 right-8 bg-transparent border-0 text-ink cursor-pointer p-[10px] -m-[10px] transition-transform active:scale-90"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
            <button
              onClick={() => { setMenuOpen(false); setSearchOpen(true) }}
              className="flex items-center gap-2 border border-line px-4 py-2 text-ink-mute text-12 cursor-pointer bg-transparent transition-transform active:scale-95"
            >
              <Search size={13} />
              Search…
            </button>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-48 text-ink hover:text-accent transition active:scale-95 inline-block"
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
