# TC-XXX: [Kurzer Titel des Testfalls]

| Feld | Inhalt |
|---|---|
| **ID** | TC-XXX |
| **Feature** | [Feature / Modul] |
| **Typ** | E2E / Integration / Unit |
| **Priorität** | Hoch / Mittel / Niedrig |
| **Erstellt** | YYYY-MM-DD |
| **Status** | Draft / Aktiv / Veraltet |

## Ziel

[Ein Satz: Was soll dieser Testfall sicherstellen?]

## Voraussetzungen

- [ ] Anwendung läuft (`docker compose up`)
- [ ] [Weitere Voraussetzung, z.B. eingeloggter Benutzer mit Rolle X]
- [ ] [Testdaten vorhanden: z.B. mind. 1 Schüler in der Datenbank]

## Testdaten

```
[Beispiel-Eingaben, die für diesen Test verwendet werden]
Name:    Max Mustermann
E-Mail:  max@beispiel.de
Rolle:   LEHRER
```

## Ablauf

1. [Schritt 1: z.B. Navigiere zu /schueler]
2. [Schritt 2: z.B. Klicke auf "Neu anlegen"]
3. [Schritt 3: z.B. Fülle Formular mit Testdaten aus]
4. [Schritt 4: z.B. Klicke auf "Speichern"]

## Erwartetes Ergebnis

- [ ] [Ergebnis 1: z.B. Erfolgsmeldung wird angezeigt]
- [ ] [Ergebnis 2: z.B. Neuer Eintrag erscheint in der Liste]
- [ ] [Ergebnis 3: z.B. Daten wurden korrekt gespeichert]

## Automatisierung

| Feld | Inhalt |
|---|---|
| **Testdatei** | `e2e/[feature]/[testname].spec.ts` |
| **Page Object** | `e2e/pages/[PageName].ts` |
| **CI** | Ja / Nein |

## Hinweise

[Optionale Anmerkungen: bekannte Einschränkungen, verwandte Testfälle, etc.]
