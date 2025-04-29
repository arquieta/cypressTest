// cypress/strategies/byName.strategy.ts
import { SearchStrategy } from './searchStrategy';
import { ProductSearchPage } from '../pages/productSearch.page';

export class SearchByName implements SearchStrategy {
  private page = new ProductSearchPage();

  search(name: string) {
    this.page.searchBox().clear().type(`${name}{enter}`);
  }
}
