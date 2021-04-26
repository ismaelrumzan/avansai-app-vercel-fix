import { IconButton, IconButtonProps } from '@chakra-ui/react'
import React from 'react'

interface ToggleButtonProps extends IconButtonProps {
  toggle: () => void
  icon: React.ReactElement
}
export const ToggleIconButton = ({
  toggle,
  icon,
  ...iconProps
}: ToggleButtonProps): React.ReactElement => {
  return (
    <IconButton
      colorScheme="light"
      size="lg"
      onClick={toggle}
      icon={icon}
      {...iconProps}
      role="button"
    />
  )
}
