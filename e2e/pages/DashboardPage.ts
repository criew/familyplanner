import { type Page } from '@playwright/test'

export class DashboardPage {
  constructor(private page: Page) {}

  readonly appBarTitle = this.page.getByRole('banner').getByText('familyplanner')
  readonly welcomeHeading = this.page.getByRole('heading', { name: 'Willkommen im Familienplaner' })
  readonly logoutButton = this.page.getByRole('button', { name: 'Abmelden' })
  readonly usernameDisplay = this.page.getByRole('banner').locator('p')

  async waitForLoad() {
    await this.page.waitForURL(/\/dashboard/, { timeout: 30000 })
    await this.welcomeHeading.waitFor({ state: 'visible', timeout: 15000 })
  }

  async logout() {
    await this.logoutButton.click()
  }

  async getDisplayedUsername(): Promise<string> {
    return (await this.usernameDisplay.textContent()) ?? ''
  }
}
