import { SoftwareDeveloper } from '@modules/profiles/candidates/softwareDeveloper/SoftwareDeveloper'
import { Screen } from '@modules/screen/Screen'
import { ReactElement } from 'react'

export const SoftwareDeveloperScreen = (): ReactElement => {
  return (
    <Screen title="Let’s get the basics down first…">
      <SoftwareDeveloper />
    </Screen>
  )
}
