'use client'

import { useState } from "react"
import { List, ListItemButton, ListItemText, Drawer, Box, Link, useTheme } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import NextLink from 'next/link'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { CatESCAvatar } from "@/components"

export const BlogNavbar = (props: {
  window?: () => Window
  dictFileNamesFromFolder: any
  drawerWidth: number
  selected: { a: unknown; b: any; }
  aList: number[]
  setAList: (indexA: number) => void;
  setAB: (arg0: { a: number; b: any; }) => void;
}) => {
  const dictFileNames = props.dictFileNamesFromFolder

  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const { window } = props
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <>
      <CatESCAvatar />
      <List>
        {
          Object.keys(dictFileNames).map((itemA, indexA) => (
            <>
              <ListItemButton
                onClick={() => props.setAList(indexA)}
              >
                <ListItemText primary={itemA} />
                {props.aList.indexOf(indexA) != -1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={(props.aList.indexOf(indexA) != -1)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                    dictFileNames[itemA].map((itemB: any, indexB: any) => (
                      <Link href={`/posts/${itemA}/${itemB}`} component={NextLink} key={"b-" + itemB} color="inherit" >
                        <ListItemButton sx={{ mx: 2 }}
                          selected={(indexB == props.selected.b && indexA == props.selected.a)}
                          onClick={() => {
                            props.setAB({ a: indexA, b: indexB })
                          }}
                        >
                          <ListItemText primary={itemB} />
                        </ListItemButton>
                      </Link>
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
    <>
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  )
}