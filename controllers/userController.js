const { sign } = require("jsonwebtoken");
const { validateSignupData } = require("../lib/validateDate");
const encrypt = require("../lib/encrypt");
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
	const user = User.create(parsedData.data);
	const access = sign(
		{
			email: user.email,
		},
		process.env.JWT_SECRET
	);
	const refresh = sign(
		{
			email: user.email,
		},
		process.env.JWT_REFRESH_SECRET
	);
	res.status(201).send({ access, refresh });
}

module.exports = { signup };

