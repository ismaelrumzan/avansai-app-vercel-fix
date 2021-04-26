import { Screen } from '@modules/screen/Screen'
import { Profiles } from '@modules/profiles/Profiles'
import { ReactElement } from 'react'

export const SelectProfileScreen = (): ReactElement => {
  return (
    <Screen title="What best describes you">
      <Profiles />
    </Screen>
  )
}
