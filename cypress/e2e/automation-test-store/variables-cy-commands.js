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
    it('Navigating to specific products pages', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        
        //This fails
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log('Found header text:' + headerText);
            expect(headerText).to.eq('Makeup');
        })
    })
    it.only('Validate propreties of the contactus page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')//# is for id
        
        //JQuerry Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
            const firstNameText = text.find("#field_11").text()
            expect(firstNameText).to.contain('First name:')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })


        });

        
 
        })
    })
