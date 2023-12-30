'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import Counter from '@/components/Counter.component'
import { cookies } from 'next/headers'
import { Box, IconButton, useTheme, AppBar, Toolbar, List, ListSubheader, ListItemButton, ListItemText, Drawer, Avatar, Divider, Link } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import Collapse from '@mui/material/Collapse'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import { BlogNavbar, ColorModeContext, CatESCAvatar } from '@/components'
import NextLink from 'next/link'

const name = 'devjune'

function getFileNumFromPath(dictFileNames: {
  [x: string]: string | any[];
}, asPath: string) {
  let a: number = 0
  let b: number = 0
  if (asPath.split('/')[1] == 'posts') {
    const folderName = asPath.split('/')[2]
    const fileName = asPath.split('/')[3]
    a = Object.keys(dictFileNames).indexOf(folderName)
    if (a === undefined) a = 0
    b = dictFileNames[folderName].indexOf(fileName)
  }
  return { a, b }
}

export default function BlogLayout({ children, dictFileNamesFromFolder, recentPostsData, window }: {
  children: React.ReactNode, dictFileNamesFromFolder: any, recentPostsData: any[], window?: () => Window
}) {
  // theme
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext);

  // files
  const pathName = usePathname()
  const ab = getFileNumFromPath(dictFileNamesFromFolder, pathName)
  const [selected, setSelected] = useState(ab)
  const [aList, setAList] = useState<number[]>([ab.a])
  useEffect(() => {
    // console.log('effect')
    if (aList.indexOf(selected.a) == -1) {
      setAList([selected.a, ...aList])
    }
  }, [ab])

  // responsive
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container = window !== undefined ? () => window().document.body : undefined;

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
        />
      </Box>

      <Box component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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
