describe('Generate ByMiles Quick Quote', () => {
    it('Input parameters and generate quick quote', () => {
        
        // 1. Navigate to bymiles.co.uk, input registration number and click 'Get a quick quote' button
        cy.visit('https://bymiles.co.uk')
        cy.get('.reg-to-qq.center .formbox__input')
          .type('KR55 XTH')
          .should('have.value', 'KR55 XTH') 
        cy.get('.reg-to-qq.center button')          
          .click()
        cy.get('.formbox__vehicle-info > h5')
          .should('contain.text', 'PEUGEOT 206 VERVE')

        // 2. Input mileage
        cy.get('#edit-mileage')
          .type('20000')
          .should('have.value', '20000')  
        
        // 3. Click Continue button  
        cy.get('.formbox__estimated-mileage-cta-continue')
          .click()

        // 4. Select '12' from No claims dropdown 
        cy.get('div[name="ncd-wrapper"] .Select-control')
          .click()
        cy.get('[id^="react-select-"]')
          .contains('12')
          .click()
        cy.get('input[name=ncd]')
          .should('have.value', '12')

        // 5. Input age 
        cy.get('#age > .form-element__input')
          .type('31')
          .should('have.value', '31')  

        // 6. Input postcode   
        cy.get('#postcode > .form-element__input')
          .type('W6 8DJ')
          .should('have.value', 'W6 8DJ') 
          
        // 7. Select car insurance renewal date 
        cy.get('[name="renewal_month-wrapper"] .Select-control')
          .click()
        cy.get('[id^="react-select-"]')
          .contains('September')
          .click()
        cy.get('input[name=renewal_month]')
          .should('have.value', 'September')

        // 8. Park car using text secret and verify success
        cy.get("#quick-quote-form div:nth-child(2) .text")
          .dblclick()
        cy.get('.parking_container .text')
          .should('contain.text', 'Parked!')

        // 9. Click Get a quick quote and return annual estimate  
        cy.get('#quick-quote-form button')
          .click()
        cy.get('#quick-quote-user-got-successful-quote')
          .should('contain.text', 'Success!')
        cy.get('.estimated-price').then(($price) => {
            cy.log($price.text())
        })
    })
})
