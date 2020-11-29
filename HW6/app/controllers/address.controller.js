const db = require("../models");
const emailService = require("../services/NodeEmailer");
const Address = db.address;

exports.getAllAddresses = (req, res) => {
  Address.find()
    .then((address) => {
      res.status(200).send(address);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createAddress = (req, res) => {
  Address.create(req.body)
    .then((address) => {
      res.status(200).send(address);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.sendAddresses = (req, res) => {
  Address.findById(req.params.id, function (err, address) {
    if (err) throw err;
    emailService
      .send(
        "Вітаю вас на нашому сайті тренінгів, " + address.surname,
        address.email
      )
      .then((result) => {
        Address.deleteOne({ _id: req.params.id })
          .then((address) => {
            res.status(200).send(result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }).catch((err) => {
    console.log(err);
  });
};

exports.deleteAddress = (req, res) => {
  Address.deleteOne({ _id: req.params.id })
    .then((address) => {
      res.status(200).send(address);
    })
    .catch((err) => {
      console.log(err);
    });
};
