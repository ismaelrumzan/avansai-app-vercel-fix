import { Button, Stack } from '@chakra-ui/react'
import { ProfileTypeQuery } from '@gql/models/profiles/profilesModels'
import { UserQuery } from '@gql/models/user/userModels'
import { useCreateProfileAssignRole } from '@gql/operations/mutations/profiles/hooks/useCreateProfileAssignRole'
import { PROFILES_TYPES } from '@gql/operations/queries/profiles/profilesQueries'
import { useCandidateRole } from '@gql/operations/queries/useCandidateRole'
import { GET_USER_BY_ID } from '@gql/operations/queries/userQueries'
import { useGQLQuery } from '@hooks/useGQLQuery'
import { auth } from '@libs/nhost'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import profiles from './profiles.json'

export const Profiles = (): ReactElement => {
  const router = useRouter()
  const user = auth.user()
  const candidateRole = useCandidateRole()

  const userQuery = useGQLQuery<UserQuery>({
    key: ['user', { userId: user.id }],
    query: GET_USER_BY_ID,
    variables: { id: user.id },
    config: {
      enabled: !!user.id,
    },
  })

  const { data } = useGQLQuery<ProfileTypeQuery>({
    key: 'profilesTypes',
    query: PROFILES_TYPES,
  })

  const { mutate, isLoading: createProfileIsLoading } = useCreateProfileAssignRole()

  const handleCreateProfile = (profileType: string): void => {
    mutate(
      {
        profileInsertInput: {
          user_id: user.id,
          profile_type: profileType,
        },
        authAccountRolesInput: {
          account_id: userQuery.data.user.account.id,
          role: candidateRole,
        },
      },
      {
        onSuccess: () => {
          router.push(
            `${router.pathname}/${profiles[profileType].href}${
              profileType === 'SOFTWARE_DEVELOPER' ? '/work-basics' : ''
            }`
          )
        },
      }
    )
  }

  return (
    <Stack spacing={8} mb={24}>
      {data &&
        data.profileTypes
          .filter(({ value }) => value !== 'CLIENT_ADMIN')
          .map(({ value }) => (
            <Button
              key={value}
              variant="simple"
              disabled={createProfileIsLoading}
              onClick={() => handleCreateProfile(value)}
              data-cy={`button-${value}`}
            >
              {profiles[value].label}
            </Button>
          ))}
    </Stack>
  )
}
