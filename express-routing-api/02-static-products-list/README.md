# Exercise 2: Static Products List

**Italiano:**
Crea una rotta GET `/prodotti` che restituisce una lista di prodotti statici definiti in un array, con `id`, `nome` e `prezzo`.

**English:**
Create a GET `/prodotti` route that returns a list of static products defined in an array, containing `id`, `nome`, and `prezzo`.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express, dotenv e l'array di prodotti da `data/products.js`
  * INIZIALIZZA `app = express()` e configura la porta tramite `.env`
  * DEFINISCI rotta GET su "/prodotti":
    * RICEVI la richiesta del client
    * GENERA payload JSON contenente la lista dei prodotti (`products`)
    * RISPONDI con `res.json({ success: true, total: products.length, data: products })`
  * AVVIA il server su `PORT`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express, dotenv, and products array from `data/products.js`
  * INITIALIZE `app = express()` and configure port via `.env`
  * DEFINE GET route on "/prodotti":
    * RECEIVE client request
    * PREPARE JSON payload containing the array of products
    * RESPOND with `res.json({ success: true, total: products.length, data: products })`
  * START server listener on `PORT`
* END Express Application
```
