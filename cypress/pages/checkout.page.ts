// checkout.page.ts
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  private firstName    = () => cy.get('[data-testid="checkout-firstname"]');
  private lastName     = () => cy.get('[data-testid="checkout-lastname"]');
  private address      = () => cy.get('[data-testid="checkout-address"]');
  private city         = () => cy.get('[data-testid="checkout-city"]');
  private zip          = () => cy.get('[data-testid="checkout-zip"]');
  private cardNumber   = () => cy.get('[data-testid="payment-card"]');
  private expiry       = () => cy.get('[data-testid="payment-expiry"]');
  private cvv          = () => cy.get('[data-testid="payment-cvv"]');
  private placeOrderBtn= () => cy.get('[data-testid="place-order"]');
  private successMsg   = () => cy.get('[data-testid="order-success"]');

  constructor() {
    super();
    this.url = '/checkout';
  }

  completeShipping(info: {
    first: string; last: string; address: string; city: string; zip: string;
  }) {
    this.open();
    this.firstName().type(info.first);
    this.lastName().type(info.last);
    this.address().type(info.address);
    this.city().type(info.city);
    this.zip().type(info.zip);
  }

  completePayment(card: { number: string; expiry: string; cvv: string }) {
    this.cardNumber().type(card.number);
    this.expiry().type(card.expiry);
    this.cvv().type(card.cvv);
  }

  placeOrder() {
    this.placeOrderBtn().click();
  }

  assertOrderSuccess() {
    this.successMsg().should('contain', 'Thank you');
  }
}
