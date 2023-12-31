import { getDictFileNamesFromFolder, getRecentPosts } from '@/lib/posts'
import BlogLayout from '@/components/Layout/BlogLayout'

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  const recentPostsData = getRecentPosts()

  return (
    <BlogLayout
      dictFileNamesFromFolder={dictFileNamesFromFolder}
      recentPostsData={recentPostsData}
    >
      {children}
    </BlogLayout>
  )
}
