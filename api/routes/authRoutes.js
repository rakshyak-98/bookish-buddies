const express = require("express");
const {
    loginUser,
    signup,
    logout,
    user,
} = require("../controllers/stud_auth");
const jwtAuth = require("../middlewares/jwtAuth");
const isLoggedIn = require("../middlewares/isLoggedIn");
const passport = require("passport");
require("../oauth/oauth.js");
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
    const authHeader = req.header("authorization")
    if(!authHeader) return res.status(400).json({error: "authorization header missing value."})
    res.send({message: authHeader})
});
authRouter.post("/login", loginUser);
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
