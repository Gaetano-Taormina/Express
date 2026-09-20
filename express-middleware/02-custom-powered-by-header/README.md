# Exercise 2: Custom Powered-By Header

**Italiano:**
Crea un middleware che aggiunge un header personalizzato `X-Powered-By: MioServer` a tutte le risposte del server.

**English:**
Create a middleware that appends a custom `X-Powered-By: MioServer` header to all server responses.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE CUSTOM HEADER
  * DISABILITA l'header predefinito con `app.disable("x-powered-by")`
  * DEFINISCI middleware `setCustomPoweredBy(req, res, next)`
  * IMPOSTA l'header di risposta: `res.setHeader("X-Powered-By", "MioServer")`
  * CHIAMA `next()` per continuare il ciclo richiesta/risposta
  * MONTA il middleware a monte di tutte le rotte con `app.use()`
  * RISPONDI a una richiesta GET verificando l'header nei response headers
* FINE MIDDLEWARE CUSTOM HEADER
```

**English:**

```text
* START CUSTOM HEADER MIDDLEWARE
  * DISABLE default Express header via `app.disable("x-powered-by")`
  * DEFINE middleware `setCustomPoweredBy(req, res, next)`
  * ATTACH response header: `res.setHeader("X-Powered-By", "MioServer")`
  * INVOKE `next()` to proceed with execution pipeline
  * REGISTER middleware globally ahead of route declarations via `app.use()`
  * VERIFY response headers on GET request
* END CUSTOM HEADER MIDDLEWARE
```
