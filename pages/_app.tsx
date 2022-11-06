import { useState } from 'react'
import { AppProps } from 'next/app';
import '../styles/global.css'
import { CustomFonts } from "../lib/custom-fonts";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import BlogLayout from "../components/bloglayout";
import {getDictFileNamesFromFolder} from "../lib/posts";

export default function App({ Component, pageProps }: AppProps) { //모든 페이지에 적용되는
                                                                  // top-level component임
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  // TypeError: fs__WEBPACK_IMPORTED_MODULE_0___default(...).readdirSync is not a function
  // const dictFileNamesFromFolder = getDictFileNamesFromFolder();
  // console.log("dictFileNamesFromFolder", dictFileNamesFromFolder)

  return (
    // <BlogLayout dictFileNamesFromFolder={dictFileNamesFromFolder}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: 'D2Coding, Consolas, monospace',
            colorScheme
          }}
        >
          <CustomFonts />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    // </BlogLayout>
  )
  // mui
  // <DefaultLayout>
  // <Component {...pageProps} />
  // </DefaultLayout>
}
