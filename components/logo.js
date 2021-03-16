import React from "react"
import { Box, Text } from "@chakra-ui/react"
import styles from './logo.module.css'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text className={styles.header} fontSize="4xl" fontWeight="bold">
                PureView
      </Text>
        </Box>
    )
}
