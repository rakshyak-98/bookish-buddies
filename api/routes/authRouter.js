const express = require("express");
const { login, logout, user, signup } = require("../controllers/studentController");
const jwtAuth = require("../middlewares/jwtAuth");
const isLoggedIn = require("../middlewares/isLoggedIn");
const passport = require("passport");
require("../oauth/oauth.js");
const authRouter = express.Router();

authRouter.get("/login", jwtAuth, (req, res) => {
    res.send({ status: "online", message: "already logged-in" });
});
authRouter.post("/login", login);
authRouter.get("/user", jwtAuth, user);
authRouter.post("/user", signup);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
