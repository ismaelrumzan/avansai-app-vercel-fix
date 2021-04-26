import { ROLES } from '@gql/operations/queries/rolesQueries'
import { useGQLQuery } from '@hooks/useGQLQuery'
import { useEffect, useState } from 'react'
import { Auth_Roles } from 'src/generated/graphql'

interface RolesQuery {
  roles: Auth_Roles[]
}
export function useClientHirerRole(): string | undefined {
  const [clientHirerRole, setClientHirerRole] = useState<string | undefined>()
  const { data } = useGQLQuery<RolesQuery>({ key: 'roles', query: ROLES })

  useEffect(() => {
    if (data) {
      const candidate = data.roles.find(({ role }) => role === 'client_hirer')
      if (candidate) {
        setClientHirerRole(candidate.role)
      }
    }
  }, [data])
  return clientHirerRole
}
