const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const Users = require("./auth/users");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
const router = require("./routes/allTaskRoutes");

try {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/todoDb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
} catch (error) {
  console.log("could not connect");
}

app.get("/ok", (req, res) => {
  console.log("getdone");
});

app.use("/api", router);
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", Users);
const port = 8000 || process.env.PORT;
app.listen(port, () => console.log(`Connected to port ${port}`));
