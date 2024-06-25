const zod = require("zod");

function validateTeacherData(teacherData) {
	const schema = zod.object({
		name: zod.string(),
		email: zod.string().email().readonly(),
	});
	return schema.safeParse(teacherData);
}

function validateTeacherQuery(data) {
	const schema = zod.object({
		name: zod.string().optional(),
		email: zod.string().email().optional(),
	});
	return schema.safeParse(data);
}

function validateSlot(data) {
	const schema = zod.object({
		teacher: zod.string(),
		startTime: zod.string(),
		endTime: zod.string(),
		subject: zod.string(),
	});
	return schema.safeParse(data);
}

module.exports = {
	validateTeacherData,
	validateTeacherQuery,
	validateSlot,
};

