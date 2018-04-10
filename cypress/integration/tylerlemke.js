//Following code found at https://docs.cypress.io/api/events/catalog-of-events.html#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})



describe('Tyler Lemke.me Resume Site', function () {
    it('opens up heritage cards', function () {
        cy.visit('./index.html')
    });
    it('test nav links', function () {
        cy.contains('a','Skills').click();
        cy.contains('h5','Coding');
        cy.contains('a','Portfolio').click();
        cy.contains('h5','ChoosyBest');
    });
})