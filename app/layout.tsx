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
  title: 'Arvind Koli | Senior Android Developer',
  description: 'Senior Android Developer with 6+ years of experience building scalable, high-performance mobile apps using Kotlin, Java, and modern architecture patterns.',
  keywords: ['Android Developer', 'Kotlin', 'Java', 'Mobile Apps', 'MVVM', 'Clean Architecture', 'Jetpack Compose'],
  authors: [{ name: 'Arvind Koli' }],
  openGraph: {
    title: 'Arvind Koli | Senior Android Developer',
    description: 'Building scalable, high-performance Android apps using Kotlin & modern architecture',
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
