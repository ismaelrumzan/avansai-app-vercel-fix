import { Stack, Text } from '@chakra-ui/react'
import { Screen } from '@modules/screen/Screen'
import { TechIndustry } from '@modules/profiles/candidates/techIndustry/TechIndustry'
import { ReactElement } from 'react'

export const TechIndustryScreen = (): ReactElement => {
  return (
    <Screen title="Tell us a bit more about yourself">
      <Stack spacing={8}>
        <Text>
          One of our recruiters will reach out to you to better understand your company’s needs.
          Leave us your phone number below if emails arent your favourite thing in the world.
        </Text>
        <TechIndustry />
      </Stack>
    </Screen>
  )
}
