const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.address = require("./address.model");
db.traning = require("./traning.model")

module.exports = db;