const Teacher = require("../models/Teacher");
const {validateTeacherData: parseTeacherData} = require("../lib/validateDate");
async function addTeacher(req, res) {
	try {
        const parsedData = parseTeacherData(req.body);
		const teacher = new Teacher();
		res.status(201).send({ _id: teacher._id });
	} catch (error) {
		res.status(400).send({ message: error.message, code: error.code ?? "NOT_AVAILABLE" });
	}
}
async function getTeacher(req, res) {}

module.exports = {
	addTeacher,
	getTeacher,
};

