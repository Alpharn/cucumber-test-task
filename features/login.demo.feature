Feature: Saucedemo Login Validation

  Scenario: User should see an error when clicking Login without entering a username
    Given User is located on the main page of saucedemo website
    When User clicks the Login button
    Then User should see "Epic sadface: Username is required" error message