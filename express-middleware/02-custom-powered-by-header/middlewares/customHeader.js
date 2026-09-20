export const setCustomPoweredBy = (req, res, next) => {
  res.setHeader("X-Powered-By", "MioServer");
  next();
};
