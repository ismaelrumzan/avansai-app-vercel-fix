import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'
import { auth } from '@libs/nhost'
import { PasswordInput, EmailInput } from '@components'
import { trimAndLower, validateEmail, validateRequiredField } from '@helpers/authHelpers'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useErrorStatus } from '@hooks/useErrorStatus'

export interface FormData {
  fullName: string
  email: string
  password: string
}

export const SignupForm = (): ReactElement => {
  const [
    signupStatus,
    { resetMessage: resetSignupStatus, setErrorStatus: setSignupStatus },
  ] = useErrorStatus()
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async ({ email, password, fullName }: FormData): Promise<void> => {
    try {
      await auth.register({
        email: trimAndLower(email),
        password,
        options: {
          userData: { display_name: fullName },
        },
      })
      router.push('/select-profile')
    } catch (e) {
      // TODO use i18n to handle multilingual
      setSignupStatus({ error: true, message: 'Unable to register' })
    }
  }

  const handleFullNameValidation = (value: string): string | boolean => {
    resetSignupStatus()
    return !validateRequiredField(value) ? 'Please, enter your name.' : true
  }

  const handleEmailValidation = (email: string): string | boolean => {
    resetSignupStatus()
    const maybeValidEmail = validateEmail(email)

    if (maybeValidEmail.reason === 'Required') {
      return 'Email is required'
    }
    if (maybeValidEmail.reason === 'Invalid') {
      return 'Email address is invalid'
    }
    if (maybeValidEmail.valid) {
      return true
    }
  }

  const handlePasswordValidation = (value: string): string | boolean => {
    resetSignupStatus()
    return !validateRequiredField(value) ? 'Password is required' : true
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        {signupStatus.error ? (
          <Alert status="error" bg="danger.100" color="black" data-cy="signup-alert">
            <AlertIcon color="danger.500" />
            <Box flex={1}>
              <AlertTitle mr={2}>Unable to create account!</AlertTitle>
              <AlertDescription>{signupStatus.message}</AlertDescription>
            </Box>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={resetSignupStatus}
              data-cy="close-signup-alert"
            />
          </Alert>
        ) : null}
        <FormControl id="fullName" isInvalid={!!errors.fullName}>
          <FormLabel>Full name</FormLabel>
          <Input
            color="gray.500"
            _placeholder={{ color: 'gray.500' }}
            bg="white"
            {...register('fullName', { validate: handleFullNameValidation })}
            name="fullName"
            type="text"
            placeholder="Your name"
            size="md"
            data-cy="signup-input-fullName"
          />
          <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isInvalid={!!errors.email}>
          <EmailInput
            placeholder="you@email.com"
            name="email"
            size="md"
            {...register('email', { validate: handleEmailValidation })}
            data-cy="signup-input-email"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" isInvalid={!!errors.password}>
          <PasswordInput
            size="md"
            fontSize="sm"
            withForgotPassword={false}
            {...register('password', {
              validate: handlePasswordValidation,
            })}
            data-cy="signup-input-password"
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          fontSize="md"
          size="md"
          isLoading={isSubmitting}
          data-cy="signup-button-submit"
        >
          Create account →
        </Button>
      </Stack>
    </form>
  )
}
