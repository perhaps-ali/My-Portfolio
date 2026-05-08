import Link from 'next/link'
import Footer from '@/components/Footer'

const posts: Record<string, { title: string; date: string; category: string; readTime: string; body: string }> = {
  'retrieval-as-ui': {
    title: 'On retrieval as a first-class UI concern',
    date: 'May 2026', category: 'AI', readTime: '7 min',
    body: 'Why RAG belongs in your design reviews, not just your infra diagrams. When retrieval is an afterthought, the interface pays for it.',
  },
  'agent-loops': {
    title: 'Building agent loops without losing the plot.',
    date: 'Feb 2026', category: 'AI', readTime: '11 min',
    body: 'Patterns I keep reaching for when the model plans, acts, then plans again. The loop is the interface.',
  },
  'against-framework': {
    title: 'The case against the framework du jour',
    date: 'Apr 2026', category: 'Web', readTime: '5 min',
    body: 'Every framework has a half-life. The question is whether you bet on the framework or the fundamentals.',
  },
  'edge-runtimes': {
    title: 'Edge runtimes, three years in',
    date: 'Mar 2026', category: 'Architecture', readTime: '9 min',
    body: 'What I got wrong about cold starts, and what the edge actually is good for.',
  },
  'container-queries': {
    title: 'The CSS feature you should be using',
    date: 'Jan 2026', category: 'Frontend', readTime: '4 min',
    body: 'Container queries have shipped everywhere. Here is why you should default to them over media queries for component-level layout.',
  },
  'year-in-code-2025': {
    title: 'Year in code: 2025',
    date: 'Dec 2025', category: 'DevLog', readTime: '6 min',
    body: 'Numbers, lessons, and regrets from a year of shipping.',
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug] ?? posts['agent-loops']

  return (
    <div>
      <section className="grid-bg px-5 md:px-8 pt-14 md:pt-20 pb-12 md:pb-[60px] border-b border-line">
        <div className="max-w-720">
          <div className="text-11 uppercase tracking-012 text-ink-mute mb-4">
            {'// writing /'} <span className="text-accent">{post.category}</span>
          </div>
          <h1
            className="font-display italic leading-none tracking-tighter mb-6 text-ink"
            style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
          >
            {post.title}
          </h1>
          <div className="flex gap-4 text-11 uppercase tracking-012 text-ink-mute mb-10 md:mb-12">
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
          <p className="font-display italic text-18 md:text-22 leading-16 text-ink">{post.body}</p>
        </div>
      </section>
      <div className="px-5 md:px-8 py-12 md:py-[60px] border-t border-line">
        <Link href="/blog" className="text-11 uppercase tracking-016 text-accent">
          ← Back to writing
        </Link>
      </div>
      <Footer />
    </div>
  )
}
