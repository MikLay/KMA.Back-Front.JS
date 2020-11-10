const db =require("../models");
const Post = db.post;

exports.getAllPosts = (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createPost = (req, res) => {
    Post.create(req.body)
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updatePosts = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) throw err;
        res.status(200).send(post);
    }).catch(err => {
        console.log(err);
    });
}

exports.deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            console.log(err);
        });
}
