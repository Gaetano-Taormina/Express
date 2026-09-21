import express from "express";
import dotenv from "dotenv";
import { autoTrimBodyStrings } from "./middlewares/trimmer.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(autoTrimBodyStrings);

// POST endpoint testing auto-trimming
app.post("/submit", (req, res) => {
  res.json({
    success: true,
    message: "Campi stringa del body puliti con trim()",
    sanitizedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
