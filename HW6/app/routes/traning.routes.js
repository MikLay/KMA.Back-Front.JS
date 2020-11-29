const controller = require("../controllers/traning.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app
    .route("/api/tranings")
    .get(controller.getAllTranings)
    .post(controller.createTraning);
  app
    .route("/api/tranings/:id")
    .patch(controller.updateTranings)
    .delete(controller.deleteTraning);
};
