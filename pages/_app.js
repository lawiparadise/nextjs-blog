import '../styles/global.css'
import DefaultLayout from "../src/components/layouts/DefaultLayout";

export default function App({Component, pageProps}){ //모든 페이지에 적용되는 top-level component임
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}
