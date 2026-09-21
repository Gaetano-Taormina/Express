import express from 'express';

const app = express();
const PORT = 3000;

// Catalogo libri condiviso tra le rotte
const books = [
  { id: 1, title: 'Il Signore degli Anelli', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Distopia' },
  { id: 3, title: 'Il Piccolo Principe', author: 'Antoine de Saint-Exupery', genre: 'Favola' }
];

// 1. Uso di res.send() per messaggio semplice
app.get('/', (req, res) => {
  res.send('Benvenuto nella nostra Libreria!');
});

// 2. Uso di res.type('html').send() per pagina HTML
app.get('/info', (req, res) => {
  res.type('html').send(`
    <h1>Libreria Aurora</h1>
    <p>Orari di apertura: Lunedi - Sabato 09:00 - 19:30</p>
    <p>Indirizzo: Via Roma 10, Milano</p>
  `);
});

// 3. Uso di res.json() per restituire l'intero catalogo
app.get('/libri', (req, res) => {
  res.json(books);
});

// 4. Ricerca libro tramite query string (?titolo=...)
app.get('/cerca', (req, res) => {
  const titleQuery = req.query.titolo;

  if (!titleQuery || typeof titleQuery !== 'string') {
    return res.status(400).send('Parametro "titolo" mancante o non valido nella richiesta.');
  }

  const foundBook = books.find(
    (b) => b.title.toLowerCase().includes(titleQuery.trim().toLowerCase())
  );

  if (foundBook) {
    return res.json(foundBook);
  }

  res.status(404).send('Libro non trovato nel catalogo.');
});

app.listen(PORT, () => {
  console.group('Rotte disponibili Libreria:');
  console.log(`- Home:   http://localhost:${PORT}/`);
  console.log(`- Info:   http://localhost:${PORT}/info`);
  console.log(`- Libri:  http://localhost:${PORT}/libri`);
  console.log(`- Cerca:  http://localhost:${PORT}/cerca?titolo=1984`);
  console.groupEnd();
});
