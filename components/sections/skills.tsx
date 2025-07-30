"use client"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90, color: '#61dafb' },
      { name: 'Next.js', level: 85, color: '#000000' },
      { name: 'TypeScript', level: 88, color: '#3178c6' },
      { name: 'Tailwind CSS', level: 92, color: '#06b6d4' },
      { name: 'HTML/CSS', level: 95, color: '#e34c26' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: '#68a063' },
      { name: 'Express.js', level: 80, color: '#000000' },
      { name: 'MongoDB', level: 75, color: '#4db33d' },
      { name: 'PostgreSQL', level: 70, color: '#336791' },
      { name: 'REST APIs', level: 88, color: '#ff6b6b' },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90, color: '#f05032' },
      { name: 'Docker', level: 75, color: '#2496ed' },
      { name: 'AWS', level: 70, color: '#ff9900' },
      { name: 'Figma', level: 80, color: '#f24e1e' },
      { name: 'VS Code', level: 95, color: '#007acc' },
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === index
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{skill.name}</h3>
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 