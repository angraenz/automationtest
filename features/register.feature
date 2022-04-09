Feature: Automationpractice register

  Scenario Outline: As a new user, I can register and create account

    Given I am on the register page
    When I register
    Then I should see form create account
