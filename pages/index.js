import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Flex, Heading, Text } from "@chakra-ui/react"
import { graphqlSync } from 'graphql'



export default function Index() {
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
                        <Heading 
                        className={styles.title}
                        as="h1"
                        size="6xl"
                        fontWeight="bold"
                        >
                            PureView
                        </Heading>
                    </Flex>



                    <Text color="gray.500" className={styles.description}>
                        touch to start
                </Text>

                </main>

                <footer className={styles.footer}>
                    <Text color="gray.500" >
                        PureView &copy; 2021
                </Text>
                </footer>
            </div>
        </Link>
    )
}
