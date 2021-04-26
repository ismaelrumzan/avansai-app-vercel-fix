import { gql } from 'graphql-request'

export const CREATE_PROFILE_AND_ASSIGN_ROLE = gql`
  mutation CreateProfileAndAssignRole(
    $profileInsertInput: profiles_insert_input!
    $authAccountRolesInput: auth_account_roles_insert_input!
  ) {
    profile: insert_profiles_one(object: $profileInsertInput) {
      id
    }

    insert_auth_account_roles_one(object: $authAccountRolesInput) {
      id
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($profileId: uuid!, $profileInput: profiles_set_input!) {
    profile: update_profiles_by_pk(pk_columns: { id: $profileId }, _set: $profileInput) {
      id
    }
  }
`
