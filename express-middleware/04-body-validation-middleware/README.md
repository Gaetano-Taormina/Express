# Exercise 4: Body Validation Middleware

**Italiano:**
Crea un middleware che valida il body delle richieste POST, controllando che i campi obbligatori siano presenti, e restituisce un 400 se mancano.

**English:**
Create a middleware that validates POST request bodies, verifying that all required fields are present, and returns a 400 Bad Request if any are missing.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE VALIDAZIONE BODY
  * CREA higher-order function `validateRequiredFields(requiredFields)`
  * RITORNA middleware `(req, res, next)`
  * CONTROLLA se `req.body` è presente e popolato
  * FILTRA l'array dei campi obbligatori cercando valori mancanti, null o stringhe vuote:
    * `missing = requiredFields.filter(f => !req.body[f])`
  * SE `missing.length > 0`:
    * RITORNA status 400 con lista dei campi mancanti
  * SE tutti i campi sono presenti:
    * INVOCA `next()`
* FINE MIDDLEWARE VALIDAZIONE BODY
```

**English:**

```text
* START BODY VALIDATION MIDDLEWARE
  * CREATE higher-order factory `validateRequiredFields(requiredFields)`
  * RETURN middleware handler `(req, res, next)`
  * CHECK if `req.body` exists and is a valid JSON object
  * FIND missing fields where property is undefined, null or empty string:
    * `missing = requiredFields.filter(f => !req.body[f])`
  * IF `missing.length > 0`:
    * RETURN status 400 Bad Request with list of missing properties
  * IF all mandatory fields are satisfied:
    * INVOKE `next()`
* END BODY VALIDATION MIDDLEWARE
```
