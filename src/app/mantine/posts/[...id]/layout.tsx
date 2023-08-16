import type { Metadata } from 'next'
import BlogLayout from '@/components/Layout/BlogLayout'
import { getDictFileNamesFromFolder, getRecentPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'posts',
  description: 'hi',
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  // console.log('dictFileNamesFromFolder', dictFileNamesFromFolder)
  const recentPostsData = getRecentPosts()
  // console.log('sortedPostsData', sortedPostsData)

  return (
    <BlogLayout
      dictFileNamesFromFolder={dictFileNamesFromFolder}
      recentPostsData={recentPostsData}
    >
      {children}
    </BlogLayout>
  )
}
