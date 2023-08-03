import {
    getAllPostIds,
    getDictFileNamesFromFolder,
    getPostData,
    getSortedPostsData
} from "@/lib/posts1";
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css'
import {BlogLayout} from "@/components";
import {useEffect, useState} from "react";

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
    const sortedPostsData = getSortedPostsData();

    return {
        props: {
            postData,
            dictFileNamesFromFolder,
            sortedPostsData,
        }
    }
}

export default function Post(props) {
    const t = `devlog:${props.postData.title}`
    const [hi, setHi] = useState('hi');

    useEffect(()=>{
        fetch("https://media.giphy.com/media/OoxMUQW6wh1EftvSGH/giphy.gif")
            .then(response => setHi(response.url))
    }, [])

    return (
        <BlogLayout
            dictFileNamesFromFolder={props.dictFileNamesFromFolder}
            sortedPostsData={props.sortedPostsData}
        >
            <Head>
                <title>{t}</title>
            </Head>
            <h1>{hi}</h1>
            <article>
                <h1 className={utilStyles.headingXl}>{props.postData.title}</h1>
                <div className={utilStyles.lightText}>
                    {props.postData.date}
                </div>
                <div dangerouslySetInnerHTML={{__html: props.postData.contentHtml}}/>
            </article>
        </BlogLayout>
    );
}
