import React from "react";
import { Flex, Menu } from "@chakra-ui/react";
import DarkModeSwitch from '../components/DarkModeSwitch'

import Logo from "./Logo";

const NavBar = (props) => {
    return (
        <NavBarContainer {...props}>
            <Logo
                w="600px"
            />
        </NavBarContainer>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Menu>
            <Flex
                letterSpacing={20}
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                bg={["primary.500", "primary.500", "transparent", "transparent"]}
                color={["black", "black", "primary.700", "primary.700"]}
                {...props}
            >
                
                {children}

                <DarkModeSwitch />
            </Flex>
        </Menu>

    );
};

export default NavBar;
