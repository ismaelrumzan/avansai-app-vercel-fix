import { Users } from 'src/generated/graphql'

export interface UserAccount {
  email: string
}

export interface User {
  id: string
  displayName: string
  account: UserAccount
  avatarUrl: string | null
}

export interface UserQuery {
  user: Users
}
