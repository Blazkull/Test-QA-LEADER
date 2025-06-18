describe('typing input email', () => {

    it ('typing text in input email',() => {
        cy.visit('/commands/actions')
        cy.get('#email1').type('jeacosta37@gmail.com')
            .should('have.value', 'jeacosta37@gmail.com')

    })

})