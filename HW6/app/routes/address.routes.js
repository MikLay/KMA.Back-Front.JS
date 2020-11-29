const controller = require("../controllers/address.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app
    .route("/api/addresses")
    .get(controller.getAllAddresses)
    .post(controller.createAddress);
  app
    .route("/api/addresses/:id")
    .post(controller.sendAddresses)
    .delete(controller.deleteAddress);
};
