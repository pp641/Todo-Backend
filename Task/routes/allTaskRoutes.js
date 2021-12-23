const express = require("express");
const router = express.Router();
const {
  getTask,
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/TaskFunctions");
const { isLogin } = require("../../auth/middlewares/isLogin");
router.get("/getTodo", isLogin, getTask);
router.get("/getTodoAll", isLogin, getAllTasks);
router.post("/postTodo", isLogin, createTask);
router.patch("/updateTodo", isLogin, updateTask);
router.delete("/deleteTodo", isLogin, deleteTask);
module.exports = router;
