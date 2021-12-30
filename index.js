const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
app.use(passport.initialize());
require("./auth/passport")(passport);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
const router = require("./Task/routes/allTaskRoutes");
const routerAuth = require("./auth/Routes/routes");
const collaborationRoutes = require("./collaborator/routes/collaboratorRoutes");
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
app.use("/api/users", routerAuth);
app.use("/api/collaboration", collaborationRoutes);
const port = 8000 || process.env.PORT;
app.listen(port, () => console.log(`Connected to port ${port}`));
