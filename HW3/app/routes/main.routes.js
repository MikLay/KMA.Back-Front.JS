const db = require("../models");
const Address = db.address;

const PHRASES = [
  {
    name: "Hello",
    text: "Hello, nice to meet you. Do you want to buy our stuff?",
  },
  { name: "Later", text: "I will write you back later. I am a bit busy now" },
  {
    name: "Million",
    text:
      "Congratulations! You have won a $2.5 million prize after you pay this delivery fee:",
  },
];

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.route("/").get((req, res) => {
    Address.find()
      .then((addresses) => {
        res.render(__dirname + "\\..\\.." + "\\templ.twig", {
          phrases: PHRASES,
          addresses: addresses,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
