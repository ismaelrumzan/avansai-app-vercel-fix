import { gql } from 'graphql-request'

export const ROLES = gql`
  query Roles {
    roles: auth_roles {
      role
    }
  }
`
