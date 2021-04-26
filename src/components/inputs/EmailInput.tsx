import { FormLabel, Input, InputProps } from '@chakra-ui/react'
import { forwardRef, ReactElement } from 'react'

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): ReactElement => (
    <>
      <FormLabel>Email</FormLabel>
      <Input
        color="gray.500"
        _placeholder={{ color: 'gray.500' }}
        bg="white"
        ref={ref}
        type="text"
        {...props}
      />
    </>
  )
)

EmailInput.displayName = 'EmailInput'
