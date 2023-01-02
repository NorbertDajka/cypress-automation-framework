//importing Cypress 
/// <reference types="Cypress" />

//description of what we want to test
describe('Test contact us form via Automation Test Store', () => {
    it('Should be able to submit successful submission via contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type('Johnny');
        cy.get('#ContactUsFrm_email').type('aladin@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name','email')
        cy.get('#ContactUsFrm_enquiry').type('Get me some good offers!')
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
});