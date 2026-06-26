'use client'

const contacts = [
  { label: 'Email',    value: 'muhammaddali908@gmail.com',          href: 'mailto:muhammaddali908@gmail.com' },
  { label: 'Phone',    value: '(+92) 03238890511',                  href: 'tel:+923238890511' },
  { label: 'LinkedIn', value: 'linkedin.com/in/muhammad-ali908',    href: 'https://linkedin.com/in/muhammad-ali908' },
  { label: 'GitHub',   value: 'github.com/perhaps-ali',            href: 'https://github.com/perhaps-ali' },
  { label: '© 2026',  value: 'Built with Next.js',                 href: null },
]

const ticker = [
  'Available for work · Q3 2026',
  'React · Next.js · FastAPI · Django',
  'Based in Lahore · Remote globally',
  'Open to freelance & full-time',
  'muhammaddali908@gmail.com',
]

export default function Footer() {
  return (
    <footer className="border-t border-line overflow-hidden">

      {/* ── Hero band ── */}
      <div className="relative grid-bg border-b border-line px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
        <span className="absolute top-5 left-5 w-3 h-3 border-t border-l border-accent opacity-60" />
        <span className="absolute top-5 right-5 w-3 h-3 border-t border-r border-accent opacity-60" />

        <div className="flex items-center gap-3 mb-6">
          <span className="glow-pulse w-[6px] h-[6px] rounded-full bg-accent block shrink-0" />
          <span className="text-10 uppercase tracking-018 text-accent">// open to work · Q3 2026</span>
        </div>

        <h2 className="font-display italic leading-[0.88] tracking-tighter text-ink mb-6"
          style={{ fontSize: 'clamp(52px, 9vw, 128px)' }}>
          Let&apos;s build<br />
          something{' '}
          <em className="italic" style={{ color: 'var(--accent)', textShadow: '0 0 40px rgba(245,158,11,0.25)' }}>
            real.
          </em>
        </h2>

        <p className="font-display italic text-18 md:text-22 text-ink-mute max-w-[520px] leading-135 mb-10">
          Got a project, an idea, or just want to talk shop?
          Drop a message — I reply within 24 hours.
        </p>

        {/* Scrolling ticker */}
        <div className="relative overflow-hidden border-t border-b border-line py-3 -mx-5 md:-mx-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />
          <div className="flex animate-ticker whitespace-nowrap">
            {[...ticker, ...ticker].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 shrink-0 px-6">
                <span className="font-display italic tracking-tight"
                  style={{ fontSize: 'clamp(15px, 2vw, 20px)', color: i % 2 === 0 ? 'var(--ink)' : 'var(--ink-mute)' }}>
                  {item}
                </span>
                <span style={{ color: 'var(--accent)', fontSize: 10 }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contacts ── */}
      <div className="px-5 md:px-8 py-10 border-b border-line">
        <dl className="grid grid-cols-1 md:grid-cols-3-even lg:grid-cols-5-even gap-0">
          {contacts.map((c) => (
            <div key={c.label} className="py-3 md:py-0 md:px-6 border-b md:border-b-0 md:border-l border-line first:border-l-0 first:pl-0">
              <dt className="text-10 text-ink-mute tracking-015 uppercase mb-1">{c.label}</dt>
              <dd className="m-0 text-11">
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-ink hover:text-accent transition-colors duration-150"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-ink">{c.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-5 md:px-8 py-4 flex items-center justify-between text-10 uppercase tracking-012 text-ink-mute">
        <span>Muhammad Ali · 2026</span>
        <span>Lahore, Pakistan</span>
      </div>
    </footer>
  )
}
