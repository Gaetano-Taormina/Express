# Exercise 4: Create Product Endpoint

**Italiano:**
Crea una rotta POST `/prodotti` che accetta un nuovo prodotto nel body della richiesta e lo aggiunge alla lista, restituendo il prodotto creato con un id generato.

**English:**
Create a POST `/prodotti` route that accepts a new product in the request body and adds it to the list, returning the created product with a generated id.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express, dotenv e lista prodotti
  * ABILITA parsing body JSON con `app.use(express.json())`
  * DEFINISCI rotta POST su "/prodotti":
    * ESTRAI `nome` e `prezzo` da `req.body`
    * VALIDA i campi obbligatori (nome e prezzo)
    * SE la validazione fallisce:
      * RITORNA status 400 con messaggio di errore
    * CALCOLA nuovo id incrementale (`Math.max(...ids) + 1`)
    * CREA nuovo oggetto `newProduct = { id, nome, prezzo }`
    * AGGIUNGI `newProduct` all'array `products`
    * RITORNA status 201 (Created) con i dettagli del prodotto appena creato
  * AVVIA il server su `PORT`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express, dotenv, and products list
  * ENABLE JSON body parser via `app.use(express.json())`
  * DEFINE POST route on "/prodotti":
    * EXTRACT `nome` and `prezzo` from `req.body`
    * VALIDATE required fields (nome and prezzo)
    * IF validation fails:
      * RETURN status 400 with validation error message
    * CALCULATE next incremental id (`Math.max(...ids) + 1`)
    * CONSTRUCT `newProduct = { id, nome, prezzo }`
    * APPEND `newProduct` to `products` array
    * RETURN status 201 (Created) with the newly created product details
  * START server listener on `PORT`
* END Express Application
```
