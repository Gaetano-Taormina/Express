import express from "express";
import dotenv from "dotenv";
import { products } from "./data/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /prodotti -> Returns static list of products
app.get("/prodotti", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
