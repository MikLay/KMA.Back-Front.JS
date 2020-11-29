const mongoose = require("mongoose");

const Traning = mongoose.model(
  "traning",
  new mongoose.Schema(
    {
      title: String,
      shortDescr: String,
      descr: String,
    },
    { collection: "traning" }
  )
);

module.exports = Traning;