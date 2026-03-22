import { type Page } from '@playwright/test'

export class LoginPage {
  constructor(private page: Page) {}

  readonly loginButton = this.page.getByRole('button', { name: 'Mit Keycloak anmelden' })

  async goto() {
    await this.page.goto('/login')
  }

  async clickKeycloakLogin() {
    await this.loginButton.click()
  }
}
