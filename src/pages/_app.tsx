import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Header from 'components/Header'

function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>dev.news</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="apple-touch-icon" href="/img/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#121214" />
          <meta name="description" content="Posts sobre o universo dev." />
        </Head>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  )
}

export default App
