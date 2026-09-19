import express from "express";
import dotenv from "dotenv";
import { products } from "./data/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /prodotti -> List products
app.get("/prodotti", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products
  });
});

// PUT /prodotti/:id -> Update an existing product
app.put("/prodotti/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  if (isNaN(productId)) {
    return res.status(400).json({
      success: false,
      error: "L'ID del prodotto deve essere un numero valido"
    });
  }

  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `Prodotto con ID ${productId} non trovato`
    });
  }

  const { nome, prezzo } = req.body;

  if (nome !== undefined) {
    products[productIndex].nome = String(nome).trim();
  }

  if (prezzo !== undefined) {
    products[productIndex].prezzo = Number(prezzo);
  }

  res.json({
    success: true,
    message: "Prodotto aggiornato con successo",
    data: products[productIndex]
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
