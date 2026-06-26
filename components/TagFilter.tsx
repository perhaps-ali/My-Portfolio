'use client'

interface TagFilterProps {
  active: string
  onChange: (tag: string) => void
}

const tags = [
  { label: 'all',          count: 24 },
  { label: 'ai',           count: 8  },
  { label: 'web',          count: 6  },
  { label: 'frontend',     count: 4  },
  { label: 'architecture', count: 4  },
  { label: 'devlog',       count: 2  },
]

export default function TagFilter({ active, onChange }: TagFilterProps) {
  return (
    <div className="px-5 md:px-8 pb-6 border-b border-line flex gap-[6px] flex-nowrap md:flex-wrap overflow-x-auto scrollbar-none">
      {tags.map((t) => (
        <button
          key={t.label}
          onClick={() => onChange(t.label)}
          className="font-mono text-11 tracking-012 uppercase px-3 py-[6px] cursor-pointer"
          style={{
            background: active === t.label ? 'var(--accent)' : 'transparent',
            border: `1px solid ${active === t.label ? 'var(--accent)' : 'var(--line)'}`,
            color: active === t.label ? 'var(--bg)' : 'var(--ink-mute)',
          }}
        >
          {t.label} · {t.count}
        </button>
      ))}
    </div>
  )
}
