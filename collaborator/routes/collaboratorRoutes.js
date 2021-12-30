const express = require("express");
const router = express.Router();
const {
  createCollaboration,
  getAllCollaborationsForSingleUser,
  updatesTasksForCollaboration,
  deleteCollaboration,
  getAllUsers,
} = require("../controllers/allCollaboratorFunctions");
const { isLogin } = require("../../auth/middlewares/isLogin");
router.get("/getAllCollaboration", isLogin, getAllCollaborationsForSingleUser);
router.get("/getAllUsers", isLogin, getAllUsers);
router.get("/updateCollaboration", isLogin, updatesTasksForCollaboration);
router.post("/addCollaboration", isLogin, createCollaboration);
router.patch("/deleteCollaboration", isLogin, deleteCollaboration);
module.exports = router;
