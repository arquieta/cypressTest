// checkout.spec.ts
import { CartPage }     from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

describe('Checkout', () => {
  const cart     = new CartPage();
  const checkout = new CheckoutPage();

  before(function () {
    cy.fixture('payment').then(p => { this.pay = p; });
  });

  it('Payment workflow', function () {
    
    cart.open();
    cart.proceedToCheckout();

    checkout.completeShipping(this.pay.address);
    checkout.completePayment(this.pay.card);
    checkout.placeOrder();
    checkout.assertOrderSuccess();
  });
});
