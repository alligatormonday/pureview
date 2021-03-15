import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Instruments() {
    return (
        <div className={styles.container}>
            <Head>
                <title>PureView 🧪</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    P u r e V i e w
                </h1>

                <p className={styles.description}>
                    touch to start
                </p>

            </main>
        </div>
    )
}