// login.page.ts
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  // ── selectors ────────────────────────────────────────────────
  private email     = () => cy.get('[data-testid="login-email"]');
  private password  = () => cy.get('[data-testid="login-password"]');
  private submitBtn = () => cy.get('[data-testid="login-submit"]');
  private errorMsg  = () => cy.get('[data-testid="login-error"]');

  constructor() {
    super();
    this.url = '/login';
  }

  // ── actions ──────────────────────────────────────────────────
  login(userEmail: string, userPassword: string) {
    this.open();
    this.email().clear().type(userEmail);
    this.password().clear().type(userPassword, { log: false });
    this.submitBtn().click();
  }

  // ── assertions ───────────────────────────────────────────────
  assertError(message: string) {
    this.errorMsg().should('contain', message);
  }
}
