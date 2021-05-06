import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const errors = {
    'no results': 'No matching shows',
};

const pages = {
    search: '/#/search',
};

Given('I am on the {} page', (page) => {
    const pagePath = pages[page];
    expect(!!pagePath).to.be.true;

    cy.visit(pagePath);
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
