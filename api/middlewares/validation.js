
function validateRequestBody(requiredKeys) {
    return (req, res, next) => {
        if (!requiredKeys.every((key) => key in req.body)) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
                error: requiredKeys.filter((key) => !(key in req.body)),
            });
        }
        next();
    };
}

module.exports = validateRequestBody;
