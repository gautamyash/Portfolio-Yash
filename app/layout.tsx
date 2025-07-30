import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Your Name - Full-Stack Developer',
  description: 'Full-stack developer portfolio showcasing modern web applications and cutting-edge technologies.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.vercel.app',
    title: 'Your Name - Full-Stack Developer',
    description: 'Full-stack developer portfolio showcasing modern web applications and cutting-edge technologies.',
    siteName: 'Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full-Stack Developer',
    description: 'Full-stack developer portfolio showcasing modern web applications and cutting-edge technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 