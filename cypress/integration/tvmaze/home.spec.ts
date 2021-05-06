describe('The About Page', () => {
    it('successfully loads', () => {
        cy.visit('/about');
        cy.contains('Home');
        cy.contains('About');
        cy.contains('Search');
    });
});
