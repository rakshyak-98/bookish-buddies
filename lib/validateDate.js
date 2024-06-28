const zod = require("zod");

function validateSignData(data){
	const schema = zod.object({
		email: zod.string().email(),
		password: zod.string(),
	})
	return schema.safeParse(data);
}

function validateSignupData(signupData){
	const schema = zod.object({
		email: zod.string().email(),
		password: zod.string().min(8),
	});
	return schema.safeParse(signupData);
}

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

function validateSlotQuery(data) {
	const schema = zod.object({
		teacher: zod.string().optional(),
		startTime: zod.string().optional(),
		endTime: zod.string().optional(),
		subject: zod.string().optional(),
	});
	return schema.safeParse(data);
}

module.exports = {
	validateTeacherData,
	validateTeacherQuery,
	validateSlot,
	validateSlotQuery,
	validateSignupData,
	validateSignData,
};

