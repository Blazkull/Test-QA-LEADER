describe('check titule', () => {

it ('navigator in section commands and redirection to action',() => {
    cy.visit('/')
    cy.get('.navbar').contains('.dropdown-toggle', 'Commands').click()
    cy.get('.navbar').contains('.dropdown-menu a', 'Actions').click()
    cy.url().should('include', '/actions')
  
  })

})