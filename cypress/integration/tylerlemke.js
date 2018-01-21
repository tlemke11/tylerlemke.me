//Following code found at https://docs.cypress.io/api/events/catalog-of-events.html#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})



describe('Tyler Lemke.me Resume Site', function () {
    it('opens up heritage cards', function () {
        cy.visit('https://tylerlemke.me/resume')
        cy.contains('Summary').click();
    });
})