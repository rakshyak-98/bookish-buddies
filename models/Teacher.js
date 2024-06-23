const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;
