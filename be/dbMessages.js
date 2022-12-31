const mongoose = require("mongoose");

const messagingSchema = mongoose.Schema({
    message: String,
    name: String,
    imgUrl: String,
    timestamp: String,
    received: Boolean
})

const Mess =  mongoose.model("messagingSchema", messagingSchema)
module.exports = Mess;