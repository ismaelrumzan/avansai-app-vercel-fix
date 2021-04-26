import { Box, Center, Link, useColorModeValue as mode } from '@chakra-ui/react'
import { Logo } from '@components'
import { auth } from '@libs/nhost'
import { useAuth } from '@nhost/react-auth'
import { useRouter } from 'next/router'
import { Navbar } from '@modules/header/navigation/Navbar'
import { NavLink } from '@modules/header/navigation/NavLink'
import { UserProfile } from '@modules/header/userProfile/UserProfile'
import { ReactElement } from 'react'

export const Header = (): ReactElement => {
  const router = useRouter()
  const { signedIn } = useAuth()
  const user = auth.user()

  const logout = async (): Promise<void> => {
    await auth.logout()
    if (router.pathname === '/') {
      router.reload()
    } else {
      router.push('/')
    }
  }

  return (
    <Box bg={mode('gray.50', 'gray.700')}>
      <Navbar>
        <Navbar.Brand>
          <Center>
            <Logo h={12} iconColor={mode('background', 'white')} />
          </Center>
        </Navbar.Brand>
        <Navbar.Links>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/profile">Profile</NavLink>
          {!signedIn ? (
            <>
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/signup">Signup</NavLink>
            </>
          ) : (
            <Link onClick={logout} data-cy="log-out">
              Log out
            </Link>
          )}
        </Navbar.Links>
        {signedIn && (
          <Navbar.UserProfile>
            <UserProfile name={user.display_name} avatarUrl={user.avatar_url} email={user.email} />
          </Navbar.UserProfile>
        )}
      </Navbar>
    </Box>
  )
}
