const validateRegisterInput = require("../controllers/register");
const User = require("../models/model");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
    req.body.data.name = req.body.data.firstName + req.body.data.lastName

  const { errors, isValid } = validateRegisterInput(req.body.data);
  if (!isValid) {
    console.log(errors)
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.data.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      console.log("getting")
      const newUser = new User({
        name: req.body.data.name,
        email: req.body.data.email,
        password: req.body.data.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt,  (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
           newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
        });
      });
    }
  });
};
