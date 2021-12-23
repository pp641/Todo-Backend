
exports.isLogin = (req, res, next) => {
  if (!req.headers["authorization"])
    return res.json({ message: "You are Not logged in" });
  req.user = req.body;
  next();
};
