const TaskModel = require("../models/todoTask");
const nodemailer = require("nodemailer");

let fromMail = "prajjwalpandey641@gmail.com";
let toMail = fromMail;
let subject = "Enter subject line here";
let text = "Enter email content.";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: fromMail,
    pass: "saxxzkjjshzozwag",
  },
});

// email options
let mailOptions = {
  from: fromMail,
  to: toMail,
  subject: subject,
  text: text,
};
const sendMail = () => {
  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    }
    console.log(response);
  });
};

exports.createTask = async (req, res) => {
  console.log(req.body);
  const NewTask = new TaskModel({
    data: req.body.data.data,
    currentState: req.body.data.currentState,
  });
  await NewTask.save(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      // console.log(result);
      sendMail();
      res.send(result);
    }
  });
};

exports.getTask = (req, res) => {
  TaskModel.find(req.body)
    .then((response) => {
      console.log("Reds");
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

exports.updateTask = async (req, res) => {
  console.log(req.body);
  await TaskModel.findByIdAndUpdate(
    { _id: req.body.id },
    {
      data: req.body.data.currentValue,
      currentState: req.body.data.currentObjectState,
    },
    {
      returnOriginal: false,
    }
  )
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

exports.deleteTask = async (req, res) => {
  console.log(req.body);
  await TaskModel.deleteOne(req.body)
    .then((response) => {
      return res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAllTasks = async (req, res) => {
  await TaskModel.find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};
