import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import TopologyDiagram from '@/components/TopologyDiagram'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import { projects, getProject } from '@/lib/projects'

export async function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.indexOf(project)
  const prevProject = idx > 0 ? projects[idx - 1] : null
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <div>
      {/* Hero */}
      <section className="grid-bg grid grid-cols-1 lg:grid-cols-case-hero gap-8 lg:gap-12 items-end px-5 md:px-8 py-12 md:py-[60px] border-b border-line">
        <div>
          <div className="text-10 uppercase tracking-[0.14em] text-ink-mute mb-4 font-mono">
            Work / {project.year} / <span className="text-accent">{slug}</span>
          </div>
          <h1
            className="font-display leading-[0.88] tracking-[-0.03em] mb-4 text-ink"
            style={{ fontSize: 'clamp(48px, 8vw, 108px)' }}
          >
            {project.title}.
          </h1>
          <p className="font-display italic text-18 md:text-22 max-w-[520px] text-ink-mute mb-6 leading-[1.45]">{project.tagline}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-10 uppercase tracking-[0.12em] text-accent font-mono">{project.role}</span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-10 uppercase tracking-[0.1em] text-ink-mute border border-line px-[10px] py-[4px] hover:border-accent hover:text-accent transition-colors font-mono"
              >
                {project.urlLabel ?? 'Visit →'}
              </a>
            )}
            {!project.url && (
              <span className="text-10 uppercase tracking-[0.1em] text-ink-mute border border-line px-[10px] py-[4px] font-mono">
                Private / NDA
              </span>
            )}
          </div>
        </div>

        {/* Cover frame */}
        <div className="h-64 lg:h-120 border border-line-strong bg-bg-soft p-[14px] flex flex-col">
          <div className="flex items-center gap-2 pb-[10px] border-b border-line mb-[10px] font-mono text-[10px] tracking-[0.12em] text-ink-mute">
            {[0, 1, 2].map((c) => (
              <span key={c} className="w-[6px] h-[6px] rounded-full border border-line-strong inline-block" />
            ))}
            <span className="ml-auto">{slug}.muhammadali.dev</span>
          </div>
          <div className="flex-1 border border-line overflow-hidden">
            <Image src={project.cover} alt={project.title} width={1200} height={480} quality={100} className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader label="Overview" title="The brief." meta="3 lenses" />
        <div className="grid grid-cols-1 md:grid-cols-3-even gap-px bg-line border border-line">
          {[
            { label: 'Problem', text: project.problem  },
            { label: 'Role',    text: project.roleDesc  },
            { label: 'Stack',   text: project.stackDesc },
          ].map((cell) => (
            <div key={cell.label} className="bg-bg p-6 md:p-8">
              <h4 className="font-mono text-10 tracking-[0.16em] uppercase text-accent mb-[14px]">
                {cell.label}
              </h4>
              <p className="font-display italic text-18 md:text-20 leading-[1.5] text-ink">{cell.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Topology */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader label="Architecture" title="System topology." meta="fig.01" />
        <div className="overflow-x-auto">
          <div className="min-w-[720px]">
            <TopologyDiagram
              nodes={project.topology.nodes}
              edges={project.topology.edges}
              figLabel={project.topology.figLabel}
              version={project.topology.version}
              height={project.topology.height}
              axisX={project.topology.axisX}
              axisY={project.topology.axisY}
              stack={project.topology.stack}
              stats={project.topology.stats}
            />
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="flex justify-between items-center px-5 md:px-8 py-12 md:py-[60px] border-t border-line">
        {prevProject ? (
          <Link href={`/work/${prevProject.slug}`} className="text-ink">
            <small className="text-10 tracking-018 uppercase text-ink-mute block mb-[6px]">← prev</small>
            <span className="font-display italic text-24 md:text-32">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link href={`/work/${nextProject.slug}`} className="text-ink text-right">
            <small className="text-10 tracking-018 uppercase text-ink-mute block mb-[6px]">next →</small>
            <span className="font-display italic text-24 md:text-32">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <Footer />
    </div>
  )
}
