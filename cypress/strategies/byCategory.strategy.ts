// cypress/strategies/byCategory.strategy.ts
import { SearchStrategy } from './searchStrategy';
import { ProductSearchPage } from '../pages/productSearch.page';

export class SearchByCategory implements SearchStrategy {
  private page = new ProductSearchPage();

  search(category: string) {
    this.page.categoryFilter().select(category);
  }
}
