import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <Link href="/instruments">
        <div className={styles.container}>
            <Head>
                <title>PureView 🧪</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    P u r e V i e w
                </h1>

                
                <a  className={styles.description}>
                    touch to start
                </a>
               
                

            </main>

            <footer className={styles.footer}>
                <p>
                PureView &copy; 2021
                </p>
            </footer>
        </div>
        </Link>
    )
}
