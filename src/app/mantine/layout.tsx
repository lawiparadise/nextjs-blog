import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blog-main',
  description: 'hi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
