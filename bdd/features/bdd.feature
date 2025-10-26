@bdd
Feature: Search

  @bdd1
  Scenario: Ecosia search
    Given I go to url "https://www.ecosia.org/"
    Then I should see the page title contains "Ecosia"
    When I fill element using css "input[name='q']" with value "BDD Test Automation"
    And I press keyboard key "Enter"
    Then I wait for any element using css "p[data-test-id='web-result-description']" to be visible
    Then I should see element using css "#main" inner text contains "Cucumber"

  
