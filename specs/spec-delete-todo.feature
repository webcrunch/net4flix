Feature: Delete a Todo from the list and the calender view
    As a user i want to be able to delete a todo in the list

    Background: Start from first page and log in and get tho the calender page
        Given That a user starts on the first page
        And the user is loggin in on the application
        And the user is logging in to the application
        And the user browse to the calender page
        And the user click on the "New Todo" button to get to todo view
        And then the todo view will be displayed
        And then a title and date will be added
        And the new todo will be added when user clicked on "Add" button

    Scenario: delete a todo
        Given that there is at least one todo in the list
        Then when the user click on the "x" button for that todo the todo should be deleteded from the list

