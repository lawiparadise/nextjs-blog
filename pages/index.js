import Head from 'next/head';
import Layout,{siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/index.module.css'

export default function Home(){
    return(
        <Layout home>
            <Head> {/*여기서 title 지정하면 Layout의 title 무시 */}
                {/*<title>{siteTitle}</title>*/}
            </Head>
            <section className={utilStyles.headingMd}>
                <p>while :&nbsp;
                    <span className={styles.pointESC} style={{"backgroundSize":"40px"}}>E</span>at&nbsp;
                    <span className={styles.pointESC} style={{"backgroundSize":"40px"}}>S</span>leep&nbsp;
                    <span className={styles.pointESC} style={{"backgroundSize":"40px"}}>C</span>ode&nbsp;
                </p>
                <p>
                    (you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    )
}