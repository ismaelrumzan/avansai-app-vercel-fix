import { useAuth } from '@nhost/react-auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

export type AuthPath = 'login' | 'signup'

interface UsePrivateRouteResult {
  redirectTo: string
  removeRedirectTo: () => void
  signedIn: boolean
}

export function usePrivateRoute(
  authPath: AuthPath = 'login',
  redirectRoute?: string
): UsePrivateRouteResult {
  const [redirectTo, setRedirectTo, removeRedirectTo] = useLocalStorage<string>('redirectTo')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const { signedIn } = useAuth()

  /*
    "signedIn" can be null / true / false when signedIn = null, this means it's checking
    auth, in this case we simply wait for signedIn to be either true or false.

    Since isLoggedIn is a booleans, we make sure to only update
    isLoggedIn when signedIn is true or false
   */

  useEffect(() => {
    if (typeof signedIn === 'boolean' && !signedIn && router.pathname !== '/login') {
      setIsLoggedIn(false)
      if (redirectRoute) {
        setRedirectTo(redirectRoute)
      }
      router.push(`/${authPath}`)
    }
  }, [router, redirectRoute, redirectTo, signedIn, setRedirectTo, authPath])

  useEffect(() => {
    if (signedIn) {
      setIsLoggedIn(true)
    }
  }, [signedIn])

  return {
    signedIn: isLoggedIn,
    redirectTo,
    removeRedirectTo,
  }
}
