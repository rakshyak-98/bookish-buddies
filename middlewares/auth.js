/**
 * @param {Array} allowedRoles
 */
function ensureAccess(allowedRoles = null) {
	return function (req, res, next) {
		const user = req.user;
		if (!user) {
			res.status(401).send({
				message: "User is not authorized to access this content",
				code: "UNAUTHORIZED",
			});
		}
		if (!allowedRoles) {
			next();
		}
		if (!allowedRoles.includes(user.role)) {
			res.status(403).send({
				message: "User is not allowed to access this content",
				code: "FORBIDDEN",
			});
		}
		return next();
	};
}

module.exports = {
	ensureAccess,
};

