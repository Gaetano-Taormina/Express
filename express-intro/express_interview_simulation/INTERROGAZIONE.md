# Trascrizione Simulazione Interrogazione AI

## Prompt Iniziale Impostato per l'AI

> "Agisci come un docente esaminatore severo ma costruttivo su Node.js ed
> Express. Fammi una domanda alla volta sui concetti fondamentali (scaffolding,
> routing, metodi res, query string, codici HTTP). Valuta la mia risposta,
> correggi eventuali inesattezze e passa alla domanda successiva solo se ho
> risposto correttamente."

---

### Domanda 1

**Docente AI:** Qual è la differenza principale tra `res.send()` e `res.json()`
in Express e quando è preferibile usare l'uno o l'altro?

- **Risposta Studente:** `res.send()` serve per inviare testo semplice o
  frammenti HTML, impostando il content-type testuale. `res.json()` invece
  converte automaticamente oggetti o array JavaScript in stringhe JSON
  formattate con header `application/json`, ideale per le API REST.
- **Valutazione Docente:** Risposta esatta e completa. Voto: 10/10.

---

### Domanda 2

**Docente AI:** Come si estraggono i parametri passati nella query string di una
richiesta GET (es. `/search?q=test`) e cosa succede se il parametro non viene
inviato dal client?

- **Risposta Studente:** Si leggono tramite `req.query.nomeParametro` (es.
  `req.query.q`). Se il parametro non è presente, il valore sarà `undefined`,
  quindi è buona pratica controllarne l'esistenza e restituire uno status 400
  (Bad Request).
- **Valutazione Docente:** Corretto. Ottima precisazione sulla validazione e
  sullo status code 400.

---

### Domanda 3

**Docente AI:** A cosa serve il comando `node --watch server.js` e perché è
utile durante la fase di sviluppo?

- **Risposta Studente:** Abilita il watch mode nativo di Node.js, riavviando
  automaticamente il processo del server ogni volta che viene salvata una
  modifica ai file sorgente, senza dover riavviare manualmente il terminale.
- **Valutazione Docente:** Risposta perfetta. L'esame è superato con successo.
