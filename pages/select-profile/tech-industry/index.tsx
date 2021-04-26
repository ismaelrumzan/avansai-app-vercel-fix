import Layout from '@modules/layout/Layout'
import { PrivateRoute } from '@modules/privateRoute/PrivateRoute'
import { ReactElement } from 'react'
import { TechIndustryScreen } from '@screens'

export default function NonCoderPage(): ReactElement {
  return (
    <Layout>
      <PrivateRoute authPath="signup">
        <TechIndustryScreen />
      </PrivateRoute>
    </Layout>
  )
}
