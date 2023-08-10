const express = require("express");
const {login,logout, user, signup } = require("../controllers/stud_auth");
const jwtAuth = require("../middlewares/jwtAuth");
const isLoggedIn = require("../middlewares/isLoggedIn");
const passport = require("passport");
require("../oauth/oauth.js");
const authRouter = express.Router();

authRouter.get("/login", jwtAuth, (req, res) => {
    res.send({ message: "you are logged in" });
});
authRouter.post("/login", login);
authRouter.get("/user", jwtAuth, user);
authRouter.post("/user", signup);
authRouter.get("/logout", jwtAuth, logout);
// GOOGLE AUTHENTICATION
authRouter.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);
authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/api/auth/google/success",
        failureRedirect: "/api/auth/google/failure",
    })
);
authRouter
    .get("/google/success", isLoggedIn, (req, res) => {
        res.send("successfully logged in ...");
    })
    .get("/google/failure", (req, res) => {
        res.send("try again...");
    });

module.exports = authRouter;
