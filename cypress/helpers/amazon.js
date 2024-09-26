class AmazonHomePage {
    visit() {
        cy.visit('https://www.amazon.ae');
    }

    getLogo() {
        return cy.get('#nav-logo-sprites');
    }

    getSearchBox() {
        return cy.get('#twotabsearchtextbox');
    }

    getSearchButton() {
        return cy.get('#nav-search-submit-button');
    }

    getCartIcon() {
        return cy.get('#nav-cart');
    }

    getSignInLink() {
        return cy.get('#nav-link-accountList');
    }

    getTodaysDealsLink() {
        return cy.contains("Today's Deals");
    }

    getLanguageSelector() {
        return cy.get('#icp-nav-flyout');
    }

    getAddressLink() {
        return cy.contains('Deliver to');
    }

    getMenuIcon() {
        return cy.contains('#nav - orders');
    }

    getFooterLinks() {
        return cy.get('footer a');
    }
}

export default new AmazonHomePage();
