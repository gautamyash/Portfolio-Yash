"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led a team of 5 developers on major client projects',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ]
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client applications, focusing on user experience and performance optimization.',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Docker', 'Vercel'],
    achievements: [
      'Built 10+ client applications from concept to deployment',
      'Improved application performance by 50%',
      'Implemented automated testing reducing bugs by 30%'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Specialized in creating responsive and interactive user interfaces for various client projects.',
    technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Git'],
    achievements: [
      'Created 20+ responsive websites for clients',
      'Improved website accessibility scores by 25%',
      'Reduced bundle size by 35% through optimization'
    ]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center space-x-2 mx-auto"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Download Full Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 