import { getPostsPaths, getPostData } from '@/lib/posts'
import utilStyles from '@/components/Theme/utils.module.css'
import MDPost from '@/components/Post/MDPost'

export async function generateStaticParams() {
  return getPostsPaths()
}

export default async function Post({ params }: { params: { id: string | string[] } }) {
  const postData = await getPostData(params.id)

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        {postData.date}
      </div>
      <MDPost postData={postData.content}/>
    </article>
  )
}
