// 전체적인 html, head, body 내용 한 번에 바꿀 수 있는 듯

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            {/*<Html lang="en">*/}
            <Head />
            <body>
            {/*<body className="bg-white">*/}
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

