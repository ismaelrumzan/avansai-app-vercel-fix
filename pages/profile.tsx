import Layout from '@modules/layout/Layout'
import { PrivateRoute } from '@modules/privateRoute/PrivateRoute'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

export default function ProfilePage(): ReactElement {
  const { pathname } = useRouter()

  return (
    <Layout>
      <PrivateRoute pathname={pathname}>Profile Page</PrivateRoute>
    </Layout>
  )
}
