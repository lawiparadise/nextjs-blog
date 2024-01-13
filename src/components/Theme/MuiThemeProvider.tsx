'use client'

import { createTheme, PaletteMode } from '@mui/material'
import { orange, amber, grey, deepOrange } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';

// https://mui.com/material-ui/customization/dark-mode/
export const ColorModeContext = createContext({
  toggleColorMode: () => {
  },
})

const customTheme = (mode: PaletteMode, mac: Boolean) => ({
  palette: {
    mode,
  },
  typography: {
    fontFamily: "D2Coding, Consolas, monospace"
  },
  components: {
    MuiCssBaseline: {
      ...(mac ? {} : {
          styleOverrides: {
            '*': myScrollbar(mode)
          }
        }
      )
    },
  },
})

function myScrollbar(mode: PaletteMode) {
  const scrollBar = {
    track: "#121212", //'#2b2b2b',
    thumb: '#6b6b6b',
    active: '#959595'
  }

  if (mode === "light") {
    scrollBar.track = grey[200]
    scrollBar.thumb = grey[400]
    scrollBar.active = grey[600]
  }

  return {
    scrollbarWidth: 'thin',
    scrollbarColor: `${scrollBar.thumb} ${scrollBar.track}`,
    'body::-webkit-scrollbar, body *::-webkit-scrollbar': {
      width: '14px',
      height: '14px',
      backgroundColor: scrollBar.track
    },
    'body::-webkit-scrollbar-thumb, body *::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: scrollBar.thumb,
      minHeight: 24,
      border: `3px solid ${scrollBar.track}`
    },
    'body::-webkit-scrollbar-thumb:focus, body *::-webkit-scrollbar-thumb:focus': {
      backgroundColor: scrollBar.active
    },
    'body::-webkit-scrollbar-thumb:active, body *::-webkit-scrollbar-thumb:active': {
      backgroundColor: scrollBar.active
    },
    'body::-webkit-scrollbar-thumb:hover, body *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: scrollBar.active
    },
    'body::-webkit-scrollbar-corner, body *::-webkit-scrollbar-corner': {
      backgroundColor: scrollBar.track
    },

    'nav::-webkit-scrollbar, nav *::-webkit-scrollbar': {
      backgroundColor: 'transparent',
    },
    'nav::-webkit-scrollbar-thumb, nav *::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
    'nav::-webkit-scrollbar-thumb:focus, nav *::-webkit-scrollbar-thumb:focus': {
      backgroundColor: 'transparent',
    },
    'nav::-webkit-scrollbar-thumb:active, nav *::-webkit-scrollbar-thumb:active': {
      backgroundColor: 'transparent',
    },
    'nav::-webkit-scrollbar-thumb:hover, nav *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'transparent',
    },
    'nav::-webkit-scrollbar-corner, nav *::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },
  };
}

export default function MuiThemeProvider({ children, theme }: { children: React.ReactNode, theme: any }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>(theme ?? 'dark');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      fetch('/api/theme', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(() => {
        setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
      })
    },
  }), [])

  const [mac, setMac] = useState(false)
  useEffect(() => {
    if(typeof window !== 'undefined'){
      setMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform))
      // console.log(typeof window, mac)
    }
  }, [mac]);
  // const toggleTheme = useMemo(()=> createTheme(customTheme(mode, mac)), [mode]) // 이거 하면 mac으로 적용 안 됨
  const toggleTheme = createTheme(customTheme(mode, mac))

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={toggleTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}