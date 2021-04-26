describe('Sign up Page', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('should render sign up page', () => {
    cy.dataCy('signup-more-options').first().should('have.text', 'More ways to sign up')
  })

  it('should display more options when click "More ways to signup"', () => {
    cy.dataCy('signup-more-options').click()
    cy.dataCy('signup-button-auth-google').should('be.visible')
    cy.dataCy('signup-more-options').should('not.exist')
  })

  it('should create a new user through signup form', () => {
    cy.signup('Cypress test user', 'cypress@test.com', 'test')
    cy.url().should('eq', 'http://localhost:3000/select-profile')
    cy.exec(
      `hasura seeds apply --file /03-31-2021-delete-cypress-user.sql --admin-secret ${Cypress.env(
        'HASURA_SECRET'
      )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
    )
  })
})
