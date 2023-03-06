describe('testqastudio ', function () {

    it('Покупка товара', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(8000);
        cy.reload();
        cy.get('#menu-top > .menu-item-home > a').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(8000);
        cy.get('.woocommerce-mini-cart__buttons > [href="https://sh3910517.c.had.su/cart/"]').click();
        cy.wait(8000);
        cy.get('.checkout-button').click();
        cy.get('#billing_first_name').type('Елена');
        cy.get('#billing_last_name').type('Немцева');
        cy.get('#billing_address_1').type('9, Комсомольская');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Москва');
        cy.get('#billing_postcode').type('186190');
        cy.get('#billing_phone').type('87132456723');
        cy.get('#billing_email').type('elena@gmail.com');
        cy.contains('БРОММС').should('be.visible');
        cy.contains('КЛЛАРИОН').should('be.visible');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят').should('be.visible')
        })
})