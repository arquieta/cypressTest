import { BasePage } from './base.page';

export class CartPage extends BasePage {
  private cartLink        = () => cy.get('[data-testid="nav-cart"]');
  private cartRows        = () => cy.get('[data-testid="cart-row"]');
  private removeButtons   = () => cy.get('[data-testid="cart-remove"]');
  private totalLabel      = () => cy.get('[data-testid="cart-total"]');
  private checkoutBtn     = () => cy.get('[data-testid="cart-checkout"]');

  constructor() {
    super();
    this.url = '/cart';
  }

  openCartViaNav() {
    this.cartLink().click();
  }

  removeItemByName(name: string) {
    this.cartRows().contains(name).parents('[data-testid="cart-row"]')
      .within(() => this.removeButtons().click());
  }

  assertProductInCart(name: string) {
    this.cartRows().should('contain', name);
  }

  assertTotalEquals(amount: string) {
    this.totalLabel().should('contain', amount);
  }

  proceedToCheckout() {
    this.checkoutBtn().click();
  }
}
