const zod = require("zod");

function dataParse(teacherData) {
	const schema = zod.object({
		name: zod.string(),
		email: zod.string().email().readonly(),
	});
	return schema.safeParse(teacherData);
}

function validateTeacherQuery(data) {
	const schema = zod.object({
		name: zod.string(),
		email: zod.string().email(),
	});
	return schema.safeParse(data);
}

function validateSlot(data) {
	const schema = zod.object({
		teacher: zod.string(),
		startTime: zod.date(),
		endTime: zod.date(),
		subject: zod.string(),
	});
	return schema.safeParse(data);
}

module.exports = {
	dataParse,
	validateTeacherQuery,
	validateSlot,
};

