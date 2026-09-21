import express from "express";
import dotenv from "dotenv";
import { validateUserBody } from "./middlewares/validator.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST /utenti con middleware di validazione
app.post("/utenti", validateUserBody, (req, res) => {
  res.status(201).json({
    success: true,
    message: "Utente registrato con successo!",
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
