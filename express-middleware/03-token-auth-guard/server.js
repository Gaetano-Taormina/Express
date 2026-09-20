import express from "express";
import dotenv from "dotenv";
import { authenticateToken } from "./middlewares/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Public Route
app.get("/public", (req, res) => {
  res.json({ message: "Rotta pubblica accessibile a tutti" });
});

// Protected Route guarded by token middleware
app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Benvenuto nell'area protetta!",
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
