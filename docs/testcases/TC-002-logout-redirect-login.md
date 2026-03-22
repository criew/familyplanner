# TC-002: Logout leitet zur Login-Seite weiter

| Feld | Inhalt |
|---|---|
| **ID** | TC-002 |
| **Feature** | Authentication / Logout |
| **Typ** | E2E |
| **Priorität** | Hoch |
| **Erstellt** | 2026-03-22 |
| **Status** | Aktiv |

## Ziel

Sicherstellen, dass der Logout-Flow via Keycloak funktioniert und der User zur Login-Seite weitergeleitet wird.

## Voraussetzungen

- [ ] Anwendung läuft (`docker compose up` für postgres + keycloak, Frontend Dev Server)
- [ ] Keycloak Realm `familyplanner` ist importiert
- [ ] Testuser `testuser` existiert mit vollständigem Profil

## Testdaten

```
Username:  testuser
Passwort:  testpass
```

## Ablauf

1. Login durchführen (wie TC-001, Schritte 1–6)
2. Klicke auf "Abmelden"-Button in der NavBar
3. Warte auf Redirect durch Keycloak zur `/login`-Seite der App

## Erwartetes Ergebnis

- [ ] URL endet auf `/login`
- [ ] "Mit Keycloak anmelden"-Button ist sichtbar (User ist ausgeloggt)

## Automatisierung

| Feld | Inhalt |
|---|---|
| **Testdatei** | `e2e/tests/auth.spec.ts` |
| **Page Object** | `e2e/pages/LoginPage.ts`, `e2e/pages/KeycloakLoginPage.ts`, `e2e/pages/DashboardPage.ts` |
| **CI** | Nein (noch nicht konfiguriert) |

## Hinweise

- Der Logout-Redirect geht zunächst zu Keycloak (`signoutRedirect`) und dann weiter zur konfigurierten `post_logout_redirect_uri` (`http://localhost:3000/login`).
- Verwandter Test: TC-001 (Login)
