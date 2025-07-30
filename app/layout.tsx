import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yash Gautam - Front-End Engineer & Full-Stack Developer',
  description: 'Front-End Engineer with 3.6+ years of experience building responsive, user-friendly, and scalable web applications. Specializing in React, Next.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'front-end', 'full-stack', 'react', 'next.js', 'typescript', 'yash gautam'],
  authors: [{ name: 'Yash Gautam' }],
  creator: 'Yash Gautam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yash-gautam-portfolio.vercel.app',
    title: 'Yash Gautam - Front-End Engineer & Full-Stack Developer',
    description: 'Front-End Engineer with 3.6+ years of experience building responsive, user-friendly, and scalable web applications.',
    siteName: 'Yash Gautam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Gautam - Front-End Engineer & Full-Stack Developer',
    description: 'Front-End Engineer with 3.6+ years of experience building responsive, user-friendly, and scalable web applications.',
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
    icon: '/favicon.svg',
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