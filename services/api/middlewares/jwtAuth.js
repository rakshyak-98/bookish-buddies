const JWT = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
	try {
		const token =
			req.cookies?.token || JWT.verify(req.header("authorization")) || null;

		if (!token) {
			return res.status(400).json({
				success: false,
				message: "Not able to get authorization Bearer token",
			});
		}
		const payload = JWT.verify(token, process.env.JWT_SECRET);

		req.student = { id: payload.id, email: payload.email };
	} catch (error) {
		return res.status(400).json({
			success: false,
			message: error.message,
		});
	}
	next();
};

module.exports = jwtAuth;
