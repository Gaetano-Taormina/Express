# Express Middleware Collection

**Italiano:**
Raccolta completa degli 8 esercizi dedicati all'architettura dei **Middleware** in Express.js. Copre logging, manipolazione degli header di risposta (`X-Powered-By`, `X-Response-Time`), autenticazione stateless basata su token Bearer, validazione di schema/payload, trasformazione e sanitizzazione dati (uppercase, slug generation, trimming).

**English:**
Comprehensive collection of 8 exercises dedicated to the **Middleware** architecture in Express.js. Covers logging, response headers manipulation (`X-Powered-By`, `X-Response-Time`), token-based authentication guards, payload validation, data transformation, and sanitization (uppercase formatting, automatic slug generation, and body string trimming).

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**

1. Entra nella cartella desiderata (es. `cd 01-request-logging-middleware`)
2. Installa le dipendenze: `pnpm install` (o `npm install`)
3. Avvia il server di sviluppo: `pnpm dev` (o `npm run dev`)
4. Avvia in produzione/standard: `pnpm start` (o `npm start`)

**English:**

1. Navigate to the desired folder (e.g., `cd 01-request-logging-middleware`)
2. Install dependencies: `pnpm install` (or `npm install`)
3. Start the development server: `pnpm dev` (or `npm run dev`)
4. Start standard/production server: `pnpm start` (or `npm start`)

---

## Elenco Esercizi (Italiano)

| # | Cartella | Funzionalità | Concetti Chiave |
| :---: | :--- | :--- | :--- |
| **1** | [`01-request-logging-middleware`](./01-request-logging-middleware) | Logging Richieste | Middleware globale, stampa metodo HTTP, URL e timestamp ISO su console |
| **2** | [`02-custom-powered-by-header`](./02-custom-powered-by-header) | Custom Header Server | Header personalizzato `X-Powered-By: MioServer` su tutte le risposte con `res.setHeader` |
| **3** | [`03-token-auth-guard`](./03-token-auth-guard) | Autenticazione con Token | Verifica `Authorization: Bearer <token>`, risposta 401 per credenziali mancanti o invalide |
| **4** | [`04-body-validation-middleware`](./04-body-validation-middleware) | Validazione Body POST | Controllo campi obbligatori nel payload con status 400 e dettaglio campi mancanti |
| **5** | [`05-response-time-tracker`](./05-response-time-tracker) | Misurazione Tempo Risposta | Calcolo durata esecuzione con `Date.now()` e header `X-Response-Time` |
| **6** | [`06-uppercase-body-strings`](./06-uppercase-body-strings) | Trasformazione Uppercase | Normalizzazione in MAIUSCOLO di tutte le proprietà stringa nel body |
| **7** | [`07-slug-generator-helper`](./07-slug-generator-helper) | Generatore Slug | Middleware per generare automaticamente lo slug dal campo `name` |
| **8** | [`08-body-string-trimmer`](./08-body-string-trimmer) | Trimming Automatico Stringhe | Rimozione degli spazi bianchi accidentali all'inizio e fine delle stringhe |

---

## Exercises Overview (English)

| # | Folder | Feature | Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-request-logging-middleware`](./01-request-logging-middleware) | Request Logger | Global middleware logging HTTP method, URL, and ISO timestamp to console |
| **2** | [`02-custom-powered-by-header`](./02-custom-powered-by-header) | Custom Powered-By Header | Injects custom `X-Powered-By: MioServer` header on all responses via `res.setHeader` |
| **3** | [`03-token-auth-guard`](./03-token-auth-guard) | Token Auth Guard | Validates `Authorization: Bearer <token>`, responds with 401 for missing/invalid tokens |
| **4** | [`04-body-validation-middleware`](./04-body-validation-middleware) | Body Validation Guard | Validates required POST payload fields, returning 400 Bad Request if missing |
| **5** | [`05-response-time-tracker`](./05-response-time-tracker) | Response Time Tracker | Measures latency and appends `X-Response-Time` header |
| **6** | [`06-uppercase-body-strings`](./06-uppercase-body-strings) | Uppercase Body Transformer | Transforms all incoming payload string fields into UPPERCASE before reaching routes |
| **7** | [`07-slug-generator-helper`](./07-slug-generator-helper) | Slug Generator | Automatically generates a URL-friendly slug from `name` |
| **8** | [`08-body-string-trimmer`](./08-body-string-trimmer) | Auto Body Trimmer | Automatically trims leading/trailing accidental whitespace from all body string fields |
