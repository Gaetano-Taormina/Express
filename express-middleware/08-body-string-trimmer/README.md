# Exercise 8: Body String Trimmer Middleware

**Italiano:**
Crea un middleware che applica automaticamente il trim a tutti i campi stringa presenti nel body, eliminando spazi bianchi accidentali prima e dopo i valori inseriti dall'utente.

**English:**
Create a middleware that automatically applies trimming to all string fields in the request body, eliminating accidental leading and trailing whitespace.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE AUTO-TRIMMER
  * CREA funzione ausiliaria ricorsiva `trimDeep(obj)`
  * SE l'elemento è una stringa:
    * APPLICA `.trim()`
  * SE l'elemento è un array:
    * MAPPA ricorsivamente ciascun elemento
  * SE l'elemento è un oggetto:
    * ITERA su ciascuna coppia chiave/valore e applica `trimDeep`
  * NEL MIDDLEWARE `autoTrimBodyStrings(req, res, next)`:
    * SOVRASCRIVI `req.body = trimDeep(req.body)`
    * INVOCA `next()`
  * MONTA il middleware in `server.js`
* FINE MIDDLEWARE AUTO-TRIMMER
```

**English:**

```text
* START AUTO-TRIMMER MIDDLEWARE
  * CREATE recursive helper function `trimDeep(obj)`
  * IF target value is a string:
    * APPLY `.trim()`
  * IF target value is an array:
    * RECURSIVELY map over items applying `trimDeep`
  * IF target value is an object:
    * ITERATE through entries, applying `trimDeep` recursively
  * IN MIDDLEWARE handler `autoTrimBodyStrings(req, res, next)`:
    * REASSIGN `req.body = trimDeep(req.body)`
    * INVOKE `next()`
  * MOUNT middleware globally in `server.js`
* END AUTO-TRIMMER MIDDLEWARE
```
