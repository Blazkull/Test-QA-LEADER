describe('count elements in list querying', () => {  
  
  
  it('should navigate to "Querying" section and verify inner list items', () => {
     cy.visit('/')
    cy.get('.home-list > :nth-child(1)').contains('Querying').click()
    cy.get('.query-list li').should('have.length.of.at.least', 5)
  })

});