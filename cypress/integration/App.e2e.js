describe('App e2e', () => {
    it('should have pizzas and we can put it to the cart', () => {
        cy.visit('/')

        cy.get('.button--added').first().click()
        cy.get('.button--added').first().get('i').should("have.text", '1')
        cy.get('.button--added').eq(1).click()
        cy.get('.button--added').eq(1).children('i').should("have.text", '1')
        cy.get('.button--added').eq(2).click()
        cy.get('.button--added').eq(2).children('i').should("have.text", '1')
        cy.get('.button--added').eq(3).click()
        cy.get('.button--added').eq(3).children('i').should("have.text", '1')
        cy.get('.button--added').eq(4).click()
        cy.get('.button--added').eq(4).children('i').should("have.text", '1')
        cy.get('.button--added').eq(5).click()
        cy.get('.button--added').eq(5).children('i').should("have.text", '1')
        cy.get('.button--added').eq(6).click()
        cy.get('.button--added').eq(6).children('i').should("have.text", '1')
        cy.get('.button--added').eq(7).click()
        cy.get('.button--added').eq(7).children('i').should("have.text", '1')
        cy.get('.button--added').last().click()
        cy.get('.button--added').last().children('i').should("have.text", '2')

        cy.get('.total-count-span').should("have.text", '9')
        cy.get('.total-price-span').should("have.text", '96 $')
        cy.get('.button.button--cart').click()
    });

    it('should work properly in cart page and go back to main page', () => {
        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/cart')
        })
        cy.get('.button.button-cart-circle').eq(1).click()
        cy.get('.pizza-cart__item-amount').children('i').first().should('have.text', '2')
        cy.get('.button.button-cart-circle').first().click()
        cy.get('.pizza-cart__item-amount').children('i').first().should('have.text', '1')
        cy.get('button.button-cart-circle.button-cart-circle--delete').first().click()
        cy.get('.total-count-span').should("have.text", '8')
        cy.get('.total-price-span').should("have.text", '86 $')
        cy.get('.cart-reset').click()
        cy.get('button.button--outline.button--pay.button--small').first().click()
        cy.get('.total-count-span').should("have.text", '0')
        cy.get('.total-price-span').should("have.text", '0 $')
        cy.get('.button.button--back').click()
        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/')
        })
    });
})