"use client"

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
// import {getDictFileNamesFromFolder} from "../lib/posts";
// import {getDictFileNamesFromFolder} from "../lib/posts1"; 왜 안되냐고오오
import { NavLink } from "@mantine/core";
import { getDictFileNamesFromFolder } from "@/lib/posts";
import { Key } from "react";

// import {useState} from "react";

export default function ZLayout({ children }: {
  children: React.ReactNode;
}) {
  // const [activeP, setActiveP] = useState(0);
  // const [activeC, setActiveC] = useState(0);
  // const activeP = 0
  // const activeC = 0

  // const dictFileNamesFromFolder = await getNavItems();
  // const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  // console.log("dictFileNamesFromFolder", dictFileNamesFromFolder) // 잘 뜸!!
  let dictFileNamesFromFolder1 = {
    css: ['css-1', '한글테스트css'],
    eslint: ['eslint-1'],
    git: ['git-flow', 'git-temp'],
    graphql: ['apollo-1', 'graphql-1'],
    html: ['html-basics-1', 'html-basics-2'],
    kubernetes: ['docker-1', 'kubernetes-1'],
    mui: ['mui-1'],
    nextjs: ['nextjs-1'],
    'nextjs-blog': [
      'nextjs-blog-1',
      'nextjs-blog-2',
      'nextjs-blog-3',
      'nextjs-blog-etc-1',
      'nextjs-blog-etc-2',
      'nextjs-mui-1',
    ],
    'node-dev': ['node-dev-1', 'prisma-1'],
    react: ['react-1'],
    signup: ['signup-1'],
    temp: [
      'cors-error', 'developer',
      'fonts', 'http-1',
      'jwt-1', 'login',
      'nx-1', 'pre-rendering',
      'qa', 'ssg-ssr',
      'temp', 'web-storage',
    ],
    typescript: ['typescript-1'],
  }
  let z = '{"css":[{"b":"1"},{"b":"2"}]}'
  const dictFileNamesFromFolder = JSON.parse(z)
  console.log('dictFileNamesFromFolder', dictFileNamesFromFolder['css'])

  return (
    <>
      {/*<div>*/}
      {/*  {*/}
      {/*    <NavLink*/}
      {/*      key={dictFileNamesFromFolder['css']}*/}
      {/*    />*/}
      {/*  }*/}
      {/*  /!*{*!/*/}
      {/*  /!*  // todo ts type error 해결해야 함. dictFileNamesFromFolder*!/*/}
      {/*  /!*  dictFileNamesFromFolder['css'].map((itemC, indexC) => (*!/*/}
      {/*  /!*    <NavLink*!/*/}
      {/*  /!*      px="xl"*!/*/}
      {/*  /!*      key={itemC}*!/*/}
      {/*  /!*      label={itemC}*!/*/}
      {/*  /!*      onClick={() => {*!/*/}
      {/*  /!*        // console.log(indexP, indexC)*!/*/}
      {/*  /!*      }}*!/*/}
      {/*  /!*    />*!/*/}
      {/*  /!*  ))*!/*/}
      {/*  /!*}*!/*/}
      {/*</div>*/}
      {dictFileNamesFromFolder['css'].map((item: { b: Key | null | undefined; }) => (
          <NavLink key={item.b}>
            z
          </NavLink>
        ))}
      {children}
    </>
  )
}