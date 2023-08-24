function isLoggedIn(req, res, next) {
    // req.user ? next() : res.sendStatus(401);
    next()
}

module.exports = isLoggedIn;
