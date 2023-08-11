import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That a user starts on the first page', () => {
  // TODO: implement step
});

Given('the user is loggin in on the application', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000');
});

Given('the user is logging in to the application', () => {
  // TODO: implement step
  cy.get('#title').type("bwilcott0@fotki.com");
  cy.get('#password').type("VPheqB4H");
  cy.get("#login").find('button').click();
  cy.url().should('include', '/source/html/pages/home/home.html') // => true
});

Given('the user browse to the calender page', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000/source/html/pages/calender/calender.html')


});

Given('the user click on the {string} button to get to todo view', (a) => {
  // TODO: implement step
  cy.get('.current-date').find('button').contains(a).click()
});

Given('then the todo view will be displayed', () => {
  // TODO: implement step
  cy.get(".calendarTodo").should('have.css', 'display', 'block')
});

Given('then a title and date will be added', () => {
  // TODO: implement step
  cy.get('#myInput').type("automatisk test delete");
  cy.get('#date').type("2023-08-17");
});

Given('the new todo will be added when user clicked on {string} button', (a) => {
  // TODO: implement step
  cy.get(".header").find('button').contains(a).click()
});

Given('that there is at least one todo in the list', () => {
  // TODO: implement step
  cy.get('#myUL').should('have.length', 1);
});

Then('when the user click on the {string} button for that todo the todo should be deleteded from the list', (a) => {
  // TODO: implement step
  cy.get(".close").click()
  cy.get("#myUL").not("li")
});