const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Service name can not be empty"]},
    assignTo: {type: mongoose.Types.ObjectId, ref: "Teacher"} 
})

exports.module = mongoose.model("Service", ServiceSchema)