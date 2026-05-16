import Link from 'next/link'
import TopologyDiagram from '@/components/TopologyDiagram'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

type TopoNode = { id: string; label: string; sub: string; top: number; left: number; accent?: boolean }
type TopoEdge = { from: string; to: string }
type Topology = {
  figLabel: string; version: string; height: number
  axisX?: string; axisY?: string
  nodes: TopoNode[]; edges: TopoEdge[]
}
type Project = {
  title: string; tagline: string; year: string; role: string
  stack: string[]; url?: string; urlLabel?: string
  problem: string; roleDesc: string; stackDesc: string
  topology: Topology
}

const projects: Record<string, Project> = {
  'sba-loans': {
    title: 'SBA Loans',
    tagline: 'A platform facilitating Small Business Administration loan workflows.',
    year: '2024',
    role: 'Frontend Developer',
    url: 'https://partner.sbaloanshq.com',
    urlLabel: 'Live site →',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    problem: 'Loan application flows were fragmented, with no unified frontend for applicants and partners managing SBA loan processes.',
    roleDesc: 'Built and structured the complete frontend. Owned all UI across loan application, document upload, and management flows.',
    stackDesc: 'Next.js · TypeScript · Tailwind CSS · REST API',
    topology: {
      figLabel: 'fig.01 — system topology',
      version: 'v1 · production',
      height: 340,
      axisX: 'request lifecycle →',
      axisY: 'layer depth →',
      nodes: [
        { id: 'browser',  label: 'Browser',     sub: 'applicant · partner', top: 60,  left: 40  },
        { id: 'nextapp',  label: 'Next.js App',  sub: 'loan flows · routing', top: 60,  left: 200, accent: true },
        { id: 'sbaapi',   label: 'SBA API',      sub: 'loan processing',     top: 60,  left: 380 },
        { id: 'loandb',   label: 'Loan DB',      sub: 'application data',    top: 60,  left: 560 },
        { id: 'auth',     label: 'Auth',          sub: 'session · JWT',       top: 200, left: 200 },
        { id: 'docstore', label: 'Doc Store',    sub: 'uploads · S3',        top: 200, left: 380 },
      ],
      edges: [
        { from: 'browser',  to: 'nextapp'  },
        { from: 'nextapp',  to: 'sbaapi'   },
        { from: 'sbaapi',   to: 'loandb'   },
        { from: 'nextapp',  to: 'auth'     },
        { from: 'sbaapi',   to: 'docstore' },
      ],
    },
  },

  'swerv': {
    title: 'Swerv',
    tagline: 'UI elevation and interface consistency for an automotive product.',
    year: '2024',
    role: 'Frontend Developer',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    problem: 'Interface inconsistency and poor component cohesion were reducing the product\'s visual quality and usability.',
    roleDesc: 'Elevated the product\'s visual quality and interface consistency. Refined component design, interaction patterns, and overall look and feel.',
    stackDesc: 'React · TypeScript · Tailwind CSS · REST API',
    topology: {
      figLabel: 'fig.01 — system topology',
      version: 'v2 · internal',
      height: 300,
      axisX: 'client → server →',
      axisY: 'layer depth →',
      nodes: [
        { id: 'browser',  label: 'Browser',      sub: 'end user · dealer', top: 60,  left: 40  },
        { id: 'reactapp', label: 'React App',     sub: 'component system',  top: 60,  left: 200, accent: true },
        { id: 'autoapi',  label: 'Automotive API',sub: 'vehicle data',      top: 60,  left: 380 },
        { id: 'cmsdb',    label: 'CMS / DB',      sub: 'inventory · media', top: 60,  left: 560 },
        { id: 'cdn',      label: 'Media CDN',     sub: 'assets · images',   top: 200, left: 200 },
      ],
      edges: [
        { from: 'browser',  to: 'reactapp' },
        { from: 'reactapp', to: 'autoapi'  },
        { from: 'autoapi',  to: 'cmsdb'    },
        { from: 'reactapp', to: 'cdn'      },
      ],
    },
  },

  'nicgs': {
    title: 'NICGS',
    tagline: 'A complete frontend overhaul — rebuilt from scratch, modernised and responsive.',
    year: '2024',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind CSS', 'CMS API', 'REST API'],
    problem: 'The existing website had an outdated design language, poor navigation structure, and no responsiveness across devices.',
    roleDesc: 'Led the complete UI rebuild. Redesigned all pages from the ground up, restructured navigation, and ensured a performant, responsive experience across all devices.',
    stackDesc: 'Next.js · Tailwind CSS · CMS API · REST API',
    topology: {
      figLabel: 'fig.01 — system topology',
      version: 'v3 · revamp',
      height: 340,
      axisX: 'request lifecycle →',
      axisY: 'layer depth →',
      nodes: [
        { id: 'browser',   label: 'Browser',    sub: 'end user',         top: 60,  left: 40  },
        { id: 'nextapp',   label: 'Next.js',    sub: 'revamped ui',      top: 60,  left: 200, accent: true },
        { id: 'cmsapi',    label: 'CMS API',    sub: 'content layer',    top: 60,  left: 380 },
        { id: 'contentdb', label: 'Content DB', sub: 'structured data',  top: 60,  left: 560 },
        { id: 'imgcdn',    label: 'Image CDN',  sub: 'media · assets',   top: 200, left: 200 },
        { id: 'seo',       label: 'SEO Layer',  sub: 'meta · sitemap',   top: 200, left: 380 },
      ],
      edges: [
        { from: 'browser', to: 'nextapp'   },
        { from: 'nextapp', to: 'cmsapi'    },
        { from: 'cmsapi',  to: 'contentdb' },
        { from: 'nextapp', to: 'imgcdn'    },
        { from: 'nextapp', to: 'seo'       },
      ],
    },
  },

  'quanta': {
    title: 'Quanta',
    tagline: 'A data dashboard that connects to multiple databases and auto-generates charts from queries or AI prompts.',
    year: '2024',
    role: 'Full-Stack Contributor',
    url: 'https://quanta-ar.netlify.app/login',
    urlLabel: 'Live demo →',
    stack: ['React', 'FastAPI', 'Gemini / Anthropic', 'PostgreSQL', 'MongoDB', 'REST API'],
    problem: 'Engineers and analysts needed a single interface to query multiple database types and visualise data without manual chart setup.',
    roleDesc: 'Significant UI/UX improvements across the dashboard for data readability and usability. Contributed to backend query routing and AI-prompt chart generation features.',
    stackDesc: 'React · FastAPI · Gemini / Anthropic · PostgreSQL · MongoDB',
    topology: {
      figLabel: 'fig.01 — system topology',
      version: 'v2 · live',
      height: 380,
      axisX: 'request lifecycle →',
      axisY: 'complexity →',
      nodes: [
        { id: 'browser',  label: 'Browser',      sub: 'analyst · engineer', top: 60,  left: 40  },
        { id: 'dashboard',label: 'Dashboard',    sub: 'react · charts',     top: 60,  left: 200, accent: true },
        { id: 'query',    label: 'Query Engine', sub: 'routing · exec',     top: 60,  left: 380, accent: true },
        { id: 'database', label: 'Database',     sub: 'pg · mongo · mysql', top: 60,  left: 560 },
        { id: 'ailayer',  label: 'AI Layer',     sub: 'nl → sql',           top: 210, left: 380, accent: true },
        { id: 'Gemini /  Anthropic',   label: 'Gemini / Anthropic',   sub: 'gpt · embeddings',   top: 210, left: 560 },
      ],
      edges: [
        { from: 'browser',   to: 'dashboard' },
        { from: 'dashboard', to: 'query'     },
        { from: 'query',     to: 'database'  },
        { from: 'query',     to: 'ailayer'   },
        { from: 'ailayer',   to: 'Gemini / Anthropic'    },
      ],
    },
  },

  'wecare': {
    title: 'WeCare',
    tagline: 'Final Year Project — a full-featured MERN stack catering and event management system.',
    year: '2024',
    role: 'Full-Stack Developer',
    url: 'https://github.com/perhaps-ali/WeCare-Online-Catering-Reservation-System-',
    urlLabel: 'GitHub →',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    problem: 'Event organisers and catering businesses had no unified system to manage bookings, menus, and event coordination digitally.',
    roleDesc: 'Built the complete MERN stack application — React frontend, Express REST API, MongoDB data layer, auth, order management, and event coordination flows.',
    stackDesc: 'React · Express · Node.js · MongoDB · Mongoose · JWT',
    topology: {
      figLabel: 'fig.01 — system topology',
      version: 'v1 · fyp',
      height: 420,
      axisX: 'request lifecycle →',
      axisY: 'complexity →',
      nodes: [
        { id: 'browser',  label: 'Browser',      sub: 'customer · admin',   top: 60,  left: 40  },
        { id: 'react',    label: 'React SPA',    sub: 'booking · menu ui',  top: 60,  left: 200, accent: true },
        { id: 'express',  label: 'Express API',  sub: 'rest · auth routes', top: 60,  left: 380, accent: true },
        { id: 'mongo',    label: 'MongoDB',      sub: 'mongoose · atlas',   top: 60,  left: 560 },
        { id: 'auth',     label: 'Auth Module',  sub: 'jwt · bcrypt',       top: 200, left: 200 },
        { id: 'events',   label: 'Event Engine', sub: 'reservations · menu',top: 200, left: 380 },
        { id: 'payment',  label: 'Payment GW',   sub: 'order checkout',     top: 340, left: 380 },
      ],
      edges: [
        { from: 'browser', to: 'react'   },
        { from: 'react',   to: 'express' },
        { from: 'express', to: 'mongo'   },
        { from: 'react',   to: 'auth'    },
        { from: 'express', to: 'events'  },
        { from: 'events',  to: 'payment' },
      ],
    },
  },

  'chatapp': {
    title: 'Chat App',
    tagline: 'Real-time chat frontend built with Vue.js — clean messaging UI and smooth UX.',
    year: '2024',
    role: 'Frontend Developer',
    url: 'https://github.com/perhaps-ali/ChatApp',
    urlLabel: 'GitHub →',
    stack: ['Vue.js', 'Vuex', 'WebSockets', 'Node.js', 'JWT'],
    problem: 'A real-time messaging interface was needed with clean component architecture, user authentication, and responsive design.',
    roleDesc: 'Developed the complete Vue.js frontend — messaging interface, user authentication, real-time WebSocket integration, and responsive component design.',
    stackDesc: 'Vue.js · Vuex · WebSockets · Node.js · JWT',
    topology: {
      figLabel: 'fig.01 — system topology',
      version: 'v1 · shipped',
      height: 320,
      axisX: 'message lifecycle →',
      axisY: 'layer depth →',
      nodes: [
        { id: 'browser',  label: 'Browser',      sub: 'chat user',          top: 60,  left: 40  },
        { id: 'vueapp',   label: 'Vue App',       sub: 'vuex · components',  top: 60,  left: 200, accent: true },
        { id: 'ws',       label: 'WebSocket',     sub: 'socket.io · events', top: 60,  left: 380 },
        { id: 'msgstore', label: 'Msg Store',     sub: 'messages · history', top: 60,  left: 560 },
        { id: 'auth',     label: 'Auth',          sub: 'jwt · sessions',     top: 200, left: 200 },
        { id: 'presence', label: 'Presence',      sub: 'online · typing',    top: 200, left: 380 },
      ],
      edges: [
        { from: 'browser', to: 'vueapp'   },
        { from: 'vueapp',  to: 'ws'       },
        { from: 'ws',      to: 'msgstore' },
        { from: 'vueapp',  to: 'auth'     },
        { from: 'ws',      to: 'presence' },
      ],
    },
  },
}

