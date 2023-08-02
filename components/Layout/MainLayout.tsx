import styles from './layout.module.css' // CSS import해주고
import utilStyles from '../../styles/utils.module.css'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
    AppShell,
    Navbar,
    Header,
    Group,
    Text,
    Avatar,
    ActionIcon,
    NavLink,
    ScrollArea,
    useMantineColorScheme
} from "@mantine/core";
import {FC} from "react";

const name = 'devjune'
export const siteTitle = 'devlog'

export const MainLayout = ({children, home}) => { // Layout태그 만들어 줌
    // return <div className={styles.container}>{children}</div>

    return (
        <div className={styles.container}>
            <Head>
                <title>hihi</title> {/*여기서 타이틀 지정해도, 사용하는 곳에서 Head안에 title 재지정해주면 그걸로 적용 됨*/}
                <link rel="icon" href="/images/favicon.ico"/>
                {/*<metaA*/}
                {/*    name="description"*/}
                {/*    content="Learn how to build a personal website using Next.js"*/}
                {/*/>*/}
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/coding_cat.gif"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 style={{fontFamily: "Consolas"}} className={utilStyles.heading2Xl}>{name} hi</h1>
                        <p style={{fontFamily: "Consolas"}} className={utilStyles.headingMd}>while :&nbsp;
                            <span className={utilStyles.pointESC} style={{"backgroundSize": "40px"}}>E</span>at&nbsp;
                            <span className={utilStyles.pointESC} style={{"backgroundSize": "40px"}}>S</span>leep&nbsp;
                            <span className={utilStyles.pointESC} style={{"backgroundSize": "40px"}}>C</span>ode&nbsp;
                        </p>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/coding_cat.gif"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <Text style={{fontFamily: "Consolas"}} className={utilStyles.colorInherit}>{name}</Text>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main className={styles.main}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <Text>← Back to home</Text>
                    </Link>

                </div>
            )}
            <footer className={styles.footer}>footer입니당</footer>

        </div>
    )
}
