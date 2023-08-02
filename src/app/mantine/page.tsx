import { getSortedPostsData } from '@/lib/posts1'
// import { MainLayout, siteTitle } from '@/components'
import Head from 'next/head'
import Link from 'next/link'
import Date from '@/lib/date'
import utilStyles from './utils.module.css'
import { getRecentPosts } from '@/lib/posts'

export default function Home() {
  const posts = getRecentPosts()
  // const allPostsData =  [{id:1}, {id:2}]
  const siteTitle = 'hi'

  return (
    <>
      <Head> {/*여기서 title 지정하면 Layout의 title 무시 */}
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {id}
              </Link>
              <br />

            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
