const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["Admin", "teacher"],
		default: "teacher",
	},
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
