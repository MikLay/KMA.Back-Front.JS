const mongoose = require("mongoose");

const Address=mongoose.model(
    "address",
    new mongoose.Schema({
        name: String,
        surname: String,
        middlename: String,
        email: String
    },{collection:"address"})
)

module.exports = Address;