const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
	teacher: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "teacher",
		required: true,
	},
	startTime: {
		type: Date,
		required: true,
	},
	endTime: {
		type: Date,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
});

const SlotModel = mongoose.model("slot", SlotSchema);

module.exports = SlotModel;

