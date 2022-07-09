// lib폴더는 page처럼 정해진 name이 아님. utils로도 쓰임

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'public');
const postsDirectory = path.join(process.cwd(), 'public')+'/posts';

export function getSortedPostsData(){ // index에서 볼 것만 가져올거라, md의 내용 말고 graymatter만 가져 옴
    const fileNames = fs.readdirSync(postsDirectory);
    // console.log(fileNames)
    for(let i=0 ; i<fileNames.length ; i++){
        if(fileNames[i].indexOf('md') === -1){
            fileNames.splice(i, 1)
            i--
        }
    }
    // console.log(fileNames)
    const allPostsData = fileNames.map((fileName) =>{

        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return{
            id,
            ...matterResult.data,
        }
    })
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    // Instead of the file system,
    // fetch post data from an external API endpoint
    // const res = await fetch('..');
    // return res.json();

    // Instead of the file system,
    // fetch post data from a database
    // return databaseClient.query('SELECT posts...')
}

export function getAllPostIds() { // return되는 애들은 string list가 아니라, id를 가지고 있는 object이다. 왜냐면 id를 가지고 dynamic routing을 해야 해서.
    const fileNames = fs.readdirSync(postsDirectory);
    for(let i=0 ; i<fileNames.length ; i++){
        if(fileNames[i].indexOf('md') === -1){
            fileNames.splice(i, 1)
            i--
        }
    }
    // console.log(fileNames)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: [fileName.replace(/\.md$/, '')],
            },
        };
    });

    // 외부 api로부터 데이터 가져올 수 있음
    // const res = await fetch('..');
    // const posts = await res.json();
    // return posts.map((post) => {
    //     return {
    //         params: {
    //             id: post.id,
    //         },
    //     };
    // });
}

export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}