

import { faker } from '@faker-js/faker';

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email(); 

/// <reference types="Cypress" />
describe('Testing account creation on Madison Island webpage', () => {



    it('As a user I should be able to create an account with valid credential data', () => {
        cy.visit('http://testfasttrackit.info/magento-test/');
        cy.get('.skip-account > .label').click({force:true});
        cy.get("a[title='Register']").click();
        cy.get("[name='firstname']").type(randomFirstName);
        cy.get('input#lastname').type(randomLastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('Popionel3');
        cy.get('#confirmation').type('Popionel3');
        cy.get("button[title='Register']").click();
        cy.get('.success-msg > ul > li').should('have.text','Thank you for registering with Madison Island.');
    });

    it('As a user I should not be able to create an account with invalid email format', () => {
        cy.visit('http://testfasttrackit.info/magento-test/');
        cy.get('.skip-account > .label').click({force:true});
        cy.get("a[title='Register']").click();
        cy.get("[name='firstname']").type(randomFirstName);
        cy.get('input#lastname').type(randomLastName);
        cy.get('#email_address').type('dajkas2005@com');
        cy.get('#password').type('Popionel3');
        cy.get('#confirmation').type('Popionel3');
        cy.get("button[title='Register']").click();
        cy.get('#advice-validate-email-email_address').should('have.text','Please enter a valid email address. For example johndoe@domain.com.');
    });


});