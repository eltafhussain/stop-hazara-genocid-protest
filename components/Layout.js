import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { events } from '../data/event'
import moment from 'moment-mini'
const DATE_FORMAT = 'DD'
function Layout({ title = "Stop Hazara Genocide | Protest Map", description = "Stop Hazara Genocide | Protest Map", children }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
            </footer>
        </div>
    )
}

export default Layout