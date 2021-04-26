import { Button, ButtonProps, useStyleConfig } from '@chakra-ui/react'
import { ReactElement } from 'react'

export const SocialAuthButton = ({
  variant,
  size,
  colorScheme,
  ...rest
}: ButtonProps): ReactElement => {
  const styles = useStyleConfig('SocialAuthButton', { size, variant, colorScheme })
  return <Button sx={styles} {...rest} />
}
