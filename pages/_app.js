import '../styles/global.css'

export default function App({Component, pageProps}){ //모든 페이지에 적용되는 top-level component임
    return <Component {...pageProps} />
}