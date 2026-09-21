import express from 'express';

const app = express();
const PORT = 3000;

// Catalogo tematico videogiochi
const games = [
  { id: 1, title: 'The Legend of Zelda: Breath of the Wild', genre: 'Avventura / Open World', platform: 'Nintendo Switch', year: 2017 },
  { id: 2, title: 'Elden Ring', genre: 'Action RPG', platform: 'PC / Console', year: 2022 },
  { id: 3, title: 'Hollow Knight', genre: 'Metroidvania', platform: 'PC / Console', year: 2017 },
  { id: 4, title: 'Cyberpunk 2077', genre: 'RPG / Sci-Fi', platform: 'PC / Console', year: 2020 }
];

// 1. Home con res.send()
app.get('/', (req, res) => {
  res.send('Benvenuto nel Portale Videogiochi!');
});

// 2. Pagina informativa HTML con res.type('html').send()
app.get('/info', (req, res) => {
  res.type('html').send(`
    <h1>Gaming Hub Italia</h1>
    <p>Portale informativo e database dedicato agli appassionati di videogiochi.</p>
    <p>Tutti i dati sono consultabili pubblicamente.</p>
  `);
});

// 3. Catalogo completo JSON con res.json()
app.get('/catalogo', (req, res) => {
  res.json(games);
});

// 4. Ricerca con query string (?titolo=...) che gestisce parametri e non trovato
app.get('/cerca', (req, res) => {
  const queryTitle = req.query.titolo;

  if (!queryTitle || typeof queryTitle !== 'string') {
    return res.status(400).send('Parametro "titolo" mancante o non valido.');
  }

  const foundGame = games.find(
    (g) => g.title.toLowerCase().includes(queryTitle.trim().toLowerCase())
  );

  if (foundGame) {
    return res.json(foundGame);
  }

  res.status(404).send('Videogioco non trovato nel catalogo.');
});

app.listen(PORT, () => {
  console.group('Rotte disponibili Gaming Hub:');
  console.log(`- Home:     http://localhost:${PORT}/`);
  console.log(`- Info:     http://localhost:${PORT}/info`);
  console.log(`- Catalogo: http://localhost:${PORT}/catalogo`);
  console.log(`- Cerca:    http://localhost:${PORT}/cerca?titolo=Zelda`);
  console.groupEnd();
});
