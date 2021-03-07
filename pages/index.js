import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>PureView 🧪</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p className={styles.description}>
                    welcome to 
                </p>

                <h1 className={styles.title}>
                    p u r e v i e w
                </h1>

                <p className={styles.description}>
                    touch to get started
                </p>

            </main>

            <footer className={styles.footer}>
                <p>
                pureview &copy; 2021
                </p>
            </footer>
        </div>
    )
}
