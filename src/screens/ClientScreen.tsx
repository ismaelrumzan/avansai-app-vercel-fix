import { Stack, Text } from '@chakra-ui/react'
import { Screen } from '@modules/screen/Screen'
import { Client } from '@modules/profiles/client/Client'
import { ReactElement } from 'react'

export const ClientScreen = (): ReactElement => {
  return (
    <Screen title="We’re looking forward to working with you!">
      <Stack spacing={8}>
        <Text lineHeight="24px">
          One of our recruiters will reach out to you to better understand your company’s needs.
          <br />
          Leave us your phone number below if emails aren’t your favourite thing in the world.
        </Text>
        <Client />
      </Stack>
    </Screen>
  )
}
