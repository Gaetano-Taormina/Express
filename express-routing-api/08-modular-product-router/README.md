# Exercise 8: Modular Product Router

**Italiano:**
Crea un router separato per le rotte relative ai prodotti, montandoli sul server principale con `app.use` su path diversi.

**English:**
Create a separate modular router for product routes, mounting them on the main server via `app.use` under different paths.

---

## Reasoning

**Italiano:**

```text
* INIZIO ARCHITETTURA MODULARE
  * CREA file `routes/productsRouter.js`
  * INIZIALIZZA router: `const router = express.Router()`
  * REGISTRA sul router le rotte:
    * GET "/" -> lista prodotti
    * GET "/cerca" -> ricerca per query string (?nome=...)
    * GET "/:id" -> dettaglio singolo prodotto
    * POST "/" -> creazione prodotto
    * PUT "/:id" -> modifica prodotto
    * DELETE "/:id" -> rimozione prodotto
  * ESPORTA il router con `export default router`
  * IN `server.js`:
    * IMPORTA il router
    * MONTA il router su percorsi multipli con `app.use("/prodotti", productsRouter)` e `app.use("/api/v1/prodotti", productsRouter)`
  * AVVIA il server su porta `PORT`
* FINE ARCHITETTURA MODULARE
```

**English:**

```text
* START MODULAR ARCHITECTURE
  * CREATE `routes/productsRouter.js` file
  * INITIALIZE router instance: `const router = express.Router()`
  * REGISTER endpoints on router:
    * GET "/" -> all products list
    * GET "/cerca" -> search by query string (?nome=...)
    * GET "/:id" -> single product lookup
    * POST "/" -> create new product
    * PUT "/:id" -> update product
    * DELETE "/:id" -> delete product
  * EXPORT router instance via `export default router`
  * IN `server.js`:
    * IMPORT products router
    * MOUNT router on distinct mount paths using `app.use("/prodotti", productsRouter)` and `app.use("/api/v1/prodotti", productsRouter)`
  * START server listener on `PORT`
* END MODULAR ARCHITECTURE
```
