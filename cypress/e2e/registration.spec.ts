import { RegistrationPage } from '../pages/registration.page';

describe('User Registration', () => {
  const page = new RegistrationPage();

  before(function () {
    cy.fixture('users').then(data => { this.users = data; });
  });

  it('Valid data registration', function () {
    const u = this.users.valid;
    const email = `${u.emailPrefix}${Date.now()}${u.domain}`;

    page.register({ ...u, email });
    cy.contains(`Welcome, ${u.firstName}`).should('be.visible');
  });
});
