'use client'

import {
  AppShell,
} from "@mantine/core";
import { BlogNavbar } from "../Navbar"
import { BlogHeader } from "../Header"
import { useRouter, usePathname } from 'next/navigation'
import {
  JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal,
  SetStateAction,
  useState,
} from "react";

function getFileNumFromPath(dictFileNames: { [x: string]: string | any[]; }, asPath: string) {
  let p, c: number = 0
  if (asPath.split('/')[2] == 'posts') { // posts로 접근했을 때만 가능하게하기
    const folderName = asPath.split('/')[3]
    const fileName = asPath.split('/')[4]
    // console.log(folderName, fileName)
    p = Object.keys(dictFileNames).indexOf(folderName)
    if(p === undefined) p = 0
    // console.log(p)
    c = dictFileNames[folderName].indexOf(fileName)
    // console.log(c)
  }
  return { p, c }
}

// component만들 때
// export const MainLayout:FC = (props:{home}) => { // FC사용
// export default function DefaultLayout({dictFileNamesFromFolder, children}) { // 기명 함수
// export default function ({dictFileNamesFromFolder, children}) { // 이건 익명도 기명도 아녀
export const BlogLayout = (props: {
  dictFileNamesFromFolder: any;
  sortedPostsData: any[];
  children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
}) => { // 화살표 함수인건가 익명 함수인건가
  const router = useRouter()
  const pathName = usePathname()

  const data = props.dictFileNamesFromFolder;
  // console.log('data', data)
  // const pc = getFileNumFromPath(data, router.asPath);
  const pc = getFileNumFromPath(data, pathName);
  // console.log('pc', pc)
  const [selected, setSelected] = useState(pc);

  const [pList, setPList] = useState<any[]>([pc.p]);
  console.log('pList', pList)

  console.log('selected', selected)

  return (
    <AppShell
      padding="md"
      navbar={
        <BlogNavbar
          dictFileNamesFromFolder={data}
          selected={selected}
          setPC={(v: SetStateAction<{ p: number | undefined; c: number; }>) => setSelected(v)}
          pList={pList}
          setPlist={(indexP: number)=> {
            if (pList.indexOf(indexP) == -1) setPList([indexP, ...pList]);
            else setPList(pList.filter((v) => v != indexP));
          }}
        />
      }
      header={
        <BlogHeader
          sortedPostsData={props.sortedPostsData}
          onItemSubmit={(a) => {
            const path = '/mantine/posts/' + a[0].id;
            const pc2 = getFileNumFromPath(data, path)
            // console.log('pc2', pc2)
            setSelected(pc2);
            router.push(path);
          }}
        />
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <main>{props.children}</main>
    </AppShell>
  )
}
