const mongoose = require("mongoose");

const TaskModel = new mongoose.Schema({
  data: {
    type: String,
    required: true,
    default: "demo",
  },
  currentState: {
    type: Number,
    required: true,
    default: 1,
  },
  createdBy: { type: Object },
});

module.exports = mongoose.model("TaskModel", TaskModel);
