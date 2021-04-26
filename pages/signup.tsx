import Layout from '@modules/layout/Layout'
import { Signup } from '@modules/signup/Signup'
import { ReactElement } from 'react'

export default function SignupPage(): ReactElement {
  return (
    <Layout>
      <Signup />
    </Layout>
  )
}
