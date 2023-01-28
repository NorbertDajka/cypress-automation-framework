// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('madisonLogin', () => { 
    cy.get('.skip-account > .label').click({force:true});
    cy.get("a[title='Log In']").click();
    cy.get('#email').type('dajkas_2005@yahoo.com');
    cy.get('#pass').type('Popionel3');
    cy.get("button#send2").click();
    cy.get('.logo > img:nth-of-type(1)').click();

 });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })