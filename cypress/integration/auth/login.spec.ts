describe('Auth', () => {
  afterEach(() => {
    cy.exec(
      `hasura seeds apply --file /04-06-2021-delete-test-user.sql --admin-secret ${Cypress.env(
        'HASURA_SECRET'
      )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
    )
  })
  describe('Login', () => {
    beforeEach(() => {
      cy.exec(
        `hasura seeds apply --file /03-29-2021-insert-test-user.sql --admin-secret ${Cypress.env(
          'HASURA_SECRET'
        )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
      )
    })
    describe('Login Form', () => {
      it('should display error message when login fails', () => {
        cy.visit('/login')
        cy.login('wrong@email.com', 'wrongpassword')
        cy.dataCy('login-alert').should('be.visible')
      })

      it('should login with test user and be redirected to home page', () => {
        cy.visit('/login')
        cy.login('test@test.com', 'test')
        cy.url().should('eq', 'http://localhost:3000/')
      })

      it('should visite "profile" page, be redirected to login and after login be redirected to "profile" page', () => {
        cy.visit('/profile')
        cy.url().should('eq', 'http://localhost:3000/login')
        cy.login('test@test.com', 'test')
        cy.url().should('eq', 'http://localhost:3000/profile')
      })
    })

    describe('Log out', () => {
      it('should log out the user', () => {
        cy.visit('/login')
        cy.login('test@test.com', 'test')
        cy.url().should('eq', 'http://localhost:3000/')
        cy.dataCy('log-out').click()
        cy.dataCy('log-out').should('not.exist')
      })
    })
  })
})
