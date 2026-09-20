# Exercise 3: Token Auth Guard

**Italiano:**
Crea un middleware di autenticazione che controlla la presenza di un token nell'header `Authorization` e blocca la richiesta con un 401 se non è presente o non valido.

**English:**
Create an authentication middleware that inspects the `Authorization` header for a token and blocks requests with a 401 Unauthorized status if missing or invalid.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE DI AUTENTICAZIONE
  * CREA middleware `authenticateToken(req, res, next)`
  * LEGGI `req.headers["authorization"]`
  * SE l'header è assente:
    * RITORNA status 401 (Unauthorized) con errore "Header mancante"
  * ESTRAI il token (es. formato "Bearer <token>")
  * CONFRONTA il token estratto con `process.env.API_SECRET_TOKEN`
  * SE il token è invalido o non corrisponde:
    * RITORNA status 401 con errore "Token invalido"
  * SE il token è valido:
    * ASSEGNA informazioni utente a `req.user`
    * INVOCA `next()` per autorizzare il passaggio alla rotta
* FINE MIDDLEWARE DI AUTENTICAZIONE
```

**English:**

```text
* START AUTHENTICATION MIDDLEWARE
  * CREATE `authenticateToken(req, res, next)` guard
  * READ `req.headers["authorization"]`
  * IF header is undefined/empty:
    * RETURN status 401 (Unauthorized) with "Missing authorization header"
  * EXTRACT token value (e.g. "Bearer <token>" format)
  * COMPARE incoming token against configured secret `process.env.API_SECRET_TOKEN`
  * IF token is mismatching or corrupted:
    * RETURN status 401 with "Invalid token"
  * IF token matches:
    * ATTACH authenticated user context to `req.user`
    * CALL `next()` to proceed to route controller
* END AUTHENTICATION MIDDLEWARE
```
