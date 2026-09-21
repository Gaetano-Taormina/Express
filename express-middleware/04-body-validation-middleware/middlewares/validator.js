export const validateUserBody = (req, res, next) => {
  const { nome, email, eta } = req.body;

  if (!nome || !email || eta === undefined) {
    return res.status(400).json({
      success: false,
      error: "Tutti i campi obbligatori (nome, email, eta) devono essere forniti"
    });
  }

  next();
};
