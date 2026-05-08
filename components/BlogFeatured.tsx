import Link from 'next/link'

export default function BlogFeatured() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      height: 380,
      border: '1px solid var(--line-strong)',
      background: 'var(--bg-soft)',
      margin: '40px 32px',
    }}>
      <div style={{
        padding: 36,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 8,
          }}>
            ★ FEATURED · AI · 11 min
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 48,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: '14px 0',
            color: 'var(--ink)',
          }}>
            Building agent loops without losing the plot.
          </h3>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--ink-mute)',
          }}>
            Patterns I keep reaching for when the model plans, acts, then plans again.
          </p>
        </div>
        <div style={{
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: 'var(--ink-mute)',
        }}>
          <b style={{ color: 'var(--ink)' }}>FEB 2026</b> · architecture · agents · diagrams
        </div>
      </div>
      <div style={{
        borderLeft: '1px solid var(--line)',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-mute)',
        fontSize: 11,
        letterSpacing: '0.12em',
      }}>
        [ cover visual ]
      </div>
    </div>
  )
}
