import { ProductSearchPage } from '../pages/productSearch.page';
import { SearchByName, SearchByCategory } from '../strategies';

describe('Product Search', () => {
  const page = new ProductSearchPage();

  before(function () {
    cy.fixture('products').then(p => { this.prod = p; });
  });

  it('busca por nombre', function () {
    new SearchByName().search(this.prod.byName.term);
    page.resultsShouldContain(this.prod.byName.expected);
  });

  it('busca por categoría', function () {
    new SearchByCategory().search(this.prod.byCat.category);
    page.resultsShouldContain(this.prod.byCat.expected);
  });
});
