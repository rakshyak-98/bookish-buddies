const { validateSignupData, validateSignData } = require("../lib/validateDate");
const encrypt = require("../lib/encrypt");
const { getTokens } = require("../lib/token");
const User = require("../models/User");
const Teacher = require("../models/Teacher");

async function signup(req, res) {
	let parsedData = validateSignupData(req.body);
	if (parsedData.error) {
		res.status(400).send(parsedData.error);
		return;
	}
	const teacher = await Teacher.findOne({ email: parsedData.data.email });
	parsedData.data = Object.assign(parsedData.data, {
		password: encrypt(parsedData.data.password),
	});
	if (teacher) {
		parsedData.data.role = "teacher";
	} else {
		parsedData.data.role = "user";
	}

	try {
		const user = await User.create(parsedData.data);
		const { access, refresh } = getTokens(user);
		res.status(201).send({ access, refresh });
	} catch (error) {
		res.status(400).send({
			message: error.message,
			code: "USER_ALREADY_EXISTS",
		});
	}
}

async function signIn(req, res) {
	const parsedData = validateSignData(req.body);
	if (!parsedData.success) {
		res.status(400).send(parsedData.error);
		return;
	}
	let user = await User.findOne({ email: parsedData.data.email });
	if (user) {
		user = user.toObject();
		if (user.password === encrypt(parsedData.data.password)) {
			const { access, refresh } = getTokens(user);
			res.status(200).send({ access, refresh });
		} else {
			res.status(400).send({
				message: "User name or password incorrect",
				code: "NOT_AUTHENTICATED",
			});
		}
	} else {
		res.status(404).send({
			message: "User not found",
			code: "NOT_FOUND",
		});
	}
}

module.exports = { signup, signIn };

