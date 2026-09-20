import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root welcome route
app.get("/", (req, res) => {
  res.json({
    message: "API Server attiva. Rotte disponibili su /api/v1/prodotti e /prodotti"
  });
});

// Mount modular router on different paths
app.use("/prodotti", productsRouter);
app.use("/api/v1/prodotti", productsRouter);

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
