'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import BlogFeatured from '@/components/BlogFeatured'
import TagFilter from '@/components/TagFilter'
import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'

const posts = [
  { slug: 'retrieval-as-ui',   title: 'On retrieval as a first-class UI concern', date: 'May 2026', readTime: '7 min',  category: 'AI',           desc: 'Why RAG belongs in design reviews.', featured: false },
  { slug: 'against-framework', title: 'The case against the framework du jour',   date: 'Apr 2026', readTime: '5 min',  category: 'Web',          desc: 'Half-life of your favorite tool.', featured: false },
  { slug: 'edge-runtimes',     title: 'Edge runtimes, three years in',            date: 'Mar 2026', readTime: '9 min',  category: 'Architecture', desc: 'What I got wrong about cold starts.', featured: false },
  { slug: 'container-queries', title: 'The CSS feature you should be using',      date: 'Jan 2026', readTime: '4 min',  category: 'Frontend',     desc: 'Container queries, finally.', featured: false },
  { slug: 'year-in-code-2025', title: 'Year in code: 2025',                       date: 'Dec 2025', readTime: '6 min',  category: 'DevLog',       desc: 'Numbers, lessons, regrets.', featured: false },
  { slug: 'agent-loops',       title: 'Building agent loops without losing the plot', date: 'Feb 2026', readTime: '11 min', category: 'AI',       desc: 'Patterns I keep reaching for when the model plans, acts, then plans again.', featured: true },
]

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('all')

  const filtered = activeTag === 'all'
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => !p.featured && p.category.toLowerCase() === activeTag)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Hero */}
      <section
        className="grid-bg"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          gap: 32,
          padding: '80px 32px 40px',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(60px, 10vw, 108px)',
          lineHeight: 0.92,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
        }}>
          Field notes.
        </h1>
        <div style={{
          fontSize: 11,
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
          textAlign: 'right',
          lineHeight: 1.8,
          letterSpacing: '0.1em',
        }}>
        <br />
          <span style={{ color: 'var(--accent)' }}>24 entries</span><br />
          since 2021
        </div>
      </section>

      <BlogFeatured />
      <TagFilter active={activeTag} onChange={setActiveTag} />

      {/* Card grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
        background: 'var(--line)',
        border: '1px solid var(--line)',
        margin: '0 32px 32px',
      }}>
        {filtered.map((p) => (
          <BlogCard key={p.slug} {...p} />
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: 48, color: 'var(--ink-mute)', fontSize: 13, gridColumn: '1 / -1', textAlign: 'center' }}>
            No posts in this category yet.
          </div>
        )}
      </div>

      <Footer />
    </motion.div>
  )
}
