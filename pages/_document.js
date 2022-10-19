// 전체적인 html, head, body 내용 한 번에 바꿀 수 있는 듯

import Document, {Html, Head, Main, NextScript} from 'next/document'
import {createGetInitialProps} from '@mantine/next'

const getInitialProps = createGetInitialProps()

// export default function Document() {
export default class _Document extends Document { // mantine
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html lang="en">
                {/*<Html lang="en">*/}
                <Head/>
                <body>
                {/*<body className="bg-white">*/}
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

