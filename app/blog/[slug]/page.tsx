import Link from 'next/link'
import Footer from '@/components/Footer'

const posts: Record<string, { title: string; date: string; category: string; readTime: string; body: string }> = {
  'retrieval-as-ui': {
    title: 'On retrieval as a first-class UI concern',
    date: 'May 2026',
    category: 'AI',
    readTime: '7 min',
    body: 'Why RAG belongs in your design reviews, not just your infra diagrams. When retrieval is an afterthought, the interface pays for it.',
  },
  'agent-loops': {
    title: 'Building agent loops without losing the plot.',
    date: 'Feb 2026',
    category: 'AI',
    readTime: '11 min',
    body: 'Patterns I keep reaching for when the model plans, acts, then plans again. The loop is the interface.',
  },
  'against-framework': {
    title: 'The case against the framework du jour',
    date: 'Apr 2026',
    category: 'Web',
    readTime: '5 min',
    body: 'Every framework has a half-life. The question is whether you bet on the framework or the fundamentals.',
  },
  'edge-runtimes': {
    title: 'Edge runtimes, three years in',
    date: 'Mar 2026',
    category: 'Architecture',
    readTime: '9 min',
    body: 'What I got wrong about cold starts, and what the edge actually is good for.',
  },
  'container-queries': {
    title: 'The CSS feature you should be using',
    date: 'Jan 2026',
    category: 'Frontend',
    readTime: '4 min',
    body: 'Container queries have shipped everywhere. Here is why you should default to them over media queries for component-level layout.',
  },
  'year-in-code-2025': {
    title: 'Year in code: 2025',
    date: 'Dec 2025',
    category: 'DevLog',
    readTime: '6 min',
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
      <section className="grid-bg" style={{ padding: '80px 32px 60px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-mute)',
            marginBottom: 16,
          }}>
            // writing / <span style={{ color: 'var(--accent)' }}>{post.category}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 6vw, 80px)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            color: 'var(--ink)',
          }}>
            {post.title}
          </h1>
          <div style={{
            display: 'flex',
            gap: 16,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-mute)',
            marginBottom: 48,
          }}>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 22,
            lineHeight: 1.6,
            color: 'var(--ink)',
          }}>
            {post.body}
          </p>
        </div>
      </section>
      <div style={{ padding: '60px 32px', borderTop: '1px solid var(--line)' }}>
        <Link href="/blog" style={{
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          color: 'var(--accent)',
        }}>
          ← Back to writing
        </Link>
      </div>
      <Footer />
    </div>
  )
}
