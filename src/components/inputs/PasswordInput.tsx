import {
  Box,
  Flex,
  FormLabel,
  Button,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Link from 'next/link'

import { forwardRef, useRef, ReactElement } from 'react'

type Props = { withForgotPassword: boolean } & InputProps
export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ withForgotPassword, size, fontSize, ...rest }, ref): ReactElement => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef<HTMLInputElement>(null)

    const mergeRef = useMergeRefs(inputRef, ref)

    const onClickReveal = (): void => {
      onToggle()
      const input = inputRef.current
      if (input) {
        input.focus({ preventScroll: true })
        const length = input.value.length * 2
        requestAnimationFrame(() => {
          input.setSelectionRange(length, length)
        })
      }
    }

    return (
      <>
        <Flex justify="space-between">
          <FormLabel>Password</FormLabel>
          {withForgotPassword ? (
            <Link href="/forgot-password">
              <Box
                as="a"
                color={mode('blue.600', 'blue.200')}
                fontWeight="semibold"
                fontSize={fontSize}
              >
                Forgot Password?
              </Box>
            </Link>
          ) : null}
        </Flex>
        <InputGroup size={size}>
          <Input
            color="gray.500"
            bg="white"
            ref={mergeRef}
            name="password"
            size={size}
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            {...rest}
          />
          <InputRightAddon bg="white" color="gray.500">
            <Button onClick={onClickReveal} variant="unstyled" fontSize={fontSize}>
              Show
            </Button>
          </InputRightAddon>
        </InputGroup>
      </>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
