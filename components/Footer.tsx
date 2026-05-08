import Link from 'next/link'

const contacts = [
  { label: 'Email',   value: 'hello@muhammadali.dev' },
  { label: 'Github',  value: 'github.com/muhammadali' },
  { label: 'CV',      value: 'read.cv/muhammadali' },
  { label: 'Twitter', value: '@_muhammadali' },
  { label: '© 2026',  value: 'Built with Next.js' },
]

export default function Footer() {
  return (
    <footer style={{
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 60,
      padding: '80px 32px',
      borderTop: '1px solid var(--line)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(60px, 8vw, 120px)',
        lineHeight: 0.92,
        letterSpacing: '-0.02em',
        color: 'var(--ink)',
      }}>
        Let&apos;s build<br />
        something <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>real.</em>
      </h2>
      <dl style={{
        display: 'grid',
        gap: 8,
        alignContent: 'end',
        fontSize: 11,
      }}>
        {contacts.map((c) => (
          <div key={c.label} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr',
            padding: '8px 0',
            borderBottom: '1px solid var(--line)',
          }}>
            <dt style={{
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              {c.label}
            </dt>
            <dd style={{ margin: 0, color: 'var(--ink)' }}>{c.value}</dd>
          </div>
        ))}
      </dl>

      <style>{`
        @media (max-width: 768px) {
          footer { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
