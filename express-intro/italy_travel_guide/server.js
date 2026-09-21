import express from 'express';

const app = express();
const PORT = 3000;

// Dati turistici delle citta italiane
const destinations = [
  {
    city: 'Roma',
    region: 'Lazio',
    attractions: ['Colosseo', 'Fontana di Trevi', 'Pantheon'],
    description: 'La citta eterna, ricca di storia millenaria e fascino unico.'
  },
  {
    city: 'Firenze',
    region: 'Toscana',
    attractions: ['Duomo', 'Galleria degli Uffizi', 'Ponte Vecchio'],
    description: 'La culla del Rinascimento italiano e dell arte mondiale.'
  },
  {
    city: 'Venezia',
    region: 'Veneto',
    attractions: ['Piazza San Marco', 'Canal Grande', 'Palazzo Ducale'],
    description: 'La citta lagunare famosa per i canali, i ponti e le gondole.'
  }
];

// 1. Uso di res.send() per benvenuto testuale
app.get('/', (req, res) => {
  res.send('Benvenuto nella Guida Turistica Ufficiale dell Italia!');
});

// 2. Uso di res.type('html').send() per pagina informativa
app.get('/info', (req, res) => {
  res.type('html').send(`
    <h1>Guida Turistica Italia</h1>
    <p>Scopri le meraviglie d'Italia: arte, cultura, paesaggi e tradizioni.</p>
    <p>Contatto informazioni turistiche: info@italia-turismo.it</p>
  `);
});

// 3. Uso di res.json() per elenco di tutte le destinazioni
app.get('/destinazioni', (req, res) => {
  res.json(destinations);
});

// 4. Rotta itinerario con query string (?citta=...)
app.get('/itinerario', (req, res) => {
  const cityQuery = req.query.citta;

  if (!cityQuery || typeof cityQuery !== 'string') {
    return res.status(400).send('Parametro "citta" mancante o non valido nella richiesta.');
  }

  const foundDestination = destinations.find(
    (item) => item.city.toLowerCase() === cityQuery.trim().toLowerCase()
  );

  if (foundDestination) {
    return res.json(foundDestination);
  }

  res.status(404).send('citta non trovata');
});

app.listen(PORT, () => {
  console.group('Rotte disponibili Guida Turistica:');
  console.log(`- Home:         http://localhost:${PORT}/`);
  console.log(`- Info:         http://localhost:${PORT}/info`);
  console.log(`- Destinazioni: http://localhost:${PORT}/destinazioni`);
  console.log(`- Itinerario:   http://localhost:${PORT}/itinerario?citta=Roma`);
  console.groupEnd();
});
