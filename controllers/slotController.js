const { validateSlot } = require("../lib/validateDate");
const Slot = require("../models/Slot");

function addSlot(req, res) {
	const validSlot = validateSlot(req.body);
	if (validSlot.error) {
		res.status(400).send(validSlot.error);
		return;
	}

	const slot = new Slot(validSlot.data);
	slot.save();
	res.status(201).send({ _id: slot._id });
}

module.exports = {
	addSlot,
};

