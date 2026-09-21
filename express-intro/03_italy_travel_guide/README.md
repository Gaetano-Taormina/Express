# Exercise 3

**Italiano:**
Guida turistica dell'Italia. Una guida con ricerca. Crea una guida
turistica dell'Italia con più rotte e una /itinerario che personalizzi
la risposta in base alla città nella query string. La città va cercata
in un array di città italiane: se la trovi mostra la scheda,
altrimenti "città non trovata". Usa una volta ciascuno send, json e
type('html').send.

**English:**
Italian Travel Guide. A guide with search. Create an Italian travel
guide with multiple routes and an /itinerario route that customizes the
response based on the city in the query string. The city must be searched
within an array of Italian cities: if found show the details,
otherwise "città non trovata". Use send, json, and type('html').send once.

## Reasoning

**Italiano:**

```text
INIZIO
  INIZIALIZZA il progetto Express con pnpm e oxlint
  DEFINISCI l'array delle destinazioni italiane
  DEFINISCI la rotta GET "/" -> RISPONDI con res.send()
  DEFINISCI la rotta GET "/info" -> RISPONDI con res.type('html').send()
  DEFINISCI la rotta GET "/destinazioni" -> RISPONDI con res.json()
  DEFINISCI la rotta GET "/itinerario":
    LEGGI req.query.citta
    SE 'citta' e' mancante:
      RISPONDI con stato 400
    CERCA la citta nell'array
    SE trovata:
      RISPONDI con la scheda citta via res.json()
    ALTRIMENTI:
      RISPONDI con stato 404 "città non trovata"
  AVVIA il server su porta 3000
FINE
```

**English:**

```text
START
  INITIALIZE Express project with pnpm and oxlint
  DEFINE Italian destinations array
  DEFINE GET route "/" -> RETURN welcome using res.send()
  DEFINE GET route "/info" -> RETURN HTML using res.type('html').send()
  DEFINE GET route "/destinazioni" -> RETURN all destinations in JSON
  DEFINE GET route "/itinerario":
    READ req.query.citta
    IF 'citta' is missing:
      RETURN status 400
    FIND city in destinations array
    IF found:
      RETURN city card via res.json()
    ELSE:
      RETURN status 404 with text "città non trovata"
  START server on port 3000
END
```
