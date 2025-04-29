import { LoginPage } from '../pages/login.page';

describe('Login', () => {
  const page = new LoginPage();

  before(function () {
    cy.fixture('users').then(d => { this.users = d; });
  });

  it('Valid credentials', function () {
    const { emailPrefix, domain, password } = this.users.valid;
    page.login(`${emailPrefix}seed${domain}`, password);  
    cy.url().should('include', '/account');
  });

  it('Invalid credentials', function () {
    const { email, password } = this.users.invalid;
    page.login(email, password);
    page.assertError('Invalid');
  });
});
