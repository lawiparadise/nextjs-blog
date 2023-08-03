'use client'

import styles from './layout.module.css'
import utilStyles from './utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Text, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { CustomFonts } from '@/lib/custom-fonts'

const name = 'devjune'

export default function ThemeProvider({ children, home }: { children: React.ReactNode, home: boolean }) {
  return (
    <MantineProvider
      withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'D2Coding, Consolas, monospace',
        // colorScheme
      }}
    >
      <CustomFonts />
      <ThemeContents children={children} home={home} />
    </MantineProvider>
  )
}

export function ThemeContents({ children, home }: { children: React.ReactNode, home: boolean }) {
  return (
    <div className={styles.container}>
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
            <h1 style={{ fontFamily: "Consolas" }}
                className={utilStyles.heading2Xl}>{name}</h1>
            <p style={{ fontFamily: "Consolas" }} className={utilStyles.headingMd}>while
              :&nbsp;
              <span className={utilStyles.pointESC}
                    style={{ "backgroundSize": "40px" }}>E</span>at&nbsp;
              <span className={utilStyles.pointESC}
                    style={{ "backgroundSize": "40px" }}>S</span>leep&nbsp;
              <span className={utilStyles.pointESC}
                    style={{ "backgroundSize": "40px" }}>C</span>ode&nbsp;
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
                <Text style={{ fontFamily: "Consolas" }}
                      className={utilStyles.colorInherit}>{name}</Text>
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