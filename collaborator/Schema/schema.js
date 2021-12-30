const mongoose = require("mongoose");
const CollaboratorModel = new mongoose.Schema({
  AllMembers: {
    type: Array,
  },
  Tasks: {
    type: Array,
    default: [],
  },
  Owner: { type: String },
  Admin: { type: Array, default: [] },
  Member: { type: Array, default: [] },
});

module.exports = mongoose.model("Collaborator", CollaboratorModel);
