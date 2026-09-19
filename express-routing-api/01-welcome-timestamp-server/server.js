import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET / -> Welcome message and current server timestamp in JSON
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Benvenuto nel server Express!",
    timestamp: new Date().toISOString(),
    serverTime: new Date().toLocaleTimeString("it-IT")
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
