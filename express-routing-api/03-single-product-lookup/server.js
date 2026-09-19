import express from "express";
import dotenv from "dotenv";
import { products } from "./data/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /prodotti -> All products
app.get("/prodotti", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products
  });
});

// GET /prodotti/:id -> Single product lookup with 404 handling
app.get("/prodotti/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  if (isNaN(productId)) {
    return res.status(400).json({
      success: false,
      error: "L'ID del prodotto deve essere un numero valido"
    });
  }

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
