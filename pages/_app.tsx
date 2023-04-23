import { useState } from 'react'
import NextApp, {AppContext, AppProps} from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import '../styles/global.css'
import { CustomFonts } from "../lib/custom-fonts";
import {MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import {getDictFileNamesFromFolder} from "../lib/posts";
import {NextPageContext} from "next";
// import { cookies } from 'next/headers';
import { useRouter } from 'next/router';

export default function App(props: AppProps & {apps: string, colorScheme: ColorScheme}) { //모든 페이지에 적용되는 top-level component임
    const { Component, pageProps } = props;

    // const cookieStore = cookies();
    // const cookie = cookieStore.get('mantine-color-scheme');

    // const router = useRouter();
    // console.log('cookie', router.locales);

    console.log('apps', props.apps);

    // const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
    console.log('current color', colorScheme);

    // const toggleColorScheme = (value?: ColorScheme) =>
    // setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        console.log('color', nextColorScheme);
        setColorScheme(nextColorScheme);
        // when color scheme is updated save it to cookie
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

  // TypeError: fs__WEBPACK_IMPORTED_MODULE_0___default(...).readdirSync is not a function
  // const dictFileNamesFromFolder = getDictFileNamesFromFolder();
  // console.log("dictFileNamesFromFolder", dictFileNamesFromFolder)

  return (
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider withGlobalStyles withNormalizeCSS
          theme={{
            fontFamily: 'D2Coding, Consolas, monospace',
            colorScheme
          }}
        >
          <CustomFonts />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
  )
  // mui
  // <DefaultLayout>
  // <Component {...pageProps} />
  // </DefaultLayout>
}

App.getInitialProps = async (appContext: AppContext) => {
    console.log('app initial');
    // const cookie = appContext.ctx?.req?.headers?.cookie?.slice(-4) //
    // console.log('cookie', cookie);

    const appProps = await NextApp.getInitialProps(appContext);
    return {
        ...appProps,
        apps: appContext.ctx.req.headers['cookie'],
        colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark2',
        // colorScheme: cookie || 'dark2',
    };
};

// _app.tsx에선 getServerSideProps 못 씀
// export function getServerSideProps(context) {
//     console.log('getServerSideProps');
//     console.log('context', context);
//
    // const appProps = await NextApp.getInitialProps(context);
    // return {
        // props: {
        //     ...appProps,
        //     colorScheme: getCookie('mantine-color-scheme', context.ctx) || 'dark2',
        // }
    // };
// }