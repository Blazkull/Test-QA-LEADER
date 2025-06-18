describe('check titule inclued Kitchen Sink', () => {

  it ('check titule incluide Kitchen Sink', () => {
    cy.visit('/')
    cy.title().should('include', 'Kitchen Sink')
  })

})
