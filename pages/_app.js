import { darkTheme, globalCss } from "stiches.config"
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";

const GlobalStyles = globalCss({
  '*': { fontFamily: "'Libre Franklin', sans-serif", boxSizing: "border-box",  },
  
  body: {
    //we can call the color token values with the
    //$ prefix in a string
    
    transition: "0.4s ease",
    background: "$background",
    fontSize:"small",
    color: "$text"
  }
})

function MyApp({ Component, pageProps }) {
  GlobalStyles()
  return <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange={false}
    value={{
      light: "light",
      dark: darkTheme.className
    }}
    
  >
      <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
