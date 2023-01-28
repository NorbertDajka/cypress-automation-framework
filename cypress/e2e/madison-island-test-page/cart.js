/// <reference types="Cypress" />
describe('Testing Cart on Madison Island webpage', () => {



      it('Adding to and viewing the cart as non registered user', () => {
        cy.visit('http://testfasttrackit.info/magento-test/');
        cy.get(".product-info  a[title='Unicorn Jewelry Set']").click();
        cy.get(".add-to-cart-wrapper button[title='Add to Cart']").click();
        cy.get('.skip-cart.skip-link > .label').click({force:true});
        cy.get(".cart-link").click({force:true});
        cy.get('h1').should('have.text','Shopping Cart');
    });
    
    
      it('As a registered user i should be able to see the cart', () => {
         cy.visit('http://testfasttrackit.info/magento-test/');

         //custom command => see commands.js
         cy.madisonLogin();

         cy.get(".product-info  a[title='Unicorn Jewelry Set']").click();
         cy.get(".add-to-cart-wrapper button[title='Add to Cart']").click();
         cy.get('.skip-cart.skip-link > .label').click({force:true});
         cy.get(".cart-link").click({force:true});
         cy.get('h1').should('have.text','Shopping Cart');
         cy.get('#empty_cart_button > :nth-child(1) > span').click();
         
});

      it('Users should be able to change quantity of added items in cart', () => {
          cy.visit('http://testfasttrackit.info/magento-test/');
          cy.get(".product-info  a[title='Unicorn Jewelry Set']").click();
          cy.get(".add-to-cart-wrapper button[title='Add to Cart']").click();
          cy.get('.skip-cart.skip-link > .label').click({force:true});
          cy.get(".cart-link").click({force:true});
          cy.get('h1').should('have.text','Shopping Cart');
          cy.get('.product-cart-actions > .input-text').should('have.attr','value','1');
          cy.get('.product-cart-actions > .input-text').clear().type('2');
          cy.get('.product-cart-actions > .button > :nth-child(1) > span').click();
          cy.get('.product-cart-actions > .input-text').should('have.attr','value','2');

        });

      it('As a registered user i should be able to delete the cart', () => {
          cy.visit('http://testfasttrackit.info/magento-test/');
 
          //custom command => see commands.js
          cy.madisonLogin();
 
          cy.get(".product-info  a[title='Unicorn Jewelry Set']").click();
          cy.get(".add-to-cart-wrapper button[title='Add to Cart']").click();
          cy.get('.skip-cart.skip-link > .label').click({force:true});
          cy.get(".cart-link").click({force:true});
          cy.get('#empty_cart_button > :nth-child(1) > span').click();
          cy.get('h1').should('have.text','Shopping Cart is Empty');


          
 });

});