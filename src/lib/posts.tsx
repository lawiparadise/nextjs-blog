import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const { marked } = require('marked')

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