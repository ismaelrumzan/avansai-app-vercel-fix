import { Profiles_Types_Enum } from 'src/generated/graphql'

export interface ProfileTypeQuery {
  profileTypes: { value: Profiles_Types_Enum }[]
}

export interface UserProfileQuery {
  profile: {
    id: string
  }[]
}
