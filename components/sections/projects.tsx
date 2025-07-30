"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Code, Globe } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack'
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, built using React, Node.js, and OpenAI API integration.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'AI/ML'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Interactive portfolio website with 3D animations, built using Three.js and Framer Motion for stunning visual effects.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'Three.js', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Firebase', 'DnD Kit', 'Material-UI', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with interactive maps, weather forecasts, and location-based services.',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'OpenWeather API', 'Leaflet', 'Chart.js', 'Vuetify'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    id: 6,
    title: 'Blog CMS',
    description: 'Content management system for blogs with markdown support, SEO optimization, and analytics dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Markdown', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack'
  }
]

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML']

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-muted rounded-full text-foreground hover:bg-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <Globe className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 