import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First sfds   Post</title>
                {/*<script src="https://connect.facebook.net/en_US/sdk.js" />  /!*이런 방식은 페이지 컨텐츠 로딩에 딜레이 발생시킬수도있음*!/*/}
            </Head>
            {/*이런 방식으로 넣어야 됨*/}
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

        </>
    )
}

// ??이거 어떻게 쓰는거임
const YourComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);