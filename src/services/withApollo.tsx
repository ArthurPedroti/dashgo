import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { GetServerSidePropsContext, NextPage } from 'next'
import { apolloClient } from './apollo'

// export type ApolloClientContext = GetServerSidePropsContext

// const httpLink = createHttpLink({
//   uri: 'http://localhost:1337/graphql',
//   fetch
// })

// const cache = new InMemoryCache()

// export const apolloClient = new ApolloClient({
//   link: from([httpLink]),
//   cache
// })

export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={apolloClient}>
        <Component />
      </ApolloProvider>
    )
  }
}

// export function getApolloClient(
//   ctx?: ApolloClientContext,
//   ssrCache?: NormalizedCacheObject
// ) {

// }
