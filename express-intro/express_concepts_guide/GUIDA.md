# Mini Guida: Routing e Risposte HTTP in Express.js

Questa guida spiega in modo semplice e chiaro i concetti fondamentali di
Express.js affrontati negli esercizi.

---

## 1. Che cos'e Express.js

Express e un framework leggero per Node.js che semplifica la creazione di
server web e API REST, fornendo strumenti essenziali per gestire richieste
(Request) e risposte (Response).

---

## 2. Tipologie di Risposte: send, json e type html

In Express, l'oggetto `res` (Response) permette di restituire diversi tipi di
contenuto al client:

| Metodo | Content-Type | Utilizzo tipico |
| :--- | :--- | :--- |
| `res.send('Testo')` | `text/plain` | Messaggi semplici o stringhe |
| `res.json({ key: 'val' })` | `application/json` | Dati strutturati REST API |
| `res.type('html').send('<p>..</p>')` | `text/html` | Pagine o frammenti HTML |

---

## 3. Query String

La Query String e la parte di un URL che segue il carattere `?` e contiene
coppie chiave-valore (es. `/cerca?titolo=1984&anno=1949`).

### Come si usa

```javascript
app.get('/cerca', (req, res) => {
  const query = req.query.titolo;
  // Se la query non esiste, gestire con status 400 (Bad Request)
  if (!query) {
    return res.status(400).send('Parametro mancante');
  }
  // Ricerca nell'array...
});
```

---

## 4. Codici di Stato HTTP Essenziali

- **200 OK**: La richiesta e andata a buon fine.
- **400 Bad Request**: Parametro mancante o formato errato dal client.
- **404 Not Found**: La risorsa o rotta richiesta non esiste.
- **500 Internal Server Error**: Errore non gestito sul server.
