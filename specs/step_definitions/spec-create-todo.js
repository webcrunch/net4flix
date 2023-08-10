import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That a user needs to be on the first page', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000');
});

Given('the user logs in', () => {
  // TODO: implement step
  cy.get('#title').type("bwilcott0@fotki.com");
  cy.get('#password').type("VPheqB4H");
  cy.get("#login").find('button').click();

});


Given('the user got logged in', () => {
  // TODO: implement step
  cy.url().should('include', '/source/html/pages/home/home.html') // => true
});

Given('the user gets to the calender page', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000/source/html/pages/calender/calender.html')
});

Given('the user click on the {string} button', (a) => {
  // TODO: implement step
  cy.get('.current-date').find('button').contains(a).click()
});

Given('that the new todo view is displayed', () => {
  // TODO: implement step
  cy.get(".calendarTodo").should('have.css', 'display', 'block')
});

Given('that name for the todos is added', () => {
  // TODO: implement step
  cy.get('#myInput').type("automatisk test 1");
});

Given('the date for the todo is added', () => {
  // TODO: implement step
  cy.get('#date').type("2023-08-17");
});

Then('when the user click on the {string} button the todo should be added to the list below', (a) => {
  // TODO: implement step
  cy.get(".header").find('button').contains(a).click()
  cy.get('#myUL').should('have.length', 1);
});