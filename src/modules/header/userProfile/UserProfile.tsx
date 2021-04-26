import { BellIcon } from '@chakra-ui/icons'
import { Avatar, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface UserProfileProps {
  name: string
  email: string
  avatarUrl: string
}

export const UserProfile = ({ name, email, avatarUrl }: UserProfileProps): ReactElement => {
  return (
    <>
      <Flex order={{ base: 2, md: 1 }}>
        <IconButton
          isRound
          size="sm"
          fontSize="xl"
          aria-label="Show notification"
          variant="ghost"
          color="current"
          icon={<BellIcon />}
        />
      </Flex>
      <HStack spacing={3} order={{ base: 1, md: 2 }} flex="1">
        <Avatar name={name} src={avatarUrl} size="sm" />
        <Flex direction="column" display={{ base: 'flex', md: 'none' }}>
          <Text fontWeight="bold" lineHeight="shorter">
            {name}
          </Text>
          <Text fontSize="sm" lineHeight="shorter" opacity={0.7}>
            {email}
          </Text>
        </Flex>
      </HStack>
    </>
  )
}
