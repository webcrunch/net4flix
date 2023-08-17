Feature: Test to log in to the application
  As a user i want to be able to log in to the application

  Background: Start from first page
    Then The user start on the login page

  Scenario: log in
    When The use add the email
    And The password into the right input fields
    And One gets to be able to log in when clicked on the button
    Then The page should have been changed to a new page

