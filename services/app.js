const dotenv = require("dotenv");
const variables = require("api/config.js");
const contentType = require("content-type");
const getRawBody = require("api/node_modules/raw-body");
const express = require("api/node_modules/@types/express");
const session = require("express-session");

const app = express();
dotenv.config();

const cookieParser = require("api/node_modules/@types/cookie-parser");
const helmet = require("helmet");

const ejs = require("api/node_modules/@types/ejs");
const authRouter = require("api/routes/authRouter.js");
const teacherRouter = require("api/routes/teacherRouter.js");

// const passport = require("passport");
const mongoose = require("mongoose");

(async () => {
    mongoose
        .connect(variables.DBUrl)
        .then((conn) => {
            console.log(`Connected to DB: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.error(err.message);
        });
})();

app.use((req, res, next) => {
    getRawBody(req, {
        length: req.headers("content-type"),
        limit: "1kb",
        encoding: contentType.parse(req).parameters.charset,
    });
});

app.use(
    session({
        secret: process.env.GOOGLE_AUTH_SECRET,
        saveUninitialized: true,
        resave: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRouter);
app.use("/", teacherRouter);

app.set("view engine", ejs);

module.exports = app;
