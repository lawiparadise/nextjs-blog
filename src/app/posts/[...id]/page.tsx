import { getPostsPaths, getPostData } from '@/lib/posts'
import MDPost from '@/components/Post/MDPost'

export async function generateStaticParams() {
  return getPostsPaths()
}

export default async function Post({ params }: { params: { id: string | string[] } }) {
  const postData = await getPostData(params.id)

  return (
    <article>
      <h1>{postData.title}</h1>
      <div>
        {postData.date}
      </div>
      <MDPost postData={postData.content}/>
    </article>
  )
}
