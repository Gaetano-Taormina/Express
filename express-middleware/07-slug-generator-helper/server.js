import express from "express";
import dotenv from "dotenv";
import { generateSlugMiddleware } from "./middlewares/slugMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(generateSlugMiddleware);

// POST /articoli -> salva articolo con slug generato automaticamente
app.post("/articoli", (req, res) => {
  const { name, slug, content } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      error: "Il campo 'name' è obbligatorio"
    });
  }

  res.status(201).json({
    success: true,
    message: "Articolo creato con slug generato automaticamente",
    data: {
      name,
      slug,
      content: content || "Nessun contenuto specificato"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
