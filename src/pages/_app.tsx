import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
// import { apolloClient } from '../services/apollo'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'
// import { getApolloClient } from '../services/withApollo'
import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* <ApolloProvider client={apolloClient}> */}
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
      {/* </ApolloProvider> */}
    </SessionProvider>
  )
}

export default MyApp
