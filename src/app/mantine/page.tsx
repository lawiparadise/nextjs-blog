import Link from 'next/link'
import utilStyles from '@/components/Theme/utils.module.css'
import { getRecentPosts } from '@/lib/posts'
import ThemeProvider from '@/components/Theme/MantineTheme'

export default function Home() {
  const posts = getRecentPosts()
  // console.log('hi', posts)
  // const allPostsData =  [{id:1}, {id:2}]

  return (
    <ThemeProvider home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/mantine/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </ThemeProvider>
  )
}