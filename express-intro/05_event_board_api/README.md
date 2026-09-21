# Exercise 5

**Italiano:**
AI debugging: la bacheca degli eventi. Trova gli errori con la AI.
Costruisci un server per una bacheca di eventi, poi introduci
intenzionalmente due errori. Per ognuno scrivi un prompt di debug
(obiettivo, comando, errore completo, file, comportamento atteso
e reale), chiedi prima la causa poi la correzione minima e applicala
dopo averla capita.

**English:**
AI debugging: the event board. Find errors with AI. Build an event
board server, then intentionally introduce two errors. For each
write a debug prompt (goal, command, full error, file, expected vs
real behavior), ask for the cause first, then the minimal fix, and
apply it after understanding it.

## Reasoning

**Italiano:**

```text
INIZIO
  DEFINISCI il server per la bacheca eventi (/eventi e /filtra)
  SIMULAZIONE ERRORE 1 (Sintassi/Import):
    - Errore: sintassi rotta nell'ascolto porta
    - Prompt debug: Obiettivo, File, Errore terminale, Atteso
    - Fix minimo: correzione del parametro
  SIMULAZIONE ERRORE 2 (Logica/Runtime):
    - Errore: mancata gestione query undefined (TypeError)
    - Prompt debug: Obiettivo, Endpoint, Stack trace, Atteso
    - Fix minimo: controllo su req.query.categoria prima dei metodi
  VERIFICA con oxlint
  AVVIA il server su porta 3000
FINE
```

**English:**

```text
START
  DEFINE event board server (/eventi and /filtra)
  ERROR 1 SIMULATION (Syntax/Import):
    - Error: broken listen syntax
    - Debug prompt: Goal, File, Terminal error, Expected
    - Minimal fix: correct parameter
  ERROR 2 SIMULATION (Logic/Runtime):
    - Error: unhandled undefined query (TypeError)
    - Debug prompt: Goal, Endpoint, Stack trace, Expected
    - Minimal fix: guard clause on req.query.categoria
  VERIFY with oxlint
  START server on port 3000
END
```
