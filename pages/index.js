import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from "react"

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default function Home() {
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

            <footer className={styles.footer}>
                <p>
                PureView &copy; 2021
                </p>
            </footer>
        </div>
    )
}
