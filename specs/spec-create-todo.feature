Feature: be able to log in to the application
  As a user i want to be able to log in to the application

  Background: Start from first page and log in
    Given That i need to be on the first page
    Then the user logs in

  Scenario: Get to the calender page
    Given When the user has logged in
    Then The user gets to the calender page

  Scenario: Get to the new todo view
    Given that the user click on the "new todo" button
    Then the view is displayed

  Scenario: add a new todo
    Given that the new todo view is displayed
    And that name for the todos is added
    And the date for the todo is added
    Then when the user click on the "Add" button the todo should be added to the list below

