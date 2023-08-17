import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
let title = "automatisk test update";
let date = "2023-08-17";
Given('The user starts on the first page', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000');
});

Given('the user will set its credential and log in', () => {
  // TODO: implement step
  cy.get('#title').type("bwilcott0@fotki.com");
  cy.get('#password').type("VPheqB4H");
  cy.get("#login").find('button').click();
  cy.url().should('include', '/source/html/pages/home/home.html') // => true
});

Given('check so the user was logged in', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000/source/html/pages/calender/calender.html')
});

Given('the user go to the calender page', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000/source/html/pages/calender/calender.html')

});

Given('to get to the right view the user click on the {string} button', (a) => {
  // TODO: implement step
  cy.get('.current-date').find('button').contains(a).click()
});

Given('check so the new todo view is displayed', () => {
  // TODO: implement step
  cy.get(".calendarTodo").should('have.css', 'display', 'block')
});

Given('the title and date is added', () => {
  // TODO: implement step
  cy.get('#myInput').type("automatisk test update");
  cy.get('#date').type("2023-08-17");
});

Given('add to the list wh when the user click on the {string} button below', (a) => {
  // TODO: implement step
  cy.get(".header").find('button').contains(a).click()
});

Given('That there is elements in the todo list', () => {
  cy.get('#myUL').should('have.length', 1);
});

Given('click on the todo so it shows on the update view', () => {
  // TODO: implement step
  cy.get(".todo-list span").contains("Task").click()
});

Given('change title and date for the todo', () => {
  // TODO: implement step
  cy.get('#myInput').clear()
  cy.get('#date').clear()
  cy.get('#myInput').type("automatisk test updated");
  cy.get('#date').type("2023-08-18");
});

Given('click on the {string} button to update the todo', (a) => {
  cy.get(".header").find('button').contains(a).click()
});

Then('check so the new values is correct for the todo', () => {
  // TODO: implement step
  cy.get(".todo-list").contains('ask: automatisk test updated - Date: 2023-08-18 ')
});