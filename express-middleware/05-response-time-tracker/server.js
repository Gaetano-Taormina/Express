import express from "express";
import dotenv from "dotenv";
import { responseTimeTracker } from "./middlewares/responseTime.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(responseTimeTracker);
app.use(express.json());

app.get("/fast", (req, res) => {
  res.json({ message: "Risposta immediata", timestamp: Date.now() });
});

// Rotta con ritardo simulato
app.get("/slow", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 150));
  res.json({ message: "Risposta ritardata di 150ms per testare X-Response-Time" });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
