import { getPostsId, getPostData } from '@/lib/posts'
import utilStyles from '@/components/Theme/utils.module.css'
import { getDictFileNamesFromFolder, getSortedPostsData } from '@/lib/posts1'
import { BlogLayout } from '@/components'
import ThemeProvider from '@/components/Theme/MantineTheme'

export async function generateStaticParams() {
  return getPostsId()
}

export default async function Post({ params }: {
  params: {
    id: string | string[]
  }
}) {
  const postData = await getPostData(params.id)
  const dictFileNamesFromFolder = getDictFileNamesFromFolder();
  const sortedPostsData = getSortedPostsData();

  return (
    <BlogLayout
      dictFileNamesFromFolder={dictFileNamesFromFolder}
      sortedPostsData={sortedPostsData}
    >
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </BlogLayout>
  )
}
