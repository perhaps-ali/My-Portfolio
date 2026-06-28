'use client'
import { useState } from 'react'
import ContactOverlay from './ContactOverlay'

const contacts = [
  { label: 'email',    value: 'muhammaddali908@gmail.com', href: 'mailto:muhammaddali908@gmail.com' },
  { label: 'phone',    value: '(+92) 03238890511',          href: 'tel:+923238890511' },
  { label: 'linkedin', value: 'linkedin.com/in/muhammad-ali908', href: 'https://linkedin.com/in/muhammad-ali908' },
  { label: 'github',   value: 'github.com/perhaps-ali',    href: 'https://github.com/perhaps-ali' },
]

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-line">

        {/* ── CTA ── */}
        <div className="grid-bg border-b border-line px-5 md:px-8 pt-16 md:pt-20 pb-12 md:pb-16 relative overflow-hidden">
          <div
            className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.04]"
            style={{ background: 'radial-gradient(circle at top left, var(--accent), transparent 60%)' }}
          />

          {/* Status tag */}
          <div className="flex items-center gap-2 mb-8">
            <span className="glow-pulse inline-block w-[5px] h-[5px] rounded-full bg-accent shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
              status: available · Q3 2026
            </span>
          </div>

          <h2
            className="font-display leading-[0.88] tracking-[-0.03em] text-ink mb-5"
            style={{ fontSize: 'clamp(48px, 9vw, 116px)' }}
          >
            Let&apos;s build<br />
            something{' '}
            <em className="italic" style={{ color: 'var(--accent)' }}>real.</em>
          </h2>

          <p className="font-display italic text-18 md:text-22 text-ink-mute max-w-[500px] leading-[1.45] mb-10">
            Got a project or an idea? Drop a message — I reply within 24 hours.
          </p>

          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-3 border border-accent text-accent font-mono text-11 tracking-[0.14em] uppercase px-5 py-3 hover:bg-accent hover:text-bg transition-colors duration-200 cursor-pointer bg-transparent"
          >
            Get in touch →
          </button>
        </div>

        {/* ── Contact manifest ── */}
        <div className="border border-line border-t-0 mx-5 md:mx-8 mb-6">
          {/* Header */}
          <div className="grid grid-cols-[80px_1fr] border-b border-line bg-bg-soft">
            <div className="px-4 py-2 border-r border-line">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">field</span>
            </div>
            <div className="px-4 py-2">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">value</span>
            </div>
          </div>
          {contacts.map((c) => (
            <div key={c.label} className="grid grid-cols-[80px_1fr] border-b border-line last:border-b-0">
              <div className="px-4 py-3 border-r border-line">
                <span className="font-mono text-[10px] text-ink-mute">{c.label}</span>
              </div>
              <div className="px-4 py-3">
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-mono text-[11px] text-ink-mute hover:text-accent transition-colors duration-150"
                >
                  {c.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="px-5 md:px-8 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.1em] text-ink-mute uppercase">Muhammad Ali · 2026</span>
          <span className="font-mono text-[10px] tracking-[0.1em] text-ink-mute uppercase">Lahore, Pakistan</span>
        </div>
      </footer>

      <ContactOverlay open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
