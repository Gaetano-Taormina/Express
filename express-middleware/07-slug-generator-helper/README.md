# Exercise 7: Slug Generator Helper & Middleware

**Italiano:**
Crea un middleware che cerca nel body la chiave "name" e, se presente, genera automaticamente la chiave "slug" trasformando il valore in minuscolo, sostituendo gli spazi con trattini e rimuovendo i caratteri speciali (supportato da un modulo helper `helpers/slugify.js`).

**English:**
Create a middleware that inspects the request body for the "name" key and, if present, automatically generates a "slug" key by lowercasing, replacing spaces with dashes, and removing special characters (powered by a dedicated `helpers/slugify.js` helper).

---

## Reasoning

**Italiano:**

```text
* INIZIO MODULO HELPER & MIDDLEWARE SLUG
  * CREA file helper `helpers/slugify.js`:
    * DEFINISCI funzione `slugify(text)`
    * NORMALIZZA caratteri unicode (rimozione accenti)
    * CONVERTI in minuscolo (`.toLowerCase()`)
    * SOSTITUISCI spazi con trattini (`replace(/\s+/g, '-')`)
    * RIMUOVI caratteri speciali (`replace(/[^a-z0-9-]/g, '')`)
    * RITORNA stringa slug pulita
  * CREA middleware `middlewares/slugMiddleware.js`:
    * IMPORTA `slugify`
    * CONTROLLA se `req.body.name` esiste
    * SE esiste, CREA `req.body.slug = slugify(req.body.name)`
    * INVOCA `next()`
  * MONTA il middleware in `server.js`
* FINE MODULO HELPER & MIDDLEWARE SLUG
```

**English:**

```text
* START SLUG HELPER & MIDDLEWARE
  * CREATE utility helper `helpers/slugify.js`:
    * DEFINE function `slugify(text)`
    * NORMALIZE unicode characters (strip diacritics / accents)
    * CONVERT text to lowercase (`.toLowerCase()`)
    * REPLACE whitespace sequences with hyphens (`replace(/\s+/g, '-')`)
    * STRIP all non-alphanumeric special characters
    * RETURN sanitized slug string
  * CREATE middleware `middlewares/slugMiddleware.js`:
    * IMPORT `slugify` helper
    * CHECK if `req.body.name` is defined
    * IF present, GENERATE `req.body.slug = slugify(req.body.name)`
    * CALL `next()`
  * ATTACH middleware in `server.js`
* END SLUG HELPER & MIDDLEWARE
```
