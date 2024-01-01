'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import { Box, IconButton, AppBar, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BlogNavbar from '@/components/Navbar/BlogNavbar'

function getFileNumFromPath(dictFileNames: { [x: string]: string | any[]}, asPath: string) {
  let a: number = -1
  let b: number = -1
  const p = asPath.split('/')
  
  if (p[1] == 'posts' && p[2] != 'june') {
    const folderName = p[2]
    const fileName = p[3]
    a = Object.keys(dictFileNames).indexOf(folderName)
    if (a === undefined) a = 0
    b = dictFileNames[folderName].indexOf(fileName)
  }
  return { a, b }
}

export default function BlogLayout({ children, dictFileNamesFromFolder, recentPostsData, window }: {
  children: React.ReactNode, dictFileNamesFromFolder: any, recentPostsData: any[], window?: () => Window
}) {
  
  // posts
  const pathName = usePathname()
  const ab = getFileNumFromPath(dictFileNamesFromFolder, pathName)
  const [selected, setSelected] = useState(ab)
  const [aList, setAList] = useState<number[]>([ab.a])

  // responsive
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  // drawer
  const drawerWidth = 300

  return (
    <Box sx={{ display: 'flex' }}>

      <Box component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation"
      >
        <BlogNavbar
          dictFileNamesFromFolder={dictFileNamesFromFolder}
          drawerWidth={drawerWidth}
          selected={selected}
          setAB={(v: { a: number; b: number; }) => setSelected(v)}
          aList={aList}
          setAList={(indexP: number) => {
            if (aList.indexOf(indexP) == -1) setAList([indexP, ...aList]);
            else setAList(aList.filter((v) => v != indexP));
          }}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>

      <Box component="main"
        sx={{ flexGrow: 1, p: 3, mt: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {children}
        <Toolbar />
      </Box>

      <AppBar
        color='transparent'
        position="fixed"
        sx={{
          top: 'auto', bottom: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    
    </Box>
  )
}
