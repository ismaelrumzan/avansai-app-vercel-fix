import Layout from '@modules/layout/Layout'
import { PrivateRoute } from '@modules/privateRoute/PrivateRoute'
import { SelectProfileScreen } from '@screens'
import { ReactElement } from 'react'

export default function SelectProfilePage(): ReactElement {
  return (
    <Layout>
      <PrivateRoute authPath="signup">
        <SelectProfileScreen />
      </PrivateRoute>
    </Layout>
  )
}
