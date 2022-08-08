import { gql, useQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { useGetDepartmentsQuery } from '../graphql/generated/graphql'
import { withApollo } from '../services/withApollo'

// export default function Departments() {
function Departments() {
  const { data: session } = useSession()
  console.log(session)
  // const { data: departments } = useQuery(GET_DEPARTMENTS)
  const { data: departments } = useGetDepartmentsQuery()
  console.log(departments)
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          Arthur
          <pre>{JSON.stringify(departments, null, 2)}</pre>
        </Box>
      </Flex>
    </Box>
  )
}

export default withApollo(Departments)
