const googleAuthRouter = require("express").Router()
const isLoggedIn = require('../middlewares/isLoggedIn.js')
const passport = require("passport")

// GOOGLE AUTHENTICATION
googleAuthRouter.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);
googleAuthRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:5173/overview",
        failureRedirect: "/google/failure",
    })
);
googleAuthRouter
    .get("/google/success", (req, res) => {
        res.send("successfully logged in ...");
    })
    .get("/google/failure", (req, res) => {
        res.send("try again...");
    });

module.exports = googleAuthRouter