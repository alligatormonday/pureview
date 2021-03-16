import Head from 'next/head'
import styles from '../styles/Selection.module.css'
import Navbar from '../components/navbar'
import { Heading } from "@chakra-ui/react"

export default function Selection() {
    return (

        <div className={styles.container}>
            <Navbar></Navbar>
            <Head>
                <title>Selection 🧪</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Heading as="h1" size="3xl">
                    Select an instrument category...
                </Heading>
            </main>
        </div>
    )
}