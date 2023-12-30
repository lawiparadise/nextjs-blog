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
import { ColorModeContext } from '@/components'
import NextLink from 'next/link'

const name = 'devjune'

function getFileNumFromPath(dictFileNames: {
  [x: string]: string | any[];
}, asPath: string) {
  let a: number = 0
  let b: number = 0
  if (asPath.split('/')[2] == 'posts') { // posts로 접근했을 때만 가능하게하기
    const folderName = asPath.split('/')[3]
    const fileName = asPath.split('/')[4]
    // console.log(folderName, fileName)
    a = Object.keys(dictFileNames).indexOf(folderName)
    if (a === undefined) a = 0
    // console.log(p)
    b = dictFileNames[folderName].indexOf(fileName)
    // console.log(c)
  }
  return { a, b }
}

export default function BlogLayout({ children, dictFileNamesFromFolder, recentPostsData, window }: {
  children: React.ReactNode, dictFileNamesFromFolder: any, recentPostsData: any[], window?: () => Window
}) {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext);


  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerWidth = 300
  const drawer = (
    <>
      <Box sx={{ p: 3 }}>
        <Avatar
          src="/images/coding_cat.gif"
          sx={{ m: 1, width: 144, height: 144, mx: "auto" }}
        />
        <Link href="/" component={NextLink} key="key-title" color="inherit" >
          <Typography variant="h3" fontFamily="Consolas" align="center">
            {name}
          </Typography>
        </Link>
        <p style={{ fontFamily: "Consolas", fontSize: "1.1em", marginLeft: 25, marginBottom: 0 }}>while:
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <span>&nbsp;</span>
          <span className="pointESC3" style={{ "backgroundSize": "16px" }}>E</span>at&nbsp;
          <span className="pointESC3" style={{ "backgroundSize": "17px" }}>S</span>leep&nbsp;
          <span className="pointESC3" style={{ "backgroundSize": "18px" }}>C</span>ode&nbsp;
        </p>

      </Box>
      {/* <Divider /> */}
      <List>
        {
          Object.keys(dictFileNamesFromFolder).map((itemA, indexA) => (
            <>
              <ListItemButton>
                <ListItemText primary={itemA} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                    dictFileNamesFromFolder[itemA].map((itemB: any, indexB: any) => (
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={itemB} />
                      </ListItemButton>
                    ))
                  }
                </List>
              </Collapse>
            </>
          ))
        }
      </List>
    </>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <BlogNavbar dictFileNamesFromFolder={dictFileNamesFromFolder} drawerWidth={drawerWidth} /> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {children}
        <Toolbar />
      </Box>
      {/* <main>{children}</main> */}
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
