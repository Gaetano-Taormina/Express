# Exercise 2

**Italiano:**
Il sito di una libreria. Un sito con più pagine. Crea un sito
informativo per una libreria usando una volta ciascuno res.send(),
res.json() e res.type('html').send(). Le rotte devono essere coerenti
(almeno una condivide lo stesso dato di un'altra, es. array di libri).
Includi una rotta di ricerca che legga il titolo dalla query string:
se esiste mostra la scheda in JSON, altrimenti un messaggio chiaro.

**English:**
The bookstore website. A multi-page website. Create an informational
website for a bookstore using res.send(), res.json(), and
res.type('html').send() once each. Routes must be consistent (at least
one shares the same data as another, e.g., an array of books).
Include a search route that reads the title from the query string:
if it exists, show the book details in JSON, otherwise a clear message.

## Reasoning

**Italiano:**

```text
INIZIO
  INIZIALIZZA il progetto Express con pnpm e oxlint
  DEFINISCI una collezione in memoria contenente l'elenco dei libri
  DEFINISCI la rotta GET "/" -> RISPONDI con testo tramite res.send()
  DEFINISCI la rotta GET "/info" -> RISPONDI con res.type('html').send()
  DEFINISCI la rotta GET "/libri" -> RISPONDI con catalogo via res.json()
  DEFINISCI la rotta GET "/cerca":
    LEGGI req.query.titolo
    SE il parametro e' assente o non valido:
      RISPONDI con stato 400
    CERCA il libro nell'array (case-insensitive)
    SE trovato:
      RISPONDI con l'oggetto del libro via res.json()
    ALTRIMENTI:
      RISPONDI con stato 404 e messaggio "Libro non trovato nel catalogo."
  AVVIA il server su porta 3000
FINE
```

**English:**

```text
START
  INITIALIZE Express project with pnpm and oxlint
  DEFINE in-memory dataset of books
  DEFINE GET route "/" -> RETURN text using res.send()
  DEFINE GET route "/info" -> RETURN HTML using res.type('html').send()
  DEFINE GET route "/libri" -> RETURN full catalog in JSON via res.json()
  DEFINE GET route "/cerca":
    READ req.query.titolo
    IF parameter is missing or invalid:
      RETURN status 400
    FIND book in books array (case-insensitive)
    IF found:
      RETURN book in JSON via res.json()
    ELSE:
      RETURN status 404 with message "Libro non trovato nel catalogo."
  START server on port 3000
END
```
