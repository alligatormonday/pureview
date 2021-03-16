import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
    ...chakraTheme.fonts,
    body: `Inter`
}

const overrides = {
    ...chakraTheme,
    fonts, 
}



const fontWeights  = {
    normal: 300,
    medium: 600, 
    bold: 800
};

const customTheme = extendTheme({ overrides });

export default customTheme;