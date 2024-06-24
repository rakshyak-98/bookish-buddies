const zod = require("zod");

function dataParse(teacherData) {
	const schema = zod.object({
		name: zod.string(),
		email: zod.string().email().readonly(),
	});
	return schema.safeParse(teacherData);
}

function teacherQueryParser(data) {
	const schema = zod.object({
		name: zod.string(),
		email: zod.string().email(),
	});
	return schema.safeParse(data);
}

module.exports = {
	dataParse,
	teacherQueryParser,
};