const slugOrder = ['sba-loans', 'swerv', 'nicgs', 'quanta', 'wecare', 'chatapp']

export async function generateStaticParams() {
  return slugOrder.map((slug) => ({ slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug] ?? projects['sba-loans']
  const idx = slugOrder.indexOf(slug)
  const prevSlug = idx > 0 ? slugOrder[idx - 1] : null
  const nextSlug = idx < slugOrder.length - 1 ? slugOrder[idx + 1] : null

  return (
    <div>
      {/* Hero */}
      <section className="grid-bg grid grid-cols-1 lg:grid-cols-case-hero gap-8 lg:gap-12 items-end px-5 md:px-8 py-12 md:py-[60px] border-b border-line">
        <div>
          <div className="text-11 uppercase tracking-012 text-ink-mute mb-4">
            {'// work'} / {project.year} / <span className="text-accent">{slug}</span>
          </div>
          <h1
            className="font-display italic leading-092 tracking-tighter mb-[14px] text-ink"
            style={{ fontSize: 'clamp(48px, 8vw, 108px)' }}
          >
            {project.title}.
          </h1>
          <p className="font-display text-18 md:text-22 max-w-520 text-ink-mute mb-5">{project.tagline}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-10 uppercase tracking-012 text-accent">{project.role}</span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-10 uppercase tracking-012 text-ink-mute border border-line px-[10px] py-[4px] hover:border-accent hover:text-accent transition-colors"
              >
                {project.urlLabel ?? 'Visit →'}
              </a>
            )}
            {!project.url && (
              <span className="text-10 uppercase tracking-012 text-ink-mute border border-line px-[10px] py-[4px]">
                Private / NDA
              </span>
            )}
          </div>
        </div>

        {/* Cover frame */}
        <div className="h-64 lg:h-120 border border-line-strong bg-bg-soft p-[14px] flex flex-col">
          <div className="flex items-center gap-2 pb-[10px] border-b border-line mb-[10px] text-10 tracking-01 text-ink-mute">
            {[0, 1, 2].map((c) => (
              <span key={c} className="w-2 h-2 rounded-full border border-line-strong inline-block" />
            ))}
            <span className="ml-auto">{slug}.muhammadali.dev</span>
          </div>
          <div className="flex-1 bg-bg border border-line flex items-center justify-center text-ink-mute text-11 tracking-012">
            [ cover image ]
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// overview" title="The brief." meta="03 lenses" />
        <div className="grid grid-cols-1 md:grid-cols-3-even gap-px bg-line border border-line">
          {[
            { label: 'Problem', text: project.problem  },
            { label: 'Role',    text: project.roleDesc  },
            { label: 'Stack',   text: project.stackDesc },
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

      {/* System Topology */}
      <section className="px-5 md:px-8 py-14 md:py-20">
        <SectionHeader module="// architecture" title="System topology." meta="fig.01" />
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
            />
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="flex justify-between items-center px-5 md:px-8 py-12 md:py-[60px] border-t border-line">
        {prevSlug ? (
          <Link href={`/work/${prevSlug}`} className="text-ink">
            <small className="text-10 tracking-018 uppercase text-ink-mute block mb-[6px]">← prev</small>
            <span className="font-display italic text-24 md:text-32">
              {projects[prevSlug]?.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextSlug ? (
          <Link href={`/work/${nextSlug}`} className="text-ink text-right">
            <small className="text-10 tracking-018 uppercase text-ink-mute block mb-[6px]">next →</small>
            <span className="font-display italic text-24 md:text-32">
              {projects[nextSlug]?.title}
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
