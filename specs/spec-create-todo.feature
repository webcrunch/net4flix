Feature: Add a new Todo to the list and to the calender
  As a user i want to be able to create a todo

  Background: Start from first page and log in and get tho the calender page
    Given That a user needs to be on the first page
    And the user logs in
    And the user got logged in
    And the user gets to the calender page
    And the user click on the "New Todo" button

  Scenario: add a new todo
    Given that the new todo view is displayed
    And that name for the todos is added
    And the date for the todo is added
    Then when the user click on the "Add" button the todo should be added to the list below

