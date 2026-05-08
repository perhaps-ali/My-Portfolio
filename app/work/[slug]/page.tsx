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
      {/* Hero — mobile: 1 col. lg+: 2-col side by side */}
      <section className="grid-bg grid grid-cols-1 lg:grid-cols-case-hero gap-8 lg:gap-12 items-end px-5 md:px-8 py-12 md:py-[60px] border-b border-line">
        <div>
          <div className="text-11 uppercase tracking-012 text-ink-mute mb-4">
            {'// work'} / {project.year} / <span className="text-accent">{params.slug}</span>
          </div>
          <h1
            className="font-display italic leading-092 tracking-tighter mb-[14px] text-ink"
            style={{ fontSize: 'clamp(48px, 8vw, 108px)' }}
          >
            {project.title}.
          </h1>
          <p className="font-display text-18 md:text-22 max-w-520 text-ink-mute">{project.tagline}</p>
        </div>

        {/* Cover frame — on mobile sits below text at reduced height */}
        <div className="h-64 lg:h-120 border border-line-strong bg-bg-soft p-[14px] flex flex-col">
          <div className="flex items-center gap-2 pb-[10px] border-b border-line mb-[10px] text-10 tracking-01 text-ink-mute">
            {[0, 1, 2].map((c) => (
              <span key={c} className="w-2 h-2 rounded-full border border-line-strong inline-block" />
            ))}
            <span className="ml-auto">{params.slug}.muhammadali.dev</span>
          </div>
          <div className="flex-1 bg-bg border border-line flex items-center justify-center text-ink-mute text-11 tracking-012">
            [ cover image ]
          </div>
        </div>
      </section>

      {/* Overview — mobile: 1 col. md+: 3 col */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// overview" title="The brief." meta="03 lenses" />
        <div className="grid grid-cols-1 md:grid-cols-3-even gap-px bg-line border border-line">
          {[
            { label: 'Problem', text: 'Existing DB tooling is bloated for analysts or too thin for backend engineers shipping at speed.' },
            { label: 'Role',    text: 'Lead engineer. Architecture, frontend system, query engine, performance.' },
            { label: 'Stack',   text: project.stack.join(' · ') },
          ].map((cell) => (
            <div key={cell.label} className="bg-bg p-6 md:p-8">
              <h4 className="font-mono not-italic text-11 tracking-018 uppercase text-accent mb-[14px]">
                {cell.label}
              </h4>
              <p className="font-display italic text-18 md:text-20 leading-145 text-ink">{cell.text}</p>
            </div>
          ))}
        </div>
      </section>

      {isDataDash && (
        <>
          {/* Architecture diagram — scrollable on mobile */}
          <section className="px-5 md:px-8 py-14 md:py-20">
            <SectionHeader module="// architecture" title="System topology." meta="fig.02" />
            <div className="overflow-x-auto">
              <div className="min-w-[700px]">
                <ArchDiagram />
              </div>
            </div>
          </section>

          <section className="px-5 md:px-8 py-14 md:py-20">
            <SectionHeader module="// process" title="How it happened." meta="03 steps" />
            <ProcessGrid />
          </section>

          <section className="px-5 md:px-8 py-14 md:py-20">
            <SectionHeader module="// results" title="What shipped." meta="04 metrics" />
            <MetricsGrid />
          </section>
        </>
      )}

      {/* Prev / Next */}
      <div className="flex justify-between items-center px-5 md:px-8 py-12 md:py-[60px] border-t border-line">
        <Link href="/work/wecare" className="text-ink">
          <small className="text-10 tracking-018 uppercase text-ink-mute block mb-[6px]">← prev / 02</small>
          <span className="font-display italic text-24 md:text-32">NICGS</span>
        </Link>
        <Link href="/work/sba-loans" className="text-ink text-right">
          <small className="text-10 tracking-018 uppercase text-ink-mute block mb-[6px]">next / 04 →</small>
          <span className="font-display italic text-24 md:text-32">Swerv Automotive</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
