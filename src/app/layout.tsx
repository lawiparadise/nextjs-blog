import './globals.css'
import type { Metadata } from 'next'
import { ReduxProvider } from '@/lib/redux/ReduxProvider'
import { cookies } from 'next/headers'
import MuiThemeProvider from '@/components/Theme/MuiThemeProvider'

const title = process.env.NEXT_PUBLIC_BLOG_TITLE

export const metadata: Metadata = {
  title: title,
  description: title+"dd",
  openGraph: {
    title: title,
    description: "hi there",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value

  return (
    <html lang="ko">
      <body>
        <ReduxProvider>
          <MuiThemeProvider theme={theme}>
            {children}
          </MuiThemeProvider>
        </ReduxProvider>
      </body>
    </html >
  )
}
