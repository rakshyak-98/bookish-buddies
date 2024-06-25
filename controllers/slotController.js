const { validateSlot, validateSlotQuery } = require("../lib/validateDate");
const Slot = require("../models/Slot");

async function addSlot(req, res) {
	const validSlot = validateSlot(req.body);
	if (validSlot.error) {
		res.status(400).send(validSlot.error);
		return;
	}

	const slot = new Slot(validSlot.data);
	await slot.save();
	res.status(201).send({ _id: slot._id });
}

async function getSlotList(req, res) {
	if (Object.keys(req.query) !== 0) {
		const validSlot = validateSlotQuery(req.query);
		if (validSlot.error) {
			res.status(400).send(validSlot.error);
			return;
		}
		const slots = await Slot.find(validSlot.data);
		res.status(200).send(slots);
	} else {
		const slots = await Slot.find();
		res.status(200).send(slots);
	}
}

module.exports = {
	addSlot,
	getSlotList,
};

