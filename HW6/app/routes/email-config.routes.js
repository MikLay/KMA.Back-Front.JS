const controller = require("../controllers/email-accept.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app
    .route("/api/email-config")
    .get(controller.readEmailConfig)
    .post(controller.setEmailConfig);
};
