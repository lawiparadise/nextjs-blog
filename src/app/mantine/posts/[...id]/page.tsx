import Head from "next/head";
import { getPostsId, getPostData } from '@/lib/posts'
import utilStyles from '@/components/Theme/utils.module.css'

export async function generateStaticParams() {
  return getPostsId()
}

export default async function Post({ params }: { params: { id: string | string[] } }) {
  // console.log('id', params.id)
  const postData = await getPostData(params.id)
  // console.log(postData)
  // const t = `devlog:${postData.title}`

  return (
    // <BlogLayout
    //   dictFileNamesFromFolder={props.dictFileNamesFromFolder}
    //   sortedPostsData={props.sortedPostsData}
    // >
    <>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>


    // </BlogLayout>

  )
}
