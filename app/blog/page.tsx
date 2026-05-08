'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import BlogFeatured from '@/components/BlogFeatured'
import TagFilter from '@/components/TagFilter'
import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'

const posts = [
  { slug: 'retrieval-as-ui',   title: 'On retrieval as a first-class UI concern', date: 'May 2026', readTime: '7 min',  category: 'AI',           desc: 'Why RAG belongs in design reviews.',                                                 featured: false },
  { slug: 'against-framework', title: 'The case against the framework du jour',   date: 'Apr 2026', readTime: '5 min',  category: 'Web',          desc: 'Half-life of your favorite tool.',                                                   featured: false },
  { slug: 'edge-runtimes',     title: 'Edge runtimes, three years in',            date: 'Mar 2026', readTime: '9 min',  category: 'Architecture', desc: 'What I got wrong about cold starts.',                                                featured: false },
  { slug: 'container-queries', title: 'The CSS feature you should be using',      date: 'Jan 2026', readTime: '4 min',  category: 'Frontend',     desc: 'Container queries, finally.',                                                        featured: false },
  { slug: 'year-in-code-2025', title: 'Year in code: 2025',                       date: 'Dec 2025', readTime: '6 min',  category: 'DevLog',       desc: 'Numbers, lessons, regrets.',                                                         featured: false },
  { slug: 'agent-loops',       title: 'Building agent loops without losing the plot', date: 'Feb 2026', readTime: '11 min', category: 'AI',       desc: 'Patterns I keep reaching for when the model plans, acts, then plans again.',         featured: true  },
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
      <section className="grid-bg grid grid-cols-[1fr_auto] items-end gap-4 md:gap-8 px-5 md:px-8 pt-14 md:pt-20 pb-8 md:pb-10 border-b border-line">
        <h1
          className="font-display italic leading-092 tracking-tighter text-ink"
          style={{ fontSize: 'clamp(48px, 10vw, 108px)' }}
        >
          Field notes.
        </h1>
        <div className="text-10 md:text-11 uppercase text-ink-mute text-right leading-18 tracking-01">
          {'// writing'}<br />
          <span className="text-accent">24 entries</span><br />
          since 2021
        </div>
      </section>

      <BlogFeatured />
      <TagFilter active={activeTag} onChange={setActiveTag} />

      {/* Card grid — mobile: 1 col. md+: 2 col */}
      <div className="grid grid-cols-1 md:grid-cols-2-even gap-px bg-line border border-line mx-5 md:mx-8 mb-8">
        {filtered.map((p) => (
          <BlogCard key={p.slug} {...p} />
        ))}
        {filtered.length === 0 && (
          <div className="p-12 text-ink-mute text-13 col-span-2 text-center">
            No posts in this category yet.
          </div>
        )}
      </div>

      <Footer />
    </motion.div>
  )
}
