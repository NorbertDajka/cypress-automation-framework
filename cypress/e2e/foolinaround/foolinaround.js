//importing Cypress 
/// <reference types="Cypress" />
describe('Skimania newsletter subscription form test', () => {
    it('It should not subscribe with invalid email to newsletter', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('asdf.hu@')
        cy.get('.g-recaptcha').click({force: true})
        
    });
    it('It should not subscribe without terms acceptance checked + without newsletter willingness  + valid email', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('dajkass2005@gmail.com')
        cy.get('.g-recaptcha').click({force: true})
        
    });
    it('It should not subscribe /w terms acceptance checked + /wout newsletter willingness checked  + valid email', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('dajkass2005@gmail.com')
        cy.get(':nth-child(3) > input').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
        
    });
    it('It should not subscribe /wout terms acceptance checked + /w newsletter willingness checked  + valid email', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('dajkass2005@gmail.com')
        cy.get(':nth-child(4) > input').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
        
    });
    it('It should not subscribe /w all checked  + invalid email', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('dajkass2005gmail.com')
        cy.get(':nth-child(3) > input').click({force: true})
        cy.get(':nth-child(4) > input').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
        
    });

    it('It should subscribe /w all checked  + valid email', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('dzsingasbuk_1928@gmail.com')
        cy.get(':nth-child(3) > input').click({force: true})
        cy.get(':nth-child(4) > input').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
        
    });
    it('Users who already have subscriprion couldn`t subscribe again', () => {
        cy.visit('https://skimania.ro/newsletter.php')
        cy.get(':nth-child(2) > input').type('dzsingasbuk_1928@gmail.com')
        cy.get(':nth-child(3) > input').click({force: true})
        cy.get(':nth-child(4) > input').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
        
    });
});