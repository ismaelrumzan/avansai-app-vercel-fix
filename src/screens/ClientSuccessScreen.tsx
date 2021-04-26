import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Stack, Text } from '@chakra-ui/react'
import { Screen } from '@modules/screen/Screen'
import { ReactElement } from 'react'

export const ClientSuccessScreen = (): ReactElement => {
  return (
    <Screen title="We’re looking forward to working with you!">
      <Stack spacing={8}>
        <Text lineHeight="24px" size="sm">
          One of our recruiters will reach out to you to better understand your company’s needs.
          <br />
          Leave us your phone number below if emails arent your favourite thing in the world.
        </Text>
        <Alert status="success" bg="success.100" color="black">
          <AlertIcon color="success.600" />
          <Box flex={1}>
            <AlertTitle mr={2}>Got it!</AlertTitle>
            <AlertDescription fontSize="xs">
              We’ve received your number and will call you withing the next 2-3 business days.
            </AlertDescription>
          </Box>
        </Alert>
      </Stack>
    </Screen>
  )
}
