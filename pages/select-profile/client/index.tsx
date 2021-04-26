import Layout from '@modules/layout/Layout'
import { PrivateRoute } from '@modules/privateRoute/PrivateRoute'
import { ReactElement } from 'react'
import { ClientScreen } from '@screens'

export default function EmployerPage(): ReactElement {
  return (
    <Layout>
      <PrivateRoute authPath="signup">
        <ClientScreen />
      </PrivateRoute>
    </Layout>
  )
}
