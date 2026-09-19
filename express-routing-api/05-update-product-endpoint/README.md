# Exercise 5: Update Product Endpoint

**Italiano:**
Crea una rotta PUT `/prodotti/:id` che aggiorna un prodotto esistente con i dati passati nel body, restituendo il prodotto modificato o un errore se non trovato.

**English:**
Create a PUT `/prodotti/:id` route that updates an existing product with the data passed in the body, returning the modified product or an error if not found.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express, dotenv e la lista dei prodotti
  * CONFIGURA parser JSON con `app.use(express.json())`
  * DEFINISCI rotta PUT su "/prodotti/:id":
    * ESTRAI e converti `req.params.id` in intero
    * CERCA la posizione del prodotto tramite `products.findIndex(p => p.id === productId)`
    * SE indice === -1 (prodotto non trovato):
      * RITORNA status 404 con errore "Prodotto non trovato"
    * ESTRAI `nome` e `prezzo` da `req.body`
    * AGGIORNA i campi del prodotto all'indice trovato
    * RITORNA status 200 con il prodotto aggiornato
  * AVVIA il server su `PORT`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express, dotenv, and products collection
  * CONFIGURE JSON parser with `app.use(express.json())`
  * DEFINE PUT route on "/prodotti/:id":
    * EXTRACT and parse `req.params.id` as an integer
    * FIND product position via `products.findIndex(p => p.id === productId)`
    * IF index === -1 (product not found):
      * RETURN status 404 with error "Product not found"
    * EXTRACT `nome` and `prezzo` from `req.body`
    * UPDATE product properties at the matched index
    * RETURN status 200 with the updated product object
  * START server listener on `PORT`
* END Express Application
```
