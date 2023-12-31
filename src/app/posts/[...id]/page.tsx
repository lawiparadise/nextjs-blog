import { getPostsPaths, getPostData } from '@/lib/posts'
import MDPost from '@/components/Post/MDPost'
import { Typography } from '@mui/material'

export async function generateStaticParams() {
  return getPostsPaths()
}

export default async function Post({ params }: { params: { id: string | string[] } }) {
  const postData = await getPostData(params.id)

  return (
    <article>
      <Typography variant="h4">{postData.title}</Typography>
      <Typography variant="h6" color="gray">{postData.date}</Typography>
      <MDPost postData={postData.content}/>
    </article>
  )
}
