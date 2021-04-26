import { Stack, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Screen } from '@modules/screen/Screen'
import { ReactElement } from 'react'

export const TechIndustrySuccessScreen = (): ReactElement => {
  return (
    <Screen title="Your profile is saved">
      <Stack spacing={8}>
        <Text lineHeight="24px">
          While our platform is targeted at software developers, we do work with positions like
          yours. We’ll be in touch by email if a good opportunity comes up.
        </Text>
        <Link href="/profile">
          <Button>View my profile →</Button>
        </Link>
      </Stack>
    </Screen>
  )
}
