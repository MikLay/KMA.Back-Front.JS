const mongoose = require("mongoose");

const Address=mongoose.model(
    "address",
    new mongoose.Schema({
        name: String,
        surname: String,
        email: String,
        phone: String,
        text: String
    },{collection:"address"})
)

module.exports = Address;