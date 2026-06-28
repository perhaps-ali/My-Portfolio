'use client'
import { motion } from 'framer-motion'

const modules = [
  {
    id: 'frontend',
    title: 'Frontend',
    level: 90,
    tags: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js', 'HTML / CSS'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    level: 75,
    tags: ['FastAPI', 'Django REST', 'Node.js', 'Express', 'REST', 'JWT / Auth', 'OpenAPI'],
  },
  {
    id: 'data',
    title: 'Databases',
    level: 70,
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Mongoose', 'PL/SQL'],
  },
  {
    id: 'tooling',
    title: 'Tooling & Design',
    level: 80,
    tags: ['Git', 'GitHub', 'Linux', 'Figma', 'Bootstrap', 'VS Code'],
  },
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2-even gap-px bg-line border border-line">
      {modules.map((mod, i) => (
        <motion.div
          key={mod.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: i * 0.08, duration: 0.45 }}
          className="bg-bg p-6 md:p-7 flex flex-col gap-5 group hover:bg-bg-soft transition-colors duration-200"
        >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <h3 className="font-display italic text-22 md:text-26 text-ink leading-none group-hover:text-accent transition-colors duration-200">
              {mod.title}
            </h3>
            <span className="font-mono text-[10px] text-accent">{mod.level}%</span>
          </div>

          {/* Proficiency bar */}
          <div className="h-px bg-line relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0"
              style={{ background: 'var(--accent)', height: '1px' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${mod.level}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-[6px]">
            {mod.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-[8px] py-[4px] border border-line text-ink-mute group-hover:border-line-strong transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
