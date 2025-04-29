import { CartPage } from '../pages/cart.page';

describe('Add to cart', () => {
  const cart = new CartPage();

  before(function () {
    cy.fixture('products').then(p => { this.prod = p.cartItem; });
  });

  it('aAdd product and validate content', function () {
    
    cy.contains(this.prod.name).parents('[data-testid="product-card"]')
      .find('[data-testid="add-to-cart"]').click();

    cart.openCartViaNav();
    cart.assertProductInCart(this.prod.name);
    cart.assertTotalEquals(this.prod.price.toFixed(2));
  });
});
