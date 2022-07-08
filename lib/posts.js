// lib폴더는 page처럼 정해진 name이 아님. utils로도 쓰임

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public')+'/posts';

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);
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