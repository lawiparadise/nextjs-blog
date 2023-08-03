import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import { marked } from 'marked';
// import Prism from 'prismjs';
// import loadLanguages from 'prismjs/components/';
// loadLanguages(['bash', 'javascript']);

const postsDir = path.join(process.cwd(), 'public') + '/posts';

function getFileNames() {
  const fileFolderNames = fs.readdirSync(postsDir)
  // console.log(fileFolderNames)

  let fileNames = fileFolderNames.reduce((res: string[], cur) => {
    if (cur.substring(cur.length - 3, cur.length) === '.md') res.push(cur)
    return res
  }, [])

  const folderNames = fileFolderNames.reduce((res: string[], cur) => {
    if (cur.substring(cur.length - 3, cur.length) !== '.md') res.push(cur)
    return res
  }, [])

  for (let i = 0; i < folderNames.length; i++) {
    const fileNamesInFolder = fs.readdirSync(postsDir + '/' + folderNames[i])
    for (let j = 0; j < fileNamesInFolder.length; j++) {
      if (fileNamesInFolder[j].substring(fileNamesInFolder[j].length - 7, fileNamesInFolder[j].length) !== '_images') {
        fileNames.push(folderNames[i] + '/' + fileNamesInFolder[j])
      }
    }
  }
  // console.log(fileNames)
  return fileNames
}

export function getRecentPosts() {
  const fileNames = getFileNames()

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    // console.log('kjk', matterResult.data.title)
    const title: string = matterResult.data.title
    const date: string = matterResult.data.date

    return { id, title, date }
  })

  // console.log(allPostsData)

  return allPostsData.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
  })
}

export function getPostsId() {
  let fileNames = getFileNames()
  return fileNames.map(fileName => {
    return {
      id: fileName.replace(/\.md$/, '').split('/'),
    }
  })
}

export async function getPostData(id: string | string[]) {
  let fullPath = ''
  if (id[1] === undefined) fullPath = path.join(postsDir, `${id}.md`)
  else fullPath = path.join(postsDir + '/' + id[0], id[1] + '.md')

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  let content = matterResult.content

  const title: string = matterResult.data.title
  const date: string = matterResult.data.date

  // ![](.pre-rendering_images/15ed293a.png)  >  ![](/posts/temp/.pre-rendering_images/15ed293a.png/)
  const regex = /\!\[(.*?)\]\((.*?)\)/gm
  let matches
  while ((matches = regex.exec(content)) !== null) {
    content = content.replace('](' + matches[2], `](/posts/${id[0] ? id[0] : id}/${matches[2]}/`)
  }

  // const renderer = {
  //   code(code: any, infostring: string | number) {
  //     try {
  //       return `<pre class = "language-${infostring}"><code class = "language-${infostring}">${Prism.highlight(
  //         code,
  //         Prism.languages[infostring],
  //         infostring,
  //       )}</code></pre>`;
  //     } catch (err) {
  //       return false;
  //     }
  //   }
  // }
  // marked.use({ renderer })

  // const contentHtml = marked(content);
  const contentHtml = content

  return { id, title, date, contentHtml }
}
