import Layout from '@modules/layout/Layout'
import { Login } from '@modules/login/Login'
import { ReactElement } from 'react'

export default function LoginPage(): ReactElement {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}
