import express from "express";
import dotenv from "dotenv";
import { setCustomPoweredBy } from "./middlewares/customHeader.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Disabilita header di default Express
app.disable("x-powered-by");

// Middleware custom per iniettare l'header su tutte le risposte
app.use(setCustomPoweredBy);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Verifica gli header della risposta (X-Powered-By: MioServer)"
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
