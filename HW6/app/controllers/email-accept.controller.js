const service = require("../services/FileService");

exports.setEmailConfig = (req, res) => {
  service
    .writeFile("app\\services\\config.json", req.body)
    .then(() => {
      res.status(200).send();
    })
    .catch(() => {
      res.status(500).send();
    });
};

exports.readEmailConfig = (req, res) => {
  service
    .readFile("app\\services\\config.json")
    .then((status) => {
        console.log(status)
      res.status(200).send(status);
    })
    .catch((err) => {
      console.log(err);
    });
};
