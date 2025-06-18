describe ('validate buttom if enable', ()  => {

  it('validate button visible and validate if the button is clickable.',() => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-form').should('be.visible','be.enable').submit()
    
  })

})