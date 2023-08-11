const mongoose = require("mongoose")

const SubjectSchema = new mongoose.Schema({
    name: {type: String, require: [true, "Subject name is required"]},
    assignTo: {type: mongoose.Types.ObjectId, ref: "Teacher"},
    service: {type: mongoose.Types.ObjectId, ref: "Service"}
})

exports.module = mongoose.model("Subject", SubjectSchema)