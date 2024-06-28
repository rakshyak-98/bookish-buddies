const { sign } = require("jsonwebtoken");

function getTokens(data) {
	const access = sign(
		{
			email: data.email,
		},
		process.env.JWT_SECRET
	);
	const refresh = sign(
		{
			email: data.email,
		},
		process.env.JWT_REFRESH_SECRET,
		{
			expiresIn: "4day",
		}
	);
	return { access, refresh };
}

module.exports = {
	getTokens,
};

