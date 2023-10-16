
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion Blog',
  description: 'A Notion clone built with Next.js and TailwindCSS',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-dark.svg',
        href:'/logo-dark.svg'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.svg',
        href:'/logo.svg'
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem={true}
        disableTransitionOnChange
        storageKey='notion-theme'
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
