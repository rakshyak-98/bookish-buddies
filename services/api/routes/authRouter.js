const express = require("api/node_modules/@types/express");
const { login, logout, user, signup } = require("api/controllers/studentController.js");
const jwtAuth = require("api/middlewares/jwtAuth.js");
const isLoggedIn = require("api/middlewares/isLoggedIn.js");
const passport = require("passport");
require("api/oauth/oauth.js");
const authRouter = express.Router();

authRouter.get("/login", jwtAuth, (req, res) => {
    res.send({ status: "online", message: "already logged-in" });
});
authRouter.post("/login", login);
authRouter.get("/user", jwtAuth, user);
authRouter.post("/user", signup);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
