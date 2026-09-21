import express from 'express';

const app = express();
const PORT = 3000;

// Catalogo giochi da tavolo
const games = [
  { id: 1, name: 'Catan', players: '3-4', duration: '60-90 min', category: 'Strategia' },
  { id: 2, name: 'Carcassonne', players: '2-5', duration: '35 min', category: 'Piazzamento tessere' },
  { id: 3, name: 'Dixit', players: '3-6', duration: '30 min', category: 'Party game / Deduzione' },
  { id: 4, name: 'Ticket to Ride', players: '2-5', duration: '45-60 min', category: 'Famiglia / Strategia' }
];

// Home page informativa
app.get('/', (req, res) => {
  res.send('Benvenuto nel Club dei Giochi da Tavolo!');
});

// Elenco completo giochi
app.get('/giochi', (req, res) => {
  res.json(games);
});

// Rotta per ricerca per nome via query string (?nome=...)
app.get('/cerca', (req, res) => {
  const nameQuery = req.query.nome;

  if (!nameQuery || typeof nameQuery !== 'string') {
    return res.status(400).send('Parametro "nome" mancante o non valido.');
  }

  const foundGame = games.find(
    (g) => g.name.toLowerCase().includes(nameQuery.trim().toLowerCase())
  );

  if (foundGame) {
    return res.json(foundGame);
  }

  res.status(404).send('Gioco non trovato nel catalogo.');
});

app.listen(PORT, () => {
  console.group('Rotte disponibili Giochi da Tavolo:');
  console.log(`- Home:   http://localhost:${PORT}/`);
  console.log(`- Giochi: http://localhost:${PORT}/giochi`);
  console.log(`- Cerca:  http://localhost:${PORT}/cerca?nome=Catan`);
  console.groupEnd();
});
