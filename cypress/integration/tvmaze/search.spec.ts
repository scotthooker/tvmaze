describe('The Search Page', () => {
    it('Loads', () => {
        cy.visit('/search');
    });

    it('Should have a search box', () => {
        cy.visit('/search');

        cy.contains('Search Page');
        cy.contains('Enter something to search for');
    });

    it('The search button should be disabled when no text', () => {
        cy.visit('/search');
        cy.get('button').should('be.disabled');
    });

    it('The search button should be enabled when we enter some text', () => {
        cy.visit('/search');
        cy.get('input').type('line of duty');
        cy.get('button').should('not.be.disabled');
    });

    it('We should be able to search for a show', () => {
        cy.visit('/search');
        cy.get('input').type('line of duty');
        cy.get('button').click();
        cy.contains('Bent Coppers:');
    });

    it('We should be able to click on a show to go to the show page', () => {
        cy.visit('/search');
        cy.get('input').type('line of duty');
        cy.get('button').click();
        cy.wait(500);
        cy.get('button').contains('Bent Coppers').click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/show/54740');
        });
    });

    it('If we search for something that returns no results we should see an error message', () => {
        cy.visit('/search');
        cy.get('input').type('xxyyzz');
        cy.get('button').click();
        cy.contains('No matching shows');
    });
});
