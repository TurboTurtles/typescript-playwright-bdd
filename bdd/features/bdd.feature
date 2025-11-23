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

  @bdd2
  Scenario: Search test
    Given I go to url "https://gibiru.com"
    Then I should see the page title contains "Gibiru"
    When I fill element using css "input[name=q]" with value "Cucumber"
    And I press keyboard key "Enter"
    Then I wait for any element using css "gsc-results" with inner text "Salad"

  @bdd3
  Scenario: Search test
    Given I go to url "https://duckduckgo.com"
    Then I should see the page title contains "DuckDuckGo"
    When I fill element using css "input#searchbox_input" with value "Cucumber"
    And I press keyboard key "Enter"
    Then I wait for any element using css "gsc-results" with inner text "Salad"

  @bdd4
  Scenario: Search test
    Given I go to url "https://automationexercise.com/login"
    Then I should see the page title contains "Signup / Login"
    When I fill element using css "input[data-qa=signup-name]" with value "Mihran"
    When I fill element using css "input[data-qa=signup-email]" with value "mihran@gmail.com"
    And I press keyboard key "Enter"

  @bdd5
  Scenario: Registration test
    Given I go to url "https://automationexercise.com/login"
    Then I should see the page title contains "Signup / Login"
    When I type "MihranTest" into element using css "input[data-qa=signup-name]"
    When I type "mihrantest@test.com" into element using css "input[data-qa=signup-email]"
    Then I click on element using css "button[data-qa=signup-button]"
    And I press keyboard key "Enter"
    Then I wait for any element using css "section[id='form']" to be visible
    Then I click on element using css "input[id='id_gender1']"
    Then I fill element using css "input[id='password']" with value "12345"
    Then I select option "10" from element using css "select[id='days']"
    Then I select option "5" from element using css "select[id='months']"
    Then I select option "1995" from element using css "select[id='years']"
    When I fill element using css "input[id='first_name']" with value "Mihran"
    When I fill element using css "input[id='last_name']" with value "Test"
    When I fill element using css "input[id='company']" with value "TestCompany"
    When I fill element using css "input[id='address1']" with value "TestAddress1"
    When I fill element using css "input[id='address2']" with value "TestAddress2"
    Then I select option "Canada" from element using css "select[id='country']"
    When I fill element using css "input[id='state']" with value "TestState"
    When I fill element using css "input[id='city']" with value "TestCity"
    When I fill element using css "input[id='zipcode']" with value "12345"
    When I fill element using css "input[id='mobile_number']" with value "+1234567890"
    Then I click on element using css "button[data-qa='create-account']"
    Then I wait for any element using css "h2[data-qa='account-created']" to be visible
    Then I should see element using css "h2[data-qa='account-created']" inner text contains "Account Created!"
    Then I click on element using css "a[data-qa='continue-button']"
    Then I wait for any element using css "a[href='/logout']" to be visible
