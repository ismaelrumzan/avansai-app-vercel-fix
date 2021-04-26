import { Button, Container, Flex, Heading, Stack, SlideFade } from '@chakra-ui/react'
import { usePrivateRoute } from '@hooks/usePrivateRoute'
import { LoginForm } from '@modules/login/LoginForm'
import { LoginSocial } from '@modules/login/LoginSocial'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import { useToggle } from 'react-use'

export const Login = (): ReactElement => {
  const { signedIn, redirectTo, removeRedirectTo } = usePrivateRoute()
  const router = useRouter()
  const [isAllOptionsOpen, toggleAllOptions] = useToggle(false)
  const [isLoginFormOpen, toggleLoginForm] = useToggle(false)

  const handleToggleAllOptions = (): void => {
    toggleAllOptions()
    toggleLoginForm(false)
  }

  const handleDisplayLoginForm = (): void => {
    toggleAllOptions(false)
    toggleLoginForm()
  }

  if (signedIn) {
    router.push(redirectTo ?? '/')
  }

  useEffect(() => {
    return () => {
      removeRedirectTo()
    }
  }, [removeRedirectTo])

  return (
    <Container
      maxW={{
        base: 'auto',
        sm: 80,
      }}
      p={0}
      minH="calc(100vh - 100px)"
    >
      <Stack spacing={8} mb={24}>
        <Heading as="h1" size="lg">
          Log in to your account
        </Heading>
        {!isLoginFormOpen ? (
          <LoginSocial
            isAllOptionsOpen={isAllOptionsOpen}
            handleDisplayLoginForm={handleDisplayLoginForm}
          />
        ) : (
          <SlideFade in={isLoginFormOpen} offsetY="20px">
            <LoginForm />
          </SlideFade>
        )}
        <Flex justifyContent="center">
          {(!isAllOptionsOpen || isLoginFormOpen) && (
            <Button
              data-cy="login-more-options"
              onClick={handleToggleAllOptions}
              textTransform="none"
              textDecoration="underline"
              variant="link"
              color="white"
              fontSize="md"
              fontWeight={700}
            >
              More ways to log in
            </Button>
          )}
        </Flex>
      </Stack>
      <Flex h="50px" justifyContent="space-around">
        <Link href="/#">
          <Button textTransform="none" variant="link" color="white" fontSize="md" fontWeight={700}>
            Terms of Service
          </Button>
        </Link>
        <Link href="/#">
          <Button textTransform="none" variant="link" color="white" fontSize="md" fontWeight={700}>
            Privacy Policy
          </Button>
        </Link>
      </Flex>
    </Container>
  )
}
