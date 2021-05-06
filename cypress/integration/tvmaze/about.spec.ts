describe('The About Page', () => {
    it('successfully loads', () => {
        cy.visit('/#/about');
        cy.contains('Example TVMaze App');
    });

    it('should be able to navigate to the about page', () => {
        cy.visit('/');
        cy.get('[role="button"]').contains('About').click();
        cy.contains('About Page');
    });
});
