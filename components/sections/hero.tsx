"use client"
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-600/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Main title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="gradient-text">Hello, I'm</span>
            <br />
            <span className="text-foreground">Your Name</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Full-Stack Developer crafting beautiful, scalable web applications
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              View My Work
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:your@email.com" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 