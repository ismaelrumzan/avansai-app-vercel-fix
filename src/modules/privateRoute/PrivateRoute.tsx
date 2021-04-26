import { AuthPath, usePrivateRoute } from '@hooks/usePrivateRoute'
import { PropsWithChildren, ReactElement, useEffect } from 'react'

interface Props {
  pathname?: string
  authPath?: AuthPath
}

export const PrivateRoute = ({
  pathname,
  authPath = 'login',
  children,
}: PropsWithChildren<Props>): ReactElement | null => {
  const { signedIn, removeRedirectTo } = usePrivateRoute(authPath, pathname)

  useEffect(() => {
    return () => {
      removeRedirectTo()
    }
  }, [removeRedirectTo])

  return signedIn ? <>{children}</> : null
}
