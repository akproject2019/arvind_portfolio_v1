import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Arvind Koli | Senior Android Developer & Mobile Architect',
  description: 'Senior Android Developer with 6+ years of enterprise experience architecting scalable, high-performance mobile solutions. Expert in Kotlin, Jetpack Compose, Clean Architecture, and modern Android development patterns.',
  keywords: ['Senior Android Developer', 'Kotlin Expert', 'Java', 'Mobile App Architect', 'MVVM', 'MVI', 'Clean Architecture', 'Jetpack Compose', 'Android SDK', 'Enterprise Mobile Solutions'],
  authors: [{ name: 'Arvind Koli' }],
  openGraph: {
    title: 'Arvind Koli | Senior Android Developer & Mobile Architect',
    description: 'Architecting enterprise-grade Android solutions that power millions of users. 6+ years delivering high-impact mobile experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
