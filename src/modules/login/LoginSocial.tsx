import { Button, Icon, SlideFade, Stack } from '@chakra-ui/react'
import { SocialAuthButton } from '@components'
import { auth } from '@libs/nhost'
import { Provider } from 'nhost-js-sdk/dist/types'
import { ReactElement } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMailOutline } from 'react-icons/io5'

interface Props {
  handleDisplayLoginForm: () => void
  isAllOptionsOpen: boolean
}

export const LoginSocial = ({ handleDisplayLoginForm, isAllOptionsOpen }: Props): ReactElement => {
  const login = async (provider: Provider): Promise<void> => {
    await auth.login({ provider })
  }

  return (
    <Stack spacing={4}>
      <SocialAuthButton
        data-cy="auth-linkedIn"
        colorScheme="info"
        variant="linkedIn"
        onClick={() => login('linkedin')}
      >
        <Icon as={FaLinkedinIn} w={6} h={6} mr={4} /> Log in with LinkedIn
      </SocialAuthButton>
      {isAllOptionsOpen ? (
        <SlideFade in={isAllOptionsOpen} offsetY="20px">
          <Stack spacing={4}>
            <SocialAuthButton
              data-cy="auth-google"
              variant="simple"
              onClick={() => login('google')}
            >
              <Icon as={FcGoogle} w={6} h={6} mr={4} /> Log in with Google
            </SocialAuthButton>
            <Button
              variant="simple"
              onClick={handleDisplayLoginForm}
              data-cy="button-email-password"
            >
              <Icon as={IoMailOutline} w={6} h={6} mr={4} />
              Log in with email
            </Button>
          </Stack>
        </SlideFade>
      ) : null}
    </Stack>
  )
}
