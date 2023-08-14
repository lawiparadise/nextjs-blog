import type { Metadata } from 'next'
import BlogLayout from '@/components/Layout/BlogLayout'
import { getDictFileNamesFromFolder, getSortedPostsData } from '@/lib/posts1'

export const metadata: Metadata = {
  title: 'posts',
  description: 'hi',
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  // console.log('dictFileNamesFromFolder', dictFileNamesFromFolder)
  const sortedPostsData = getSortedPostsData()
  // console.log('sortedPostsData', sortedPostsData)

  return (
    <BlogLayout
      dictFileNamesFromFolder={dictFileNamesFromFolder}
      sortedPostsData={sortedPostsData}
    >
      {children}
    </BlogLayout>
  )
}
