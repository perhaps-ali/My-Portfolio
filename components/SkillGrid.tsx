'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    num: '01', title: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Vuex', 'Tailwind CSS', 'Vuetify.js'],
  },
  {
    num: '02', title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'RESTful API', 'WebSockets', 'Auth / JWT', 'RBAC'],
  },
  {
    num: '03', title: 'Databases',
    items: ['MySQL', 'MSSQL', 'PL/SQL', 'MongoDB', 'Mongoose', 'Redis'],
  },
  {
    num: '04', title: 'Tooling',
    items: ['Git', 'GitHub', 'Figma', 'Bootstrap', 'HTML / CSS', 'Linux'],
  },
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2-even gap-px bg-line border border-line">
      {cards.map((card, i) => (
        <motion.div
          key={card.num}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
          className="bg-bg px-6 md:px-8 py-7"
        >
          <div className="flex justify-between items-baseline border-b border-line pb-[14px] mb-[18px]">
            <h3 className="font-display italic text-24 md:text-30 text-ink">{card.title}</h3>
            <span className="text-11 text-accent tracking-005">[{card.num} / 04]</span>
          </div>
          <div className="grid grid-cols-2-even gap-x-4 gap-y-[6px]">
            {card.items.map((item) => (
              <div key={item} className="text-12 py-[5px] border-b border-line text-ink">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
