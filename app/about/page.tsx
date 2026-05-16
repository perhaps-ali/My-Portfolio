'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'

const contactItems = [
  { label: 'Location',  value: 'Lahore, Pakistan / Remote' },
  { label: 'Email',     value: 'muhammaddali908@gmail.com' },
  { label: 'Phone',     value: '(+92) 03238890511' },
  { label: 'LinkedIn',  value: 'linkedin.com/in/muhammad-ali908' },
  { label: 'GitHub',    value: 'github.com/perhaps-ali' },
  { label: 'Status',    value: 'Open to opportunities · Q3 2026' },
]

const education = [
  {
    degree: 'BSc Computer Sciences',
    school: 'Government College University Lahore',
    period: '2020 – 2024',
    notes: 'Programming, software engineering, AI, ML, data mining, databases, OOAD, computer networks. Projects: News site, Catering Management System (FYP), Blood Donation DB.',
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Hero + Bio */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <h1
          className="font-display italic leading-092 tracking-tighter mb-10 md:mb-[60px] text-ink"
          style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
        >
          About.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-about gap-8 md:gap-[60px]">
          <div>
            <p className="font-display italic text-22 md:text-28 leading-15 text-ink mb-7">
              Muhammad Ali is a software engineer based in Lahore, available for remote work globally.
              Four years building production interfaces across finance, automotive, data visualisation,
              and event management.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink-mute mb-6">
              Currently at Arithmiks as a Software Engineer — building frontend systems, admin panels,
              and customer-facing interfaces. Previously trained at Programmers Force and interned at
              Netsol Technologies Ltd.
            </p>
            <p className="font-display italic text-20 md:text-24 leading-155 text-ink-mute">
              Graduate of Government College University Lahore (BSc Computer Sciences, 2024). Full-stack
              capable with a strong frontend focus: React, Next.js, Vue, Node.js, and SQL/NoSQL databases.
            </p>
          </div>
          <div className="md:border-l md:border-line md:pl-8 grid gap-[14px] text-12 text-ink-mute content-start pt-6 md:pt-0 border-t md:border-t-0 border-line">
            {contactItems.map((item) => (
              <div key={item.label}>
                <b className="text-10 uppercase tracking-018 text-accent block mb-1">{item.label}</b>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-5 md:px-8 py-14 md:py-20 border-b border-line">
        <SectionHeader module="// education" title="Academic background." meta="02 degrees" />
        <div className="grid grid-cols-1 md:grid-cols-2-even gap-px bg-line border border-line">
          {education.map((e) => (
            <div key={e.degree} className="bg-bg p-6 md:p-8">
              <div className="text-10 uppercase tracking-018 text-accent mb-3">{e.period}</div>
              <h3 className="font-display italic text-24 md:text-28 text-ink mb-1">{e.degree}</h3>
              <div className="text-12 text-ink-mute mb-4">{e.school}</div>
              <p className="text-12 text-ink-mute leading-16">{e.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
