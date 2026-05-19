const contacts = [
  { label: 'Email',    value: 'muhammaddali908@gmail.com' },
  { label: 'Phone',    value: '(+92) 3238890511' },
  { label: 'LinkedIn', value: 'linkedin.com/in/muhammad-ali908' },
  { label: 'GitHub',   value: 'github.com/perhaps-ali' },
  { label: '© 2026',  value: 'Built with Next.js' },
]

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-footer gap-10 md:gap-[60px] px-5 md:px-8 py-16 md:py-20 border-t border-line">
      <h2
        className="font-display italic leading-092 tracking-tighter text-ink"
        style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
      >
        Let&apos;s build<br />
        something <em className="text-accent italic">real.</em>
      </h2>
      <dl className="grid gap-2 content-end text-11">
        {contacts.map((c) => (
          <div key={c.label} className="grid grid-cols-contact py-2 border-b border-line">
            <dt className="text-11 text-ink-mute tracking-015 uppercase">{c.label}</dt>
            <dd className="m-0 text-ink">{c.value}</dd>
          </div>
        ))}
      </dl>
    </footer>
  )
}
