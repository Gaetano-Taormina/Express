import express from "express";
import dotenv from "dotenv";
import { products } from "./data/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /prodotti -> List all products
app.get("/prodotti", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products
  });
});

// POST /prodotti -> Create a new product with auto-generated id
app.post("/prodotti", (req, res) => {
  const { nome, prezzo } = req.body;

  if (!nome || prezzo === undefined) {
    return res.status(400).json({
      success: false,
      error: "I campi 'nome' e 'prezzo' sono obbligatori"
    });
  }

  const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const newProduct = {
    id: newId,
    nome: String(nome).trim(),
    prezzo: Number(prezzo)
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Prodotto creato con successo",
    data: newProduct
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
