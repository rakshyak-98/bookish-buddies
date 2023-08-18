const express = require("express");
const {
    signup,
    signin,
    logout,
    user,
} = require("../controllers/stud_auth");
const jwtAuth = require("../middlewares/jwtAuth");
const isLoggedIn = require("../middlewares/isLoggedIn");
const passport = require("passport");
require("../oauth/oauth.js");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/user", jwtAuth, user);
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
