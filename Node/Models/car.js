const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    reg:String,
    name:String,
    color:String
})

const carModel = mongoose.model("Cars", carSchema)

module.exports = carModel