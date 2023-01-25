//importing Cypress 
/// <reference types="Cypress" />

//description of what we want to test
describe('Iterate over element', () => {
    it('Log info of all Hair Care products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {

            cy.log("Index:" + index + " : " + $el.text());
            
        })
    })

    it('Add specific product to basket', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })
})