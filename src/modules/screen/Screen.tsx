import { Container, Heading, Stack } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export const Screen = ({ title, children }: Props): ReactElement => {
  return (
    <Container
      maxW={{
        base: 'auto',
        sm: 80,
      }}
      p={0}
    >
      <Stack spacing={8}>
        <Heading as="h1" size="lg">
          {title}
        </Heading>
        {children}
      </Stack>
    </Container>
  )
}
