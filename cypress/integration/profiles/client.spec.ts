describe('Profiles', () => {
  afterEach(() => {
    cy.exec(
      `hasura seeds apply --file /03-31-2021-delete-cypress-user.sql --admin-secret ${Cypress.env(
        'HASURA_SECRET'
      )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
    )
  })

  describe('Client', () => {
    beforeEach(() => {
      cy.exec(
        `hasura seeds apply --file /03-31-2021-delete-cypress-user.sql --admin-secret ${Cypress.env(
          'HASURA_SECRET'
        )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
      )
      cy.visit('/signup')
      /*
        If the email is changed, make sure we change in file /api/profiles/client to
        prevent the team from receiving emails when E2E tests run
       */
      cy.signup('Cypress test user', 'cypress@test.com', 'test')
      cy.dataCy('button-CLIENT_HIRER').click()
    })

    it("should display error message phone number isn't filled", () => {
      cy.dataCy('button-call').click()
      cy.dataCy('error-phone-number').should('be.visible')
    })

    it('should create a user with a "client" profile', () => {
      cy.dataCy('input-phone-number').type('123 456 7890')
      cy.dataCy('button-call').click()
      cy.url().should('eq', 'http://localhost:3000/select-profile/client/success')
    })
  })
})
