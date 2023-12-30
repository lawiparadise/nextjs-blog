import type { Metadata } from 'next'
import ThemeProvider from '@/components/Theme/MuiTheme'
import BlogLayout from '@/components/Layout/BlogLayout'
import { getDictFileNamesFromFolder, getRecentPosts } from '@/lib/posts'
import { cookies } from 'next/headers'

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