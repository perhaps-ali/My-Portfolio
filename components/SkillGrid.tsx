'use client'
import { motion } from 'framer-motion'

const cards = [
  { num: '01', title: 'Web & Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Tailwind'] },
  { num: '02', title: 'Backend & APIs', items: ['Node.js', 'Express', 'REST', 'WebSockets', 'Auth', 'RBAC'] },
  { num: '03', title: 'Data & Infra', items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'CI/CD', 'Linux'] },
  { num: '04', title: 'AI & Tooling', items: ['OpenAI API', 'LangChain', 'Prompt eng.', 'RAG pipelines'] },
]

export default function SkillGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'var(--line)',
      border: '1px solid var(--line)',
    }}>
      {cards.map((card, i) => (
        <motion.div
          key={card.num}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
          style={{ background: 'var(--bg)', padding: '28px 32px' }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid var(--line)',
            paddingBottom: 14,
            marginBottom: 18,
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 30,
              color: 'var(--ink)',
            }}>
              {card.title}
            </h3>
            <span style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.05em' }}>
              [{card.num} / 04]
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6px 16px',
          }}>
            {card.items.map((item) => (
              <div key={item} style={{
                fontSize: 12,
                padding: '5px 0',
                borderBottom: '1px solid var(--line)',
                color: 'var(--ink)',
              }}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
