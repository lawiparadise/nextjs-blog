import { useState } from 'react'
import { AppProps } from 'next/app';
import '../styles/global.css'
import { CustomFonts } from "../lib/custom-fonts";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
// import BlogLayout from "../components/bloglayout";
// import {getAllPostIds, getDictFileNamesFromFolder, getPostData} from "../lib/posts";

export default function App({ Component, pageProps }: AppProps) { //모든 페이지에 적용되는
                                                                  // top-level component임
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    // const categories = await getDictFileNamesFromFolder();// 이렇게 쓰면 안 됨
    // const dictFileNamesFromFolder = getDictFileNamesFromFolder();// todo app에서 데이터 불러오는거 테스트해보기
  // console.log("categories", categories)

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
