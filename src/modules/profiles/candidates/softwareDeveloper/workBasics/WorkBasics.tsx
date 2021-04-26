import {
  Box,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Stack,
  Input,
  InputLeftAddon,
  InputGroup,
  FormHelperText,
  InputRightAddon,
  Switch,
} from '@chakra-ui/react'
import { SearchBox } from '@components'
import { UserProfileQuery } from '@gql/models/profiles/profilesModels'
import { useUpdateProfile } from '@gql/operations/mutations/profiles/hooks/updateProfile'
import { PROFILE_BY_USER } from '@gql/operations/queries/profiles/profilesQueries'
import { WORK_BASICS } from '@gql/operations/queries/workQueries'
import { useGQLQuery } from '@hooks/useGQLQuery'
import { auth } from '@libs/nhost'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { WorkBasisQuery } from 'src/generated/graphql'
import vacations from './messages/vacations.en-CA.json'
import workLocation from './messages/workLocation.en-CA.json'
import workStatus from './messages/workStatus.en-CA.json'

interface FormData {
  vacations: string
  workLocation: string
  workStatus: string
  fullTimeCompensation: string
  contractCompensation: string
  acceptableTravelTime: string
  address: string
  latitude: number
  longitude: number
  drivingToWork: boolean
  relocateForWork: boolean
  visaSponsorship: boolean
}
export const WorkBasics = (): ReactElement => {
  const user = auth.user()
  const router = useRouter()
  const workBasicsQuery = useGQLQuery<WorkBasisQuery>({ key: 'workBasics', query: WORK_BASICS })

  const profileQuery = useGQLQuery<UserProfileQuery>({
    key: 'userProfile',
    query: PROFILE_BY_USER,
    variables: { userId: user.id },
    config: {
      enabled: !!user.id,
    },
  })
  const { mutate, isLoading: updateProfileIsLoading } = useUpdateProfile([
    'updateProfile',
    { userId: user.id },
  ])

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
      vacations: '',
      workLocation: '',
      workStatus: '',
      fullTimeCompensation: null,
      contractCompensation: null,
      acceptableTravelTime: null,
      address: '',
      latitude: null,
      longitude: null,
      drivingToWork: false,
      relocateForWork: false,
      visaSponsorship: false,
    },
  })

  const workLocationValue = watch('workLocation')
  const displayAlwaysOfficeForm = workLocationValue === 'ALWAYS_ON_SITE'

  const onSubmit = async ({
    vacations,
    workLocation,
    workStatus,
    fullTimeCompensation,
    contractCompensation,
    acceptableTravelTime,
    address,
    latitude,
    longitude,
    drivingToWork,
    relocateForWork,
    visaSponsorship,
  }: FormData): Promise<void> => {
    mutate(
      {
        profileId: profileQuery.data.profile[0].id,
        profileInput: {
          user_id: user.id,
          work_vacation_duration: vacations,
          work_location_type: workLocation,
          work_status: workStatus,
          full_time_compensation: fullTimeCompensation && parseInt(fullTimeCompensation),
          contract_compensation: contractCompensation && parseInt(contractCompensation),
          acceptable_travel_time: acceptableTravelTime && parseInt(acceptableTravelTime),
          address,
          address_latitude: latitude,
          address_longitude: longitude,
          driving_to_work: drivingToWork,
          relocate_for_work: relocateForWork,
          visa_sponsorship: visaSponsorship,
        },
      },
      {
        onSuccess: () => {
          router.push(`${router.pathname}/experience`)
        },
      }
    )
  }

  const handleSelectAddress = (address, latitude, longitude): void => {
    setValue('address', address)
    setValue('latitude', latitude)
    setValue('longitude', longitude)
  }

  useEffect(() => {
    register('address', {
      required: displayAlwaysOfficeForm ? 'Required field' : false,
    })
    if (displayAlwaysOfficeForm) {
      clearErrors(['address', 'acceptableTravelTime'])
    }
  }, [register, displayAlwaysOfficeForm, clearErrors])

  if (workBasicsQuery.isLoading) {
    return (
      <Box>
        <Text>Loading</Text>
      </Box>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
        {workBasicsQuery.data && workBasicsQuery.data.workStatus && (
          <FormControl isInvalid={!!errors.workStatus}>
            <FormLabel htmlFor="workStatus" fontSize="sm">
              What kind of work are you looking for?
            </FormLabel>
            <Select
              {...register('workStatus', {
                required: 'Required field',
              })}
              id="workStatus"
              color="black"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              aria-invalid={errors.workStatus ? 'true' : 'false'}
              name="workStatus"
              placeholder="Select an option"
              size="md"
              data-cy="select-workStatus"
            >
              {workBasicsQuery.data.workStatus.map(({ value }) => (
                <option key={value} value={value}>
                  {workStatus[value]}
                </option>
              ))}
            </Select>
            <FormErrorMessage data-cy="error-workStatus-message">
              {errors.workStatus?.message}
            </FormErrorMessage>
          </FormControl>
        )}

        <FormControl isInvalid={!!errors.fullTimeCompensation}>
          <FormLabel htmlFor="fullTimeCompensation" fontSize="sm">
            What kind of work are you looking for?
          </FormLabel>
          <InputGroup>
            <InputLeftAddon aria-label="canadian dollars" fontSize="sm" bg="gray.100" color="black">
              CAD$
            </InputLeftAddon>
            <Input
              {...register('fullTimeCompensation', {
                required: 'Required field',
              })}
              id="fullTimeCompensation"
              type="number"
              aria-invalid={errors.fullTimeCompensation ? 'true' : 'false'}
              name="fullTimeCompensation"
              placeholder="Desired compensation…"
              size="md"
              data-cy="input-fullTimeCompensation"
            />
          </InputGroup>
          <FormHelperText fontSize="xs">
            This number is the total compensation package, including any including any bonuses,
            stock and retirement plans, or other financial benefits.
          </FormHelperText>
          <FormErrorMessage data-cy="error-fullTimeCompensation-message">
            {errors.fullTimeCompensation?.message}
          </FormErrorMessage>
        </FormControl>

        {workBasicsQuery.data && workBasicsQuery.data.workLocation && (
          <FormControl isInvalid={!!errors.workLocation}>
            <FormLabel htmlFor="workLocation" fontSize="sm">
              Do you prefer to work on-site or remotely?
            </FormLabel>
            <Select
              {...register('workLocation', {
                required: 'Required field',
              })}
              id="workLocation"
              color="black"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              aria-invalid={errors.workLocation ? 'true' : 'false'}
              name="workLocation"
              placeholder="Select an option"
              size="md"
              data-cy="select-workLocation"
            >
              {workBasicsQuery.data.workLocation.map(({ value }) => (
                <option key={value} value={value}>
                  {workLocation[value]}
                </option>
              ))}
            </Select>
            <FormErrorMessage data-cy="error-workLocation-message">
              {errors.workLocation?.message}
            </FormErrorMessage>
          </FormControl>
        )}
        {displayAlwaysOfficeForm && (
          <Stack>
            <FormControl isInvalid={!!errors.acceptableTravelTime}>
              <FormLabel htmlFor="acceptableTravelTime" fontSize="sm">
                What’s an acceptable commute time for you?
              </FormLabel>
              <InputGroup>
                <Input
                  {...register('acceptableTravelTime', {
                    required: displayAlwaysOfficeForm ? 'Required field' : false,
                  })}
                  id="acceptableTravelTime"
                  type="number"
                  aria-invalid={errors.fullTimeCompensation ? 'true' : 'false'}
                  name="acceptableTravelTime"
                  placeholder="Total travel time"
                  size="md"
                  data-cy="input-acceptableTravelTime"
                />
                <InputRightAddon fontSize="sm" bg="gray.100" color="black">
                  minutes
                </InputRightAddon>
              </InputGroup>
              <FormHelperText fontSize="xs">
                This is the duration each way between the office and your home, a comfortable number
                that wont tire you out in the long run.
              </FormHelperText>
              <FormErrorMessage data-cy="error-acceptableTravelTime-message">
                {errors.acceptableTravelTime?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="address" isInvalid={!!errors.address}>
              <FormLabel fontSize="sm">What’s your current location?</FormLabel>
              <SearchBox onSelectAddress={handleSelectAddress} defaultValue="" />
              <FormHelperText fontSize="xs">
                We’ll try to match you with companies within your chosen commute time of your home.
              </FormHelperText>
              <FormErrorMessage data-cy="error-address-message">
                {errors.address?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.drivingToWork}>
              <FormLabel htmlFor="drivingToWork" fontSize="sm">
                Are you ok driving as part of your commute?
              </FormLabel>
              <Switch
                id="drivingToWork"
                aria-label="Are you ok driving as part of your commute?"
                size="lg"
                {...register('drivingToWork')}
              />
              <FormErrorMessage data-cy="error-drivingToWork-message">
                {errors.drivingToWork?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.relocateForWork}>
              <FormLabel htmlFor="relocateForWork" fontSize="sm">
                Are you willing to relocate for work?
              </FormLabel>
              <Switch
                id="relocateForWork"
                aria-label="Are you willing to relocate for work?"
                size="lg"
                {...register('relocateForWork')}
              />
              <FormErrorMessage data-cy="error-relocateForWork-message">
                {errors.relocateForWork?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.visaSponsorship}>
              <FormLabel htmlFor="visaSponsorship" fontSize="sm">
                Do you need visa sponsorship to work in:
              </FormLabel>
              <Box display="flex" alignContent="center">
                <Switch
                  colorScheme="brand"
                  id="visaSponsorship"
                  size="lg"
                  aria-label="Do you need visa sponsorship to work in"
                  {...register('visaSponsorship')}
                />
                <Text ml={2}>Canada</Text>
              </Box>
              <FormErrorMessage data-cy="error-visaSponsorship-message">
                {errors.visaSponsorship?.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
        )}

        {workBasicsQuery.data && workBasicsQuery.data.vacations && (
          <FormControl id="vacations" isInvalid={!!errors.vacations}>
            <FormLabel fontSize="sm">
              How many weeks of vacation per year are you looking for?
            </FormLabel>
            <Select
              color="black"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              {...register('vacations', {
                required: 'Required field',
              })}
              aria-invalid={errors.workLocation ? 'true' : 'false'}
              name="vacations"
              placeholder="Select an option"
              size="md"
              data-cy="select-vacations"
            >
              {workBasicsQuery.data.vacations.map(({ value }) => (
                <option key={value} value={value}>
                  {vacations[value]}
                </option>
              ))}
            </Select>
            <FormHelperText fontSize="xs">
              This applies only to full time work. This doesn’t include statutory or national
              holidays. Think about how much time you’d like to take off, and beware of the
              “unlimited vacation” time trap!
            </FormHelperText>
            <FormErrorMessage data-cy="error-vacations-message">
              {errors.vacations?.message}
            </FormErrorMessage>
          </FormControl>
        )}
        <Button isLoading={isSubmitting || updateProfileIsLoading} type="submit">
          Next, your background →
        </Button>
      </Stack>
    </form>
  )
}
