// 1. Importa Express (usando ES Modules)
import express from 'express';

// 2. Inizializza l'applicazione Express e definisci la porta
const app = express();
const PORT = 3000;

// 3. Rotta GET principale che risponde con un messaggio di benvenuto
app.get('/', (req, res) => {
  res.send('Benvenuto nel nostro primo server Express!');
});

// 4. Avvia il server in ascolto sulla porta specificata
app.listen(PORT, () => {
  console.group('Rotte disponibili:');
  console.log(`- Home: http://localhost:${PORT}/`);
  console.groupEnd();
});
