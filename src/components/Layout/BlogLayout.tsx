'use client'

import {
  AppShell,
} from "@mantine/core";
import { BlogNavbar } from "../Navbar"
import { BlogHeader } from "../Header"
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from "react"

function getFileNumFromPath(dictFileNames: {
  [x: string]: string | any[];
}, asPath: string) {
  let p, c: number = 0
  if (asPath.split('/')[2] == 'posts') { // posts로 접근했을 때만 가능하게하기
    const folderName = asPath.split('/')[3]
    const fileName = asPath.split('/')[4]
    // console.log(folderName, fileName)
    p = Object.keys(dictFileNames).indexOf(folderName)
    if (p === undefined) p = 0
    // console.log(p)
    c = dictFileNames[folderName].indexOf(fileName)
    // console.log(c)
  }
  return { p, c }
}

export default function BlogLayout({
  children,
  dictFileNamesFromFolder,
  sortedPostsData,
}: {
  children: React.ReactNode,
  dictFileNamesFromFolder: any,
  sortedPostsData: any[]
}) {
  const router = useRouter()
  const pathName = usePathname()

  const data = dictFileNamesFromFolder;
  const pc = getFileNumFromPath(data, pathName);
  const [selected, setSelected] = useState(pc);
  // console.log('pc', pc)
  const [pList, setPList] = useState<any[]>([pc.p]);
  // console.log('pList', pList)

  useEffect(() => {
    // console.log('effect')
    if (pList.indexOf(selected.p) == -1) {
      setPList([selected.p, ...pList])
    }
  }, [pc])

  return (
    <AppShell
      padding="md"
      navbar={
        <BlogNavbar
          dictFileNamesFromFolder={data}
          selected={selected}
          setPC={(v: { p: number | undefined; c: number; }) => setSelected(v)}
          pList={pList}
          setPlist={(indexP: number) => {
            if (pList.indexOf(indexP) == -1) setPList([indexP, ...pList]);
            else setPList(pList.filter((v) => v != indexP));
          }}
        />
      }
      header={
        <BlogHeader
          sortedPostsData={sortedPostsData}
          onItemSubmit={(a) => {
            const path = '/mantine/posts/' + a[0].id;
            const pc2 = getFileNumFromPath(data, path)
            setSelected(pc2);
            router.push(path);
          }}
        />
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <main>{children}</main>
    </AppShell>
  )
}
