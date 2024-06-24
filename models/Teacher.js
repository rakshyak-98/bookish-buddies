const mongoose = require("mongoose");
const { SchemaTypes } = mongoose;

const TeacherSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: SchemaTypes.String,
		require: true,
		unique: true,
	},
});

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;

