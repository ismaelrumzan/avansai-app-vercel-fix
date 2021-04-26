import {
  Link as CKLink,
  LinkProps as CKLinkProps,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'

type NavLinkProps = CKLinkProps & { isActive?: boolean } & LinkProps

export const NavLink = (props: NavLinkProps): ReactElement => {
  const {
    isActive,
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    ...rest
  } = props
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <CKLink
        display="block"
        py={2}
        px={3}
        borderRadius="md"
        transition="all 0.3s"
        fontWeight="medium"
        lineHeight="1.25rem"
        aria-current={isActive ? 'page' : undefined}
        _hover={{ bg: mode('gray.100', 'gray.700') }}
        _activeLink={{
          bg: mode('blue.600', 'blue.200'),
          color: mode('white', 'gray.900'),
        }}
        {...rest}
      />
    </Link>
  )
}
