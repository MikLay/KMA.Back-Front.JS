const db =require("../models");
const Traning = db.traning;

exports.getAllTranings = (req, res) => {
    Traning.find()
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createTraning = (req, res) => {
    Traning.create(req.body)
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updateTranings = (req, res) => {
    Traning.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) throw err;
        res.status(200).send(post);
    }).catch(err => {
        console.log(err);
    });
}

exports.deleteTraning = (req, res) => {
    Traning.deleteOne({ _id: req.params.id })
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            console.log(err);
        });
}
