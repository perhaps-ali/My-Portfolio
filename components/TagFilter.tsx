'use client'
interface TagFilterProps {
  active: string
  onChange: (tag: string) => void
}

const tags = [
  { label: 'all', count: 24 },
  { label: 'ai', count: 8 },
  { label: 'web', count: 6 },
  { label: 'frontend', count: 4 },
  { label: 'architecture', count: 4 },
  { label: 'devlog', count: 2 },
]

export default function TagFilter({ active, onChange }: TagFilterProps) {
  return (
    <div style={{
      padding: '0 32px 24px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
    }}>
      {tags.map((t) => (
        <button
          key={t.label}
          onClick={() => onChange(t.label)}
          style={{
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: active === t.label ? 'var(--accent)' : 'transparent',
            border: `1px solid ${active === t.label ? 'var(--accent)' : 'var(--line)'}`,
            color: active === t.label ? 'var(--bg)' : 'var(--ink-mute)',
            padding: '6px 12px',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {t.label} · {t.count}
        </button>
      ))}
    </div>
  )
}
