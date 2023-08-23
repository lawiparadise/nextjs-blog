'use client'

import {
  AppShell,
} from "@mantine/core";
import { BlogNavbar } from "../Navbar"
import { BlogHeader } from "../Header"
import { useRouter, usePathname } from 'next/navigation'
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import Counter from '@/components/Counter.component'
import { cookies } from 'next/headers'
import { Box, IconButton, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '@/components'

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

export default function BlogLayout({ children, dictFileNamesFromFolder, recentPostsData }: {
  children: React.ReactNode, dictFileNamesFromFolder: any, recentPostsData: any[]
}) {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      {/*wokring*/}
      <Box>
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Box>
      <main>{children}</main>
    </>
  )
}
