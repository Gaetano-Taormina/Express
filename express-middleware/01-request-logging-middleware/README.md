# Exercise 1: Request Logging Middleware

**Italiano:**
Crea un middleware di logging che stampa su console il metodo HTTP, l'URL e l'orario di ogni richiesta in arrivo.

**English:**
Create a request logging middleware that prints the HTTP method, URL, and current timestamp of every incoming request to the console.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE DI LOGGING
  * CREA funzione middleware `requestLogger(req, res, next)`
  * ESTRAI metodo HTTP (`req.method`) e URL richiesta (`req.originalUrl`)
  * GENERA data e ora corrente (`new Date().toISOString()`)
  * STAMPA su console la stringa formattata: "[TIMESTAMP] METODO URL"
  * INVOCA `next()` per passare il controllo al middleware o rotta successiva
  * IN `server.js`:
    * MONTA il middleware a livello globale con `app.use(requestLogger)`
  * AVVIA il server su `PORT`
* FINE MIDDLEWARE DI LOGGING
```

**English:**

```text
* START LOGGING MIDDLEWARE
  * CREATE middleware function `requestLogger(req, res, next)`
  * EXTRACT HTTP method (`req.method`) and request path (`req.originalUrl`)
  * GENERATE ISO timestamp string (`new Date().toISOString()`)
  * LOG formatted string to stdout: "[TIMESTAMP] METHOD URL"
  * CALL `next()` to yield control to the next handler in pipeline
  * IN `server.js`:
    * ATTACH middleware globally via `app.use(requestLogger)`
  * START server listener on `PORT`
* END LOGGING MIDDLEWARE
```
