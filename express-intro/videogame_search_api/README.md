# Exercise 8

**Italiano:**
Sfida finale: motore di ricerca tematico. Tutto ciò che hai imparato.
Progetta la tua applicazione Express a tema libero (libertà totale su
tema, struttura e contenuti). Almeno quattro rotte: home, pagina
informativa HTML, catalogo JSON (almeno 3 elementi), ricerca con query
string — che interroga un array e gestisce "non trovato". Prima,
prepara un breve piano: tema, rotte, tipo di risposta, parametro,
URL di verifica. Usa una volta ciascuno send, json e type('html').send.

**English:**
Final challenge: thematic search engine. Everything you learned.
Design your custom themed Express application (total freedom on theme,
structure, and content). At least four routes: home, HTML info page,
JSON catalog (at least 3 items), and query string search — querying
an array and handling "not found". First, prepare a brief plan: theme,
routes, response types, parameter, verification URLs. Use send, json,
and type('html').send once each.

## Piano di Progetto / Project Plan

- **Tema:** Videogiochi e Gaming Database
- **Rotte previste:**
  - `GET /` -> Benvenuto (`res.send()`)
  - `GET /info` -> Scheda informativa (`res.type('html').send()`)
  - `GET /catalogo` -> Catalogo completo (`res.json()`)
  - `GET /cerca?titolo=Zelda` -> Ricerca (`res.json()` o 404)
- **Parametro di ricerca:** `titolo`

## Reasoning

**Italiano:**

```text
INIZIO
  INIZIALIZZA il server Express con supporto oxlint
  DEFINISCI la collezione di videogiochi (id, title, genre, platform, year)
  CONFIGURA le 4 rotte richieste:
    1. GET "/" -> res.send() con messaggio testuale di benvenuto
    2. GET "/info" -> res.type('html').send() con markup HTML
    3. GET "/catalogo" -> res.json() con l'array completo di 4 giochi
    4. GET "/cerca":
       - ESTRAI req.query.titolo
       - SE mancante o vuoto, RISPONDI con status 400
       - ESEGUI ricerca case-insensitive nell'array
       - SE trovato, RISPONDI con res.json(gioco)
       - ALTRIMENTI, RISPONDI con status 404 "Videogioco non trovato"
  AVVIA il server su porta 3000
FINE
```

**English:**

```text
START
  INITIALIZE Express server with oxlint support
  DEFINE in-memory videogames collection (id, title, genre, platform, year)
  CONFIGURE all 4 requested routes:
    1. GET "/" -> res.send() with plain text welcome message
    2. GET "/info" -> res.type('html').send() with formatted HTML info
    3. GET "/catalogo" -> res.json() with full 4-game array
    4. GET "/cerca":
       - EXTRACT req.query.titolo
       - IF missing or empty, RETURN status 400
       - EXECUTE case-insensitive search in array
       - IF found, RETURN res.json(game)
       - ELSE, RETURN status 404 "Videogioco non trovato"
  START server on port 3000
END
```
