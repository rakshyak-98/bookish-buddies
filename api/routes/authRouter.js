const express = require("express");
const {
    login,
    logout,
    user,
    signup,
} = require("../controllers/authController");
const jwtAuth = require("../middlewares/jwtAuth");
const validate = require("../middlewares/validation");
const isLoggedIn = require("../middlewares/isLoggedIn");
const passport = require("passport");
require("../oauth/oauth.js");
const authRouter = express.Router();

authRouter.get("/login", jwtAuth, (req, res) => {
    res.send({ status: "online", message: "already logged-in" });
});
authRouter.post("/login", validate(["email", "password"]), login);
authRouter.get("/user", jwtAuth, user);
authRouter.post("/user", validate(["name", "email", "password"]), signup);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
