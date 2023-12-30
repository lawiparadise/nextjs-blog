'use client'

import {
  AppShell,
} from "@mantine/core";
import { BlogNavbarMantine } from "../Navbar"
import { BlogHeader } from "../Header"
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from "react"
import Counter from '@/components/Counter.component'

function getFileNumFromPath(dictFileNames: {
  [x: string]: string | any[];
}, asPath: string) {
  let p: number = 0
  let c: number = 0
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
  recentPostsData,
}: {
  children: React.ReactNode,
  dictFileNamesFromFolder: any,
  recentPostsData: any[]
}) {
  const router = useRouter()
  const pathName = usePathname()

  const data = dictFileNamesFromFolder;
  const pc = getFileNumFromPath(data, pathName);
  const [selected, setSelected] = useState(pc);
  // console.log('pc', pc)
  const [pList, setPList] = useState<number[]>([pc.p]);
  // console.log('pList', pList)

  // const PrevCountRef = useRef([0]);
  // useEffect(() => {
    // console.log("work");
    // if(PrevCountRef.current == undefined) PrevCountRef.current = [0]
    // else PrevCountRef.current = pList;
  // });

  // const PrevCount = PrevCountRef.current;
  // console.log(pList, PrevCount);

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
        <BlogNavbarMantine
          dictFileNamesFromFolder={data}
          selected={selected}
          setPC={(v: { p: number; c: number; }) => setSelected(v)}
          pList={pList}
          setPlist={(indexP: number) => {
            if (pList.indexOf(indexP) == -1) setPList([indexP, ...pList]);
            else setPList(pList.filter((v) => v != indexP));
          }}
        />
      }
      header={
        <BlogHeader
          sortedPostsData={recentPostsData}
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
