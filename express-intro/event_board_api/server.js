import express from 'express';

const app = express();
const PORT = 3000;

// Dati della bacheca eventi (senza dati personali nel rispetto del GDPR)
const events = [
  { id: 1, title: 'Hackathon Open Source', date: '2026-10-15', location: 'Milano Hub', category: 'Tech' },
  { id: 2, title: 'Mostra d Arte Moderna', date: '2026-11-02', location: 'Galleria Civica', category: 'Arte' },
  { id: 3, title: 'Concerto Jazz sotto le Stelle', date: '2026-10-20', location: 'Piazza Maggiore', category: 'Musica' }
];

// Benvenuto
app.get('/', (req, res) => {
  res.send('Bacheca Eventi Pubblici');
});

// Lista di tutti gli eventi
app.get('/eventi', (req, res) => {
  res.json(events);
});

// Ricerca per categoria tramite query string (?categoria=...)
app.get('/filtra', (req, res) => {
  const categoryQuery = req.query.categoria;

  if (!categoryQuery || typeof categoryQuery !== 'string') {
    return res.status(400).send('Parametro "categoria" mancante o non valido.');
  }

  const filteredEvents = events.filter(
    (e) => e.category.toLowerCase() === categoryQuery.trim().toLowerCase()
  );

  res.json(filteredEvents);
});

app.listen(PORT, () => {
  console.group('Rotte disponibili Bacheca Eventi:');
  console.log(`- Home:    http://localhost:${PORT}/`);
  console.log(`- Eventi:  http://localhost:${PORT}/eventi`);
  console.log(`- Filtra:  http://localhost:${PORT}/filtra?categoria=Tech`);
  console.groupEnd();
});
