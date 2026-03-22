import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { KeycloakLoginPage } from '../pages/KeycloakLoginPage'
import { DashboardPage } from '../pages/DashboardPage'

const TEST_USER = 'testuser'
const TEST_PASS = 'testpass'

test.describe('Authentication Flow', () => {
  test('TC-001: Login via Keycloak und Dashboard-Validierung', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const keycloakPage = new KeycloakLoginPage(page)
    const dashboardPage = new DashboardPage(page)

    // 1. App-Login-Seite aufrufen
    await loginPage.goto()
    await expect(loginPage.loginButton).toBeVisible()

    // 2. Keycloak-Redirect auslösen
    await loginPage.clickKeycloakLogin()

    // 3. Auf Keycloak-Login-Seite warten und Credentials eingeben
    await keycloakPage.waitForLoad()
    await keycloakPage.login(TEST_USER, TEST_PASS)

    // 4. Zurück zur App: Dashboard muss geladen sein
    await dashboardPage.waitForLoad()

    // 5. Validierung: AppBar mit "familyplanner" sichtbar
    await expect(dashboardPage.appBarTitle).toBeVisible()

    // 6. Validierung: Willkommenstext vorhanden
    await expect(dashboardPage.welcomeHeading).toBeVisible()

    // 7. Validierung: Username in NavBar erscheint
    // Die App zeigt profile.name ("Test User") oder preferred_username, niemals den Fallback "Benutzer"
    const displayedUsername = await dashboardPage.getDisplayedUsername()
    expect(displayedUsername.trim()).toBeTruthy()
    expect(displayedUsername).not.toBe('Benutzer')

    // 8. Logout-Button ist sichtbar
    await expect(dashboardPage.logoutButton).toBeVisible()
  })

  test('TC-002: Logout leitet zur Login-Seite weiter', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const keycloakPage = new KeycloakLoginPage(page)
    const dashboardPage = new DashboardPage(page)

    // Voraussetzung: eingeloggter User auf dem Dashboard
    await loginPage.goto()
    await loginPage.clickKeycloakLogin()
    await keycloakPage.waitForLoad()
    await keycloakPage.login(TEST_USER, TEST_PASS)
    await dashboardPage.waitForLoad()

    // Logout durchführen
    await dashboardPage.logout()

    // Nach Logout: Redirect zur Login-Seite
    await page.waitForURL(/\/login/, { timeout: 30000 })
    await expect(loginPage.loginButton).toBeVisible()
  })
})
