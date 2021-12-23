const express = require("express");
const router = express.Router();
const {
  getTask,
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/TaskFunctions");
const isLogin = require("../auth/middlwares/isLogin")
const middle = (req, res, next) => {
  res.setHeader("charset", "utf-8");
  next();
};



router.get("/getTodo", getTask);
router.get("/getTodoAll", getAllTasks);
router.post("/postTodo", createTask);
router.patch("/updateTodo", updateTask);
router.delete("/deleteTodo", middle, deleteTask);
module.exports = router;
