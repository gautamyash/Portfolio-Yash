# 🚀 Developer Portfolio Website

A blazing fast, visually stunning, and interactive developer portfolio website built with modern web technologies including Next.js, Three.js, and Framer Motion.

## ✨ Features

- **3D Animations**: Interactive 3D backgrounds and skill spheres using Three.js
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Smooth theme switching with system preference detection
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Contact Form**: Functional contact form with email integration
- **Smooth Animations**: Beautiful page transitions and micro-interactions
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend (Optional)
- **Next.js API Routes** - Serverless API endpoints
- **Nodemailer** - Email functionality
- **MongoDB** - Database (optional)

### Deployment
- **Vercel** - Hosting platform
- **MongoDB Atlas** - Cloud database

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Social Links
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── three/            # Three.js components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `components/sections/hero.tsx` - Hero section content
- `components/sections/about.tsx` - About section
- `components/sections/contact.tsx` - Contact information

### Projects
Add your projects in `components/sections/projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
    category: 'Full-Stack'
  }
]
```

### Skills
Update your skills in `components/sections/skills.tsx`:
```typescript
const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: '#61dafb' },
      // Add more skills...
    ]
  }
]
```

### Experience
Update your work experience in `components/sections/experience.tsx`:
```typescript
const experiences = [
  {
    id: 1,
    title: 'Your Position',
    company: 'Your Company',
    // Add more details...
  }
]
```

## 📧 Email Configuration

To enable the contact form email functionality:

1. **Gmail Setup** (Recommended for beginners):
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in your `.env.local`

2. **Other Email Services**:
   - Update the transporter configuration in `app/api/contact/route.ts`
   - Configure your email service credentials

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

### Environment Variables for Production
Make sure to add these in your Vercel dashboard:
- `EMAIL_USER`
- `EMAIL_PASS`
- `NEXT_PUBLIC_GITHUB_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_TWITTER_URL`

## 🎯 Performance Optimization

- **Images**: Use Next.js Image component for optimization
- **Fonts**: Google Fonts are optimized automatically
- **3D**: Three.js components are lazy-loaded
- **Animations**: Framer Motion optimizes animations
- **Bundle**: Tree-shaking and code splitting enabled

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks (optional)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework
- [Lucide Icons](https://lucide.dev/) for icons

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio contact form
- Reach out on social media

---

**Happy coding! 🎉** 