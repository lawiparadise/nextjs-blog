import type { Metadata } from 'next'
import BlogLayout from '@/components/Layout/BlogLayout'
import { getDictFileNamesFromFolder, getRecentPosts } from '@/lib/posts'
import ThemeProvider from '@/components/Theme/MuiTheme'
import { cookies } from 'next/headers'
import { Box, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const metadata: Metadata = {
  title: 'posts',
  description: 'hi',
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  const recentPostsData = getRecentPosts()

  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value

  return (
    <ThemeProvider theme={theme}>
      <BlogLayout
        dictFileNamesFromFolder={dictFileNamesFromFolder}
        recentPostsData={recentPostsData}
      >
        {children}
      </BlogLayout>
    </ThemeProvider>

  )
}
