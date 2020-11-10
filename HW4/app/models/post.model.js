const mongoose = require("mongoose");

const Address=mongoose.model(
    "address",
    new mongoose.Schema({
        title: String,
        text: String,
        title_image: String
    },{collection:"post"})
)

module.exports = Address;