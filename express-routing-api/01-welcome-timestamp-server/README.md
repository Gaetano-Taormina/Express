# Exercise 1: Welcome & Server Timestamp

**Italiano:**
Crea un server Express con una rotta GET che restituisce un messaggio di benvenuto in formato JSON con l'orario corrente del server.

**English:**
Create an Express server with a GET route that returns a JSON welcome message containing the current server timestamp.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express e dotenv
  * CARICA le variabili di ambiente con dotenv.config()
  * INIZIALIZZA l'applicazione express: `const app = express()`
  * DEFINISCI la porta ascolto da `process.env.PORT` o fallback a 3000
  * CONFIGURA middleware `express.json()`
  * DEFINISCI rotta GET su "/":
    * CREA oggetto JSON contenente:
      * `success`: true
      * `message`: stringa di benvenuto
      * `timestamp`: data/ora ISO corrente (`new Date().toISOString()`)
      * `serverTime`: orario locale formattato
    * INVIA risposta con `res.json(oggetto)`
  * AVVIA il server su porta specificata con `app.listen`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express and dotenv
  * LOAD environment variables via dotenv.config()
  * INITIALIZE express application: `const app = express()`
  * DEFINE listening port from `process.env.PORT` or default to 3000
  * CONFIGURE `express.json()` middleware
  * DEFINE GET route on "/":
    * BUILD JSON payload with:
      * `success`: true
      * `message`: welcome greeting
      * `timestamp`: current ISO string timestamp (`new Date().toISOString()`)
      * `serverTime`: localized time string
    * SEND response via `res.json(payload)`
  * START server listener with `app.listen(PORT)`
* END Express Application
```
