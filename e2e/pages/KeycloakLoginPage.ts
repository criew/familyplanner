import { type Page } from '@playwright/test'

export class KeycloakLoginPage {
  constructor(private page: Page) {}

  readonly usernameInput = this.page.locator('#username')
  readonly passwordInput = this.page.locator('#password')
  readonly submitButton = this.page.locator('#kc-login')

  async waitForLoad() {
    await this.page.waitForURL(/localhost:8180/, { timeout: 30000 })
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
}
