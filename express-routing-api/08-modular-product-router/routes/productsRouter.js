import { Router } from "express";
import { products } from "../data/products.js";

const router = Router();

// GET / -> List all products
router.get("/", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products
  });
});

// GET /cerca -> Search products by name
router.get("/cerca", (req, res) => {
  const { nome } = req.query;

  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Parametro di ricerca 'nome' obbligatorio"
    });
  }

  const searchTerm = nome.trim().toLowerCase();
  const filtered = products.filter((p) =>
    p.nome.toLowerCase().includes(searchTerm)
  );

  res.json({
    success: true,
    query: searchTerm,
    total: filtered.length,
    data: filtered
  });
});

// GET /:id -> Single product
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: `Prodotto con ID ${id} non trovato`
    });
  }

  res.json({
    success: true,
    data: product
  });
});

// POST / -> Create new product
router.post("/", (req, res) => {
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
    message: "Prodotto aggiunto tramite router modulare",
    data: newProduct
  });
});

// PUT /:id -> Update product
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Prodotto con ID ${id} non trovato`
    });
  }

  const { nome, prezzo } = req.body;
  if (nome !== undefined) products[index].nome = String(nome).trim();
  if (prezzo !== undefined) products[index].prezzo = Number(prezzo);

  res.json({
    success: true,
    message: "Prodotto aggiornato",
    data: products[index]
  });
});

// DELETE /:id -> Delete product
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Prodotto con ID ${id} non trovato`
    });
  }

  const [deleted] = products.splice(index, 1);

  res.json({
    success: true,
    message: "Prodotto eliminato",
    data: deleted
  });
});

export default router;
