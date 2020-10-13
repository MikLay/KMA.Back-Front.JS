const db =require("../models");
const Address = db.address;

exports.getAllAddresses = (req, res) => {
    Address.find()
        .then(addresses => {
            res.status(200).send(addresses);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createAddress = (req, res) => {
    Address.create(req.body)
        .then(address => {
            res.status(200).send(address);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updateAddress = (req, res) => {
    Address.findByIdAndUpdate(req.params.id, req.body, function(err, address) {
        if (err) throw err;
        res.status(200).send(address);
    }).catch(err => {
        console.log(err);
    });
}

exports.deleteAddress = (req, res) => {
    Address.deleteOne({ _id: req.params.id })
        .then(address => {
            res.status(200).send(address);
        })
        .catch(err => {
            console.log(err);
        });
}
