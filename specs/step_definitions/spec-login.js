import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then('The user start on the login page', () => {
  // TODO: implement step
  cy.visit('127.0.0.1:5000');
});

When('The use add the email', () => {
  cy.get('#title').type("bwilcott0@fotki.com");
  // TODO: implement step
});

When('The password into the right input fields', () => {
  // TODO: implement step
  cy.get('#password').type("VPheqB4H");
});

Then('One gets to be able to log in when clicked on the button', () => {
  // TODO: implement step
  cy.get("#login").find('button').click();
});

Then('The page should have been changed to a new page', () => {
  // TODO: implement step
  cy.url().should('include', '/source/html/pages/home/home.html') // => true
});
