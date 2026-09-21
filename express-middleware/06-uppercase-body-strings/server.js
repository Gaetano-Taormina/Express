import express from "express";
import dotenv from "dotenv";
import { uppercaseBodyStrings } from "./middlewares/uppercase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(uppercaseBodyStrings);

// POST endpoint testing uppercase transformation
app.post("/test-uppercase", (req, res) => {
  res.json({
    success: true,
    message: "Stringhe del body trasformate in maiuscolo",
    received: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
