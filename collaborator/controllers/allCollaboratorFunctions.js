const User = require("../../auth/models/model");
const CollaboratorModel = require("../Schema/schema");

exports.createCollaboration = async (req, res) => {
  console.log("req.user is", req.user);
  console.log(req.body.data);
  const collaborators = req.body.data;
  if (!collaborators)
    res.send({
      message: "Please select at least One member to start collaboration",
    });

  const Collaboration = new CollaboratorModel({
    AllMembers: collaborators,
    Owner: req.user.id,
  });
  await Collaboration.save()
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};

exports.updatesTasksForCollaboration = (req, res) => {
  const editDetailsForCollaboration = req.body.editDetails;
  CollaboratorModel.findByIdAndUpdate(
    { _id: req.body.id },
    {
      editDetailsForCollaboration: editDetailsForCollaboration,
    },
    {
      returnOriginal: false,
    }
  )
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

exports.getAllCollaborationsForSingleUser = (req, res) => {
  console.log(req.user, "ok");
  CollaboratorModel.find({ Owner: req.user.id })
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
};
exports.getAllUsers = async (req, res) => {
  console.log(req.body);
  await User.find({})
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
};

exports.deleteCollaboration = async (req, res) => {
  await CollaboratorModel.deleteOne({ _id: req.body.data })
    .then((response) => {
      console.log(response);
      return res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};
