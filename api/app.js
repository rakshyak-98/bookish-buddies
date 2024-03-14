const variables = require("./config");
const contentType = require('content-type');
require("dotenv").config();
const getRawBody = require("raw-body");

const express = require("express");
const app = express();
const session = require("express-session");
app.use(
    session({
        secret: process.env.GOOGLE_AUTH_SECRET,
        saveUninitialized: true,
        resave: false,
    })
);

const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const connectToDb = require("./config/db.js");
const ejs = require("ejs");

const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose
        .connect(variables.DBUrl)
        .then((conn) => {
            console.log(`Connected to DB: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.error(err.message);
        });
};

module.exports = connectToDb;
const authRouter = require("./routes/authRouter.js");
const teacherRouter = require("./routes/teacherRouter.js");
const googleAuthRouter = require("./routes/googleAuthRouter.js");
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
connectToDb();

app.use((req, res, next) => {
    getRawBody(req, {
        length: req.headers("content-type"),
        limit: '1kb',
        encoding: contentType.parse(req).parameters.charset
    });
});
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", ejs);
app.use("/ping", (req, res) => {
    res.status(200).send({
        msg: "server is running fine",
        metaInfo: {
            host: req.hostname,
            protocol: req.protocol,
            headers: req.headers,
        },
    });
});

app.use("/", authRouter);
app.use("/", teacherRouter);
app.use("/", googleAuthRouter);
app.use("/test/google", (req, res) => {
    res.render("testAuthIndex.ejs");
});

// app.all('*',(req, res) => {
//     res.status(404).send('Oops !! 404 Page not found ')
// })

module.exports = app;
