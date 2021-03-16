import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Flex } from "@chakra-ui/react";

export default function Home() {
    return (
        <Link href="/selection">
            <div className={styles.container}>
                <Head>
                    <title>PureView 🧪</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <Flex
                        letterSpacing={45}
                    >
                        <h1 className={styles.title}>
                            PureView
                        </h1>
                    </Flex>



                    <p className={styles.description}>
                        touch to start
                </p>



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
