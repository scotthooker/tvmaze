import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const errors = {
    'no results': 'No matching shows',
};

Given('I am on the search page', () => {
    cy.visit('/search');
});

When('the search box is empty', () => {
    cy.get('input').clear();
});

When('I search for {}', (searchTerm) => {
    cy.get('input').type(searchTerm);
    cy.get('button').click();
});

Then('the search button should be disabled', () => {
    cy.get('button').should('be.disabled');
});

Then('the results should include {}', (checkText) => {
    cy.contains(checkText);
});

Then('the {} error should be shown', (checkText) => {
    const search = errors[checkText];
    expect(!!search).to.be.true;
    cy.contains(search);
});
