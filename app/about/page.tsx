'use client'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const sidebarItems = [
  { label: 'Location',     value: 'Lahore, Pakistan / Remote' },
  { label: 'Availability', value: 'Q3 2026 · Open to work' },
  { label: 'Process',      value: 'Design-led, ship daily, write everything down.' },
  { label: 'Tools',        value: 'Cursor · Linear · Figma · iA Writer' },
  { label: 'Hours',        value: 'Mon–Fri · 09:00–17:00 GMT+1' },
  { label: 'Currency',     value: 'USD · NGN · Crypto OK' },
]

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <h1
          className="font-display italic leading-092 tracking-tighter mb-10 md:mb-[60px] text-ink"
          style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
        >
          About.
        </h1>
        {/* Mobile: 1 col. md+: 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <p className="font-display italic text-22 md:text-28 leading-15 text-ink mb-7">
              Muhammad Ali is a Web &amp; AI engineer based in Lahore, available for remote work globally.
              Six years building at the intersection of design and engineering — products that think, scale, and delight.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink-mute">
              Most of my recent work sits at the intersection of architecture and AI: retrieval pipelines, agent loops, the unsexy plumbing that decides whether a clever idea actually ships.
            </p>
          </div>
          <div className="md:border-l md:border-line md:pl-8 grid gap-[14px] text-12 text-ink-mute content-start pt-6 md:pt-0 border-t md:border-t-0 border-line">
            {sidebarItems.map((item) => (
              <div key={item.label}>
                <b className="text-10 uppercase tracking-018 text-accent block mb-1">{item.label}</b>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  )
}
