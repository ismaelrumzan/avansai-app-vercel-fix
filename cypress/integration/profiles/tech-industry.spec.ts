describe('Profiles | Tech Industry', () => {
  beforeEach(() => {
    cy.exec(
      `hasura seeds apply --file /03-31-2021-delete-cypress-user.sql --admin-secret ${Cypress.env(
        'HASURA_SECRET'
      )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
    )
    cy.visit('/signup')
    cy.signup('Cypress test user', 'cypress@test.com', 'test')

    cy.dataCy('button-TECH_INDUSTRY').should('be.visible').click()
  })

  afterEach(() => {
    cy.exec(
      `hasura seeds apply --file /03-31-2021-delete-cypress-user.sql --admin-secret ${Cypress.env(
        'HASURA_SECRET'
      )} --endpoint ${Cypress.env('HASURA_GRAPHQL_ENDPOINT')}`
    )
  })
  it('should display error messages if none of the fiels are filled', () => {
    /*
      Checking whether or not the select contains option 'Support' will wait
      for the app to finish fetching jobs and populate the select
    */

    cy.dataCy('select-focusArea').contains('Support')
    cy.dataCy('create-profile').click()
    cy.dataCy('error-focusArea-message').should('be.visible')
    cy.dataCy('error-resume-message').should('be.visible')
  })

  it('should not display any error message when all fiels are filled', () => {
    cy.dataCy('select-focusArea').select('Support')
    cy.dataCy('resume').attachFile('resume/my-resume.docx')
    cy.dataCy('create-profile').click()
    cy.dataCy('error-focusArea-message').should('not.exist')
    cy.dataCy('error-resume-message').should('not.exist')
  })

  it('should display other focus area input when selecting "Other" in Focus Area select', () => {
    cy.dataCy('select-focusArea').select('Other')
    cy.dataCy('other-focusArea').should('be.visible')
  })
})
