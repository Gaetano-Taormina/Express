export const responseTimeTracker = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${req.method}] ${req.originalUrl} - Durata: ${duration}ms`);
  });

  // Aggiunge l'header calcolato al termine della preparazione risposta
  const startTime = Date.now();
  const originalSend = res.send;
  res.send = function (body) {
    const elapsed = Date.now() - startTime;
    res.setHeader("X-Response-Time", `${elapsed}ms`);
    return originalSend.call(this, body);
  };

  next();
};
