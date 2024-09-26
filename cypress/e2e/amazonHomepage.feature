Feature: Amazon Homepage

  Scenario: Verify the Amazon logo is visible
    Given I am on the Amazon homepage
    Then I should see the Amazon logo

  Scenario: Search functionality for laptops
    Given I am on the Amazon homepage
    When I search for "laptop"
    Then I should see search results for "laptop"

  Scenario: Search functionality for books
    Given I am on the Amazon homepage
    When I search for "book"
    Then I should see search results for "book"

  Scenario: Sign in link is present
    Given I am on the Amazon homepage
    Then I should see the "Sign In" link

  Scenario: Cart icon is visible
    Given I am on the Amazon homepage
    Then I should see the cart icon

  Scenario: Verify today's deals link
    Given I am on the Amazon homepage
    Then I should see the "Today's Deals" link

  Scenario: Language selection option is available
    Given I am on the Amazon homepage
    Then I should see the language selection dropdown

  Scenario: Address link is present
    Given I am on the Amazon homepage
    Then I should see the "Address icon" link

  Scenario: Menu Icon is visible
    Given I am on the Amazon homepage
    Then I should see the "Menu Icon" 

  Scenario: Footer links are present
    Given I am on the Amazon homepage
    Then I should see footer links like "About Us" and "Careers"
