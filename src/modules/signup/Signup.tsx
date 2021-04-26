import { Button, Container, Flex, Heading, Stack, SlideFade } from '@chakra-ui/react'
import { SignupForm } from '@modules/signup/SignupForm'
import { SignupSocial } from '@modules/signup/SignupSocial'
import Link from 'next/link'
import { ReactElement } from 'react'
import { useToggle } from 'react-use'

export const Signup = (): ReactElement => {
  const [isAllOptionsOpen, toggleAllOptions] = useToggle(false)
  const [isSignupFormOpen, toggleSignupForm] = useToggle(false)

  const handleToggleAllOptions = (): void => {
    toggleAllOptions()
    toggleSignupForm(false)
  }

  const handleDisplaySignupForm = (): void => {
    toggleAllOptions(false)
    toggleSignupForm()
  }

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
          Sign up
        </Heading>
        {!isSignupFormOpen ? (
          <SignupSocial
            isAllOptionsOpen={isAllOptionsOpen}
            handleDisplaySignupForm={handleDisplaySignupForm}
          />
        ) : (
          <SlideFade in={isSignupFormOpen} offsetY="20px">
            <SignupForm />
          </SlideFade>
        )}
        <Flex justifyContent={isAllOptionsOpen ? 'center' : 'space-around'}>
          {(!isAllOptionsOpen || isSignupFormOpen) && (
            <Button
              data-cy="signup-more-options"
              onClick={handleToggleAllOptions}
              textTransform="none"
              textDecoration="underline"
              variant="link"
              color="white"
              fontSize="md"
              fontWeight={700}
            >
              More ways to sign up
            </Button>
          )}
          {!isSignupFormOpen && (
            <Link href="/login">
              <Button
                textTransform="none"
                textDecoration="underline"
                variant="link"
                color="white"
                fontSize="md"
                fontWeight={700}
              >
                Login
              </Button>
            </Link>
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
