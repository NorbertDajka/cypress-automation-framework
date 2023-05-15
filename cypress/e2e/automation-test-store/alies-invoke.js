//importing Cypress 
/// <reference types="Cypress" />

//description of what we want to test
describe('Alias and invoke', () => {
    it('Validate a specific haircare product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt',5);
        cy.get('@productThumbnail').should('include','Seaweed Conditioner');               
            
        })
        
    it('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length',16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart');  
                
        })

    it.only('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$')
            var i
            for (i=0; i<itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                itemPriceTotal += Number(itemPrice[i]); 
                              
            }
            cy.log(itemPriceTotal);
        });

            
                              
            
        })
                    
        })
