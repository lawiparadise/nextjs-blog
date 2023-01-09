// lib폴더는 page처럼 정해진 name이 아님. utils로도 쓰임

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'public');
// const postsDirectory = path.join(process.cwd(), 'posts');
const postsDirectory = path.join(process.cwd(), 'public') + '/posts';

export function getSortedPostsData() { // index에서 볼 것만 가져올거라, md의 내용 말고 graymatter만 가져 옴
    const fileNames = getFileNames()
    // const fileNames = fs.readdirSync(postsDirectory);
    // console.log(fileNames)

    // postsDirectory 폴더 내 md파일만 남기고, 폴더는 지우고 fileNames에 넣기
    // for (let i = 0; i < fileNames.length; i++) {
    //     if (fileNames[i].indexOf('md') === -1) {
    //         fileNames.splice(i, 1)
    //         i--
    //     }
    // }
    // console.log(fileNames)

    const allPostsData = fileNames.map((fileName) => {

        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        }
    })
    return allPostsData.sort(({id: a}, {id: b}) => {
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

// 안 씀
function getFileNamesIDForPath() {
    const fileFolderNames = fs.readdirSync(postsDirectory)
    // console.log(fileFolderNames) // [ 'nextjs-blog', 'ssg-ssr.md', 'temp' ]

    let fileNames = fileFolderNames.reduce((res, cur) => {
        // console.log(cur.substr(cur.length-2, cur.length))
        // cur.substring(cur.length - 2, cur.length)
        // console.log(cur.substring(cur.length-2, cur.length))
        // if (cur.substring(cur.length - 3, cur.length) === '.md') res.push(cur)
        if (cur.substring(cur.length - 3, cur.length) === '.md') res.push([cur.replace(/\.md$/, '')])
        return res;
    }, []);
    // console.log(fileNames) // [ [ 'ssg-ssr' ] ]

    let folderNames = fileFolderNames.reduce((res, cur) => {
        if (cur.substring(cur.length - 3, cur.length) !== '.md') res.push(cur)
        return res;
    }, []);
    // console.log(folderNames) // [ 'nextjs-blog', 'temp' ]

    // console.log(folderNames.length)
    for (let i = 0; i < folderNames.length; i++) {
        // console.log(i)
        let fileNamesInFolder = fs.readdirSync(postsDirectory + '/' + folderNames[i])
        // console.log(fileNamesInFolder)
        for (let j = 0; j < fileNamesInFolder.length; j++) {
            if (fileNamesInFolder[j].substring(fileNamesInFolder[j].length - 7, fileNamesInFolder[j].length) !== '_images') {
                // console.log(fileNamesInFolder)

                let a = []
                a.push(folderNames[i])
                a.push(fileNamesInFolder[j].replace(/\.md$/, ''))
                fileNames.push(a)

                // fileNames.push(fileNamesInFolder.toString())
                // fileNames.push(folderNames[i] + '/' + fileNamesInFolder[j])
            }
        }
    }
    // console.log(fileNames)
    /*
    [
      [ 'ssg-ssr' ],
      [ 'nextjs-blog', 'nextjs-blog-1' ],
      [ 'nextjs-blog', 'nextjs-blog-2' ],
      [ 'nextjs-blog', 'nextjs-blog-3' ],
      [ 'temp', 'pre-rendering' ]
    ]
     */
    return fileNames
}

export function getFolderNames() {
    const fileFolderNames = fs.readdirSync(postsDirectory)
    let folderNames = fileFolderNames.reduce((res, cur) => {
        if (cur.substring
        (cur.length - 3, cur.length) !== '.md') res.push(cur)
        return res;
    }, []);
    return folderNames
}

export function getObj() {
    let obj = {
        'a': ['a', 'b'],
        'b': ['b', 'c'],
        'c': ['c', 'd']
    }
    return obj
}

export function getDictFileNamesFromFolder() {
    var dictObj = {}
    const fileFolderNames = fs.readdirSync(postsDirectory)
    let folderNames = fileFolderNames.reduce((res, cur) => {
        if (cur.substring
        (cur.length - 3, cur.length) !== '.md') res.push(cur)
        return res;
    }, []);

    for (let i = 0; i < folderNames.length; i++) {
        // console.log(i)
        let fileNamesInFolder = fs.readdirSync(postsDirectory + '/' + folderNames[i])
        // console.log(fileNamesInFolder)
        var fileNames = []
        for (let j = 0; j < fileNamesInFolder.length; j++) {
            if (fileNamesInFolder[j].substring(fileNamesInFolder[j].length - 7, fileNamesInFolder[j].length) !== '_images') {
                // console.log(fileNamesInFolder)

                // fileNames.push(fileNamesInFolder.toString())
                fileNames.push(fileNamesInFolder[j].substring(0, fileNamesInFolder[j].length-3))
            }
        }
        dictObj[folderNames[i]] = fileNames
    }
    // console.log("dictObj", dictObj)
    return dictObj
}

export function getFileNames() {
    const fileFolderNames = fs.readdirSync(postsDirectory)
    // console.log(fileFolderNames) // [ 'nextjs-blog', 'ssg-ssr.md', 'temp' ]

    let fileNames = fileFolderNames.reduce((res, cur) => {
        // console.log(cur.substr(cur.length-2, cur.length))
        // cur.substring(cur.length - 2, cur.length)
        // console.log(cur.substring(cur.length-2, cur.length))
        // if (cur.substring(cur.length - 3, cur.length) === '.md') res.push(cur)
        if (cur.substring(cur.length - 3, cur.length) === '.md') res.push(cur)
        return res;
    }, []);
    // console.log(fileNames) // [ 'ssg-ssr.md' ]

    let folderNames = fileFolderNames.reduce((res, cur) => {
        if (cur.substring(cur.length - 3, cur.length) !== '.md') res.push(cur)
        return res;
    }, []);
    // console.log(folderNames) // [ 'nextjs-blog', 'temp' ]

    // console.log(folderNames.length)
    for (let i = 0; i < folderNames.length; i++) {
        // console.log(i)
        let fileNamesInFolder = fs.readdirSync(postsDirectory + '/' + folderNames[i])
        // console.log(fileNamesInFolder)
        for (let j = 0; j < fileNamesInFolder.length; j++) {
            if (fileNamesInFolder[j].substring(fileNamesInFolder[j].length - 7, fileNamesInFolder[j].length) !== '_images') {
                // console.log(fileNamesInFolder)

                // fileNames.push(fileNamesInFolder.toString())
                fileNames.push(folderNames[i] + '/' + fileNamesInFolder[j])
            }
        }
    }
    // console.log(fileNames)
    /*
    [
      'ssg-ssr.md',
      'nextjs-blog/nextjs-blog-1.md',
      'nextjs-blog/nextjs-blog-2.md',
      'nextjs-blog/nextjs-blog-3.md',
      'temp/pre-rendering.md'
    ]
     */
    return fileNames
}

export function getAllPostIds() { // return되는 애들은 string list가 아니라, id를 가지고 있는 object이다. 왜냐면 id를 가지고 dynamic routing을 해야 해서.
    let fileNames = getFileNames()
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '').split('/'),
            },
        }
    });

    // for getFileNamesIDForPath()
    // let fileNames = getFileNamesIDForPath()
    // return fileNames.map((fileName) => {
    //     // console.log(fileName)
    //     return {
    //         params: {
    //             id: fileName,
    //         },
    //     };
    // });

    // postsDirectory 폴더 내 md파일만 남기고, 폴더는 지우고 fileNames에 넣기
    // const fileNames = fs.readdirSync(postsDirectory);
    // for(let i=0 ; i<fileNames.length ; i++){
    //     if(fileNames[i].indexOf('md') === -1){
    //         fileNames.splice(i, 1)
    //         i--
    //     }
    // }
    // console.log(fileNames)

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

export async function getPostData(id) {
    // console.log(id) // [ 'nextjs-blog', 'nextjs-blog-1' ]

    let fullPath = ''
    if (id[1] === undefined) {
        fullPath = path.join(postsDirectory, `${id}.md`)
    } else {
        fullPath = path.join(postsDirectory + '/' + id[0], id[1] + '.md')
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    let content = matterResult.content
    // console.log(content)

    // ![](.pre-rendering_images/15ed293a.png)  >  ![](/posts/temp/.pre-rendering_images/15ed293a.png/)
    const regex = /\!\[(.*?)\]\((.*?)\)/gm
    let matches
    while ((matches = regex.exec(content)) !== null) {
        content = content.replace(
            '](' + matches[2],
            `](/posts/${id[0]}/${matches[2]}/`
        )
    }
    // console.log(content)

    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
