export const generateSlugMiddleware = (req, res, next) => {
  if (req.body && typeof req.body.name === "string") {
    // Trasforma in minuscolo, sostituisce spazi con trattini e rimuove caratteri speciali
    req.body.slug = req.body.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }
  next();
};
