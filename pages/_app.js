import '../styles/global.css'
import DefaultLayout from "../src/components/layouts/DefaultLayout";
import {MantineProvider} from '@mantine/core'

export default function App({Component, pageProps}) { //모든 페이지에 적용되는 top-level component임
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                fontFamily: 'Consolas',
                colorScheme: 'light'
            }}
        >
            <Component {...pageProps} />
        </MantineProvider>
    )
    // mui
    // <DefaultLayout>
    // <Component {...pageProps} />
    // </DefaultLayout>
}
