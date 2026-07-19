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
      className="bg-bg p-8 flex flex-col gap-[14px] min-h-60"
    >
      <div className="flex gap-3 text-10 tracking-016 uppercase text-ink-mute">
        <span className="text-accent">{category}</span>
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <h4 className="font-display italic text-28 leading-105 m-0 text-ink">{title}</h4>
      <p className="text-13 text-ink-mute">{desc}</p>
      <Link
        href={`/blog/${slug}`}
        className="mt-auto text-10 tracking-018 uppercase text-accent inline-block py-2 -my-2 transition-transform duration-150 hover:translate-x-1 active:scale-95"
      >
        Read →
      </Link>
    </motion.div>
  )
}
