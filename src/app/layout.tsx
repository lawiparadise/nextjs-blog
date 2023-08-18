import './globals.css'
import type { Metadata } from 'next'
import ContextProvider from '@/Context/ContextProvider'
import { CounterContextProvider } from '@/Context/Counter.context'

export const metadata: Metadata = {
  title: 'home',
  description: 'homepage',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CounterContextProvider>
          {children}
        </CounterContextProvider>
      </body>
    </html>
  )
}
