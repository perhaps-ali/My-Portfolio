import type { Metadata } from 'next'
import { IBM_Plex_Mono, Cormorant_Garamond, Space_Grotesk } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import Nav from '@/components/Nav'
import AccentCycler from '@/components/AccentCycler'

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Ali — Web & AI Engineer',
    template: '%s · Muhammad Ali',
  },
  description: 'Web and AI engineer building at the edge of the web — interfaces, infrastructure, and intelligence.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadali.dev',
    siteName: 'Muhammad Ali',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable} ${sans.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">
          <AccentCycler />
          <Nav />
          <main>{children}</main>
        </MotionConfig>
      </body>
    </html>
  )
}
