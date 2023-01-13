//importing Cypress 
/// <reference types="Cypress" />

//description of what we want to test
describe('Inspect Automation Test Store item using chain of commands', () => {
    it('Click on the first item using item header', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
     //this test clicks on first product using cypress selector playground tool (simple but risky)  
    });
    it('Click on the first item using item text', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
        //this does the same as the first "it" but first it gets the prdocutname class 
        //which is a common class in found in headers
        //and the searches for the line of code with this header class containing the name of the product
       
    });
    it.only('Click on the first item using item using index', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
     //click the product with 0 index (if you change to 1 selects the second)
    });
});