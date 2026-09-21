# Exercise 4

**Italiano:**
AI pair programming: catalogo di giochi da tavolo. Collabora con la
AI. Usa un agente AI come pair programmer per aggiungere una rotta a
un sito di giochi da tavolo. Definisci requisiti, scrivi un prompt,
analizza la proposta e verificala (piano, poi modifica limitata).
La rotta legge nome dalla query string e risponde in JSON. Modifica
autonomamente almeno un dettaglio.

**English:**
AI pair programming: board games catalog. Collaborate with AI.
Use an AI agent as a pair programmer to add a route to a board games
website. Define requirements, write a prompt, analyze the proposal,
and verify it (plan, then limited modification). The route reads the
name from the query string and responds in JSON. Modify at least one
detail autonomously.

## Reasoning

**Italiano:**

```text
INIZIO
  DEFINISCI il server base con elenco di giochi da tavolo
  DEFINISCI il prompt per il pair programmer:
    "Aggiungi rotta GET /cerca con req.query.nome e rispondi in JSON o 404"
  ANALIZZA la proposta dell'AI:
    - Ricerca case-insensitive con .includes()
    - Status 400 se nome mancante
    - Status 404 se gioco non presente
  PERSONALIZZAZIONE AUTONOMA:
    - Validazione su stringa e sanitizzazione con trim()
  CONFIGURA oxlint
  AVVIA il server su porta 3000
FINE
```

**English:**

```text
START
  DEFINE base server with board games dataset
  DEFINE pair programming prompt:
    "Add GET /cerca route using req.query.nome and return JSON or 404"
  ANALYZE AI proposal:
    - Case-insensitive search with .includes()
    - Status 400 if name is missing
    - Status 404 if game is not found
  AUTONOMOUS CUSTOMIZATION:
    - String validation and sanitization with trim()
  CONFIGURE oxlint
  START server on port 3000
END
```
