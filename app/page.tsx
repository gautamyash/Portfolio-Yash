"use client"
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Download, Calendar, Users, Code, Database, Sun, Moon, Phone, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Skill {
  name: string
  level: number
}

interface Project {
  title: string
  description: string
  tech: string[]
  icon: JSX.Element
}

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeDownload = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // This will be the path to your PDF file
    link.download = 'Yash_Gautam_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills: Skill[] = [
    { name: 'React JS', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'Electron.js', level: 60 },
    { name: 'Python', level: 50 },
    { name: 'MongoDB', level: 70 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Git/GitHub', level: 85 }
  ]

  const projects: Project[] = [
    {
      title: "Banking App",
      description: "Comprehensive banking application with real-time financial management dashboard. Features Plaid integration, multiple bank accounts, transfer payments, and spending analytics.",
      tech: ["Next.js 14", "Plaid API", "Dwolla", "Appwrite", "Sentry"],
      icon: <Database className="w-8 h-8 text-green-500" />
    },
    {
      title: "Upstox API Integration - Algo Trading",
      description: "Advanced algorithmic trading system using Upstox API integration with Python. Features real-time market data analysis, automated trading strategies, and portfolio management.",
      tech: ["Python", "Upstox API", "Pandas", "NumPy", "WebSocket"],
      icon: <Code className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Healthify Patient Management System",
      description: "Comprehensive healthcare management platform for patient records, appointment scheduling, medical history tracking, and healthcare provider coordination.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      icon: <Code className="w-8 h-8 text-blue-500" />
    },
    {
      title: "FoodieGram",
      description: "Instagram-like platform exclusively for food photography and recipes. Features include photo sharing, recipe posts, food discovery, and community engagement for food enthusiasts.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3"],
      icon: <Users className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Jute Bag Marketplace",
      description: "E-commerce platform similar to IndiaMART for selling jute bags in USA. Features product catalog, seller management, and international shipping integration.",
      tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      icon: <Database className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Indian Games Streaming Platform",
      description: "Twitch-like platform specifically for streaming Indian games. Features live streaming, chat system, game categories, and user engagement tools.",
      tech: ["Next.js", "WebRTC", "Socket.io", "Redis"],
      icon: <Users className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with order processing, inventory management, staff scheduling, and customer relationship management.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      icon: <Database className="w-8 h-8 text-red-500" />
    },
    {
      title: "ImpactTrackPro",
      description: "Platform connecting NGOs with volunteers. Features volunteer registration, NGO profiles, project matching, and impact tracking for social causes.",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      icon: <Code className="w-8 h-8 text-green-500" />
    },
    {
      title: "Fan Arena",
      description: "Social media platform for sports enthusiasts. Users can share sports content, connect with athletes, and discover sports-related activities.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      icon: <Users className="w-8 h-8 text-purple-500" />
    },
    {
      title: "UrbanCraft",
      description: "E-commerce platform for urban lifestyle products. Features include product catalog, shopping cart, payment integration, and order management.",
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      icon: <Database className="w-8 h-8 text-red-500" />
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/95 backdrop-blur-md border-gray-700' : 'bg-white/95 backdrop-blur-md border-gray-200'} border-b`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Yash Gautam</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to home section"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to about section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className={`transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to experience section"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to projects section"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to contact section"
              >
                Contact
              </button>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className={`p-3 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              className={`md:hidden p-3 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-4 h-0.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-4 h-0.5 mt-1 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-4 h-0.5 mt-1 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 space-y-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4`}>
              <button 
                onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} 
                className={`block w-full text-left py-2 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to home section"
              >
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
                className={`block w-full text-left py-2 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to about section"
              >
                About
              </button>
              <button 
                onClick={() => { scrollToSection('experience'); setIsMenuOpen(false); }} 
                className={`block w-full text-left py-2 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to experience section"
              >
                Experience
              </button>
              <button 
                onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} 
                className={`block w-full text-left py-2 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to projects section"
              >
                Projects
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
                className={`block w-full text-left py-2 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Go to contact section"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Yash Gautam</span>
              </h1>
              <h2 className="text-3xl md:text-4xl mb-8 font-semibold">
                Front-End Engineer & Full-Stack Developer
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                Highly skilled and creative Front-End Developer with 3.6+ years of experience building responsive, 
                user-friendly, and scalable web applications. Passionate about building impactful digital products.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="View my projects"
              >
                View My Work
              </button>
              <button 
                onClick={handleResumeDownload}
                className="px-10 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                aria-label="Download my resume"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-8"
            >
              <a 
                href="https://github.com/gautamyash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Visit my GitHub profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yash-gauta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Visit my LinkedIn profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:gautamyash37@gmail.com" 
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Send me an email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-20"
          >
            About Me
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed">
                I'm a passionate Front-End Engineer with 3.6+ years of experience, 
                specializing in React, Next.js, and modern web technologies. I love creating user-friendly 
                applications that solve real-world problems.
              </p>
              <p className="text-xl leading-relaxed">
                Based in Pune, India, I focus on building impactful digital products, especially in the 
                education and tech-for-good space. I'm always eager to learn new technologies and take on 
                challenging projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pune, India
                  </p>
                </div>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                  <h4 className="font-semibold text-lg mb-2">Experience</h4>
                  <p>3.6+ Years</p>
                </div>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                  <h4 className="font-semibold text-lg mb-2">Education</h4>
                  <p>B.E. Mechanical</p>
                </div>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                  <h4 className="font-semibold text-lg mb-2">Contact</h4>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91 7869711588
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-20"
          >
            Professional Experience
          </motion.h2>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Freelancing Experience - NEWEST */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className={`p-8 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-l-4 border-purple-500`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Full-Stack Engineer (Freelancing)</h3>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">Mar 2023 - Present</span>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  Working as an independent contractor, delivering high-quality web applications for various clients. 
                  Specializing in React, Next.js, and modern web technologies. Building scalable solutions with focus on 
                  clean UI/UX, performance, and maintainable code.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Tailwind CSS</span>
                </div>
              </div>
            </motion.div>

            {/* EdBuddy Experience - OLDEST */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className={`p-8 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-l-4 border-blue-500`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Front-End Engineer - EdBuddy</h3>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Mar 2021 - Feb 2023</span>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  Led development of EdBuddy platform, a comprehensive mentor booking system and blog/CMS for students and mentors. 
                  Built features including mentor availability management, time slot booking with notifications, and content management system.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Express</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">MongoDB</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Calendar APIs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Projects Section */}
       <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
         <div className="container mx-auto px-6">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl font-bold text-center mb-20"
           >
             Featured Projects
           </motion.h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project, index) => (
               <motion.div 
                 key={project.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 className={`rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
               >
                 <div className="mb-6">{project.icon}</div>
                 <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                 <p className="text-lg mb-6 leading-relaxed">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.tech.map(tech => (
                     <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                       {tech}
                     </span>
                   ))}
                 </div>
                 <a 
                   href="#" 
                   className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-semibold"
                   aria-label={`View ${project.title} project`}
                 >
                   View Project <ExternalLink className="w-4 h-4" />
                 </a>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* EdBuddy Projects Section */}
       <section id="edbuddy-projects" className="py-24">
         <div className="container mx-auto px-6">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl font-bold text-center mb-20"
           >
             EdBuddy Platform Projects
           </motion.h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className={`rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
             >
               <div className="mb-6">
                 <Users className="w-8 h-8 text-blue-500" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Mentor Booking System</h3>
               <p className="text-lg mb-6 leading-relaxed">
                 Comprehensive mentor booking platform with real-time availability management, 
                 time slot booking, and automated notification system for students and mentors.
               </p>
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   React
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   Next.js
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   Express
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   MongoDB
                 </span>
               </div>
               <a 
                 href="#" 
                 className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-semibold"
                 aria-label="View Mentor Booking System project"
               >
                 View Project <ExternalLink className="w-4 h-4" />
               </a>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className={`rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
             >
               <div className="mb-6">
                 <Code className="w-8 h-8 text-green-500" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Content Management System</h3>
               <p className="text-lg mb-6 leading-relaxed">
                 Advanced CMS for educational content with blog management, 
                 course creation, and multimedia support for students and mentors.
               </p>
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   React
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   Node.js
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   Express
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   MongoDB
                 </span>
               </div>
               <a 
                 href="#" 
                 className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-semibold"
                 aria-label="View Content Management System project"
               >
                 View Project <ExternalLink className="w-4 h-4" />
               </a>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className={`rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
             >
               <div className="mb-6">
                 <Calendar className="w-8 h-8 text-purple-500" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Calendar Integration</h3>
               <p className="text-lg mb-6 leading-relaxed">
                 Seamless calendar integration with Google Calendar APIs for 
                 automated scheduling, timezone handling, and conflict resolution.
               </p>
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   React
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   Google Calendar API
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   Express
                 </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                   MongoDB
                 </span>
               </div>
               <a 
                 href="#" 
                 className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-semibold"
                 aria-label="View Calendar Integration project"
               >
                 View Project <ExternalLink className="w-4 h-4" />
               </a>
             </motion.div>
           </div>
         </div>
       </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-20"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                <p className="text-xl leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's work together to build something amazing!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <a href="mailto:gautamyash37@gmail.com" className="text-lg hover:text-blue-500 transition-colors">
                      gautamyash37@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-500" />
                    <a href="tel:+917869711588" className="text-lg hover:text-blue-500 transition-colors">
                      +91 7869711588
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <span className="text-lg">Pune, India</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <a 
                  href="mailto:gautamyash37@gmail.com" 
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Send me an email"
                >
                  <Mail className="w-6 h-6" />
                  Send Email
                </a>
                <a 
                  href="tel:+917869711588" 
                  className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  aria-label="Call me"
                >
                  <Phone className="w-6 h-6" />
                  Call Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 