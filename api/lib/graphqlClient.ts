import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(process.env.NHOST_HASURA_URL as string, {
  headers: {
    ['x-hasura-admin-secret']: process.env.NHOST_HASURA_ADMIN_SECRET as string,
  },
})
