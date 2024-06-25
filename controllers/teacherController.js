const Teacher = require("../models/Teacher");
const { dataParse: teacherDataParse, teacherQueryParser } = require("../lib/validateDate");

async function addTeacher(req, res) {
	try {
		const parsedData = teacherDataParse(req.body);
		if (parsedData.error) {
			res.status(400).send(parsedData.error);
			return;
		}
		const teacher = new Teacher(parsedData.data);
		await teacher.save();
		res.status(201).send({ _id: teacher._id });
	} catch (error) {
		res.status(400).send({ message: error.message, code: error.code ?? "NOT_AVAILABLE" });
	}
}

async function getTeacherList(req, res) {
	if (Object.keys(req.query).length !== 0) {
		const parsedQuery = teacherQueryParser(req.query);
		if (parsedQuery.error) {
			res.status(400).send(parsedQuery.error);
		}
		const teachers = await Teacher.find(parsedQuery.data);
		res.status().send(teachers);
	} else {
		const teachers = await Teacher.find();
		res.status(200).send(teachers);
	}
}

module.exports = {
	addTeacher,
	getTeacherList,
};

