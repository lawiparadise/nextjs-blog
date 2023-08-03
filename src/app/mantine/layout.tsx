import '../globals.css'
import type { Metadata } from 'next'
import ThemeProvider from '@/components/Theme/MantineTheme'

export const metadata: Metadata = {
  title: 'blog-main',
  description: 'hi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider home>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
