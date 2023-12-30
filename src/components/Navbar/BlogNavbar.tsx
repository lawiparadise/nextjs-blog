'use client'

import { useState } from "react"
import { List, ListSubheader, ListItemButton, ListItemText, Drawer, Box } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'

export const BlogNavbar = (props: {
  window?: () => Window
  dictFileNamesFromFolder: any
  drawerWidth: number
}) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const dictFileNames = props.dictFileNamesFromFolder

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <List>
      {
        Object.keys(dictFileNames).map((itemA, indexA) => (
          <>
            <ListItemButton>
              <ListItemText primary={itemA} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  dictFileNames[itemA].map((itemB: any, indexB: any) => (
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
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
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
    </Box>
  )
}