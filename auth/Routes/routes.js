const login = require("../Endpoints/login").login;
const register = require("../Endpoints/register").register;
const router = require("express").Router();
const isLoggedIn = require("../middlewares/isLogin").isLogin;
router.post("/register", register);
router.post("/login", login);
router.get("/checker", isLoggedIn, (req, res) => {
  res.send(req.user);
});
module.exports = router;
