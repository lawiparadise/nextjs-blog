import {useState} from 'react'
import {AppProps} from 'next/app';
import '../styles/global.css'
import DefaultLayout from "../src/components/layouts/DefaultLayout";
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from '@mantine/core';

export default function App({Component, pageProps}: AppProps) { //모든 페이지에 적용되는 top-level component임
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: 'Consolas',
                    colorScheme
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </ColorSchemeProvider>
    )
    // mui
    // <DefaultLayout>
    // <Component {...pageProps} />
    // </DefaultLayout>
}