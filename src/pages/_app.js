// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import './styles.css'
import "@fontsource/poppins"; 
import './../../src/app/globals.css'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            margin: 0px !important;
            padding: 0px !important
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp