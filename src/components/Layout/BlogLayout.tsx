'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import Counter from '@/components/Counter.component'
import { cookies } from 'next/headers'
import { Box, IconButton, useTheme, AppBar, Toolbar, List, ListSubheader, ListItemButton, ListItemText, Drawer, Avatar } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import Collapse from '@mui/material/Collapse'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import { ColorModeContext } from '@/components'

const name = 'devjune'

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
        <Typography variant="h3" fontFamily="Consolas" align="center">
          {name}
        </Typography>
        <p style={{ fontFamily: "Consolas", marginLeft: 25, marginBottom: 0 }}>while:
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <span>&nbsp;</span>
          <span className="pointESC" style={{ "backgroundSize": "40px" }}>E</span>at&nbsp;
          <span className="pointESC" style={{ "backgroundSize": "40px" }}>S</span>leep&nbsp;
          <span className="pointESC" style={{ "backgroundSize": "40px" }}>C</span>ode&nbsp;
        </p>

      </Box>
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
        sx={{ flexGrow: 1, p: 3, mb: 6, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
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
