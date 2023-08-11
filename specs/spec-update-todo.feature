Feature: Delete a Todo from the list and the calender view
    As a user i want to be able to update a todo in the list

    Background: Start from first page and log in and get tho the calender page
        Given The user starts on the first page
        And the user will set its credential and log in
        And check so the user was logged in
        And the user go to the calender page
        And to get to the right view the user click on the "New Todo" button
        And check so the new todo view is displayed
        And the title and date is added
        And add to the list wh when the user click on the "Add" button below

    Scenario: update a todo
        Given That there is elements in the todo list
        And click on the todo so it shows on the update view
        And change title and date for the todo
        And click on the "Update" button to update the todo
        Then check so the new values is correct for the todo
