// cypress/pages/base.page.ts
export abstract class BasePage {
    protected readonly url: string;
  
    open() {
      cy.visit(this.url);
    }
  }
  