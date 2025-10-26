@bdd
Feature: Google search

  @bdd1
  Scenario: Ecosia search
    Given I go to url "https://www.ecosia.org/"
    Then I should see the page title contains "Ecosia"
    When I fill element using css "input[name='q']" with value "BDD Test Automation"
    And I press keyboard key "Enter"
    Then I wait for any element using css "p[data-test-id='web-result-description']" to be visible
    Then I should see element using css "#main" inner text contains "Cucumber"
    
  @bdd1-xpath
  Scenario: Ecosia search
    Given I go to url "https://www.ecosia.org/"
    Then I should see the page title contains "Ecosia"
    When I fill element using xpath "//*[@name='q']" with value "BDD Test Automation"
    And I press keyboard key "Enter"
    Then I wait for any element using xpath "//p[@data-test-id='web-result-description']" to be visible
    Then I should see element using xpath "//*[@id='main']" inner text contains "Cucumber"

  @bdd2
  Scenario: Yahoo search
    Given I go to url "https://www.yahoo.com"
    Then I should see the page title contains "Yahoo"
    When I fill element using css "#uh-sbq" with value "BDD Test Automation"
    And I wait for timeout in milliseconds 1500
    And I press keyboard key "Enter"
    And I wait for new tab and switch to it
    And I wait for any element using css "#web ol li" to be visible
    Then I should see element using css "#web" inner text contains "Cucumber"

  @bdd2-xpath
  Scenario: Yahoo search
    Given I go to url "https://www.yahoo.com"
    Then I should see the page title contains "Yahoo"
    When I fill element using xpath "//*[@id='uh-sbq']" with value "BDD Test Automation"
    And I wait for timeout in milliseconds 1500
    And I press keyboard key "Enter"
    And I wait for new tab and switch to it
    And I wait for any element using xpath "//*[@id='web']/ol/li" to be visible
    Then I should see element using xpath "//*[@id='web']" inner text contains "Cucumber"

  @usps1-xpath
  Scenario: usps
    Given I go to url "https://www.usps.com/"
    When I hover over element using xpath "//*[@id='mail-ship-width']"
    And I click on element using xpath "//li[@class='tool-zip']"
    And I click on element using xpath "//div[@class='link-header-holder']//a[@data-location='byaddress']"
    When I fill element using xpath "//*[@id='tAddress']" with value "4970 El Camino Real"
    And I fill element using xpath "//*[@id='tCity']" with value "Los Altos"
    And I select option "CA" from element using xpath "//*[@id='tState']"
    And I click on element using xpath "//*[@id='zip-by-address']"
    Then I wait for any element using xpath "//*[@id='zipByAddressDiv']/ul/li" to be visible
    Then I should see element using xpath "//*[@id='zipByAddressDiv']" inner text contains "94022"

  @usps1
  Scenario: usps
    Given I go to url "https://www.usps.com/"
    When I hover over element using css "#mail-ship-width"
    And I click on element using css "li.tool-zip"
    And I click on element using css "div.link-header-holder a.zip-code-address"
    When I fill element using css "#tAddress" with value "4970 El Camino Real"
    And I fill element using css "#tCity" with value "Los Altos"
    And I select option "CA" from element using css "#tState"
    And I click on element using css "#zip-by-address"
    Then I wait for any element using css "#zipByAddressDiv ul li" to be visible
    Then I should see element using css "#zipByAddressDiv" inner text contains "94022"
