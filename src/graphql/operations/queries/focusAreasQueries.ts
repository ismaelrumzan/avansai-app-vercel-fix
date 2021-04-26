import { gql } from 'graphql-request'

export const FOCUS_AREAS = gql`
  query FocusAreasByProfileType($profileType: profiles_types_enum!) {
    focusAreas: focus_areas(
      where: { profile_type: { _eq: $profileType } }
      order_by: { value: asc }
    ) {
      value
    }
  }
`
