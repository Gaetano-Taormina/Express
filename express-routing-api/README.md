# Express Routing & REST API

**Italiano:**
Raccolta completa degli 8 esercizi incentrati su **Routing, Risorse Statiche e API RESTful** in Express.js. Gli esercizi spaziano da endpoint di base fino alla modularizzazione completa con `express.Router()`, gestione parametri dinamici (`req.params`), parametri di ricerca (`req.query`), e operazioni CRUD (Create, Read, Update, Delete) con parsing del body in formato JSON.

**English:**
Comprehensive collection of 8 exercises focused on **Routing, Static Resources, and RESTful APIs** in Express.js. The exercises range from basic endpoints to full modularization with `express.Router()`, dynamic route parameters (`req.params`), query string filters (`req.query`), and complete CRUD (Create, Read, Update, Delete) operations with JSON body parsing.

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**

1. Entra nella cartella desiderata (es. `cd 01-welcome-timestamp-server`)
2. Installa le dipendenze: `pnpm install` (o `npm install`)
3. Avvia il server di sviluppo: `pnpm dev` (o `npm run dev`)
4. Avvia in produzione/standard: `pnpm start` (o `npm start`)

**English:**

1. Navigate to the desired directory (e.g., `cd 01-welcome-timestamp-server`)
2. Install dependencies: `pnpm install` (or `npm install`)
3. Start development server: `pnpm dev` (or `npm run dev`)
4. Start standard/production server: `pnpm start` (or `npm start`)

---

## Elenco Esercizi (Italiano)

| # | Cartella | Funzionalità | Concetti Chiave |
| :---: | :--- | :--- | :--- |
| **1** | [`01-welcome-timestamp-server`](./01-welcome-timestamp-server) | Welcome & Timestamp | GET `/`, risposta JSON con data/ora ISO corrente, `dotenv` |
| **2** | [`02-static-products-list`](./02-static-products-list) | Lista Prodotti Statici | GET `/prodotti`, array in-memory con id, nome, prezzo |
| **3** | [`03-single-product-lookup`](./03-single-product-lookup) | Dettaglio Singolo Prodotto | GET `/prodotti/:id`, `req.params.id`, gestione 404 |
| **4** | [`04-create-product-endpoint`](./04-create-product-endpoint) | Creazione Prodotto | POST `/prodotti`, parsing `express.json()`, ID auto-incrementale, status 201 |
| **5** | [`05-update-product-endpoint`](./05-update-product-endpoint) | Aggiornamento Prodotto | PUT `/prodotti/:id`, modifica oggetto, validazione esistenza |
| **6** | [`06-delete-product-endpoint`](./06-delete-product-endpoint) | Cancellazione Prodotto | DELETE `/prodotti/:id`, rimozione con `splice()` o `filter()`, feedback 200/404 |
| **7** | [`07-search-products-by-name`](./07-search-products-by-name) | Ricerca per Query String | GET `/prodotti/cerca?nome=...`, lettura `req.query`, filtro case-insensitive |
| **8** | [`08-modular-product-router`](./08-modular-product-router) | Router Modulare Prodotti | `express.Router()`, file di route separato, montaggio con `app.use('/prodotti', router)` |

---

## Exercises Overview (English)

| # | Folder | Feature | Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-welcome-timestamp-server`](./01-welcome-timestamp-server) | Welcome & Timestamp | GET `/`, JSON response with current ISO timestamp, `dotenv` |
| **2** | [`02-static-products-list`](./02-static-products-list) | Static Products List | GET `/prodotti`, in-memory array with id, name, price |
| **3** | [`03-single-product-lookup`](./03-single-product-lookup) | Single Product Lookup | GET `/prodotti/:id`, `req.params.id`, 404 error handling |
| **4** | [`04-create-product-endpoint`](./04-create-product-endpoint) | Create Product | POST `/prodotti`, `express.json()`, auto-incremented ID, status 201 |
| **5** | [`05-update-product-endpoint`](./05-update-product-endpoint) | Update Product | PUT `/prodotti/:id`, payload merging, 404 validation |
| **6** | [`06-delete-product-endpoint`](./06-delete-product-endpoint) | Delete Product | DELETE `/prodotti/:id`, array filtering/splicing, 200/404 response |
| **7** | [`07-search-products-by-name`](./07-search-products-by-name) | Query String Search | GET `/prodotti/cerca?nome=...`, `req.query` parsing, case-insensitive filter |
| **8** | [`08-modular-product-router`](./08-modular-product-router) | Modular Product Router | `express.Router()`, dedicated route module, mounted via `app.use('/prodotti', router)` |
