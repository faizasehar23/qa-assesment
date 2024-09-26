import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AmazonHomePage from '../../helpers/amazon';

Given('I am on the Amazon homepage', () => {
    AmazonHomePage.visit();
});

Then('I should see the Amazon logo', () => {
    AmazonHomePage.getLogo().should('be.visible');
});

When('I search for {string}', (searchTerm) => {
    AmazonHomePage.getSearchBox().type(searchTerm);
    AmazonHomePage.getSearchButton().click();
});

Then('I should see search results for {string}', (searchTerm) => {
    cy.get('.s-main-slot').should('exist').contains(searchTerm);
});

Then('I should see the "Sign In" link', () => {
    AmazonHomePage.getSignInLink().should('be.visible');
});

Then('I should see the cart icon', () => {
    AmazonHomePage.getCartIcon().should('be.visible');
});

Then('I should see the "Today\'s Deals" link', () => {
    AmazonHomePage.getTodaysDealsLink().should('be.visible');
});

Then('I should see the language selection dropdown', () => {
    AmazonHomePage.getLanguageSelector().should('be.visible');
});

Then('I should see the "Address icon" link', () => {
    AmazonHomePage.getAddressLink().should('be.visible');
});

Then('I should see the "Return link"', () => {
    AmazonHomePage.getReturnLink().should('be.visible');
});

Then('I should see footer links like "About Us" and "Careers"', () => {
    // Assuming there is an element with the class 'my-element'
    cy.get('#navFooter').scrollIntoView();

    cy.get('#navFooter').should('contain.text', 'About Amazon').and('contain.text', 'Careers');
});
