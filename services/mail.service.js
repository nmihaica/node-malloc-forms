const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: "yourmailhere@domain.com",
      pass: "yourpass"
  },
  tls: {
      rejectUnauthorized: false
  }
});

let mailOptions = {
  from: "example@gmail.com",
  to: "sending@gmail.com",
  subject: "[FORM]",
  html: `<h1>Title</h1><p>Here is my body</p>`
};


let sendMail = transporter.sendMail(mailOptions, function (error, response) {
  if (error) {
      console.log(error);
  }
  else {
      console.log("mail sent");
  }
});

module.exports = {
  sendMail: function(options, cb){
    return transporter.sendMail(options, cb)
  }
}