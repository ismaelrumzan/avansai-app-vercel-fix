import { ROLES } from '@gql/operations/queries/rolesQueries'
import { useGQLQuery } from '@hooks/useGQLQuery'
import { useEffect, useState } from 'react'
import { Auth_Roles } from 'src/generated/graphql'

interface RolesQuery {
  roles: Auth_Roles[]
}
export function useCandidateRole(): string | undefined {
  const [candidateRole, setCandidateRole] = useState<string | undefined>()
  const { data } = useGQLQuery<RolesQuery>({ key: 'roles', query: ROLES })

  useEffect(() => {
    if (data) {
      const candidate = data.roles.find(({ role }) => role === 'candidate')
      if (candidate) {
        setCandidateRole(candidate.role)
      }
    }
  }, [data])
  return candidateRole
}
