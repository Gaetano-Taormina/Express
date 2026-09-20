# Exercise 6: Delete Product Endpoint

**Italiano:**
Crea una rotta DELETE `/prodotti/:id` che rimuove un prodotto dalla lista e restituisce un messaggio di successo o un errore se l'id non esiste.

**English:**
Create a DELETE `/prodotti/:id` route that removes a product from the list and returns a success message or an error if the id does not exist.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express, dotenv e lista prodotti
  * CONFIGURA middleware `express.json()`
  * DEFINISCI rotta DELETE su "/prodotti/:id":
    * ESTRAI e converti `req.params.id` in intero
    * CERCA la posizione del prodotto: `products.findIndex(p => p.id === productId)`
    * SE non trovato (index === -1):
      * RITORNA status 404 con "Prodotto non trovato"
    * SE trovato:
      * RIMUOVI il prodotto dall'array con `products.splice(productIndex, 1)`
      * RITORNA status 200 con messaggio di successo ed elemento rimosso
  * AVVIA il server su `PORT`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express, dotenv, and products list
  * CONFIGURE `express.json()` middleware
  * DEFINE DELETE route on "/prodotti/:id":
    * EXTRACT and parse `req.params.id` as integer
    * LOCATE product index: `products.findIndex(p => p.id === productId)`
    * IF not found (index === -1):
      * RETURN status 404 with "Product not found"
    * IF found:
      * REMOVE product from array via `products.splice(productIndex, 1)`
      * RETURN status 200 with success confirmation and deleted item
  * START server listener on `PORT`
* END Express Application
```
