"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Your Name' },
    { icon: MapPin, label: 'Location', value: 'Your City, Country' },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
    { icon: Mail, label: 'Email', value: 'your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 234 567 890' },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                    <User className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm"
                >
                  <info.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating 
                modern web applications. I specialize in React, Next.js, Node.js, and cloud technologies, 
                with a strong focus on performance, accessibility, and user experience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I build scalable web applications using cutting-edge technologies. From concept to deployment, 
                I handle every aspect of the development process, ensuring high-quality, maintainable code 
                that delivers exceptional user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and staying up-to-date with the latest industry 
                trends. My development process focuses on collaboration, continuous learning, and delivering 
                solutions that exceed client expectations.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 