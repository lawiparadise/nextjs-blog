import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'public') + '/posts';

function getFileNames() {
  const fileFolderNames = fs.readdirSync(postsDir)
  // console.log(fileFolderNames)

  let fileNames = fileFolderNames.reduce((res: string[], cur) => {
    if (cur.substring(cur.length - 3, cur.length) === '.md') res.push(cur)
    return res
  }, [])

  const folderNames = getFolderNames(fileFolderNames)

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

function getFolderNames(fileFolderNames: string[]) {
  return fileFolderNames.reduce((res: string[], cur) => {
    if (cur.substring(cur.length - 3, cur.length) !== '.md') res.push(cur)
    return res
  }, [])
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

export function getPostsPaths() {
  let fileNames = getFileNames()
  return fileNames.map(fileName => {
    return {
      id: fileName.replace(/\.md$/, '').split('/'),
    }
  })
}

export async function getPostData(paths: string | string[]) {
  let fullPath = ''
  if (paths[1] === undefined) fullPath = path.join(postsDir, `${paths}.md`)
  else fullPath = path.join(postsDir + '/' + paths[0], paths[1] + '.md')

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  let content = matterResult.content

  const title: string = matterResult.data.title
  const date: string = matterResult.data.date

  // ![](.pre-rendering_images/15ed293a.png)  >  ![](/posts/temp/.pre-rendering_images/15ed293a.png/)
  const regex = /\!\[(.*?)\]\((.*?)\)/gm
  let matches
  while ((matches = regex.exec(content)) !== null) {
    content = content.replace('](' + matches[2], `](\/posts\/${paths[0]}\/${matches[2]}\/`)
  }

  return { paths, title, date, content }
}

export function getDictFileNamesFromFolder() {
  const fileFolderNames = fs.readdirSync(postsDir)
  const folderNames = getFolderNames(fileFolderNames)
  // console.log('folderNames', folderNames)

  const fileNamesFromFolder = folderNames.reduce((a:{[key:string]:string[]}, c) => {
    let fileNamesInFolder = fs.readdirSync(postsDir + '/' + c)

    const fileNames = fileNamesInFolder
      .filter((v2) =>
        v2.substring(v2.length - 7, v2.length) !== '_images',
      ).map((v2) => v2.substring(0, v2.length - 3))
    // console.log('fileNames', fileNames)

    a[c] = fileNames

    return a
  }, {})
  // console.log('fileNamesFromFolder', fileNamesFromFolder)

  return fileNamesFromFolder
}