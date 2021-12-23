const jwt = require("jsonwebtoken");
const key = require("../keys").secretOrKey;
exports.isLogin = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, key, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(user);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
