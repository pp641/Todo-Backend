const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./keys");
const validateRegisterInput = require("./controllers/register");
const validateLoginInput = require("./controllers/login");
const User = require("./models/model");
