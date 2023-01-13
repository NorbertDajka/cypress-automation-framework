//importing Cypress 
/// <reference types="Cypress" />

//description of what we want to test
describe('Veryfying variables, cy commands and JQuerry commands', () => {
    it('Navigating to specific products pages', () => {
        cy.visit('https://automationteststore.com/');
    //    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    //    const skincareLink = cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').contains("Skincare")
    //     makeupLink.click();
    //     skincareLink.click();
    })
    it.only('Navigating to specific products pages', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        
        //This fails
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log('Found header text:' + headerText);
        })
    })
})