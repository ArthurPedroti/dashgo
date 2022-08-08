import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

export type ApolloClientContext = GetServerSidePropsContext

// export function getApolloClient(
//   ctx?: ApolloClientContext,
//   ssrCache?: NormalizedCacheObject
// ) {
//   const httpLink = createHttpLink({
//     uri: 'http://localhost:1337/graphql',
//     fetch
//   })

//   const cache = new InMemoryCache().restore(ssrCache ?? {})

//   return new ApolloClient({
//     link: from([httpLink]),
//     cache
//   })
// }

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
  fetch
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache
})
