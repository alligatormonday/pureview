import React from "react";
import { Flex, Box, useColorMode } from "@chakra-ui/react";
import DarkModeSwitch from './DarkModeSwitch'
import styled from '@emotion/styled'
import Logo from "./Logo";


const NavBarContainer = ({ children, ...props }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#444444'
    }

    const color = {
        light: '#0057FF',
        dark: 'white'
    }

    const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height .5s;
    `

    return (

        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="100%"
            minWidth="356px"
            width="100%"
            bg={bgColor[colorMode]}
            as="nav"
            px={[2, 6, 6]}
            py={2}
            mt={8}
            mb={[0, 0, 8]}
            mx="auto"
        >
            <Logo
                letterSpacing={20}
                as="nav"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                {...props}
            />
            <DarkModeSwitch />
        </StickyNav>

    );
};

export default NavBarContainer;
