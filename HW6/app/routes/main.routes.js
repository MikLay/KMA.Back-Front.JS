const path = require("path");
const FileService = require("../services/FileService");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/", function (req, res) {
    FileService.readFile("app\\config\\site-config.json").then(
      (data) => {
        data.mItems.main["statusClass"] = "active";
        data.mItems = Object.values(data.mItems);
        res.render(__dirname + "\\..\\.." + "\\views\\main.twig", data);
      },
      (reason) => console.log(reason)
    );
  });

  app.get("/about", function (req, res) {
    FileService.readFile("app\\config\\site-config.json").then(
      (data) => {
        data.mItems.info["statusClass"] = "active";
        data.mItems = Object.values(data.mItems);
        res.render(__dirname + "\\..\\.." + "\\views\\about.twig", data);
      },
      (reason) => console.log(reason)
    );
  });

  app.get("/courses", function (req, res) {
    FileService.readFile("app\\config\\site-config.json").then(
      (data) => {
        data.mItems.courses["statusClass"] = "active";
        data.mItems = Object.values(data.mItems);
        res.render(__dirname + "\\..\\.." + "\\views\\courses.twig", data);
      },
      (reason) => console.log(reason)
    );
  });

  app.get("/admin", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "..", "admin.html"));
  });
};
