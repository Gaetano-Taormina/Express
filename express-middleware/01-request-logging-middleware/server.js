import express from "express";
import dotenv from "dotenv";
import { requestLogger } from "./middlewares/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Global logging middleware
app.use(requestLogger);

app.get("/", (req, res) => {
  res.json({ message: "Logging middleware attivo!" });
});

app.get("/api/users", (req, res) => {
  res.json({ users: ["Mario Rossi", "Giulia Bianchi"] });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
