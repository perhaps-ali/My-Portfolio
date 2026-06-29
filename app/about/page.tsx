'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'

const contactItems = [
  { label: 'location',  value: 'Lahore, Pakistan / Remote' },
  { label: 'email',     value: 'muhammaddali908@gmail.com' },
  { label: 'phone',     value: '(+92) 3238890511' },
  { label: 'linkedin',  value: 'linkedin.com/in/muhammad-ali908' },
  { label: 'github',    value: 'github.com/perhaps-ali' },
  { label: 'status',    value: 'Open to opportunities · Q3 2026' },
]

const education = [
  {
    degree: 'BSc Computer Sciences',
    school: 'Government College University Lahore',
    period: '2020 – 2024',
    notes: 'Programming, software engineering, AI, ML, data mining, databases, OOAD, computer networks.',
  },
  {
    degree: 'F.Sc Pre-Engineering',
    school: 'Govt. Islamia College Civil Lines',
    period: '2018 – 2020',
    notes: 'Physics, Chemistry, Mathematics.',
  },
]

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero + Bio */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <h1
          className="font-display leading-[0.88] tracking-[-0.03em] mb-10 md:mb-[56px] text-ink"
          style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
        >
          About.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <p className="font-display italic text-22 md:text-28 leading-[1.45] text-ink mb-7">
              Muhammad Ali is a software engineer based in Lahore, available for remote work globally.
              2–3 years building production interfaces across finance, automotive, data visualisation,
              and event management.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-[1.55] text-ink-mute mb-6">
              Currently at Arithmiks — building full-stack systems, admin panels, and customer-facing interfaces.
              Previously trained at Programmers Force and interned at Netsol Technologies Ltd.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-[1.55] text-ink-mute">
              Graduate of Government College University Lahore (BSc Computer Sciences, 2024).
              Full-stack capable
            </p>
          </div>

          {/* Contact manifest table */}
          <div className="pt-6 md:pt-0 border-t md:border-t-0 border-line">
            <div className="border border-line">
              <div className="grid grid-cols-[90px_1fr] border-b border-line bg-bg-soft">
                <div className="px-3 py-2 border-r border-line">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">field</span>
                </div>
                <div className="px-3 py-2">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">value</span>
                </div>
              </div>
              {contactItems.map((item) => (
                <div key={item.label} className="grid grid-cols-[90px_1fr] border-b border-line last:border-b-0">
                  <div className="px-3 py-[10px] border-r border-line">
                    <span className="font-mono text-[10px] text-accent">{item.label}</span>
                  </div>
                  <div className="px-3 py-[10px]">
                    <span className="font-mono text-[11px] text-ink-mute leading-relaxed">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <SectionHeader label="education" title="Academic background." meta="2 degrees" />
        <div className="grid grid-cols-1 md:grid-cols-2-even gap-px bg-line border border-line">
          {education.map((e) => (
            <div key={e.degree} className="bg-bg p-6 md:p-8">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-accent mb-3">{e.period}</div>
              <h3 className="font-display text-22 md:text-26 text-ink mb-2">{e.degree}</h3>
              <div className="font-mono text-11 text-ink-mute mb-4">{e.school}</div>
              <p className="font-mono text-[11px] text-ink-mute leading-[1.7]">{e.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
