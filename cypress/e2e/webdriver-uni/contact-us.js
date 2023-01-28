//importing Cypress 
/// <reference types="Cypress" />

//description of what we want to test
describe ("Test contact us form on Webdriver website", () =>{
    //test scenario    
    it ("Should be able to submit a successful submission via form", () =>{
            //cypress code
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.document().should('have.property','charset').and('eql','UTF-8')
            cy.title().should('include', 'WebDriver | Contact Us')
            cy.url().should('include','contactus')

            //get element with selector playground > click (if element is )
            //cy.get('#contact-us > .thumbnail').click() 
            //cy.get('#contact_form').click({force: true})
            cy.get('[name="first_name"]').type('John')
            cy.get('[name="last_name"]').type('Markovich')
            cy.get('[name="email"]').type('hgat987@gmail.com')
            cy.get('[name="email"]').should('have.attr','name','email') //assert that the field has the name attribute as email
            cy.get('textarea.feedback-input').type('Nice webpage')
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")
            //get + click by id with force option if its unclickable (ex no valid size)
            //cy.get('#contact-us').click({force: true})
        });
    //test scenario (negative testing)
    it ("Should not be able to submit a successful submission via form as all field requiered", () =>{
            //cypress code
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
            cy.get('[name="first_name"]').type('John')
            cy.get('[name="last_name"]').type('Markovich')
            cy.get('textarea.feedback-input').type('Nice webpage')
            cy.get('[type="submit"]').click({force: true})
            cy.get('body').contains('all fields are required')
        });
})
