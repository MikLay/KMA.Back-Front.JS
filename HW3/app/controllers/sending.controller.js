const emailService = require("../services/NodeEmailer");

exports.sendEmails = (req, res) => {
  console.log(req.body);
  emailService
    .send(
      req.body.text,
      req.body.addresses.map((address) => address.email)
    )
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(err);
    });
};
