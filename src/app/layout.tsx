import './globals.css'
import type { Metadata } from 'next'
import { ReduxProvider } from '@/lib/redux/ReduxProvider'
import { cookies } from 'next/headers'
import MuiThemeProvider from '@/components/Theme/MuiThemeProvider'

export const metadata: Metadata = {
  title: 'home',
  description: 'homepage',
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
