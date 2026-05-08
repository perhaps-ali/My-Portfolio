'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogCardProps {
  slug: string
  title: string
  date: string
  readTime: string
  category: string
  desc: string
}

export default function BlogCard({ slug, title, date, readTime, category, desc }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{}}
      style={{
        background: 'var(--bg)',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        minHeight: 240,
      }}
    >
      <div style={{
        display: 'flex',
        gap: 12,
        fontSize: 10,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--ink-mute)',
      }}>
        <span style={{ color: 'var(--accent)' }}>{category}</span>
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 28,
        lineHeight: 1.05,
        margin: 0,
        color: 'var(--ink)',
      }}>
        {title}
      </h4>
      <p style={{ fontSize: 13, color: 'var(--ink-mute)' }}>{desc}</p>
      <Link
        href={`/blog/${slug}`}
        style={{
          marginTop: 'auto',
          fontSize: 10,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          display: 'inline-block',
          transition: 'transform 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
      >
        Read →
      </Link>
    </motion.div>
  )
}
