Feature: Search screen (Cucumber)

  Background:
    Given I am on the search page

  Scenario: Search button behaviour
    When the search box is empty
    Then the search button should be disabled

  Scenario: Searching for something that has results
    When I search for the line of duty
    Then the results should include Bent Coppers

  Scenario: Searching for something with no results
    When I search for xxyyzz
    Then the no results error should be shown

