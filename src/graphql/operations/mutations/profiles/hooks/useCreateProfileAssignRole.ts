import { auth } from '@libs/nhost'
import { GraphQLClient } from 'graphql-request'
import { UseMutationResult, useMutation } from 'react-query'
import {
  Profiles,
  Profiles_Insert_Input,
  Auth_Account_Roles_Insert_Input,
} from 'src/generated/graphql'
import { CREATE_PROFILE_AND_ASSIGN_ROLE } from '@gql/operations/mutations/profiles/profilesMutations'

interface Variables {
  profileInsertInput: Profiles_Insert_Input
  authAccountRolesInput: Auth_Account_Roles_Insert_Input
}
async function createProfileAssignRole(variables: Variables): Promise<Profiles> {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWTToken()}`,
    },
  }

  const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, headers)

  return await graphqlClient.request(CREATE_PROFILE_AND_ASSIGN_ROLE, variables)
}

export function useCreateProfileAssignRole(): UseMutationResult<Profiles> {
  return useMutation('createProfile', (variables: Variables) => createProfileAssignRole(variables))
}
