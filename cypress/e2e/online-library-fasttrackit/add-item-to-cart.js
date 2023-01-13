/// <reference types="Cypress" />
describe('Adding item to a cart', () => {
    it('Should add item to a cart successfully', () => {
        cy.visit('https://online-library.testfasttrackit.info/');
        cy.get('.header-mobiles-menu').click({force:true});
        cy.get('#menu-main-menu-2 > .menu-item-79 > :nth-child(1)').click({force:true})
        
    });
});