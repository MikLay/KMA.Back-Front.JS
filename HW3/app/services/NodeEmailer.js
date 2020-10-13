exports.send = async (text, emails) =>  {
  let nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "testhw3@outlook.com",
      pass: "mJ28UMXZ31kD",
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      return error;
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  return await transporter.sendMail({
    from: "<testhw3@outlook.com>",
    to: emails,
    subject: "HW3 WebApp",
    text: text,
  });
}
