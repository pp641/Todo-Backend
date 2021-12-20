const nodemailer = require("nodemailer");

// / declare vars,
let fromMail = "prajjwalpandey641@gmail.com";
let toMail = "Enter recipient email address to which email will be sent";
let subject = "Enter subject line here";
let text = "Enter email content.";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: fromMail,
    pass: "account_password",
  },
});

// email options
let mailOptions = {
  from: fromMail,
  to: toMail,
  subject: subject,
  text: text,
};
transporter.sendMail(mailOptions, (error, response) => {
  if (error) {
    console.log(error);
  }
  console.log(response);
});
