import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { moveOptionOtherToEnd } from '@gql/mappers/focusAreas'
import { FocusArea } from '@gql/models/focusAreas/focusAreasModels'
import { UserProfileQuery } from '@gql/models/profiles/profilesModels'
import { StorageFile } from '@gql/models/storage/File'
import { useUpdateProfile } from '@gql/operations/mutations/profiles/hooks/updateProfile'
import { FOCUS_AREAS } from '@gql/operations/queries/focusAreasQueries'
import { PROFILE_BY_USER } from '@gql/operations/queries/profiles/profilesQueries'
import { useGQLQuery } from '@hooks/useGQLQuery'
import { useRouter } from 'next/router'
import React, { FormEvent, ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BsFileText } from 'react-icons/bs'
import { auth, storage } from '@libs/nhost'
import jobTitleOptions from './focusAreasOptions.json'

interface FormData {
  focusArea: string
  otherFocusArea?: string
  resume: FileList
}

const TECH_PROFILE = 'TECH_INDUSTRY'

export const TechIndustry = (): ReactElement => {
  const router = useRouter()
  const user = auth.user()
  const focusAreaQuery = useGQLQuery<FocusArea>({
    key: 'focusAreas',
    query: FOCUS_AREAS,
    variables: { profileType: TECH_PROFILE },
  })

  const profileQuery = useGQLQuery<UserProfileQuery>({
    key: 'userProfile',
    query: PROFILE_BY_USER,
    variables: { userId: user.id },
    config: {
      enabled: !!user.id,
    },
  })

  const { mutate, isLoading } = useUpdateProfile(['updateProfile', { userId: user.id }])

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      focusArea: '',
      otherFocusArea: '',
      resume: '',
    },
  })

  const showOtherFocusArea = watch('focusArea')
  const resumeValue = watch('resume')

  useEffect(() => {
    register('resume')
  }, [register])

  const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
    setValue('resume', e.currentTarget.files)
    const file = e.currentTarget.files[0]
    if (file) {
      clearErrors('resume')
    }
  }

  const onSubmit = async ({ focusArea, otherFocusArea, resume }: FormData): Promise<void> => {
    try {
      const file = resume.item(0)
      const storedResume: StorageFile = await storage.put(`/user/${user.id}/${file.name}`, file)
      const resumeUrl = `${storedResume.key}?token=${storedResume.Metadata.token}`

      mutate(
        {
          profileId: profileQuery.data.profile[0].id,
          profileInput: {
            focus_area: focusArea,
            other_focus_area: focusArea.length === 0 ? otherFocusArea : null,
            resume_url: resumeUrl,
          },
        },
        {
          onSuccess: () => {
            router.push(`${router.pathname}/success`)
          },
        }
      )
    } catch (e) {
      console.warn('error', e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={8}>
        <FormControl id="focusArea" isInvalid={!!errors.focusArea}>
          <FormLabel>Focus Areas</FormLabel>
          {focusAreaQuery.data && (
            <Select
              color="gray.500"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              {...register('focusArea', {
                required: 'Please select your focus area',
              })}
              aria-invalid={errors.focusArea ? 'true' : 'false'}
              name="focusArea"
              placeholder="Select an option"
              size="md"
              data-cy="select-focusArea"
            >
              {moveOptionOtherToEnd(focusAreaQuery.data.focusAreas).map(({ value }) => (
                <option key={value} value={value}>
                  {jobTitleOptions[value]}
                </option>
              ))}
            </Select>
          )}
          <FormErrorMessage data-cy="error-focusArea-message">
            {errors.focusArea?.message}
          </FormErrorMessage>
        </FormControl>
        {focusAreaQuery.data &&
          showOtherFocusArea ===
            focusAreaQuery.data.focusAreas.find(({ value }) => value === 'OTHER').value && (
            <FormControl id="otherFocusArea" isInvalid={!!errors.otherFocusArea}>
              <Input
                color="gray.500"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                {...register('otherFocusArea', {
                  required: 'Please enter your focus Area',
                })}
                aria-invalid={errors.otherFocusArea ? 'true' : 'false'}
                name="otherFocusArea"
                type="text"
                placeholder="Focus area"
                size="md"
                data-cy="other-focusArea"
              />
              <FormErrorMessage data-cy="error-otherFocusArea-message">
                {errors.otherFocusArea?.message}
              </FormErrorMessage>
            </FormControl>
          )}
        <FormControl id="resume" isInvalid={!!errors.resume}>
          <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue('gray.700', 'gray.50')}>
            Resume
          </FormLabel>
          <Flex
            borderWidth={2}
            borderStyle="solid"
            rounded="md"
            bg="white"
            color="gray.500"
            h={10}
            alignItems="center"
            pl={4}
          >
            <Icon as={BsFileText} color="gray.500" w={6} h={6} />
            <Flex fontSize="sm" size="lg" alignItems="baseline" bg="white" pl={2}>
              <chakra.label
                htmlFor="resume"
                cursor="pointer"
                rounded="md"
                color={useColorModeValue('brand.600', 'brand.200')}
                fontSize="lg"
                pos="relative"
              >
                <Text isTruncated={true} textOverflow="ellipsis" maxW="270px">
                  {resumeValue[0]?.name || 'Upload your resume'}
                </Text>
                <VisuallyHidden>
                  <input
                    {...register('resume', {
                      required: 'Please upload your resume',
                    })}
                    aria-invalid={errors.resume ? 'true' : 'false'}
                    onChange={handleOnChange}
                    data-cy="resume"
                    id="resume"
                    name="resume"
                    type="file"
                    accept="
                    .pdf,
                    .doc,
                    .docx,
                    .xml,
                    application/msword,
                    application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </VisuallyHidden>
              </chakra.label>
            </Flex>
          </Flex>
          <FormErrorMessage data-cy="error-resume-message">
            {errors.resume?.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={isSubmitting || isLoading} data-cy="create-profile">
          Create profile
        </Button>
      </Stack>
    </form>
  )
}
