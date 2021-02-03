import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#2a75bb',
    primaryDark: '#3c5aa6',
    secondary: '#ffcb05',
    secondaryDark: '#c7a008',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
