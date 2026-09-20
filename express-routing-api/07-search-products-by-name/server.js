import express from "express";
import dotenv from "dotenv";
import { products } from "./data/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /prodotti/cerca?nome=... -> Filter products containing query string
app.get("/prodotti/cerca", (req, res) => {
  const { nome } = req.query;

  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Il parametro di ricerca 'nome' è obbligatorio nella query string (es. ?nome=laptop)"
    });
  }

  const searchTerm = nome.trim().toLowerCase();
  const filteredProducts = products.filter((p) =>
    p.nome.toLowerCase().includes(searchTerm)
  );

  res.json({
    success: true,
    query: searchTerm,
    total: filteredProducts.length,
    data: filteredProducts
  });
});

// GET /prodotti -> List all products
app.get("/prodotti", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products
  });
});

// GET /prodotti/:id -> Single product lookup
app.get("/prodotti/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: `Prodotto con ID ${productId} non trovato`
    });
  }

  res.json({
    success: true,
    data: product
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
