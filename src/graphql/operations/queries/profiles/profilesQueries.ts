import { gql } from 'graphql-request'

export const PROFILES_TYPES = gql`
  query ProfilesTypes {
    profileTypes: profiles_types {
      value
    }
  }
`

export const PROFILE_BY_USER = gql`
  query ProfileByUser($userId: uuid!) {
    profile: profiles(where: { user_id: { _eq: $userId } }) {
      id
    }
  }
`
