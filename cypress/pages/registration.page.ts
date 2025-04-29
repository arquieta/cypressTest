import { BasePage } from './base.page';

export class RegistrationPage extends BasePage {
  private firstname = () => cy.get('#firstName');
  private lastname  = () => cy.get('#lastName');
  private email     = () => cy.get('#email');
  private password  = () => cy.get('#password');
  private submitBtn = () => cy.get('button[type="submit"]');

  constructor() {
    super();
    this.url = '/register';
  }

  register(user) {
    this.open();
    this.firstname().type(user.firstName);
    this.lastname().type(user.lastName);
    this.email().type(user.email);
    this.password().type(user.password, { log: false });
    this.submitBtn().click();
  }
}
