import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/lib/providers'

export const metadata: Metadata = {
  title: 'home',
  description: 'homepage',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
