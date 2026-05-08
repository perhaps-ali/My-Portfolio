import Link from 'next/link'
import ArchDiagram from '@/components/ArchDiagram'
import ProcessGrid from '@/components/ProcessGrid'
import MetricsGrid from '@/components/MetricsGrid'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const projects: Record<string, { title: string; tagline: string; year: string; stack: string[] }> = {
  datadash: {
    title: 'DataDash',
    tagline: 'A database manager for engineers who type faster than they click.',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'tRPC', 'Postgres', 'Redis', 'Docker', 'OpenAI'],
  },
  wecare: {
    title: 'WeCare',
    tagline: 'Catering reservations with full menu, order, and payment flows.',
    year: '2024',
    stack: ['Vue', 'Node.js'],
  },
  'sba-loans': {
    title: 'SBa Loans',
    tagline: 'Streamlined loan application and approval workflow.',
    year: '2024',
    stack: ['Next.js', 'Postgres'],
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug] ?? projects['datadash']
  const isDataDash = params.slug === 'datadash'

  return (
    <div>
      {/* Hero */}
      <section
        className="grid-bg"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 48,
          alignItems: 'end',
          padding: '60px 32px',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div>
          <div style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-mute)',
            marginBottom: 16,
          }}>
            // work / {project.year} /{' '}
            <span style={{ color: 'var(--accent)' }}>{params.slug}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(60px, 8vw, 108px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            marginBottom: 14,
            color: 'var(--ink)',
          }}>
            {project.title}.
          </h1>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            maxWidth: 520,
            color: 'var(--ink-mute)',
          }}>
            {project.tagline}
          </p>
        </div>
        {/* Cover frame */}
        <div style={{
          height: 480,
          border: '1px solid var(--line-strong)',
          background: 'var(--bg-soft)',
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            paddingBottom: 10,
            borderBottom: '1px solid var(--line)',
            marginBottom: 10,
            fontSize: 10,
            letterSpacing: '0.1em',
            color: 'var(--ink-mute)',
          }}>
            {[0,1,2].map((c) => (
              <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', border: '1px solid var(--line-strong)', display: 'inline-block' }} />
            ))}
            <span style={{ marginLeft: 'auto' }}>{params.slug}.muhammadali.dev</span>
          </div>
          <div style={{
            flex: 1,
            background: 'var(--bg)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-mute)',
            fontSize: 11,
            letterSpacing: '0.12em',
          }}>
            [ cover image ]
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHeader module="// overview" title="The brief." meta="03 lenses" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'var(--line)',
          border: '1px solid var(--line)',
        }}>
          {[
            { label: 'Problem', text: 'Existing DB tooling is bloated for analysts or too thin for backend engineers shipping at speed.' },
            { label: 'Role', text: 'Lead engineer. Architecture, frontend system, query engine, performance.' },
            { label: 'Stack', text: project.stack.join(' · ') },
          ].map((cell) => (
            <div key={cell.label} style={{ background: 'var(--bg)', padding: 32 }}>
              <h4 style={{
                fontFamily: 'var(--font-mono)',
                fontStyle: 'normal',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 14,
              }}>
                {cell.label}
              </h4>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 20,
                lineHeight: 1.45,
                color: 'var(--ink)',
              }}>
                {cell.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {isDataDash && (
        <>
          {/* Architecture */}
          <section style={{ padding: '80px 32px' }}>
            <SectionHeader module="// architecture" title="System topology." meta="fig.02" />
            <ArchDiagram />
          </section>

          {/* Process */}
          <section style={{ padding: '80px 32px' }}>
            <SectionHeader module="// process" title="How it happened." meta="03 steps" />
            <ProcessGrid />
          </section>

          {/* Results */}
          <section style={{ padding: '80px 32px' }}>
            <SectionHeader module="// results" title="What shipped." meta="04 metrics" />
            <MetricsGrid />
          </section>
        </>
      )}

      {/* Prev / Next */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '60px 32px',
        borderTop: '1px solid var(--line)',
      }}>
        <Link href="/work/wecare" style={{ color: 'var(--ink)' }}>
          <small style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
            display: 'block',
            marginBottom: 6,
          }}>
            ← prev / 02
          </small>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 32,
          }}>
            NICGS
          </span>
        </Link>
        <Link href="/work/sba-loans" style={{ color: 'var(--ink)', textAlign: 'right' }}>
          <small style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
            display: 'block',
            marginBottom: 6,
          }}>
            next / 04 →
          </small>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 32,
          }}>
            Swerv Automotive
          </span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
