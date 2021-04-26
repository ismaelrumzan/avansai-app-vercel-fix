import { UPDATE_PROFILE } from '@gql/operations/mutations/profiles/profilesMutations'
import { auth } from '@libs/nhost'
import { GraphQLClient } from 'graphql-request'
import { useMutation, UseMutationResult } from 'react-query'
import { Profiles, Profiles_Insert_Input } from 'src/generated/graphql'

interface Variables {
  profileId: string
  profileInput: Profiles_Insert_Input
}

async function updateProfile(variables: Variables): Promise<Profiles> {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWTToken()}`,
    },
  }

  const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, headers)
  return await graphqlClient.request(UPDATE_PROFILE, variables)
}

export function useUpdateProfile(key: string | unknown[]): UseMutationResult<Profiles> {
  return useMutation(key, (variables: Variables) => updateProfile(variables))
}
