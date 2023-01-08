import {getAllPostIds, getDictFileNamesFromFolder, getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from '../../lib/date'
import utilStyles from '../../styles/utils.module.css'
import {BlogLayout} from "../../components";

export async function getStaticPaths() { // 여기서 모든 path를 id로부터 만들어 놓는 듯
    let paths = getAllPostIds(); // 이 때 생성되는 paths는 id들을 리스트로 가지고 있음
    return {
        paths,
        fallback: false, //false인 경우 경로 없으면 404 뜸. true인 경우~
    }
}

export async function getStaticProps({params}) { // 사용자의 get 요청 값이 params로 들어감.
    // console.log(params) // [id].js일 경우 { id: 'ssg-ssr' } > [...id].js일 경우 { id: [ 'ssg-ssr' ] }
    // console.log(params.id) // [ 'nextjs-blog', 'nextjs-blog-1' ]
    const postData = await getPostData(params.id)
    const dictFileNamesFromFolder = getDictFileNamesFromFolder();

    return {
        props: {
            postData,
            dictFileNamesFromFolder,
        }
    }
}

export default function Post({postData, dictFileNamesFromFolder}) {
    const t = `devlog:${postData.title}`
    return (
        <BlogLayout dictFileNamesFromFolder={dictFileNamesFromFolder}>
            <Head>
                <title>{t}</title>
            </Head>
            {/*{postData.title}*/}
            {/*<br />*/}
            {/*{postData.id}*/}
            {/*<br />*/}
            {/*{postData.date}*/}
            {/*<Date dateString={postData.date}/>*/}
            {/*<br />*/}
            {/*<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />*/}
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </BlogLayout>
    );
}
