'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccentCycle } from './AccentCycler'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const cycle = useAccentCycle()

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(10,10,10,0.85)',
        borderBottom: '1px solid var(--line)',
        backdropFilter: 'blur(12px)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto auto',
        gap: '32px',
        alignItems: 'center',
        padding: '14px 32px',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={cycle}
            style={{
              width: 12, height: 12,
              background: 'var(--accent)',
              border: 'none', cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 0.25s ease',
            }}
            aria-label="Cycle accent color"
          />
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', letterSpacing: '0.05em' }}>
            muhammadali
          </span>
          <span style={{ fontSize: 12, color: 'var(--ink-mute)' }}>/v6.2026</span>
        </div>

        {/* Command Bar */}
        <div style={{
          border: '1px solid var(--line)',
          padding: '6px 12px',
          maxWidth: 480,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'var(--ink-mute)',
          borderRadius: 2,
        }}>
          <Search size={13} />
          <span style={{ fontSize: 12, flex: 1 }}>Search projects, posts, snippets…</span>
          <span style={{
            border: '1px solid var(--line)',
            padding: '1px 5px',
            fontSize: 10,
            letterSpacing: '0.05em',
          }}>⌘K</span>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: 4, position: 'relative' }}>
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '6px 10px',
                  color: active ? 'var(--ink)' : 'var(--ink-mute)',
                  border: active ? '1px solid var(--line)' : '1px solid transparent',
                  position: 'relative',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            className="glow-pulse"
            style={{
              width: 6, height: 6,
              background: 'var(--accent)',
              borderRadius: '50%',
            }}
          />
          <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-mute)' }}>
            Online
          </span>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={() => setOpen(true)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--ink)',
            cursor: 'pointer',
            fontSize: 20,
          }}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'var(--bg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 32,
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute', top: 20, right: 32,
                background: 'none', border: 'none',
                color: 'var(--ink)', cursor: 'pointer', fontSize: 24,
              }}
            >✕</button>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 48,
                  color: 'var(--ink)',
                }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav { grid-template-columns: auto auto !important; }
          nav > *:nth-child(2),
          nav > *:nth-child(3),
          nav > *:nth-child(4) { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
