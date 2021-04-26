import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  Stack,
} from '@chakra-ui/react'
import { EmailInput, PasswordInput } from '@components'
import { trimAndLower, validateEmail, validateRequiredField } from '@helpers/authHelpers'
import { useErrorStatus } from '@hooks/useErrorStatus'
import { usePrivateRoute } from '@hooks/usePrivateRoute'
import { auth } from '@libs/nhost'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export interface FormData {
  fullName: string
  email: string
  password: string
}

export const LoginForm = (): ReactElement => {
  const { redirectTo, removeRedirectTo } = usePrivateRoute()
  const [
    LoginStatus,
    { resetMessage: resetLoginStatus, setErrorStatus: setLoginStatus },
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

  useEffect(() => {
    return () => {
      removeRedirectTo()
    }
  }, [removeRedirectTo])

  const onSubmit = async ({ email, password }: FormData): Promise<void> => {
    try {
      await auth.login({ email: trimAndLower(email), password })
      router.push(redirectTo ?? '/')
    } catch (e) {
      setLoginStatus({ error: true, message: "Email and password don't match" })
    }
  }

  const handleEmailValidation = (email: string): string | boolean => {
    resetLoginStatus()
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
    resetLoginStatus()
    return !validateRequiredField(value) ? 'Password is required' : true
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        {LoginStatus.error ? (
          <Alert status="error" bg="danger.100" color="black" data-cy="login-alert">
            <AlertIcon color="danger.500" />
            <Box flex={1}>
              <AlertTitle mr={2}>Unable to sign in!</AlertTitle>
              <AlertDescription>{LoginStatus.message}</AlertDescription>
            </Box>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={resetLoginStatus}
              data-cy="close-login-alert"
            />
          </Alert>
        ) : null}
        <FormControl id="email" isInvalid={!!errors.email}>
          <EmailInput
            placeholder="you@email.com"
            name="email"
            size="md"
            {...register('email', { validate: handleEmailValidation })}
            data-cy="login-input-email"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" isInvalid={!!errors.password}>
          <PasswordInput
            size="md"
            fontSize="sm"
            withForgotPassword={true}
            {...register('password', {
              validate: handlePasswordValidation,
            })}
            data-cy="login-input-password"
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" size="md" isLoading={isSubmitting} data-cy="login-button-submit">
          Login
        </Button>
      </Stack>
    </form>
  )
}
