// productSearch.page.ts
import { BasePage } from './base.page';

export class ProductSearchPage extends BasePage {
  private searchBox      = () => cy.get('[data-testid="search-input"]');
  private categoryFilter = () => cy.get('[data-testid="category-select"]');
  private productCards   = () => cy.get('[data-testid="product-card"]');

  constructor() {
    super();
    this.url = '/products';
  }

  search(term: string) {
    this.open();
    this.searchBox().clear().type(`${term}{enter}`);
  }

  filterByCategory(category: string) {
    this.open();
    this.categoryFilter().select(category);
  }

  resultsShouldContain(text: string) {
    this.productCards().contains(text).should('be.visible');
  }
}
