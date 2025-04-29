import { CartPage } from '../pages/cart.page';

describe('Agregar al carrito', () => {
  const cart = new CartPage();

  before(function () {
    cy.fixture('products').then(p => { this.prod = p.cartItem; });
  });

  it('añade producto y verifica contenido', function () {
    // (omitir navegación al detalle del producto)
    cy.contains(this.prod.name).parents('[data-testid="product-card"]')
      .find('[data-testid="add-to-cart"]').click();

    cart.openCartViaNav();
    cart.assertProductInCart(this.prod.name);
    cart.assertTotalEquals(this.prod.price.toFixed(2));
  });
});
