# Exercise 3: Single Product Lookup

**Italiano:**
Crea una rotta GET `/prodotti/:id` che restituisce il singolo prodotto corrispondente all'id passato come parametro, oppure un errore 404 se non esiste.

**English:**
Create a GET `/prodotti/:id` route that returns the single product matching the id passed as a parameter, or a 404 error if it does not exist.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express, dotenv e l'elenco dei prodotti
  * INIZIALIZZA `app = express()` con supporto JSON
  * DEFINISCI rotta GET su "/prodotti/:id":
    * ESTRAI parametro `id` da `req.params.id`
    * CONVERTI l'id in intero (`parseInt`)
    * SE id non è un numero valido:
      * RITORNA status 400 con messaggio di errore
    * CERCA il prodotto nell'array con `products.find(p => p.id === productId)`
    * SE il prodotto non esiste:
      * RITORNA status 404 con messaggio "Prodotto non trovato"
    * ALTRIMENTI:
      * RITORNA status 200 con l'oggetto del prodotto trovato
  * AVVIA il server su `PORT`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express, dotenv, and products array
  * INITIALIZE `app = express()` with JSON support
  * DEFINE GET route on "/prodotti/:id":
    * EXTRACT `id` parameter from `req.params.id`
    * PARSE id to integer (`parseInt`)
    * IF id is not a valid number:
      * RETURN status 400 with validation error message
    * SEARCH product in array via `products.find(p => p.id === productId)`
    * IF product is not found:
      * RETURN status 404 with error message "Product not found"
    * ELSE:
      * RETURN status 200 with the matching product object
  * START server listener on `PORT`
* END Express Application
```
