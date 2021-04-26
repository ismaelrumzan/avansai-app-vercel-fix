import { UserQuery } from '@gql/models/user/userModels'
import { useCreateProfileAssignRole } from '@gql/operations/mutations/profiles/hooks/useCreateProfileAssignRole'
import { useClientHirerRole } from '@gql/operations/queries/useClientHirerRole'
import { GET_USER_BY_ID } from '@gql/operations/queries/userQueries'
import { useGQLQuery } from '@hooks/useGQLQuery'
import { auth } from '@libs/nhost'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

interface FormData {
  phoneNumber: string
}

const CLIENT_PROFILE = 'CLIENT_HIRER'

export const Client = (): ReactElement => {
  const user = auth.user()
  const router = useRouter()
  const { mutate } = useCreateProfileAssignRole()
  const clientHirerRole = useClientHirerRole()
  const userQuery = useGQLQuery<UserQuery>({
    key: ['user', { userId: user.id }],
    query: GET_USER_BY_ID,
    variables: { id: user.id },
    config: {
      enabled: !!user.id,
    },
  })

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      phoneNumber: '',
    },
  })

  const onSubmit = ({ phoneNumber }: FormData): void => {
    mutate(
      {
        profileInsertInput: {
          user_id: user.id,
          profile_type: CLIENT_PROFILE,
          phone_number: phoneNumber,
        },
        authAccountRolesInput: {
          account_id: userQuery.data.user.account.id,
          role: clientHirerRole,
        },
      },
      {
        onSuccess: () => {
          router.push(`${router.pathname}/success`)
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={8}>
        <FormControl id="phoneNumber" isInvalid={!!errors.phoneNumber}>
          <Input
            color="gray.500"
            _placeholder={{ color: 'gray.500' }}
            bg="white"
            {...register('phoneNumber', {
              required: 'Please enter your phone number',
            })}
            aria-invalid={errors.phoneNumber ? 'true' : 'false'}
            name="phoneNumber"
            type="text"
            placeholder="Best number to contact you at"
            size="md"
            data-cy="input-phone-number"
          />
          <FormHelperText fontSize="xs" color="gray.400">
            We’ll call you on a weekday during business hours and promise to not share your number
            with anybody.
          </FormHelperText>
          <FormErrorMessage data-cy="error-phone-number">
            {errors.phoneNumber?.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" isLoading={isSubmitting} data-cy="button-call">
          Give me a call
        </Button>
      </Stack>
    </form>
  )
}
