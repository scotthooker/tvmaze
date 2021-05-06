describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.contains('Home');
        cy.contains('About');
        cy.contains('Search');
    });

    it('should navigate to the about page', () => {
        cy.visit('/');
        cy.get('[role="button"]').contains('About').click();
        cy.contains('About Page');
    });
});
