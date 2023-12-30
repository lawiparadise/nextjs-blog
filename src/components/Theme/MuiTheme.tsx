'use client'

import {
  Box,
  createTheme,
  IconButton,
  PaletteMode,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { orange, amber, grey, deepOrange } from '@mui/material/colors'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { changeThemeCookie } from '@/lib/cookieStore'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

// https://mui.com/material-ui/customization/dark-mode/
export const ColorModeContext = createContext({
  toggleColorMode: () => {
  },
})

const customTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
  },
  typography: {
    fontFamily: "D2Coding, Consolas, monospace"
  }
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
  const [mode, setMode] = React.useState<'light' | 'dark'>(theme ?? 'dark');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      fetch('/cookie', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(()=>{
        setMode((prevState)=> (prevState === 'light' ? 'dark' : 'light'))
      })


    },
  }), [])

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