const googleAuthRouter = require("express").Route()

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
        successRedirect: "/api/auth/google/success",
        failureRedirect: "/api/auth/google/failure",
    })
);
googleAuthRouter
    .get("/google/success", isLoggedIn, (req, res) => {
        res.send("successfully logged in ...");
    })
    .get("/google/failure", (req, res) => {
        res.send("try again...");
    });

exports.module = googleAuthRouter