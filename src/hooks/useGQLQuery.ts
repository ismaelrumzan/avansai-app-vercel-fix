import { auth } from '@libs/nhost'
import { RequestDocument } from 'graphql-request/dist/types'
import { useQuery, UseQueryResult } from 'react-query'
import { GraphQLClient } from 'graphql-request'

interface UseGQLQueryProps {
  key: string | unknown[]
  query: RequestDocument
  variables?: unknown
  config?: unknown
}

export const useGQLQuery = <T>({
  key,
  query,
  variables,
  config = {},
}: UseGQLQueryProps): UseQueryResult<T> => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWTToken()}`,
    },
  }
  const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, headers)

  const fetchData = async (): Promise<GraphQLClient> =>
    await graphqlClient.request(query, variables)

  return useQuery(key, fetchData, config)
}
