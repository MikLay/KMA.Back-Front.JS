const controller = require("../controllers/posts.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

    app.route("/api/posts").get(controller.getAllPosts).post(controller.createPost);
    app.route("/api/posts/:id").patch(controller.updatePosts).delete(controller.deletePost);
};
