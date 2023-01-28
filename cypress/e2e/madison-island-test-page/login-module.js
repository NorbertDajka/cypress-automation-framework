
/// <reference types="Cypress" />
describe('Testing Login on Madison Island webpage', () => {



    it('As a user I want to be able to login with valid credentials', () => {
        cy.visit('http://testfasttrackit.info/magento-test/');
        cy.get('.skip-account > .label').click({force:true});
        cy.get("a[title='Log In']").click();
        cy.get('#email').type('dajkas_2005@yahoo.com');
        cy.get('#pass').type('Popionel3');
        cy.get("button#send2").click();
        cy.get('.hello').should('have.text','Hello, Pop Ionel!');
    });

    
    it('As a user I should not be able to login with invalid credentials', () => {
        cy.visit('http://testfasttrackit.info/magento-test/');
        cy.get('.skip-account > .label').click({force:true});
        cy.get("a[title='Log In']").click();
        cy.get('#email').type('kecske1234@gailmail.com');
        cy.get('#pass').type('Kecske1234');
        cy.get("button#send2").click();
        cy.get('.error-msg > ul > li').should('have.text','Invalid login or password.');
    });




    
});