import Head from 'next/head';
import {MainLayout, siteTitle } from "../components";
import utilStyles from '../styles/utils.module.css';
import { getDictFileNamesFromFolder, getSortedPostsData } from "../lib/posts";
// import { getDictFileNamesFromFolder, getSortedPostsData } from "../lib/posts1";
import Link from "next/link";
import Date from "../lib/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    // const categories = getDictFileNamesFromFolder(); // 이건 됨

    return {
        props: {
            allPostsData, //이게 Home에 전달 됨
            // categories
        }
    }
}

export default function Home({ allPostsData, categories }) { // 여기에 인자로 allPostData에 들어 감

    // const aa = getDictFileNamesFromFolder(); TypeError: fs__WEBPACK_IMPORTED_MODULE_0___default(...).readdirSync is not a function

    return (
      // <BlogLayout> 안 됨. 데이터 넘겨줘야 해
      // <BlogLayout categories={categories}> 넘겨주면 잘 됨
      <MainLayout home>
          <Head> {/*여기서 title 지정하면 Layout의 title 무시 */}
              <title>{siteTitle}</title>
          </Head>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Latest</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {/*{title}*/}
                        {/*<br />*/}
                        {/*{id}*/}
                        {/*<br />*/}
                        {/*{date}*/}
                        <Link href={`/posts/${id}`}>
                            {title}
                        </Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                  ))}
              </ul>
          </section>
      </MainLayout>

      // </BlogLayout>
    )
}
