'use client'

import { createTheme, PaletteMode, useMediaQuery } from '@mui/material'
import { orange, amber, grey, deepOrange } from '@mui/material/colors'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { setThemeCookie } from '@/lib/cookieStore'

// https://mui.com/material-ui/customization/dark-mode/
export const ColorModeContext = createContext({
  toggleColorMode: () => {
  },
})

const customTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
  },
})
const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: orange[500],
    // },
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: '1rem'
  //       },
  //     },
  //   },
  // },
  // status: {
  //   danger: orange[500],
  // },
})
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
})

export default function ThemeProvider({ children, theme }: { children: React.ReactNode, theme: any }) {
  console.log('theme', theme)

  // todo useMediaQuery는 나중에 하기
  // const t = theme ?? useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  // console.log('useMediaQuery(\'(prefers-color-scheme: dark)\')', useMediaQuery('(prefers-color-scheme: dark)'))

  const [mode, setMode] = React.useState<'light' | 'dark'>(theme ?? 'dark');
  console.log('mode', mode)

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      console.log('toggle')
      setThemeCookie(mode === 'light' ? 'dark' : 'light').then()

      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    },
  }), [])

  // dark mode from browser setting
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const toggleTheme = useMemo(() =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //   [prefersDarkMode],
  // )

  // todo dark mode from cookie
  const toggleTheme = useMemo(() => createTheme(customTheme(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={toggleTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}