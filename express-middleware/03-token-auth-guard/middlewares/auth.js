export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      error: "Accesso non autorizzato: Header Authorization mancante"
    });
  }

  const parts = authHeader.split(" ");
  const token = parts.length === 2 && parts[0] === "Bearer" ? parts[1] : authHeader;
  const validToken = process.env.API_SECRET_TOKEN || "my-super-secret-token-123";

  if (token !== validToken) {
    return res.status(401).json({
      success: false,
      error: "Accesso negato: Token non valido o scaduto"
    });
  }

  req.user = { id: 1, name: "Admin User", authorized: true };
  next();
};
