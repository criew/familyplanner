# TC-001: Login via Keycloak und Dashboard-Validierung

| Feld | Inhalt |
|---|---|
| **ID** | TC-001 |
| **Feature** | Authentication / Login |
| **Typ** | E2E |
| **Priorität** | Hoch |
| **Erstellt** | 2026-03-22 |
| **Status** | Aktiv |

## Ziel

Sicherstellen, dass der vollständige OIDC-Login-Flow via Keycloak funktioniert und das Dashboard korrekt geladen wird.

## Voraussetzungen

- [ ] Anwendung läuft (`docker compose up` für postgres + keycloak, Frontend Dev Server)
- [ ] Keycloak Realm `familyplanner` ist importiert
- [ ] Testuser `testuser` existiert mit vollständigem Profil (Email, Vor-/Nachname)

## Testdaten

```
Username:  testuser
Passwort:  testpass
Email:     testuser@familyplanner.test
Vorname:   Test
Nachname:  User
```

## Ablauf

1. Navigiere zu `/login`
2. Klicke auf "Mit Keycloak anmelden"
3. Warte auf Redirect zu `localhost:8180` (Keycloak-Login-Seite)
4. Fülle `#username` mit `testuser` und `#password` mit `testpass` aus
5. Klicke auf den Submit-Button (`#kc-login`)
6. Warte auf Redirect zurück zu `localhost:3000/dashboard`

## Erwartetes Ergebnis

- [ ] AppBar mit Text "familyplanner" ist sichtbar
- [ ] Heading "Willkommen im Familienplaner" ist sichtbar
- [ ] NavBar zeigt einen nicht-leeren Benutzernamen (nicht den Fallback "Benutzer")
- [ ] "Abmelden"-Button ist sichtbar

## Automatisierung

| Feld | Inhalt |
|---|---|
| **Testdatei** | `e2e/tests/auth.spec.ts` |
| **Page Object** | `e2e/pages/LoginPage.ts`, `e2e/pages/KeycloakLoginPage.ts`, `e2e/pages/DashboardPage.ts` |
| **CI** | Nein (noch nicht konfiguriert) |

## Hinweise

- Keycloak zeigt bei Erstkonfiguration "Update Account Information" wenn Email/Name fehlen. Der Testuser muss vollständiges Profil haben (realm-export.json enthält diese Daten).
- Die NavBar zeigt `profile.name` ("Test User") bevorzugt vor `preferred_username`, daher prüft der Test nur ob ein nicht-leerer, nicht-Fallback-Wert angezeigt wird.
