describe('validate send form', () => {

  it('Check input required and checkbox check for sending the form', () => {

    cy.visit('http://blazkull.github.io/Test');


    cy.get('.input-name')
      .should('be.visible') 
      .and('not.be.disabled') 
      .type('Jhoan Acosta Prueba') 
      .should('have.value', 'Jhoan Acosta Prueba') 
      .and('have.attr', 'required')
      

    cy.get('.checkbox-container input[type="checkbox"]')
      .should('not.be.disabled')
      .and('not.be.checked')
      .check() 
      .should('be.checked');

    cy.get('.action-form')
      .submit();

    cy.get('#mensaje-de-estado')
      .should('be.visible')
      .and('contain', 'Nombre enviado con exito!');
  });

});