# Exercise 6: Uppercase Body Strings

**Italiano:**
Crea un middleware che converte in maiuscolo tutti i valori stringa presenti nel body delle richieste POST prima che arrivino alle rotte.

**English:**
Create a middleware that converts all string values in POST request bodies to uppercase before reaching route handlers.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE UPPERCASE
  * CONTROLLA che `req.body` esista e sia un oggetto
  * ITERA su tutte le chiavi di `req.body` con `Object.keys(req.body)`
  * PER ogni chiave:
    * SE il tipo del valore è `"string"`:
      * TRASFORMA il valore in maiuscolo: `req.body[key] = req.body[key].toUpperCase()`
  * INVOCA `next()` per procedere alla rotta target
* FINE MIDDLEWARE UPPERCASE
```

**English:**

```text
* START UPPERCASE MIDDLEWARE
  * CHECK if `req.body` is present and is a non-null object
  * ITERATE through every property in `req.body` using `Object.keys(req.body)`
  * FOR each key:
    * IF `typeof req.body[key] === "string"`:
      * CONVERT string value to uppercase: `req.body[key] = req.body[key].toUpperCase()`
  * INVOKE `next()` to yield modified payload to destination route
* END UPPERCASE MIDDLEWARE
```
