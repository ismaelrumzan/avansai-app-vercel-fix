import { Container } from '@chakra-ui/react'
import { Header } from '@modules/header/Header'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Container maxW="container.xl" data-cy="layout" px={6} minH="100vh">
    <Header />
    {children}
  </Container>
)

export default Layout
