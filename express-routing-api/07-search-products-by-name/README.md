# Exercise 7: Search Products by Name

**Italiano:**
Crea una rotta GET `/prodotti/cerca` che accetta una query string `nome` e restituisce solo i prodotti che contengono quella stringa nel nome.

**English:**
Create a GET `/prodotti/cerca` route that accepts a `nome` query string and returns only products that contain that string in their name.

---

## Reasoning

**Italiano:**

```text
* INIZIO APPLICAZIONE Express
  * IMPORTA express, dotenv e lista prodotti
  * DEFINISCI rotta GET su "/prodotti/cerca":
    * ESTRAI parametro di query `nome` da `req.query.nome`
    * VALIDA la presenza di `nome` (se mancante o vuoto, ritorna status 400)
    * CONVERTI termine di ricerca in minuscolo: `searchTerm = nome.toLowerCase()`
    * FILTRA l'array: `products.filter(p => p.nome.toLowerCase().includes(searchTerm))`
    * RITORNA status 200 con l'array dei prodotti corrispondenti
  * REGISTRA la rotta `/prodotti/cerca` PRIMA della rotta `/prodotti/:id` per evitare collisioni di pattern
  * AVVIA il server su `PORT`
* FINE APPLICAZIONE Express
```

**English:**

```text
* START Express Application
  * IMPORT express, dotenv, and products list
  * DEFINE GET route on "/prodotti/cerca":
    * EXTRACT query string parameter `nome` from `req.query.nome`
    * VALIDATE existence of `nome` (if missing or empty string, return status 400)
    * NORMALIZE search keyword to lowercase: `searchTerm = nome.toLowerCase()`
    * FILTER collection: `products.filter(p => p.nome.toLowerCase().includes(searchTerm))`
    * RETURN status 200 with matching items array
  * REGISTER `/prodotti/cerca` BEFORE `/prodotti/:id` to prevent route collision
  * START server listener on `PORT`
* END Express Application
```
