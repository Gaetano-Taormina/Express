# Exercise 5: Response Time Tracker

**Italiano:**
Crea un middleware che misura il tempo di risposta di ogni richiesta e lo aggiunge come header `X-Response-Time`.

**English:**
Create a middleware that measures the response time of each request and appends it as an `X-Response-Time` header.

---

## Reasoning

**Italiano:**

```text
* INIZIO MIDDLEWARE TEMPO RISPOSTA
  * MEMORIZZA il timestamp iniziale in alta risoluzione con `process.hrtime()`
  * INTERCETTA l'evento di scrittura header (`res.writeHead`) o evento `res.on("finish")`
  * CALCOLA il tempo trascorso: `(diff[0] * 1000 + diff[1] / 1e6).toFixed(2)` ms
  * IMPOSTA l'header di risposta: `res.setHeader("X-Response-Time", elapsedTime + "ms")`
  * PASSA al middleware successivo con `next()`
* FINE MIDDLEWARE TEMPO RISPOSTA
```

**English:**

```text
* START RESPONSE TIME TRACKER
  * RECORD start high-resolution timestamp via `process.hrtime()`
  * INTERCEPT response headers dispatch by wrapping `res.writeHead`
  * COMPUTE elapsed duration in milliseconds: `(diff[0] * 1000 + diff[1] / 1e6)`
  * SET header `X-Response-Time` with calculated duration string (e.g. "1.25ms")
  * INVOKE `next()`
* END RESPONSE TIME TRACKER
```
