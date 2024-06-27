const crypto = require("crypto");

const SALT = crypto.randomBytes(16).toString("hex");
function encrypt(password) {
	crypto.pbkdf2(password, SALT, 10, 32, "sha256", (err, derivedKey) => {
		if (err) throw err;
		hash.update(derivedKey);
	});
	hash.update(password);
	return hash.digest("hex");
}

module.exports = encrypt;
