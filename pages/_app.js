import '../styles/globals.css'
import * as React from "react"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


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