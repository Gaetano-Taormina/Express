# Exercise 1

**Italiano:**
Scaffolding manuale: il nostro primo server (esercizio guida).
Crea manualmente lo scaffolding di un progetto Node.js/Express
senza generatori automatici. Il server deve rispondere su
`http://localhost:3000/` con un messaggio di benvenuto.
Passaggi: cartella in VS Code, `pnpm init`, `pnpm add express`,
ES Modules + script dev con `node --watch`, `server.js`
(importa Express, crea l'app, scegli porta, GET /, avvia)
e `.gitignore`. Commenta i passaggi principali.

**English:**
Manual scaffolding: our first server (guided exercise).
Manually scaffold a Node.js/Express project from scratch without
automatic generators. The server must respond on
`http://localhost:3000/` with a welcome message.
Steps: folder in VS Code, `pnpm init`, `pnpm add express`,
ES Modules + dev script with `node --watch`, `server.js`
(import Express, create the app, choose port, GET /, start)
and `.gitignore`. Comment the main steps.

## Reasoning

**Italiano:**

```text
INIZIO
  INIZIALIZZA il progetto con pnpm (pnpm init)
  INSTALLA Express e linter (pnpm add express, pnpm add -D oxlint)
  CONFIGURA package.json:
    IMPOSTA "type": "module"
    AGGIUNGI lo script dev ("node --watch server.js")
    AGGIUNGI lo script lint ("oxlint")
  CREA il file .gitignore:
    IGNORA node_modules/ e file sensibili
  CREA il file server.js:
    IMPORTA Express
    INIZIALIZZA l'applicazione e definisci PORT = 3000
    DEFINISCI la rotta GET "/" che risponde con messaggio
    AVVIA il server in ascolto su PORT
FINE
```

**English:**

```text
START
  INITIALIZE project with pnpm (pnpm init)
  INSTALL Express and linter (pnpm add express, pnpm add -D oxlint)
  CONFIGURE package.json:
    SET "type": "module"
    ADD dev script ("node --watch server.js")
    ADD lint script ("oxlint")
  CREATE .gitignore file:
    IGNORE node_modules/ and sensitive files
  CREATE server.js file:
    IMPORT Express
    INITIALIZE application and define PORT = 3000
    DEFINE GET route "/" responding with welcome message
    START server listening on PORT
END
```
