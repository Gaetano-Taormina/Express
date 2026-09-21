export const uppercaseBodyStrings = (req, res, next) => {
  if (req.body && typeof req.body === "object" && !Array.isArray(req.body)) {
    for (const key of Object.keys(req.body)) {
      if (typeof req.body[key] === "string") {
        req.body[key] = req.body[key].toUpperCase();
      }
    }
  }
  next();
};
